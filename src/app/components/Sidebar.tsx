import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}

export default function Sidebar({ isOpen, onClose, onRegister }: SidebarProps) {
  const handleRegister = () => {
    onRegister();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-30 sm:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl z-35 sm:hidden overflow-y-auto pt-20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRegister}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-lg transition-all"
              >
                Register now
              </motion.button>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  Join the Dada Nani Festival and celebrate cultural heritage!
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
