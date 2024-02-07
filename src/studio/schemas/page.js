import { File } from "phosphor-react";
import { getPageModuleNamesAsTypes, metaFields } from "../helpers";

export default {
  type: "document",
  name: "page",
  title: "Page",
  icon: File,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
  ],
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      group: "content",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      group: "content",
      options: {
        source: "title",
      },
    },
    {
      name: "pageModules",
      type: "array",
      group: "content",
      of: getPageModuleNamesAsTypes(),
    },
    ...metaFields(),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
};
