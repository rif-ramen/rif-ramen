import { ShieldStar } from "phosphor-react";

export default {
  name: "moduleHero",
  title: "Hero",
  type: "object",
  icon: ShieldStar,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
    },
  ],

  preview: {
    select: {
      subtitle: "title",
    },
    prepare({ subtitle }) {
      return {
        title: "Hero",
        subtitle,
      };
    },
  },
};
