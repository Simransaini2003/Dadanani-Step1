import React from "react";
import { motion } from "framer-motion";

export default function DocumentationThemesSection() {
  const themes = [
    {
      title: "Oral traditions",
      items: ["Proverbs", "Lullabies", "Folk stories"],
    },
    {
      title: "Community practices",
      items: ["Festivals", "Customs", "Rituals"],
    },
    {
      title: "Knowledge systems",
      items: ["Food", "Dress", "Ornaments"],
    },
    {
      title: "Art & craft",
      items: ["Music", "Dance", "Crafts"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Documentation <span className="text-red-600">Themes</span>
          </h2>
        </motion.div>

        {/* Single Row Layout (No Scroll) */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between">
          {themes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 min-w-[220px] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              {/* Top Line Accent */}
              <div className="w-10 h-[2px] bg-red-600 mb-4"></div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {theme.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {theme.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-gray-600 text-sm sm:text-base"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}