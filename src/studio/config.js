import { renderStudio, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import types from "./schemas";
import structure from "./structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import Iframe from "sanity-plugin-iframe-pane";

// Customize this function to show the correct URL based on the current document
function getPreviewUrl({ document, currentUser }) {
  const slug = document.slug?.current;
  const params = new URLSearchParams();
  params.set("preview", currentUser.id);

  return `${window.location.protocol}//${window.location.host}/${slug}?${params}`;
}

const defaultDocumentNode = (S, { schemaType, currentUser }) => {
  // Only show preview pane on `movie` schema type documents
  if (["page", "article"].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (document) => getPreviewUrl({ document, currentUser }),
          reload: {
            button: true,
          },
        })
        .title("Preview"),
    ]);
  }

  return S.document().views([S.view.form()]);
};

const config = defineConfig({
  plugins: [
    deskTool({ structure, defaultDocumentNode }),
    visionTool(),
    media(),
  ],
  name: "default",
  title: "MOL Switch",
  projectId: "71ufpkyl",
  dataset: "production",
  basePath: "/sanity",
  schema: { types },
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { document, currentUser } = context;

      if (document.slug?.current) {
        return getPreviewUrl({ document, currentUser });
      }

      return prev;
    },
  },
});

export default function (containerSelector) {
  const el = document.querySelector(containerSelector);
  if (el) return renderStudio(el, config);
}
