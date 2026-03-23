import React from 'react';
import { motion } from 'framer-motion';
import bgPattern from '../../assets/muddywall3.jpg';

export default function HowToParticipateSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const steps = [
    { step: 1, title: 'Register', desc: 'Sign up online easily' },
    { step: 2, title: 'Learn', desc: 'Attend free workshop' },
    { step: 3, title: 'Interview', desc: 'Talk to elders' },
    { step: 4, title: 'Document', desc: 'Create your entry' },
    { step: 5, title: 'Submit', desc: 'Upload your work' }
  ];

  return (
    <section className="py-16 md:py-24" style={{
      backgroundImage: `linear-gradient(135deg, rgba(255, 248, 242, 0.62) 0%, rgba(245, 239, 232, 0.58) 100%), url(${bgPattern})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14"
          >
            <span className="text-gray-900">How to </span>
            <span className="text-red-600 relative inline-block">
              participate
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-600 rounded-full"></span>
            </span>
          </motion.h2>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {steps.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative bg-white p-6 rounded-2xl border border-white 
                           shadow-sm hover:shadow-xl 
                           hover:border-red-500 
                           transition-all duration-300 overflow-hidden"
              >
                {/* 🔥 Top Accent Bar */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></div>

                {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
                <div className="flex flex-row sm:flex-col items-start sm:items-center gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center 
                                text-lg font-bold 
                                bg-gray-100 text-gray-700
                                group-hover:bg-red-600 group-hover:text-white
                                transition-all duration-300">
                    {item.step}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 text-center sm:text-left">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 text-center sm:text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Subtle connector line (desktop only) */}
          <div className="hidden lg:block mt-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white rounded-full"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}