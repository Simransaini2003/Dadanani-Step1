import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import HeroSection from './components/HeroSection';
import BackToTopButton from './components/BackToTopButton';
import TheProgrammeSection from './components/TheProgrammeSection';
import HowToParticipateSection from './components/HowToParticipateSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import ResourcesSection from './components/ResourcesSection';
import DocumentationThemesSection from './components/DocumentationThemesSection';
import Footer from './components/Footer';

import StudentRegistrationPage from './pages/StudentRegistrationPage';
import SchoolRegistrationPage from './pages/SchoolRegistrationPage';
import AboutUsPage from './pages/AboutUs';
import bgPattern from '../assets/muddywall3.jpg';

export default function App() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  // Animation variants for The Journey section
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY / (docHeight - windowHeight)) * 100;

      setScrollProgress(progress);
      setShowBackToTop(scrollY > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleRegister = () => navigate('/register');

  return (
    <div className="min-h-screen">
      <ScrollProgressBar scrollProgress={scrollProgress} />

      {/* ✅ Fixed Navbar */}
      <Navbar />

      <BackToTopButton
        showBackToTop={showBackToTop}
        scrollToTop={scrollToTop}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection onRegister={handleRegister} />
              
              {/* Apply padding only after hero section */}
              <div className="" style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 248, 242, 0.55) 0%, rgba(245, 239, 232, 0.5) 100%), url(${bgPattern})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
              }}>
                <TheProgrammeSection />
                <HowToParticipateSection />
                <DocumentationThemesSection />
                <WhatYouGetSection />
                <ResourcesSection />
                
                {/* The Journey - Editions in Columns */}
                <section className="py-16 sm:py-20 relative overflow-hidden" style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 248, 242, 0.65) 0%, rgba(245, 239, 232, 0.6) 100%), url(${bgPattern})`,
                  backgroundSize: 'cover',
                  backgroundAttachment: 'fixed'
                }}>
                  <div className="absolute top-0 left-1/2 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
                  
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-black"
                      >
                        The journey
                      </motion.h2>
                      <motion.p 
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 font-medium text-gray-700"
                      >
                        Building the world's largest youth-led heritage archive
                      </motion.p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                          { year: '2023', title: 'First edition', desc: 'The beginning of a movement', image: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzQ4OTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
                          { year: '2024', title: 'Second edition', desc: 'Expanding across India', image: 'https://images.unsplash.com/photo-1764791485255-39c3d07bf243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzY2hvb2wlMjBjaGlsZHJlbiUyMGdyb3VwfGVufDF8fHx8MTc3MzQ4OTIwNnww&ixlib=rb-4.1.0&q=80&w=1080' },
                          { year: '2025', title: 'Third edition', desc: '10,000+ students documenting heritage', image: 'https://images.unsplash.com/photo-1772304830588-c6ba4a042c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBjdWx0dXJhbCUyMGhlcml0YWdlJTIwZmVzdGl2YWwlMjBjb2xvcnN8ZW58MXx8fHwxNzczNDg5MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            variants={scaleIn}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200"
                          >
                            <div 
                              className="w-full h-48 sm:h-56 md:h-64 bg-cover bg-center relative overflow-hidden group"
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <motion.div 
                                  whileHover={{ scale: 1.2 }}
                                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                                >
                                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                                </motion.div>
                              </div>
                            </div>
                            <div className="p-4 sm:p-6">
                              <div className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 ${i % 2 === 0 ? 'bg-red-600' : 'bg-black'} text-white rounded-lg mb-3 sm:mb-4 font-bold text-base sm:text-lg`}>
                                {item.year}
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                              <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
            </>
          }
        />

        <Route path="/register" element={<StudentRegistrationPage />} />
        <Route path="/register/school" element={<SchoolRegistrationPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}