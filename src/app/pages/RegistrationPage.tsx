import React from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [registrationType, setRegistrationType] = React.useState<"student" | "school">("student");

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFF8F2] to-[#FFF0E6]">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-800"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back
          </button>
          <Link
            to="/"
            className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-red-600 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-red-600">
            <div className="text-center md:text-left">
              <h1 className="text-xl sm:text-3xl font-bold text-white">Register for Dada Nani Festival</h1>
              <p className="text-xs sm:text-sm text-white/80 mt-1 px-2">
                Choose a registration type and complete the form to secure your spot.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                type="button"
                onClick={() => setRegistrationType("student")}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition ${
                  registrationType === "student"
                    ? "bg-white text-red-600"
                    : "bg-white/20 text-white hover:bg-white/35"
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRegistrationType("school")}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition ${
                  registrationType === "school"
                    ? "bg-white text-red-600"
                    : "bg-white/20 text-white hover:bg-white/35"
                }`}
              >
                School
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {registrationType === "student" ? (
                <div className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    placeholder="Student's Full Name *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Father's Name *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="School Name *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <select className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none">
                    <option>Select Class *</option>
                    <option>6th Grade</option>
                    <option>7th Grade</option>
                    <option>8th Grade</option>
                    <option>9th Grade</option>
                    <option>10th Grade</option>
                  </select>
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-sm sm:text-base text-white font-bold rounded-lg transition">
                    Submit Registration
                  </button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    placeholder="School Name *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Principal Name *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="School Email *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="School Phone *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="School Address *"
                    className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                  />
                  <select className="w-full p-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none">
                    <option>Select City *</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-sm sm:text-base text-white font-bold rounded-lg transition">
                    Submit Registration
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
