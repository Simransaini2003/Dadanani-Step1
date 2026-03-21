import React from 'react';
import { motion } from 'motion/react';

interface ScrollProgressBarProps {
  scrollProgress: number;
}

export default function ScrollProgressBar({ scrollProgress }: ScrollProgressBarProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}