import { Globe, Newspaper, Wrench } from "phosphor-react";

export default (S) =>
  S.list()
    .title("Base")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "newsSettings", "media.tag"].includes(
            listItem.getId()
          )
      ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(Wrench)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site Settings")
                .icon(Globe)
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("News Settings")
                .icon(Newspaper)
                .child(
                  S.document()
                    .schemaType("newsSettings")
                    .documentId("newsSettings")
                ),
            ])
        ),
    ]);
