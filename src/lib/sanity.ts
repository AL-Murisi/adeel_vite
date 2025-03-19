import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wfyqw3hs", // Replace with your actual project ID
  dataset: "production",
  apiVersion: "2025-03-10", // Use a recent date
  useCdn: true, // `false` for fresh data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
