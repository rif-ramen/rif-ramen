import { StarFour } from "phosphor-react";

export default {
  name: "service",
  title: "Service",
  type: "document",
  icon: StarFour,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "points",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "title",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
