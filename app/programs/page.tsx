import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Users, TreePine, Megaphone, BookOpen, Shield, Home, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Programs",
  description:
    "COMPSEI's programs span psychosocial support, community empowerment, climate resilience, education, and advocacy across Nigeria. Discover how we create lasting community change.",
  openGraph: {
    title: "Our Work & Programs | COMPSEI",
    url: "https://compsei.com.ng/programs",
  },
  alternates: { canonical: "https://compsei.com.ng/programs" },
};

const programs = [
  {
    id: "psychosocial",
    icon: Heart,
    title: "Psychosocial Support at the Grassroots",
    description: "Providing accessible mental health and psychosocial support within communities.",
    image: "/images/counselling-session.png",
    activities: [
      "Community-based counselling services",
      "Peer support groups for various demographics",
      "Trauma-informed interventions",
      "Crisis support and referral pathways",
      "Psychological first aid training",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Education & Community Engagement",
    description: "Raising awareness and building knowledge on mental health and wellbeing.",
    image: "/images/awareness-campaign.png",
    activities: [
      "Mental health education in schools and public spaces",
      "Community awareness campaigns",
      "Training of volunteers and community leaders",
      "Anti-stigma initiatives",
      "Health communication materials development",
    ],
  },
  {
    id: "empowerment",
    icon: Users,
    title: "Empowerment of Women, Youth & Vulnerable Groups",
    description: "Building capacity and creating opportunities for marginalized populations.",
    image: "/images/youth-empowerment.png",
    activities: [
      "Skills development and vocational training",
      "Leadership training programs",
      "Safe spaces for participation and expression",
      "Inclusive decision-making processes",
      "Economic empowerment initiatives",
    ],
  },
  {
    id: "climate",
    icon: TreePine,
    title: "Climate & Environmental Resilience",
    description: "Integrating psychosocial care into environmental and climate responses.",
    image: "/images/climate-resilience.png",
    activities: [
      "Community sensitization on climate impacts",
      "Local adaptation initiatives",
      "Integration of psychosocial care into climate response",
      "Environmental conservation activities",
      "Sustainable livelihood support",
    ],
  },
  {
    id: "advocacy",
    icon: Megaphone,
    title: "Advocacy & Policy Engagement",
    description: "Amplifying community voices and influencing policy for systemic change.",
    image: "/images/community-dialogue.png",
    activities: [
      "Policy advocacy at local and state levels",
      "Community voice amplification",
      "Research and documentation",
      "Stakeholder engagement",
      "Coalition building with like-minded organizations",
    ],
  },
];

const approaches = [
  { icon: Home, title: "Community-Based", description: "All our interventions are designed and implemented at the community level, ensuring accessibility and relevance." },
  { icon: Users, title: "Participatory", description: "Communities are not just beneficiaries but active participants in designing, implementing, and evaluating programs." },
  { icon: Shield, title: "Rights-Based", description: "We uphold the dignity and rights of all individuals, with special attention to vulnerable and marginalized groups." },
  { icon: Lightbulb, title: "Evidence-Informed", description: "Our programs are guided by evidence, best practices, and lessons learned from implementation." },
];

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Our Work & Programs</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Through targeted interventions and community partnerships, we address psychosocial
              distress, build resilience, and empower communities for sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Our Approach</span>
            <h2 className="heading-section mb-4">How We Work</h2>
            <p className="text-lead max-w-2xl mx-auto">Our approach is built on principles that ensure sustainability, relevance, and community ownership.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <div key={index} className="card-ngo p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <approach.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{approach.title}</h3>
                <p className="text-muted-foreground text-sm">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">Program Areas</span>
            <h2 className="heading-section mb-4">What We Do</h2>
          </div>
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} id={program.id} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center">
                        <program.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Program {index + 1}</span>
                        <h3 className="heading-section text-2xl">{program.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="font-semibold mb-4">Key Activities</h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">See Our Impact in Action</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our completed and ongoing projects to see how these programs translate into real community impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/impact">View Our Impact</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/get-involved">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
