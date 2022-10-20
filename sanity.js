import {
  // createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: "production",
  projectId: "89zd5g2z",
  apiVersion: "2021-10-21",
  token: "",
  // Learn more: https://www.sanity.io/docs/api-versioning
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === "production",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);
