import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import communityEngagement from "@/assets/community-engagement.png";
import treePlanting from "@/assets/tree-planting.jpg";

const impactStats = [
  { value: "15+", label: "Communities Reached" },
  { value: "500+", label: "Individuals Supported" },
  { value: "80+", label: "Volunteers & Facilitators Trained" },
  { value: "10+", label: "Projects Implemented" }
];

const projects = [
  {
    title: "Community Training on Psychosocial Support",
    location: "Multiple Communities, Nigeria",
    date: "Ongoing",
    description: "Training community members and volunteers in basic psychosocial support, peer counselling, and mental health first aid.",
    image: communityEngagement,
    hasImage: true
  },
  {
    title: "Environmental Conservation & Tree Planting",
    location: "Local Communities, Nigeria",
    date: "2023 - Present",
    description: "Community-led tree planting initiatives that combine environmental action with community engagement and psychosocial awareness.",
    image: treePlanting,
    hasImage: true
  },
  {
    title: "Volunteer Engagement Sessions",
    location: "Various Locations",
    date: "Ongoing",
    description: "Regular sessions to orient, train, and engage volunteers in COMPSEI's community-based programs.",
    image: null,
    hasImage: false
  },
  {
    title: "Community Dialogue Forums",
    location: "Rural Communities",
    date: "Periodic",
    description: "Facilitated community dialogues addressing mental health stigma, climate impacts, and community resilience building.",
    image: null,
    hasImage: false
  }
];

export default function Impact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Impact & Projects</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every number represents a life touched, a community strengthened, 
              and a step toward sustainable wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="container-ngo">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            * Figures will be updated as programs expand
          </p>
        </div>
      </section>

      {/* Our Approach to Impact */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="heading-section mb-6">Community-Centered Impact</h2>
            <p className="text-lead">
              Our projects are characterized by participation, inclusion, and local ownership. 
              We believe sustainable impact comes from working with communities, not for them. 
              Every intervention is designed collaboratively, implemented with local leadership, 
              and evaluated with community input.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">
              Our Projects
            </span>
            <h2 className="heading-section mb-4">What We've Been Doing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-ngo overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  {project.hasImage && project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-4">
                        <Users className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm italic">
                          Field Project Image<br />
                          (To Be Updated)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="heading-card mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">
            Be Part of Our Impact Story
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us or support our work to expand our reach and deepen 
            our impact in communities across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/partners">Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
