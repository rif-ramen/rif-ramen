import { Link, NewspaperClipping } from "phosphor-react";
import { metaFields, slugField } from "../helpers";

export default {
  name: "press",
  title: "External Press",
  type: "document",
  icon: NewspaperClipping,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publication",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      type: "date",
      title: "Published date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isHidden",
      title: "Hide article",
      type: "boolean",
    },
    {
      name: "coverImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
