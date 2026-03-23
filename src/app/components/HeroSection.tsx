import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import dadaNaniLogo from "../../assets/dadaNaniLogo.png";
import heroBg from "../../assets/muddywall3.jpg";

interface HeroSectionProps {
  onRegister: () => void;
}

export default function HeroSection({ onRegister }: HeroSectionProps) {
  const navigate = useNavigate();

  return (
    <section
      className="font-sora relative min-h-screen flex items-center justify-center overflow-hidden 
                 px-4 sm:px-6 md:px-10 lg:px-20 
                 bg-cover bg-center bg-no-repeat
                 -mt-20 sm:-mt-24 pt-20 sm:pt-24"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 248, 242, 0.9) 0%, rgba(245, 239, 232, 0.85) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Very Light Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-transparent to-amber-50/10 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto -mt-10 sm:-mt-12 md:-mt-16 backdrop-blur-sm">

          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 sm:mb-10"
          >
            <img
              src={dadaNaniLogo}
              alt="Dada Nani Festival"
              className="h-20 sm:h-28 md:h-36 lg:h-40 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 drop-shadow-sm tracking-tight"
          >
            Dada Nani Festival
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-800 mb-8 sm:mb-10 max-w-2xl font-medium drop-shadow-sm"
          >
            A celebration of India's rich cultural heritage through the eyes of our elders
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegister}
              className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Register As Student
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register/school')}
              className="w-full sm:w-auto px-8 py-3 sm:py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Register as School
            </motion.button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}