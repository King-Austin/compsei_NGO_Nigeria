import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, FileText, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free mental health guides, community toolkits, and publications from COMPSEI to support psychosocial awareness and community leadership in Nigeria.",
  openGraph: {
    title: "Resources | COMPSEI",
    url: "https://compsei.com.ng/resources",
    images: [{ url: "/compsei-logo.png", width: 512, height: 512, alt: "COMPSEI Resources" }],
  },
  alternates: { canonical: "https://compsei.com.ng/resources" },
};

const resourceCategories = [
  {
    id: "mental-health",
    icon: BookOpen,
    title: "Mental Health Resources",
    description: "Guides and information on mental health awareness and support.",
    resources: [
      { title: "Understanding Mental Health: A Community Guide", type: "Guide", description: "Basic information about mental health for community members and leaders.", available: true },
      { title: "Coping with Stress and Anxiety", type: "Fact Sheet", description: "Practical tips for managing stress and anxiety in daily life.", available: true },
      { title: "When to Seek Help: Recognizing Warning Signs", type: "Guide", description: "Information on recognizing when professional help may be needed.", available: true },
    ],
  },
  {
    id: "guides",
    icon: Users,
    title: "Community Guides",
    description: "Practical resources for community leaders and facilitators.",
    resources: [
      { title: "Facilitator's Guide to Peer Support Groups", type: "Training Manual", description: "Step-by-step guide for facilitating community peer support sessions.", available: true },
      { title: "Community Dialogue Toolkit", type: "Toolkit", description: "Resources for organizing and facilitating community dialogues on sensitive topics.", available: true },
      { title: "Psychological First Aid: Quick Reference", type: "Reference Card", description: "Essential information on providing psychological first aid during crises.", available: true },
    ],
  },
  {
    id: "publications",
    icon: FileText,
    title: "Reports & Publications",
    description: "Research, reports, and publications from our work.",
    resources: [
      { title: "Annual Report 2024", type: "Annual Report", description: "Overview of COMPSEI's activities, achievements, and financial information.", available: false, comingSoon: true },
      { title: "Community Needs Assessment Report", type: "Research Report", description: "Findings from community assessments conducted in project areas.", available: false, comingSoon: true },
      { title: "Program Impact Evaluation", type: "Evaluation Report", description: "Assessment of program outcomes and community impact.", available: false, comingSoon: true },
    ],
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Resources</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Free resources to support mental health awareness, community leadership, and psychosocial wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="space-y-16">
            {resourceCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="heading-section text-2xl">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <div key={index} className={`card-ngo p-6 ${(resource as any).comingSoon ? "opacity-70" : ""}`}>
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">{resource.type}</span>
                        {(resource as any).comingSoon && (
                          <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium rounded-full">Coming Soon</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                      {resource.available ? (
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" className="w-full" disabled>
                          {(resource as any).comingSoon ? "Coming Soon" : "Unavailable"}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Additional Resources</span>
            <h2 className="heading-section mb-4">Helpful External Links</h2>
            <p className="text-lead">Trusted resources from partner organizations and global mental health initiatives.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "WHO Mental Health Resources", description: "World Health Organization mental health fact sheets and guidelines.", url: "https://www.who.int/health-topics/mental-health" },
              { title: "MHPSS Network", description: "Mental Health and Psychosocial Support Network resources.", url: "https://www.mhpss.net" },
              { title: "IASC Guidelines on MHPSS", description: "Inter-Agency Standing Committee guidelines on mental health and psychosocial support.", url: "#" },
              { title: "Nigeria Mental Health Resources", description: "Local mental health resources and support services in Nigeria.", url: "#" },
            ].map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="card-ngo p-6 flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{link.title}</h3>
                  <p className="text-muted-foreground text-sm">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Need More Information?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for specific resources or training materials for your community or organization.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
