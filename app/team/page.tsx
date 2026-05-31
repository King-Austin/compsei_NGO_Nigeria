import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team driving COMPSEI's mission to strengthen psychosocial wellbeing and community resilience in Nigeria.",
  openGraph: {
    title: "Our Team | COMPSEI",
    url: "https://compsei.com.ng/team",
  },
  alternates: { canonical: "https://compsei.com.ng/team" },
};

const teamCategories = [
  {
    title: "Leadership",
    members: [
      { name: "Founder / Executive Director", role: "Executive Director", bio: "Leading COMPSEI's vision and strategic direction in community psychosocial support.", placeholder: true },
    ],
  },
  {
    title: "Program Team",
    members: [
      { name: "Program Coordinator", role: "Program Coordinator", bio: "Overseeing the implementation and monitoring of all COMPSEI programs.", placeholder: true },
      { name: "Psychosocial Facilitator", role: "Psychosocial Facilitator", bio: "Providing direct psychosocial support and facilitating community sessions.", placeholder: true },
      { name: "Psychosocial Facilitator", role: "Psychosocial Facilitator", bio: "Supporting community-based counselling and peer support activities.", placeholder: true },
    ],
  },
  {
    title: "Advisors & Partners",
    members: [
      { name: "Advisory Board Member", role: "Advisor", bio: "Providing strategic guidance and expertise to strengthen COMPSEI's work.", placeholder: true },
      { name: "Technical Advisor", role: "Technical Advisor", bio: "Supporting program quality and technical capacity building.", placeholder: true },
    ],
  },
];

export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Our Team</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Meet the dedicated individuals driving COMPSEI&apos;s mission to empower communities and
              strengthen psychosocial wellbeing across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="section-padding">
        <div className="container-ngo">
          {teamCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">{category.title}</span>
              </div>
              <div className={`grid gap-8 ${
                category.members.length === 1
                  ? "max-w-md mx-auto"
                  : category.members.length === 2
                    ? "md:grid-cols-2 max-w-3xl mx-auto"
                    : "md:grid-cols-2 lg:grid-cols-3"
              }`}>
                {category.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="card-ngo overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden relative">
                      <Image src="/images/team-placeholder.png" alt={`${member.name} - ${member.role}`} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1">
                        {member.placeholder ? (
                          <span className="italic text-muted-foreground">{member.name}</span>
                        ) : (
                          member.name
                        )}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex gap-2">
                        <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors" aria-label="Email">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">Join Us</span>
            <h2 className="heading-section mb-4">Become Part of Our Team</h2>
            <p className="text-lead mb-8">
              We&apos;re always looking for passionate individuals who share our commitment to community
              wellbeing and psychosocial support. Whether as staff or volunteers, there&apos;s a place for
              you at COMPSEI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/get-involved#volunteer">Volunteer With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Want to Know More About Our Work?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our programs and see the impact we&apos;re making in communities across Nigeria.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/programs">View Our Programs</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
