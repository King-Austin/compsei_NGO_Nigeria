import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Cloud,
  TreePine,
  Droplets,
  ArrowRight,
  HandHeart,
  BookOpen,
  FileText,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Empowering Communities",
  description:
    "COMPSEI is a Nigerian NGO providing psychosocial support, community empowerment, and climate resilience programs for vulnerable communities across Nigeria.",
  openGraph: {
    title: "Empowering Communities | COMPSEI",
    description:
      "COMPSEI is a Nigerian NGO providing psychosocial support, community empowerment, and climate resilience programs for vulnerable communities.",
    url: "https://compsei.com.ng",
  },
  alternates: { canonical: "https://compsei.com.ng" },
};

const challenges = [
  {
    icon: Heart,
    title: "Mental Health & Psychosocial Distress",
    description: "Addressing stress, trauma, stigma, and limited access to mental health resources.",
    image: "/images/counselling-session.png",
  },
  {
    icon: Users,
    title: "Community Resilience Gaps",
    description: "Strengthening weak community systems for coping with crises and mutual support.",
    image: "/images/community-engagement.png",
  },
  {
    icon: Cloud,
    title: "Climate Change & Wellbeing",
    description: "Supporting communities affected by climate impacts on livelihoods and mental health.",
    image: "/images/climate-resilience.png",
  },
  {
    icon: TreePine,
    title: "Environmental Degradation",
    description: "Combating deforestation, land degradation, and promoting sustainable practices.",
    image: "/images/tree-planting.jpg",
  },
  {
    icon: Droplets,
    title: "Flooding & Disaster Impacts",
    description: "Providing psychosocial support during disaster response and recovery.",
    image: null,
  },
];

const programs = [
  {
    icon: Heart,
    title: "Psychosocial Support Services",
    description: "Community-based counselling, peer support groups, and trauma-informed interventions.",
    image: "/images/counselling-session.png",
  },
  {
    icon: Users,
    title: "Community Empowerment Programs",
    description: "Skills development, leadership training, and inclusive decision-making processes.",
    image: "/images/youth-empowerment.png",
  },
  {
    icon: TreePine,
    title: "Climate Resilience & Adaptation",
    description: "Community sensitization, local adaptation initiatives, and integrated care approaches.",
    image: "/images/climate-resilience.png",
  },
  {
    icon: Lightbulb,
    title: "Advocacy & Awareness",
    description: "Mental health education, awareness campaigns, and training of community leaders.",
    image: "/images/community-engagement.png",
  },
];

