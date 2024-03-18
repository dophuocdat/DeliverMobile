import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default client = createClient({
  projectId: "v94bps9c",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
