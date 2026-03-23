import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Heart } from 'lucide-react';
import bgPattern from '../../assets/muddywall3.jpg';

export default function TheProgrammeSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const items = [
    {
      title: 'Safeguarding Heritage',
      desc: 'Everyday cultural practices are disappearing rapidly.',
      icon: Heart,
      color: 'bg-red-600'
    },
    {
      title: 'Generational Gaps',
      desc: 'Families today share fewer traditions than ever before.',
      icon: Users,
      color: 'bg-gray-800'
    },
    {
      title: 'Cultural Learning',
      desc: 'Students explore and rediscover their cultural roots deeply.',
      icon: BookOpen,
      color: 'bg-red-600'
    },
    {
      title: 'Skill Building',
      desc: 'Learn research, interviewing, and storytelling skills.',
      icon: Award,
      color: 'bg-gray-800'
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255, 248, 242, 0.75) 0%, rgba(245, 239, 232, 0.68) 100%), url(${bgPattern})`,
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10"
          >
            <span className="text-gray-900">The Dada Nani </span>
            <span className="text-red-600 relative inline-block">
              Festival
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-600 rounded-full"></span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              The programme connects generations by bringing together the wisdom of elders and the curiosity of youth—preserving culture while building essential future-ready skills.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon + Content */}
                <div className="flex flex-row sm:flex-col items-start sm:items-center gap-4">

                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 ${item.color} rounded-xl flex items-center justify-center`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}