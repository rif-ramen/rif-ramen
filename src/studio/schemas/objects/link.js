import { ArrowCircleUpRight } from "phosphor-react";

export default {
  name: "link",
  type: "object",
  title: "External link",
  icon: ArrowCircleUpRight,
  fields: [
    {
      name: "href",
      type: "url",
      title: "URL",
    },
    {
      title: "Open in new tab",
      name: "blank",
      type: "boolean",
      initialValue: true,
    },
  ],
};
