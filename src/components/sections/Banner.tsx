// Hero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Leaf, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/fetchAPI";
import Typewriter from "typewriter-effect";

export interface Banner {
  _id: string;
  title: string;
  subTitle: string;
  keywords: string[];
  isActive: boolean;
}

const Banner = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchAPI<Banner[]>("/banner");
        const active = Array.isArray(res) ? res.filter((b) => b.isActive) : [];
        setBanners(active);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  const banner = banners[current];

  if (!banner) return null;

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">
              Safe • Effective • Eco-Friendly
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {banner.title}{" "}
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: [
                    "Cockroaches",
                    "Termites",
                    "Mosquitoes",
                    "Bed Bugs",
                    "Bees",
                    "Ants",
                    "Flies",
                    "Wasps",
                    "Rodents",
                    "Rats",
                    "Mice",
                    "Ticks",
                    "Snakes",
                    "Spiders",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                  cursor: "|",
                }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-8">{banner.subTitle}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/contact">
              <Button size="lg">
                <Shield className="w-5 h-5" />
                Book Appointment
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline" size="lg">
                Free Inspection
              </Button>
            </Link>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-6">
            {banner?.keywords?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-600 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Typewriter line */}
          {/* <div className="flex items-center gap-2 mt-6">
            <CheckCircle className="text-green-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">
              We are{" "}
              <span className="text-primary font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "24/7 Available",
                      "Quick Response",
                      "Always Ready",
                      "Fully Licensed",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </div> */}
        </div>

        {/* RIGHT VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8LjaPHTLpPU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=8LjaPHTLpPU"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-6 py-4">
            <p className="text-sm text-gray-500">Trusted Service</p>
            <p className="text-xl font-bold text-primary">10,000+ Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
