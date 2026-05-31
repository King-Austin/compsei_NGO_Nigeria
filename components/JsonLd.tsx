export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "COMPSEI",
    alternateName: "Community Psychosocial Support Empowerment Initiative",
    url: "https://compsei.com.ng",
    logo: "https://compsei.com.ng/compsei-logo.png",
    description:
      "Nigerian NGO addressing psychosocial, environmental, and community-level challenges through inclusive, community-driven solutions.",
    foundingLocation: { "@type": "Country", name: "Nigeria" },
    email: "compsagg@gmail.com",
    telephone: "+2349157020747",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "COMPSEI" },
    publisher: {
      "@type": "Organization",
      name: "COMPSEI",
      logo: "https://compsei.com.ng/compsei-logo.png",
    },
    datePublished: post.date,
    url: `https://compsei.com.ng/blog/${post.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
