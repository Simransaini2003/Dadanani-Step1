import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, PlayCircle, Download } from 'lucide-react';
import bgPattern from '../../assets/muddywall3.jpg';

export default function ResourcesSection() {
  const resources = [
    { title: 'Student Guide', desc: 'Simple steps to begin', icon: FileText },
    { title: 'Interview Guide', desc: 'Watch tutorial', icon: PlayCircle },
    { title: 'Consent Form', desc: 'Required document', icon: FileText },
    { title: 'Documentation Tips', desc: 'Quick reference', icon: BookOpen }
  ];

  return (
    <section className="py-16" style={{
      backgroundImage: `linear-gradient(135deg, rgba(255, 248, 242, 0.72) 0%, rgba(245, 239, 232, 0.67) 100%), url(${bgPattern})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Resources for </span>
            <span className="text-red-600">You</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to participate and create your submission.
          </p>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-5 
                        sm:grid sm:grid-cols-2 
                        lg:grid-cols-4 sm:gap-6">

          {resources.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group min-w-[260px] sm:min-w-0 
                         bg-white border rounded-2xl p-5 
                         shadow-sm hover:shadow-lg 
                         transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
              <div className="flex flex-row sm:flex-col items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition">
                  <item.icon className="w-5 h-5" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end mt-3">
                <Download className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110 transition" />
              </div>

              {/* 🔥 Hover Underline */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}