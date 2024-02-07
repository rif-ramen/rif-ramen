import slugger from "slugify";

export const importPageModules = () => {
  const pageModules = Object.values(
    import.meta.glob("./schemas/modules/*.js", { eager: true }),
  ).map((m) => m.default);

  return pageModules;
};

export const getPageModuleNamesAsTypes = () => {
  const regex = /\/module([A-Z][a-z]+)+(?=\.js$)/; // regex matches and gets the moduleCameCaase part of a file
  const pageModuleTypes = Object.keys(
    import.meta.glob("./schemas/modules/*.js", { eager: true }),
  )
    .map((path) => path.match(regex)[0].replace(/^.*[\\\/]/, ""))
    .map((type) => ({ type }));

  return pageModuleTypes;
};

export function isUniqueAcrossAllDocuments(slug, { document, getClient }) {
  const client = getClient({ apiVersion: "2021-10-21" });
  const id = document._id.replace(/^drafts\./, "");
  const lang = document.__i18n_lang;
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };

  if (lang) params.lang = lang;

  let query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
  if (lang)
    query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && __i18n_lang == $lang][0]._id)`;

  return client.fetch(query, params);
}

export function slugify({ prefix = "" } = {}) {
  return (input) => {
    const slug = slugger(input, { lower: true, trim: true, strict: true });

    return slug.startsWith(prefix) ? slug : `${prefix}${slug}`;
  };
}

export function slugField({
  resource = "",
  source = "title",
  fieldOptions = {},
  group,
} = {}) {
  const prefix = resource.length ? `${resource}/` : "";

  return {
    name: "slug",
    title: "Slug",
    type: "slug",
    group,
    description:
      "The url for this page. You should always click 'Generate' to generate from the page's title.",
    ...fieldOptions,
    validation: (Rule) =>
      Rule.required().custom((slug) => {
        if (typeof slug?.current === "undefined") {
          return true;
        }

        if (slug.current) {
          const current = slug.current;

          if (!current.startsWith(prefix)) {
            return `Slug must begin with "${prefix}". Click "Generate" to reset.`;
          }

          if (current.slice(prefix.length).split("").includes("/")) {
            return `Slug cannot have another "/" after "${prefix}"`;
          }

          if (current === prefix) {
            return `Slug cannot be empty`;
          }

          if (current.endsWith("/")) {
            return `Slug cannot end with "/"`;
          }

          if (current.startsWith("/")) {
            return `Slug cannot start with "/"`;
          }
        }

        return true;
      }),
    options: {
      source,
      slugify: slugify({ prefix }),
      maxLength: 30,
      isUnique: isUniqueAcrossAllDocuments,
    },
  };
}

export function metaFields() {
  return [
    {
      group: "meta",
      name: "ogTitle",
      title: "Custom Social Sharing Title",
      type: "string",
      description:
        "The title used when you share this page on social media. \nIf you leave this field blank, it will use the title of this page if there is one.",
      validation: (Rule) => Rule.max(70),
    },
    {
      group: "meta",
      name: "ogDescription",
      title: "Custom Social Sharing Description",
      type: "text",
      rows: 3,
      description:
        "The description used when you share this page on social media. \nIf you leave this field blank, it will use the description of this page if there is one.",
      validation: (Rule) => Rule.max(160),
    },
    {
      group: "meta",
      name: "ogImage",
      title: "Custom Social Sharing Image",
      type: "image",
      description:
        "The image used when you share this page on social media. \nIf you leave this field blank, it will use the main image of this page if there is one.",
    },
  ];
}

export const linkableReferenceTypes = [
  { type: "page" },
  // { type: "project" },
  // { type: "guide" },
];
