import { client } from "./lib/sanity";

/**
 * @type {import("astro").MiddlewareResponseHandler}
 */
export async function onRequest({ locals, request }, next) {
  const url = new URL(request.url);
  const userIdAsPreviewToken = url.searchParams.get("preview");

  locals.client = client;

  try {
    if (userIdAsPreviewToken) {
      const user = await client.users.getById(userIdAsPreviewToken);

      if (user) {
        locals.client = client.withConfig({
          perspective: "previewDrafts",
          useCdn: false,
        });
        locals.previewMode = true;
      }
    }
  } catch (e) {
    // Do nothing, fallback to the regular client
  }

  return next();
}
