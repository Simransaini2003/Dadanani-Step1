import React from 'react';
import { motion } from 'motion/react';

export default function DocumentationThemesSection() {
  const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const scaleIn = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center px-2">
            <span className="text-black">Documentation </span>
            <span className="text-red-600 border-b-4 border-red-600 pb-2">themes</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'Oral traditions', items: ['Proverbs', 'Lullabies', 'Folk stories'], color: 'bg-red-600' },
              { title: 'Community practices', items: ['Festivals', 'Customs', 'Rituals'], color: 'bg-black' },
              { title: 'Knowledge systems', items: ['Food', 'Dress', 'Ornaments'], color: 'bg-red-600' },
              { title: 'Art & craft', items: ['Music', 'Dance', 'Crafts'], color: 'bg-black' }
            ].map((theme, i) => (
              <motion.div key={i} variants={scaleIn} whileHover={{ y: -10 }} className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl shadow-xl border border-gray-200">
                {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
                <div className="flex flex-row sm:flex-col items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  {/* Colored Box with Title */}
                  <div className={`flex-shrink-0 ${theme.color} text-white p-3 sm:p-4 rounded-xl min-w-[120px] sm:min-w-full`}>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold">{theme.title}</h3>
                  </div>
                  
                  {/* Items List */}
                  <ul className="flex-1 space-y-1.5 sm:space-y-2">
                    {theme.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
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