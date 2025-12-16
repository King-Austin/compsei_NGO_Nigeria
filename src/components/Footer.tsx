import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/compsei-logo.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/programs" },
  { label: "Impact & Projects", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Psychosocial Support", href: "/programs#psychosocial" },
  { label: "Community Empowerment", href: "/programs#empowerment" },
  { label: "Climate Resilience", href: "/programs#climate" },
  { label: "Advocacy", href: "/programs#advocacy" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-ngo py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-primary-foreground rounded-full p-1">
                <img src={logo} alt="COMPSEI Logo" className="h-12 w-12 object-contain" />
              </div>
              <span className="text-xl font-bold">COMPSEI</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Community Psychosocial Support Empowerment Initiative is a Nigerian NGO dedicated to 
              addressing psychosocial, environmental, and community-level challenges through 
              inclusive, community-driven solutions.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Nigeria<br />
                  <span className="text-xs italic">(Office address to be updated)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a 
                  href="tel:+2349157020747" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +234 915 702 0747
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a 
                  href="mailto:compsagg@gmail.com" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  compsagg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-ngo py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} COMPSEI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
