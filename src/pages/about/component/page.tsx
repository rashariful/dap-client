"use client";

import {
  Target,
  Eye,
  Users,
  Award,
  Shield,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Leaf,
  Handshake,
  Smile,
  Recycle,
  Search,
  Bug,
  Home,
  Building2,
  Briefcase,
  FlaskConical,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Trophy,
  ThumbsUp,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamSection from "@/components/sections/Team";

// Static data for EcoShield Pest Control
const companyStats = [
  {
    value: "5+",
    label: "Years Experience",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    value: "500+",
    label: "Projects Completed",
    icon: <Users className="w-8 h-8" />,
  },
  {
    value: "350+",
    label: "Happy Clients",
    icon: <Smile className="w-8 h-8" />,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];
const services = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Website Design & Development",
    description: "Modern responsive websites built with latest technologies",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Ecommerce Development",
    description: "Complete ecommerce solutions to grow your online business",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Facebook ads, SEO, and marketing strategies to boost sales",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Landing Page Design",
    description: "High converting landing pages for campaigns and products",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Business Automation",
    description: "Automate your business processes and save time",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Video Editing & Content",
    description: "Professional video editing for marketing and social media",
  },
];

const coreValues = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Quality First",
    description: "We maintain high standards in every project we deliver.",
    color: "bg-blue-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth Focused",
    description:
      "Our goal is to help businesses grow through powerful digital strategies.",
    color: "bg-green-600",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Client Partnership",
    description: "We believe in long-term relationships with our clients.",
    color: "bg-purple-600",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We use modern technologies to build future-ready digital solutions.",
    color: "bg-amber-600",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fast Delivery",
    description:
      "Efficient workflow ensures quick and reliable project delivery.",
    color: "bg-red-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Our team works together to create powerful digital experiences.",
    color: "bg-indigo-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Data Driven",
    description:
      "We rely on analytics and performance data to optimize results.",
    color: "bg-teal-600",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Continuous Improvement",
    description: "We constantly improve our services and technology.",
    color: "bg-cyan-600",
  },
];

const whyChooseUs = [
  {
    title: "Expert Development Team",
    description: "Skilled developers building modern web applications.",
    icon: <Award className="w-5 h-5 text-primary" />,
  },
  {
    title: "All Services In One Place",
    description: "Website, marketing, design, automation everything together.",
    icon: <Briefcase className="w-5 h-5 text-primary" />,
  },
  {
    title: "Business Growth Focused",
    description: "We focus on real results and business growth.",
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
  },
  {
    title: "Fast Delivery",
    description: "Quick development and fast project delivery.",
    icon: <Clock className="w-5 h-5 text-primary" />,
  },
  {
    title: "Affordable Pricing",
    description: "High quality services at competitive pricing.",
    icon: <ThumbsUp className="w-5 h-5 text-primary" />,
  },
  {
    title: "Long Term Support",
    description: "We provide continuous support and maintenance.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
];
const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Understanding your business goals and requirements.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating strategy and development roadmap.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building website or system using modern technologies.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Testing everything for performance and security.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Launching the project and providing ongoing support.",
  },
];
const PageClient = (directorData) => {
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (!hash) {
        window.scrollTo({ top: 0 });
        return;
      }

      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);

    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 bg-primary/20 text-primary border-primary/30">
            About Digital Agency Park
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Trusted Partner in{" "}
            <span className="text-primary">Digital Growth</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Digital Agency Park is a full-service digital agency helping
            businesses grow in the online world through modern website
            development, ecommerce solutions, digital marketing, business
            automation, and creative content production. Our mission is to
            provide everything your business needs in one place to succeed
            digitally.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y-2 border-primary/20 bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section id="company-background" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h2 className="text-4xl font-bold mb-6">About Our Agency</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Who We Are
              </h3>
              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Digital Agency Park is a modern digital solutions company
                    dedicated to helping businesses establish and grow their
                    online presence. We combine creativity, technology, and
                    marketing strategies to deliver powerful digital experiences
                    for brands of all sizes.
                  </p>

                  <p>
                    Our team consists of skilled developers, designers,
                    marketers, and strategists who work together to build
                    high-performance websites, scalable ecommerce platforms, and
                    result-driven digital marketing campaigns.
                  </p>

                  <p>
                    From startups to growing businesses, we provide end-to-end
                    digital solutions that help companies reach more customers,
                    increase sales, and build strong online brands.
                  </p>
                </div>
              </Card>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Our Philosophy
              </h3>

              <Card className="p-8 hover:shadow-lg transition-all">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Digital Agency Park, we believe every business deserves
                    access to powerful digital tools and strategies that drive
                    real growth. Our philosophy is built on innovation,
                    transparency, and long-term partnerships with our clients.
                  </p>

                  <p>
                    We focus on creating solutions that are not only visually
                    appealing but also highly functional, scalable, and
                    optimized for performance. Every project we build is
                    designed to deliver measurable business results.
                  </p>

                  <p>
                    By combining modern technologies with smart marketing
                    strategies, we help businesses build strong digital
                    foundations that support sustainable growth in today’s
                    competitive online marketplace.
                  </p>
                </div>
              </Card>
            </Card>
          </div>

          {/* Services Overview */}
          <Card className="p-8 mb-12 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why Choose{" "}
              <span className="text-primary font-semibold">
                Digital Agency Park
              </span>
              ?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Development Process
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mx-auto mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 bg-muted/30 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Our Purpose
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to empower businesses with modern digital
                solutions that help them grow online. Through website
                development, ecommerce systems, digital marketing, and
                automation tools, we provide everything a business needs to
                succeed in the digital world.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our vision is to become a leading digital agency that helps
                businesses transform digitally and compete in the global market
                through innovative technology solutions and long-term
                partnerships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              What Drives Us
            </Badge>
            <h2 className="text-4xl font-bold mb-6">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:border-primary/20 group"
              >
                <div
                  className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="font-bold mb-3 text-lg">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="board-of-directors" className="py-16 bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Meet Our Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to your safety and satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directorData?.data?.map((member) => (
              <Card
                key={member._id}
                className="p-6 lg:p-8 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Initials Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-2xl">
                      {/* {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")} */}
                      <img
                        src={member.thumbnail}
                        alt=""
                        className="rounded shadow"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold">
                        {member.designation}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm">
                      {member.bio}
                    </p>

                    {member.message && (
                      <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary italic">
                        <p className="text-sm text-muted-foreground">
                          "{member.message}"
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((s, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {member.social.map((s, idx) => (
                          <a
                            key={idx}
                            href={s.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {s.platform}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section>
        <TeamSection />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for a Pest-Free Environment?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free inspection and consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-semibold"
              >
                Schedule Free Inspection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary h-12 px-8 font-semibold"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+88014055-55822</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ecoshieldpestbd.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageClient;
