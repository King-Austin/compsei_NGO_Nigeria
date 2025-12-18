import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCheck, Handshake, Heart, ArrowRight, CheckCircle } from "lucide-react";
import volunteerGroup from "@/assets/volunteer-group.png";
import partnership from "@/assets/partnership.png";
import communityEngagement from "@/assets/community-engagement.png";

const involvementOptions = [
  {
    id: "volunteer",
    icon: UserCheck,
    title: "Volunteer With Us",
    description: "Share your skills and time to support communities in need of psychosocial services.",
    image: volunteerGroup,
    benefits: [
      "Gain hands-on experience in community development",
      "Receive training in psychosocial support techniques",
      "Make a direct impact in vulnerable communities",
      "Join a network of like-minded changemakers",
      "Contribute to meaningful, lasting change"
    ],
    roles: [
      "Community Outreach Volunteer",
      "Peer Support Facilitator",
      "Training Assistant",
      "Communications Support",
      "Administrative Support"
    ],
    cta: "Apply to Volunteer"
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner With COMPSEI",
    description: "Collaborate with us to expand impact through joint programs and resource sharing.",
    image: partnership,
    benefits: [
      "Access to community networks and local expertise",
      "Joint program design and implementation",
      "Shared learning and capacity building",
      "Combined advocacy and visibility",
      "Aligned impact measurement"
    ],
    partnerTypes: [
      "NGOs and CBOs",
      "Government agencies",
      "Corporate partners",
      "Academic institutions",
      "International organizations"
    ],
    cta: "Discuss Partnership"
  },
  {
    id: "donate",
    icon: Heart,
    title: "Support Our Work",
    description: "Your donation helps us reach more communities and provide critical psychosocial services.",
    image: communityEngagement,
    impactAreas: [
      "Training community volunteers and facilitators",
      "Providing psychosocial support sessions",
      "Developing educational materials",
      "Conducting community awareness campaigns",
      "Supporting climate resilience activities"
    ],
    cta: "Make a Donation"
  }
];

export default function GetInvolved() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={volunteerGroup} 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-ngo relative">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Get Involved</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              There are many ways to contribute to community wellbeing and resilience. 
              Join us in making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="space-y-20">
            {/* Volunteer Section */}
            <div id="volunteer" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="heading-section">{involvementOptions[0].title}</h2>
                  </div>
                  <p className="text-lead mb-6">{involvementOptions[0].description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">Why Volunteer With Us?</h3>
                    <ul className="space-y-3">
                      {involvementOptions[0].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact">{involvementOptions[0].cta}</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={volunteerGroup} 
                      alt="COMPSEI volunteers"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Volunteer Roles</h3>
                    <ul className="space-y-2">
                      {involvementOptions[0].roles?.map((role, index) => (
                        <li key={index} className="flex items-center gap-3 p-2 bg-card rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          <span className="text-sm">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Section */}
            <div id="partner" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                      <Handshake className="h-7 w-7 text-secondary" />
                    </div>
                    <h2 className="heading-section">{involvementOptions[1].title}</h2>
                  </div>
                  <p className="text-lead mb-6">{involvementOptions[1].description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">Partnership Benefits</h3>
                    <ul className="space-y-3">
                      {involvementOptions[1].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">{involvementOptions[1].cta}</Link>
                  </Button>
                </div>
                <div className="lg:order-1 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={partnership} 
                      alt="Partnership handshake"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="bg-muted rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Who We Partner With</h3>
                    <ul className="space-y-2">
                      {involvementOptions[1].partnerTypes?.map((type, index) => (
                        <li key={index} className="flex items-center gap-3 p-2 bg-card rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm">{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Donate Section */}
            <div id="donate" className="scroll-mt-24">
              <div className="card-ngo overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-auto">
                    <img 
                      src={communityEngagement} 
                      alt="Community engagement"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:bg-gradient-to-l"></div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="heading-section mb-4">{involvementOptions[2].title}</h2>
                    <p className="text-lead mb-8">{involvementOptions[2].description}</p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-4">Your Support Enables Us To:</h3>
                      <ul className="space-y-2">
                        {involvementOptions[2].impactAreas?.map((area, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm">
                      To discuss donation options or make a contribution, please contact us directly.
                    </p>

                    <Button variant="default" size="lg" asChild>
                      <Link to="/contact">{involvementOptions[2].cta}</Link>
                    </Button>
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
            Have Questions?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to discuss how you can get involved 
            or learn more about our work.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
