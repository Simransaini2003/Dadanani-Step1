import React from "react";
import { motion } from "framer-motion";

export default function DocumentationThemesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const themes = [
    {
      title: "Oral traditions",
      items: ["Proverbs", "Lullabies", "Folk stories"],
      color: "bg-red-600",
    },
    {
      title: "Community practices",
      items: ["Festivals", "Customs", "Rituals"],
      color: "bg-black",
    },
    {
      title: "Knowledge systems",
      items: ["Food", "Dress", "Ornaments"],
      color: "bg-red-600",
    },
    {
      title: "Art & craft",
      items: ["Music", "Dance", "Crafts"],
      color: "bg-black",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 text-center"
          >
            <span className="text-black">Documentation </span>
            <span className="text-red-600 border-b-4 border-red-600 pb-1">
              themes
            </span>
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {themes.map((theme, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                {/* Mobile: stacked | Desktop: same */}
                <div className="flex flex-col gap-4">

                  {/* Title Badge */}
                  <div
                    className={`${theme.color} text-white px-4 py-3 rounded-xl w-fit`}
                  >
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap">
                      {theme.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2">
                    {theme.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm sm:text-base text-gray-700"
                      >
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}