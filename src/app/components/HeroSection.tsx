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
        backgroundImage: `url(${heroBg})`,
      }}
    >
      
      {/* ✅ Softer Overlay (reduced opacity) */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Optional subtle dark layer for contrast */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Softer Glow */}
      <div className="absolute -top-32 -left-32 w-[250px] h-[250px] bg-red-200/10 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[250px] h-[250px] bg-amber-200/10 blur-[120px]" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen text-center">

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto -mt-10 sm:-mt-12 md:-mt-16">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-6"
          >
            <img
              src={dadaNaniLogo}
              alt="Dada Nani Festival"
              className="h-20 sm:h-28 md:h-36 lg:h-40 mx-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4"
          >
            Dada Nani Festival
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 whitespace-nowrap"
          >
            A celebration of India's rich cultural heritage through the eyes of our elders
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRegister}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition"
            >
              Register As Student
            </button>

            <button
              onClick={() => navigate('/register/school')}
              className="w-full sm:w-auto px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-xl font-bold transition"
            >
              Register as School
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}