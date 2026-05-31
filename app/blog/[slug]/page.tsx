import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog";
import { BlogPostJsonLd } from "@/components/JsonLd";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | COMPSEI`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://compsei.com.ng/blog/${post.slug}`,
      images: [{ url: `https://compsei.com.ng${post.coverImage}` }],
    },
    alternates: { canonical: `https://compsei.com.ng/blog/${post.slug}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <BlogPostJsonLd post={post} />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={post.coverImage} alt="" fill className="object-cover" />
        </div>
        <div className="container-ngo relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-foreground/20 text-primary-foreground text-xs font-medium rounded-full mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-10 relative h-[400px]">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* About COMPSEI */}
                <div className="card-ngo p-6">
                  <h3 className="font-semibold mb-3">About COMPSEI</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Community Psychosocial Support Empowerment Initiative is a Nigerian NGO addressing
                    psychosocial, environmental, and community-level challenges.
                  </p>
                  <Link href="/about" className="text-primary text-sm font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>

                {/* Get Involved CTA */}
                <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Get Involved</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Join COMPSEI in building resilient, mentally healthy communities.
                  </p>
                  <Link href="/get-involved" className="inline-flex items-center justify-center w-full rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium hover:bg-secondary/90 transition-colors">
                    Support Our Work
                  </Link>
                </div>

                {/* More Posts */}
                {otherPosts.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-4">More Articles</h3>
                    <div className="space-y-4">
                      {otherPosts.map((other) => (
                        <Link key={other.slug} href={`/blog/${other.slug}`} className="flex gap-3 group">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={other.coverImage} alt={other.title} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{other.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{formatDate(other.date)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Explore More from COMPSEI</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Read more articles, explore our programs, or get in touch to learn how you can support our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
              More Articles
            </Link>
            <Link href="/get-involved" className="inline-flex items-center justify-center rounded-md border border-current text-secondary-foreground px-6 py-3 text-sm font-medium hover:bg-secondary-foreground/10 transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
