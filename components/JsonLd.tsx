export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "COMPSEI",
    alternateName: "Community Psychosocial Support Empowerment Initiative",
    url: "https://compsei.com.ng",
    logo: {
      "@type": "ImageObject",
      url: "https://compsei.com.ng/compsei-logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Nigerian NGO addressing psychosocial, environmental, and community-level challenges through inclusive, community-driven solutions.",
    foundingLocation: { "@type": "Country", name: "Nigeria" },
    areaServed: { "@type": "Country", name: "Nigeria" },
    email: "compsagg@gmail.com",
    telephone: "+2349157020747",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    knowsAbout: [
      "Psychosocial Support",
      "Community Empowerment",
      "Mental Health",
      "Climate Resilience",
      "Community Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "COMPSEI",
    url: "https://compsei.com.ng",
    description:
      "COMPSEI — Community Psychosocial Support Empowerment Initiative. Nigerian NGO empowering communities through psychosocial support, climate resilience, and inclusive development.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://compsei.com.ng/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
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
