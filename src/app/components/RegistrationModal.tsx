import React from 'react';
import { motion } from 'motion/react';

interface RegistrationModalProps {
  showRegistration: boolean;
  setShowRegistration: (show: boolean) => void;
  registrationType: 'school' | 'student';
  setRegistrationType: (type: 'school' | 'student') => void;
}

export default function RegistrationModal({
  showRegistration,
  setShowRegistration,
  registrationType,
  setRegistrationType
}: RegistrationModalProps) {
  return (
    <>
      {showRegistration && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl my-8 relative overflow-hidden border-4 border-red-600"
          >
            <div className="border-b-2 border-gray-200 p-6 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-3xl font-bold text-black">{registrationType === 'student' ? 'Student' : 'School'} Registration</h2>
                <p className="text-sm text-gray-600 mt-1">Join the cultural heritage movement</p>
              </div>
              <button
                onClick={() => setShowRegistration(false)}
                className="text-3xl font-bold text-gray-400 hover:text-red-600 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              {registrationType === 'student' ? (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  <div className="space-y-4">
                    <input type="text" placeholder="Student's Full Name *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="text" placeholder="Father's Name *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="text" placeholder="School Name *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="email" placeholder="Email Address *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="tel" placeholder="Phone Number *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none">
                      <option>Select Class *</option>
                      <option>6th Grade</option>
                      <option>7th Grade</option>
                      <option>8th Grade</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                    </select>
                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">Submit Registration</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                  <div className="space-y-4">
                    <input type="text" placeholder="School Name *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="text" placeholder="Principal Name *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="email" placeholder="School Email *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="tel" placeholder="School Phone *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <input type="text" placeholder="School Address *" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none" />
                    <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none">
                      <option>Select City *</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                    </select>
                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">Submit Registration</button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}