import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Globe,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Camera
} from "lucide-react";
import logo from "@/assets/dap_logo_white.svg";

import { AiFillTikTok } from "react-icons/ai";
import { FaSquareThreads } from "react-icons/fa6";
import { SiFiverr, SiUpwork } from "react-icons/si";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { name: "Web Development", icon: Code },
  { name: "Mobile App Development", icon: Smartphone },
  { name: "UI/UX Design", icon: Palette },
  { name: "Digital Marketing", icon: TrendingUp },
  { name: "SEO Optimization", icon: Globe },
  { name: "Content Creation", icon: Camera },
];

const social = [
  {
    name: "facebook",
    url: "https://facebook.com/digitalagencypark",
    icon: Facebook,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/company/digital-agency-park",
    icon: Linkedin,
  },
  {
    name: "threads",
    url: "https://www.threads.net/@digitalagencypark",
    icon: FaSquareThreads,
  },
  {
    name: "twitter",
    url: "https://twitter.com/digitalagencypk",
    icon: Twitter,
  },
  {
    name: "tiktok",
    url: "https://tiktok.com/@digitalagencypark",
    icon: AiFillTikTok,
  },
  {
    name: "fiverr",
    url: "https://fiverr.com/digitalagencypark",
    icon: SiFiverr,
  },
  {
    name: "upwork",
    url: "https://upwork.com/agencies/digitalagencypark",
    icon: SiUpwork,
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0B0719] via-[#1A0F2E] to-[#16213E] text-white overflow-hidden">
      {/* World Map Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-48 h-auto group-hover:scale-110 transition-transform">
                <img src={logo} alt="Digital Agency Park" className="w-full h-auto filter brightness-0 invert" />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Digital Agency Park is a full-service digital agency dedicated to helping businesses grow through innovative technology, creative design, and strategic marketing solutions.
            </p>
            
            {/* Social icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {social.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 backdrop-blur-sm border border-white/5 hover:border-white/20"
                  title={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <service.icon className="w-3 h-3 text-purple-400 group-hover:scale-110 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm">
                  House 12, Road 5, Dhanmondi<br />
                  Dhaka - 1205, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 flex-shrink-0 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a
                    href="tel:+8801850273117"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    +880 1850-273117
                  </a>
                  <a
                    href="tel:+8801750273117"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    +880 1750-273117
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 flex-shrink-0 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a
                    href="mailto:info@digitalagencypark.com"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    info@digitalagencypark.com
                  </a>
                  <a
                    href="mailto:support@digitalagencypark.com"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    support@digitalagencypark.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Digital Agency Park. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};