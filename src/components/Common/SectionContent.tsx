import { motion } from "framer-motion";
import React from "react";

interface SectionContentProps {
  preTitle?: string; // small uppercase text
  title: string; // main heading
  highlight?: string; // part of the title to apply gradient
  description: string; // paragraph text
  bgClass?: string; // optional background color class
  textAlign?: "center" | "left" | "right"; // text alignment
}

const SectionContent: React.FC<SectionContentProps> = ({
  preTitle,
  title,
  highlight,
  description,
  bgClass = "bg-secondary",
  textAlign = "center",
}) => {
  const alignClass =
    textAlign === "center"
      ? "text-center"
      : textAlign === "left"
      ? "text-left"
      : "text-right";

  // split title into normal + highlighted
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section className={`pt-32 pb-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl mx-auto ${alignClass}`}
        >
          {preTitle && (
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              {preTitle}
            </span>
          )}

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            {titleParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {highlight && index === 0 && (
                  <span className="text-gradient">{highlight}</span>
                )}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-muted-foreground text-lg">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContent;