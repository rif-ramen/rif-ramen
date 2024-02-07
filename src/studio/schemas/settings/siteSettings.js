import { Globe } from "phosphor-react";

export default {
  name: "siteSettings",
  title: "Site Settings",
  icon: Globe,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "defaultImage",
      title: "Default image when sharing",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
      rows: 3,
    },
    {
      name: "menu",
      type: "array",
      of: [{ type: "navigationItem" }],
    },
    {
      name: "contactEmail",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "companyInfo",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      name: "privacyPolicy",
      title: "Privacy Policy",
      type: "file",
    },
    {
      name: "presskitUrl",
      title: "Presskit URL",
      type: "url",
    },
    {
      name: "address",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "directionsUrl",
    //   type: "url",
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: "linkedin",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
