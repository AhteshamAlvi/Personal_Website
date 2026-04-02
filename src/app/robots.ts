import type { MetadataRoute } from "next";

/*
  robots.ts — tells search engine crawlers what to index.

  Next.js App Router automatically serves this as /robots.txt
  when you export a function from app/robots.ts.

  "Allow: /" means all pages are indexable.
  The sitemap line tells crawlers where to find the full URL list.

  Update the URL to your actual domain once deployed.
*/

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ahteshamalvi.com/sitemap.xml",
  };
}
