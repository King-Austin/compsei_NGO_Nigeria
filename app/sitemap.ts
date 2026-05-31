import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://compsei.com.ng";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/programs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/impact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/challenges`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/partners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/get-involved`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
