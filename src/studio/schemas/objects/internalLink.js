import { LinkSimple } from "phosphor-react";

export default {
  name: "internalLink",
  type: "object",
  title: "Internal link",
  icon: LinkSimple,
  fields: [
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      weak: true,
      options: { disableNew: true },
      to: [{ type: "page" }],
    },
  ],
};
