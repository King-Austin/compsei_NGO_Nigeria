import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to COMPSEI to discuss partnerships, volunteer opportunities, support, or to learn more about our community programs in Nigeria.",
  openGraph: {
    title: "Contact Us | COMPSEI",
    url: "https://compsei.com.ng/contact",
    images: [{ url: "/compsei-logo.png", width: 512, height: 512, alt: "Contact COMPSEI" }],
  },
  alternates: { canonical: "https://compsei.com.ng/contact" },
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Have questions, want to partner, or need support? We&apos;d love to hear from you. Reach out
              through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-ngo">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-section mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill in the form below and click &quot;Send via WhatsApp&quot; to send your message directly to our team.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-section mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      Nigeria<br />
                      <span className="text-sm italic">(Full address to be updated)</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+2349157020747" className="text-muted-foreground hover:text-primary transition-colors">+234 915 702 0747</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/2348102522048" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      +234 810 252 2048
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:compsagg@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">compsagg@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Instagram, label: "Instagram" },
                  ].map(({ icon: Icon, label }) => (
                    <a key={label} href="#" className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors" aria-label={label}>
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Website */}
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold mb-2">Website</h3>
                <p className="text-muted-foreground text-sm mb-1">www.compsei.com.ng</p>
                <p className="text-muted-foreground text-sm">
                  Visit our website for more information about our work, programs, and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted py-16">
        <div className="container-ngo">
          <div className="bg-card rounded-2xl border border-border h-[300px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Map Location<br />
                <span className="text-sm italic">(To be added when office address is confirmed)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-ngo text-center">
          <h2 className="heading-section text-secondary-foreground mb-4">Want to Get Involved?</h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Learn about the different ways you can contribute to our mission.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
