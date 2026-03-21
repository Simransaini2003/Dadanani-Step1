import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trophy, Award, Users } from 'lucide-react';

export default function WhatYouGetSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const items = [
    {
      title: 'Discover Traditions',
      desc: 'Reconnect deeply with your cultural roots.',
      icon: Heart
    },
    {
      title: 'Win Prizes',
      desc: 'Get rewarded and recognized for your efforts.',
      icon: Trophy
    },
    {
      title: 'Become Ambassador',
      desc: 'Lead and inspire heritage preservation.',
      icon: Award
    },
    {
      title: 'Expert Mentorship',
      desc: 'Learn directly from experienced mentors.',
      icon: Users
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            <span className="text-gray-900">What you </span>
            <span className="text-red-600 relative inline-block">
              get
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-600 rounded-full"></span>
            </span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-50 via-white to-transparent"></div>

                {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
                <div className="flex flex-row sm:flex-col items-start sm:items-center gap-4">
                  {/* Floating Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center shadow-sm group-hover:bg-red-600 transition duration-300"
                  >
                    <item.icon className="w-8 h-8 text-red-600 group-hover:text-white transition duration-300" />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Animated Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
