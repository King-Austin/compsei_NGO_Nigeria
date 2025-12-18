import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Target, Heart, Users, Award, Globe } from "lucide-react";
import aboutHero from "@/assets/about-hero.png";
import communityEngagement from "@/assets/community-engagement.png";
import counsellingSession from "@/assets/counselling-session.png";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every community and individual with empathy, respect, and understanding."
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "We ensure our programs reach vulnerable populations regardless of gender, age, or status."
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We maintain transparency and accountability in all our operations and partnerships."
  },
  {
    icon: Globe,
    title: "Community Ownership",
    description: "We prioritize local leadership and participation in all our interventions."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={aboutHero} 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-ngo relative">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">About COMPSEI</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Community Psychosocial Support Empowerment Initiative is a non-governmental 
              organization committed to addressing interlinked psychosocial, environmental, 
              and community-level challenges in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="heading-section mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Community Psychosocial Support Empowerment Initiative (COMPSEI) is a non-governmental 
                  organization committed to addressing interlinked psychosocial, environmental, 
                  and community-level challenges. Our work empowers individuals and communities 
                  to thrive emotionally, socially, and economically through mental health support, 
                  awareness, education, and inclusion.
                </p>
                <p>
                  Founded with the belief that sustainable development must address the whole 
                  person—mind, body, and community—COMPSEI operates at the intersection of mental 
                  health, climate resilience, and community empowerment. We recognize that 
                  psychosocial wellbeing is fundamental to individual dignity and community 
                  development.
                </p>
                <p>
                  Our programs are designed and implemented with communities, not for them. 
                  We believe that lasting change emerges when local voices lead, when 
                  indigenous knowledge is valued, and when external support serves as 
                  a catalyst rather than a solution.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={communityEngagement} 
                    alt="COMPSEI community engagement"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={counsellingSession} 
                    alt="Psychosocial support session"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="card-ngo p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-section mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create resilient, inclusive, and mentally healthy communities where every 
                  individual—regardless of gender, age, or social status—has access to 
                  psychosocial support and opportunities for empowerment.
                </p>
              </div>
            </div>
            <div className="card-ngo p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="heading-section mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To promote mental health, reduce stigma, and empower vulnerable populations 
                  through community-driven programs, capacity building, and inclusive 
                  development strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="heading-section mb-4">What Guides Us</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Our values shape every decision we make and every program we implement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-ngo p-6 text-center group hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="heading-card mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">
            Want to Learn More About Our Work?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore our programs, meet our team, or get in touch to discuss partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/programs">Our Programs</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
