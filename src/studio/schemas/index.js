import { importPageModules } from "../helpers";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import navigationItem from "./objects/navigationItem";
import tag from "./tag";
import page from "./page";
import person from "./person";
import siteSettings from "./settings/siteSettings";
import service from "./service";

export default [
  link,
  internalLink,
  navigationItem,
  tag,
  page,
  person,
  service,
  siteSettings,
  ...importPageModules(),
];
