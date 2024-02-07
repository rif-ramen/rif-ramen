import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "71ufpkyl",
  dataset: "production",
  apiVersion: "v2024-01-30",
  perspective: "published",
  useCdn: import.meta.env.PROD,
  token: import.meta.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const getImageData = ({ asset }) => {
  const [assetType, id, dimensions, filetype] = asset._ref.split("-");
  const [w, h] = dimensions.split("x");
  const width = Number(w);
  const height = Number(h);

  return {
    assetType,
    id,
    filetype,
    dimensions: { width, height },
    aspectRatio: width / height,
  };
};

/**
 *
 * @param {*} imageSource: SanityImage
 * @returns
 */
export const img = (imageSource) => {
  if (imageSource._type != "image" || !imageSource?.asset?._ref)
    return console.warn("Image format not recognized");
  const imageData = getImageData(imageSource);

  return {
    ...imageData,
    source: imageSource,
    build: urlFor(imageSource).auto("format"),
  };
};
