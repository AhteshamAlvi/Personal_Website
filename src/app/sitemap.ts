import type { MetadataRoute } from "next";

/*
  sitemap.ts — generates /sitemap.xml for search engines.

  A sitemap lists every URL on your site so crawlers can discover
  all pages. For a single-page site this is simple — just the homepage.

  If you add more pages later (e.g., /blog, /projects/[slug]),
  add them to this array.

  Update the URL to your actual domain once deployed.
*/

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ahteshamalvi.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
