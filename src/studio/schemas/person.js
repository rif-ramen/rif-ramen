import { Person } from "phosphor-react";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: Person,
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      type: "text",
      rows: 3,
    },
    {
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkedin",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      name: "name",
      media: "image",
    },
    prepare({ title, name, media }) {
      return {
        title: name,
        subtitle: title,
        media,
      };
    },
  },
};
