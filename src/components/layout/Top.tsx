import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
} from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareThreads } from "react-icons/fa6";

import React from "react";

const social = [
  {
    name: "facebook",
    url: "https://facebook.com/digitalagencypark",
    icon: Facebook,
  },
  {
    name: "instagram",
    url: "https://instagram.com/digitalagencypark",
    icon: Instagram,
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
    url: "https://x.com/digitalagencypark",
    icon: Twitter,
  },
  {
    name: "tiktok",
    url: "https://tiktok.com/@digitalagencypark",
    icon: AiFillTikTok,
  },
];

function Top() {
  return (
    <div className="bg-primary py-2.5 w-full text-primary-foreground text-xs sm:text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
        
        {/* Left info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-foreground" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span>Sat – Thu 10:00 AM – 8:00 PM</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary-foreground" />
            <a
              href="mailto:info@digitalagencypark.com"
              className="hover:text-white transition-colors"
            >
              info@digitalagencypark.com
            </a>
          </div>

        </div>

        {/* Social icons */}
        <div className="hidden lg:flex items-center gap-4">
          {social.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title={name}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Top;