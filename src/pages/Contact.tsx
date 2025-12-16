import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-ngo">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Have questions, want to partner, or need support? We'd love to hear from you. 
              Reach out through any of the channels below.
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" variant="default" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
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
                    <a 
                      href="tel:+2349157020747" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +234 915 702 0747
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:compsagg@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      compsagg@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-muted-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground" />
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold mb-2">Website</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  www.cpsei.org <span className="italic">(or placeholder)</span>
                </p>
                <p className="text-muted-foreground text-sm">
                  Official website coming soon with more information about our work and impact.
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
          <h2 className="heading-section text-secondary-foreground mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Learn about the different ways you can contribute to our mission.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="/get-involved">Get Involved</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
