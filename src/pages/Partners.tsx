import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users, Globe, Handshake } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "NGOs & CBOs",
    description: "Local and international non-governmental organizations and community-based organizations."
  },
  {
    icon: Users,
    title: "Government Institutions",
    description: "Federal, state, and local government agencies working in health, environment, and social welfare."
  },
  {
    icon: Globe,
    title: "Development Partners",
    description: "International development organizations and bilateral/multilateral agencies."
  },
  {
    icon: Handshake,
    title: "Private Sector",
    description: "Corporate organizations committed to social responsibility and community development."
  }
];

const partnerLogos = [
  "Partner Organization 1",
  "Partner Organization 2", 
  "Partner Organization 3",
  "Partner Organization 4",
  "Partner Organization 5",
  "Partner Organization 6"
];

export default function Partners() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Our Partners</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We collaborate with local and international NGOs, community-based organizations, 
              development partners, and government institutions to amplify our impact.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Collaboration
            </span>
            <h2 className="heading-section mb-6">Partnership for Impact</h2>
            <p className="text-lead">
              COMPSEI believes that sustainable change requires collaboration. We actively 
              seek partnerships that align with our mission and values, bringing together 
              diverse expertise, resources, and networks to serve communities better.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerTypes.map((type, index) => (
              <div key={index} className="card-ngo p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="section-padding bg-muted">
        <div className="container-ngo">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">
              Our Network
            </span>
            <h2 className="heading-section mb-4">Organizations We Work With</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-8 flex items-center justify-center min-h-[120px]"
              >
                <div className="text-center">
                  <Building2 className="h-10 w-10 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm italic">
                    Partner Logo<br />
                    (To Be Updated)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="max-w-4xl mx-auto">
            <div className="card-ngo p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground text-sm font-medium rounded-full mb-4">
                    Partner With Us
                  </span>
                  <h2 className="heading-section mb-4">Become a Partner</h2>
                  <p className="text-muted-foreground mb-6">
                    We welcome partnerships with organizations that share our commitment 
                    to community wellbeing, mental health, and sustainable development. 
                    Together, we can achieve more.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Joint program implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Resource and knowledge sharing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Capacity building exchanges
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Advocacy and coalition building
                    </li>
                  </ul>
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">Contact Us to Partner</Link>
                  </Button>
                </div>
                <div className="bg-muted rounded-xl p-8 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <Handshake className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm italic">
                      Partnership Visual<br />
                      (To Be Updated)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to strengthen communities 
            and improve psychosocial wellbeing across Nigeria.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
