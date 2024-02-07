import { TextAa } from "phosphor-react";

export default {
  name: "moduleText",
  title: "Text",
  type: "object",
  icon: TextAa,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "array",
      // validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
    {
      name: "advanced",
      type: "object",
      fields: [
        {
          name: "anchorId",
          description:
            "Used for anchor scrolling. Only 1 module per page can have this ID",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: "title",
    },
    prepare({ subtitle }) {
      return {
        title: "Text",
        subtitle,
      };
    },
  },
};
