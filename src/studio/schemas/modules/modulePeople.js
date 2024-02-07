import { Person } from "phosphor-react";

export default {
  name: "modulePeople",
  title: "People",
  type: "object",
  icon: Person,
  fields: [
    {
      name: "title",
      type: "string",
      initialValue: "Team",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "people",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      people: "people",
    },
    prepare({ people }) {
      const single = people.length == 1;
      return {
        title: `People`,
        subtitle: `${people.length} ${single ? "person" : "people"}`,
      };
    },
  },
};
