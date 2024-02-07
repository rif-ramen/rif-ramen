import { Link } from "phosphor-react";
import { createSchema } from "sanity";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: Link,
  fields: [
    {
      name: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isExternal",
      type: "boolean",
    },
    {
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
      options: {
        disableNew: true,
      },
      hidden: ({ parent }) => parent.isExternal,
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          if (parent.isExternal != true && currentValue == undefined)
            return "This is required when the link is internal";
          return true;
        }),
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      hidden: ({ parent }) => !parent.isExternal,
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          if (parent.isExternal == true && currentValue == undefined)
            return "This is required when the link is external";
          return true;
        }),
    },
  ],
};
