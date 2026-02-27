import { Link } from "react-router-dom";
import { Plus, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Find Doctors", path: "/doctors" },
      { label: "Book Appointment", path: "/doctors" },
      { label: "Video Consultation", path: "/doctors" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Careers", path: "/careers" },
    ],
    support: [
      { label: "Help Center", path: "/help" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Doc<span className="text-primary">Spot</span>
              </span>
            </Link>
            <p className="text-background/70 mb-4 text-sm max-w-xs">
              Making healthcare accessible. Book appointments with qualified doctors anytime.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@docspot.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>123 Health Street, Medical City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 pt-6">
          <p className="text-sm text-background/60 text-center">
            © {currentYear} DocSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
