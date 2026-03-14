import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  ShoppingCart,
  Plane,
  Bus,
  Car,
  Users,
  MessageCircle,
  GraduationCap,
  Boxes,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Clock,
} from "lucide-react";

type Software = {
  title: string;
  description: string;
  category: string;
  icon: any;
  features?: string[];
  popular?: boolean;
};

const softwares: Software[] = [
  {
    title: "ERP System",
    description:
      "Complete ERP solution for inventory, sales, accounting and company management.",
    category: "business",
    icon: Package,
    features: ["Inventory Control", "Accounting", "Sales Management", "Reporting"],
    popular: true,
  },
  {
    title: "HR Management (HRMS)",
    description:
      "Manage employees, payroll, attendance and performance in one platform.",
    category: "business",
    icon: Users,
    features: ["Payroll", "Attendance", "Performance", "Leave Management"],
  },
  {
    title: "Inventory & Wholesale",
    description:
      "Advanced inventory control and wholesale product management system.",
    category: "business",
    icon: Boxes,
    features: ["Stock Control", "Supplier Management", "Bulk Pricing", "Reports"],
  },
  {
    title: "Flight Booking",
    description: "Online airline ticket booking and travel agency software.",
    category: "hospitality",
    icon: Plane,
    features: ["Real-time Booking", "Payment Gateway", "PNR Management", "Reports"],
    popular: true,
  },
  {
    title: "Bus Reservation",
    description: "Smart bus ticket booking and reservation system.",
    category: "hospitality",
    icon: Bus,
    features: ["Seat Selection", "Route Management", "Online Payment", "SMS Alerts"],
  },
  {
    title: "Vehicle Management",
    description: "Vehicle tracking and transport management system.",
    category: "business",
    icon: Car,
    features: ["Fleet Tracking", "Maintenance", "Fuel Log", "Driver Management"],
  },
  {
    title: "Live Chat Software",
    description: "Real-time customer communication and support platform.",
    category: "business",
    icon: MessageCircle,
    features: ["Multi-channel", "Chat History", "File Sharing", "Analytics"],
  },
  {
    title: "Ecommerce Platform",
    description: "Complete ecommerce solution with product and order management.",
    category: "ecommerce",
    icon: ShoppingCart,
    features: ["Product Catalog", "Cart & Checkout", "Order Management", "Reviews"],
    popular: true,
  },
  {
    title: "Online Course Platform",
    description: "Sell and manage online courses with full LMS features.",
    category: "education",
    icon: GraduationCap,
    features: ["Course Builder", "Student Management", "Quizzes", "Certificates"],
  },
];

const categories = [
  { name: "All Solutions", value: "all", icon: Sparkles },
  { name: "Business", value: "business", icon: Briefcase },
  { name: "E-Commerce", value: "ecommerce", icon: ShoppingCart },
  { name: "Hospitality", value: "hospitality", icon: Plane },
  { name: "Education", value: "education", icon: GraduationCap },
];

// Helper component for Briefcase icon
function Briefcase(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}

export default function ReadySoftware() {
  const [active, setActive] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered =
    active === "all"
      ? softwares
      : softwares.filter((item) => item.category === active);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise Solutions</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Readymade{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Software Solutions
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Powerful ready-made software solutions designed to streamline
            business operations and accelerate growth.
          </motion.p>
        </motion.div>

        {/* Category Tabs - Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.value;
            
            return (
              <motion.button
                key={cat.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat.value)}
                className={`
                  relative group px-6 py-3 rounded-full text-sm font-medium 
                  transition-all duration-300 flex items-center gap-2
                  ${isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {[
            { icon: Package, label: "Solutions", value: softwares.length },
            { icon: Users, label: "Active Users", value: "10K+" },
            { icon: Globe, label: "Countries", value: "25+" },
            { icon: Clock, label: "Support", value: "24/7" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Software Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filtered.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${active}`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute -top-2 -left-2 z-10"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Popular
                      </div>
                    </motion.div>
                  )}

                  {/* Main Card */}
                  <div
                    className={`
                      relative bg-white dark:bg-gray-800 rounded-2xl p-8 
                      transition-all duration-500 h-full
                      ${hoveredIndex === index 
                        ? 'shadow-2xl scale-105 border-primary/30' 
                        : 'shadow-lg border-gray-100 dark:border-gray-700'
                      }
                      border-2
                    `}
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 
                      transition-opacity duration-500
                      ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                    `} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                          ${hoveredIndex === index 
                            ? 'bg-primary text-white' 
                            : 'bg-primary/10 text-primary'
                          }
                          transition-colors duration-300
                        `}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Features */}
                      {item.features && (
                        <div className="space-y-2 mb-6">
                          {item.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 mt-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-colors"
                        >
                          <Shield className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No solutions found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different category
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 text-center"
        >
          <div className="relative bg-gradient-to-r from-primary to-accent rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Custom Software for Your Business?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get a tailored solution that perfectly matches your unique business requirements and goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center gap-2 group"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Talk to Sales
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}