const impactStats = [
  { value: "15+", label: "Communities Reached" },
  { value: "500+", label: "Individuals Supported" },
  { value: "80+", label: "Volunteers Trained" },
  { value: "10+", label: "Projects Implemented" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMjIgNmgydi0yMGgtMnYyMHptMjAgMHYtMmgtMTJ2MmgxMnptNC0yOHYyaDJ2LTJoLTJ6bTQgMjh2Mmgydi0yaC0yem0tOCAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container-ngo relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
            <div className="animate-fade-in-up">
              <h1 className="heading-display mb-6">
                Empowering Communities. Restoring Dignity. Strengthening Psychosocial Wellbeing.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                Community Psychosocial Support Empowerment Initiative (COMPSEI) is a Nigerian
                non-governmental organization addressing psychosocial, environmental, and
                community-level challenges through inclusive, community-driven solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">Get Support</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link href="/get-involved">Partner With Us</Link>
                </Button>
              </div>
              <div className="mt-6">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  Explore Our Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tree-planting.jpg"
                  alt="COMPSEI community engagement - tree planting activity"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              The Problems We Address
            </span>
            <h2 className="heading-section mb-4">Challenges Facing Nigerian Communities</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Communities across Nigeria face interconnected psychosocial, environmental, and social
              challenges that threaten wellbeing, dignity, and sustainable development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Link key={index} href="/challenges" className="card-ngo overflow-hidden group cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  {challenge.image ? (
                    <Image
                      src={challenge.image}
                      alt={challenge.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                      <challenge.icon className="h-12 w-12 text-primary-foreground/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="heading-card mb-2 group-hover:text-primary transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
                  <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">
              Our Programs
            </span>
            <h2 className="heading-section mb-4">How We Create Change</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Through targeted interventions and community partnerships, we address the root causes of
              psychosocial distress and build lasting resilience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card-ngo overflow-hidden group">
                <div className="grid sm:grid-cols-2 h-full">
                  <div className="aspect-square sm:aspect-auto relative overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                      <program.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="heading-card mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                    <Link href="/programs" className="inline-flex items-center text-sm text-primary font-medium hover:underline">
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Our Impact</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Figures will be updated as programs expand. Every number represents a life touched, a
              community strengthened.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link href="/impact">See Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-[200px]">
                  <Image src="/images/community-engagement.png" alt="COMPSEI team during community engagement activity" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-[150px]">
                  <Image src="/images/counselling-session.png" alt="Psychosocial support session" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-[150px]">
                  <Image src="/images/youth-empowerment.png" alt="Youth empowerment workshop" fill className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-[200px]">
                  <Image src="/images/volunteer-group.png" alt="COMPSEI volunteers" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Community-Driven Approach
              </span>
              <h2 className="heading-section mb-4">Working Hand-in-Hand with Communities</h2>
              <p className="text-lead mb-6">
                Our approach prioritizes local ownership, participation, and inclusion. We believe
                lasting change comes from within communities, with external support serving as a
                catalyst rather than a solution.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Participatory needs assessments",
                  "Community-led implementation",
                  "Local capacity building",
                  "Sustainable exit strategies",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="h-3 w-3 text-secondary-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="default" asChild>
                <Link href="/about">Learn About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Get Involved
            </span>
            <h2 className="heading-section mb-4">Join Our Mission</h2>
            <p className="text-lead max-w-2xl mx-auto">
              There are many ways to contribute to community wellbeing and resilience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-ngo overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <Image src="/images/volunteer-group.png" alt="Volunteer with COMPSEI" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="heading-card mb-3">Volunteer With Us</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Share your skills and time to support communities in need of psychosocial services.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/get-involved#volunteer">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="card-ngo overflow-hidden group">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-secondary to-secondary/80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HandHeart className="h-16 w-16 text-secondary-foreground/50" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="heading-card mb-3">Partner With COMPSEI</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Collaborate with us to expand impact through joint programs and resource sharing.
                </p>
                <Button variant="gold" asChild>
                  <Link href="/get-involved#partner">Partner Now</Link>
                </Button>
              </div>
            </div>
            <div className="card-ngo overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <Image src="/images/community-engagement.png" alt="Support our work" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="heading-card mb-3">Support Our Work</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Your donation helps us reach more communities and provide critical services.
                </p>
                <Button variant="default" asChild>
                  <Link href="/get-involved#donate">Donate</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Resources & Knowledge
              </span>
              <h2 className="heading-section">Free Resources</h2>
            </div>
            <Link href="/resources" className="inline-flex items-center text-primary font-medium hover:underline">
              View All Resources <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources#mental-health" className="card-ngo p-6 group">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="heading-card mb-2 group-hover:text-primary transition-colors">Mental Health Resources</h3>
              <p className="text-muted-foreground text-sm">Guides and information on mental health awareness and support.</p>
            </Link>
            <Link href="/resources#guides" className="card-ngo p-6 group">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="heading-card mb-2 group-hover:text-primary transition-colors">Community Guides</h3>
              <p className="text-muted-foreground text-sm">Practical resources for community leaders and facilitators.</p>
            </Link>
            <Link href="/resources#publications" className="card-ngo p-6 group">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="heading-card mb-2 group-hover:text-primary transition-colors">Reports & Publications</h3>
              <p className="text-muted-foreground text-sm">Research, reports, and publications from our work.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Ready to Make a Difference?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join COMPSEI in building resilient, mentally healthy communities across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
