import { StarFour } from "phosphor-react";

export default {
  title: "Services",
  icon: StarFour,
  name: "moduleServices",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
    {
      name: "services",
      type: "array",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "service" }],
        },
      ],
    },
  ],
};
