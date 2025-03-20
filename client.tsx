// sanityClient.ts

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "wfyqw3hs",
  dataset: "test",
  apiVersion: "2025-03-10", // use current UTC date - YYYY-MM-DD
  useCdn: true,
  token:
    "skMZKzJ2Taj9AqHFV2oEsJiohQXlwurzt16YVub24Ut2PkNYheHJvB4qTGlsHfkSaQPMj6YgMJHv1T4kzwIGbulmvEsupUbpk5RszT8nRnnFgvfYZNlw0968gmGZeAD6AAhEqP9v5YccEHdEbxhsk5kV93LLUQAgq8216Vw9VmJbcsIDjTfK",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
export default client;
