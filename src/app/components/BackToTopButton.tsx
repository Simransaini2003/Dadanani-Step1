import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface BackToTopButtonProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

export default function BackToTopButton({ showBackToTop, scrollToTop }: BackToTopButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center group"
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronDown className="w-6 h-6 rotate-180 group-hover:animate-bounce" />
    </motion.button>
  );
}