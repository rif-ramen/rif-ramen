import { Tag } from "phosphor-react";

export default {
  name: "tag",
  title: "Tag",
  type: "document",
  icon: Tag,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
