import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and insights from COMPSEI on psychosocial support, community empowerment, climate resilience, and advocacy in Nigeria.",
  openGraph: {
    title: "Blog | COMPSEI",
    url: "https://compsei.com.ng/blog",
  },
  alternates: { canonical: "https://compsei.com.ng/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Our Blog</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Insights, stories, and knowledge from COMPSEI on psychosocial support, community
              empowerment, climate resilience, and advocacy in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Featured Article</span>
            <h2 className="heading-section mb-4">Latest from COMPSEI</h2>
          </div>

          <Link href={`/blog/${featured.slug}`} className="card-ngo overflow-hidden group grid md:grid-cols-2 mb-16">
            <div className="relative h-[300px] md:h-auto overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{featured.category}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span>
              </div>
              <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                Read Article <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-ngo overflow-hidden group">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">{post.category}</span>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Want to Learn More?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our programs or get in touch to learn how COMPSEI is making a difference in Nigerian communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/programs" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
              Our Programs
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-current text-secondary-foreground px-6 py-3 text-sm font-medium hover:bg-secondary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
