"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import contactIcon from "@/assets/contact-icon.png";

const StickyContact = () => {
  return (
    <div className="sticky top-40 z-20">
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        {/* Header Image */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={contactIcon}
            alt="Contact Support"
            className="object-cover w-full h-full scale-105 transition-transform duration-500"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-background/90" />
          <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white drop-shadow">
            Need Assistance?
          </h3>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            How Can We Help
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            Our team is always ready to support you. Reach out anytime.
          </p>

          <div className="space-y-3">
            {/* Phone */}
            <a
              href="tel:+1304-000077"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="p-2.5 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="text-sm font-medium text-foreground">
                (+880) 1304-000-077
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@Innovationgroup.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary transition-all duration-300 group"
            >
              <div className="p-2.5 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email Us</p>
                <p className="text-sm font-medium text-foreground break-all">
                  info@Innovationgroup.com
                </p>
              </div>
            </a>
          </div>

          {/* Button */}
          <div className="mt-6 pt-6 border-t border-border">
            <Button
              variant="default"
              size="sm"
              className="w-full font-semibold tracking-wide"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StickyContact;
