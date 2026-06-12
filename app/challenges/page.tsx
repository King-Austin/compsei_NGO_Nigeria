import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Cloud, TreePine, Droplets, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Challenges We Address",
  description:
    "Explore the interconnected mental health, climate, and environmental challenges facing Nigerian communities that COMPSEI works to resolve through community-driven solutions.",
  openGraph: {
    title: "Challenges We Address | COMPSEI",
    url: "https://compsei.com.ng/challenges",
    images: [{ url: "/compsei-logo.png", width: 512, height: 512, alt: "Challenges COMPSEI Addresses" }],
  },
  alternates: { canonical: "https://compsei.com.ng/challenges" },
};

const challenges = [
  {
    id: "mental-health",
    icon: Heart,
    title: "Mental Health & Psychosocial Distress",
    points: [
      "Stress, trauma, and emotional distress affecting individuals and communities",
      "Limited access to mental health resources and professionals",
      "Widespread stigma surrounding psychological wellbeing",
      "Cultural barriers to seeking mental health support",
      "Lack of community-based mental health services",
    ],
  },
  {
    id: "resilience",
    icon: Users,
    title: "Community Resilience Gaps",
    points: [
      "Weak community systems for coping with crises",
      "Limited mutual support structures and social safety nets",
      "Overdependence on external interventions",
      "Fragmented community leadership and coordination",
      "Insufficient disaster preparedness at community level",
    ],
  },
  {
    id: "climate",
    icon: Cloud,
    title: "Climate Change–Related Challenges",
    points: [
      "Loss of livelihoods, crops, homes, and income due to climate impacts",
      "Psychological stress and anxiety linked to climate uncertainty",
      "Poor integration of mental wellbeing into climate responses",
      "Displacement and migration due to environmental changes",
      "Food insecurity and its mental health implications",
    ],
  },
  {
    id: "environment",
    icon: TreePine,
    title: "Environmental Degradation",
    points: [
      "Deforestation and land degradation across communities",
      "Economic instability linked to ecological loss",
      "Low awareness of sustainable resource management",
      "Pollution and its health impacts on communities",
      "Loss of traditional environmental knowledge",
    ],
  },
  {
    id: "flooding",
    icon: Droplets,
    title: "Flooding & Natural Disaster Impacts",
    points: [
      "Emotional and psychological trauma from disasters",
      "Economic displacement and loss of property",
      "Limited psychosocial support during disaster response",
      "Long-term mental health effects of repeated flooding",
      "Destruction of community infrastructure and social networks",
    ],
  },
];

export default function Challenges() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">The Challenges We Address</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Communities across Nigeria face interconnected psychosocial, environmental, and social
              challenges that threaten wellbeing, dignity, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Understanding the Context</span>
            </div>
            <p className="text-lead">
              These challenges are deeply interconnected. Mental health affects community resilience,
              climate change exacerbates psychosocial distress, and environmental degradation undermines
              the foundation of community wellbeing. Addressing them requires an integrated, holistic
              approach.
            </p>
          </div>

          {/* Challenge Cards */}
          <div className="space-y-12">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.id}
                id={challenge.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <challenge.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="heading-section mb-4">{challenge.title}</h2>
                  <ul className="space-y-3">
                    {challenge.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-muted rounded-2xl p-8 h-full flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <challenge.icon className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm italic">
                        Field Project Image – {challenge.title}
                        <br />
                        (To Be Updated)
                      </p>
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
          <h2 className="heading-section text-secondary-foreground mb-4">How We Respond to These Challenges</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Learn about our programs designed to address these interconnected challenges through
            community-driven solutions.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/programs">Explore Our Programs</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
