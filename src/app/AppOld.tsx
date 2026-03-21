import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, Heart, Sparkles, Video, Download, ChevronDown, Trophy, Medal, Star, FileText, PlayCircle, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import logo1 from '../assets/fifth.png';
import logo2 from '../assets/second.png';
import logo3 from '../assets/third.png';
import logo4 from '../assets/fourth.png';
import dadaNaniLogo from "../assets/dadaNaniLogo.png";
// import heroImage from 'figma:asset/9759c2d02e339b03aa9b77ecea6a0e997d73f82d.png';
import potliLogo from '../assets/first.png';
import Navbar from './components/Navbar';

export default function App() {
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [registrationType, setRegistrationType] = React.useState<'school' | 'student' | 'teacher'>('school');
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [contentUnlocked, setContentUnlocked] = React.useState(true);

  React.useEffect(() => {
    setIsVisible(true);
    
    // Lock scroll initially
    if (!contentUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky nav after scrolling past hero
      setScrolled(scrollPosition > windowHeight * 0.5);
      
      // Show back to top button after scrolling down
      setShowBackToTop(scrollPosition > windowHeight);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentUnlocked]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContent = () => {
    setContentUnlocked(true);
    setTimeout(() => {
      const contentSection = document.getElementById('main-content');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Navbar Component */}
      {/* <Navbar onRegister={() => setShowRegistration(true)} /> */}

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-6 h-6 rotate-180 group-hover:animate-bounce" />
      </motion.button>

      {/* Registration Modal */}
      {showRegistration && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl my-8 relative overflow-hidden border-4 border-red-600"
          >
            
            <div className="border-b-2 border-gray-200 p-6 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-3xl font-bold text-black">Registration</h2>
                <p className="text-sm text-gray-600 mt-1">Join the cultural heritage movement</p>
              </div>
              <button 
                onClick={() => setShowRegistration(false)}
                className="text-3xl font-bold text-gray-400 hover:text-red-600 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-50"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              {/* Tab Selection */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${registrationType === 'school' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 border-2 border-gray-300'} p-4 text-center font-bold cursor-pointer rounded-lg transition-all`}
                  onClick={() => setRegistrationType('school')}
                >
                  🏫 School
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${registrationType === 'student' ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-700 border-2 border-gray-300'} p-4 text-center font-bold cursor-pointer rounded-lg transition-all`}
                  onClick={() => setRegistrationType('student')}
                >
                  👨‍🎓 Student
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${registrationType === 'teacher' ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 border-2 border-gray-300'} p-4 text-center font-bold cursor-pointer rounded-lg transition-all`}
                  onClick={() => setRegistrationType('teacher')}
                >
                  👩‍🏫 Teacher
                </motion.div>
              </div>

              {/* Student Registration Form */}
              {registrationType === 'student' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5 max-h-[60vh] overflow-y-auto pr-2"
                >
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                    <h4 className="text-xl font-bold mb-2 text-black">Student Registration Form</h4>
                    <p className="text-sm text-gray-700">Please fill in all required fields marked with *</p>
                  </div>
                  
                  <div className="space-y-5">
                    {/* Full Name */}
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">Student's Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter complete name as per school records"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Father's Name */}
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">Father's Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter father's full name"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Class and School */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                        <label className="font-bold text-sm block mb-2 text-gray-700">Class/Grade *</label>
                        <select className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors">
                          <option>Select Grade</option>
                          <option>Grade 6</option>
                          <option>Grade 7</option>
                          <option>Grade 8</option>
                          <option>Grade 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                        </select>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                        <label className="font-bold text-sm block mb-2 text-gray-700">School Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your school's full name"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* City/District */}
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">City/District *</label>
                      <input 
                        type="text" 
                        placeholder="City or district where your school is located"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Parent Email - Special Section */}
                    <div className="bg-gray-50 p-6 rounded-lg border-2 border-red-600 shadow-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="w-5 h-5 text-red-600" />
                        <label className="font-bold text-sm text-black">Parent/Guardian Email Address *</label>
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">VERIFICATION REQUIRED</span>
                      </div>
                      <input 
                        type="email" 
                        placeholder="parent@email.com"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors mb-3"
                      />
                      <div className="bg-white p-4 rounded-lg border border-gray-300">
                        <p className="text-xs font-bold text-black mb-2">📧 Email Verification Process:</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>✓ Verification email will be sent to this address</li>
                          <li>✓ Parent must click the verification link</li>
                          <li>✓ Registration confirmed after verification</li>
                          <li>✓ Check spam folder if not received</li>
                        </ul>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">Contact Phone Number *</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value="+91"
                          disabled
                          className="w-20 p-3 border-2 border-gray-300 rounded-lg bg-gray-100"
                        />
                        <input 
                          type="tel" 
                          placeholder="10-digit mobile number"
                          className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                      <p className="font-bold text-sm mb-3 text-black flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Parental Consent & Agreement
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border border-gray-300">
                          <input type="checkbox" className="mt-1 w-5 h-5 accent-red-600" />
                          <span className="text-sm">My parent/guardian is aware and has given consent for my participation</span>
                        </label>
                        <label className="flex items-start gap-3 p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border border-gray-300">
                          <input type="checkbox" className="mt-1 w-5 h-5 accent-red-600" />
                          <span className="text-sm">I have permission to interview elders and document their stories</span>
                        </label>
                        <label className="flex items-start gap-3 p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border border-gray-300">
                          <input type="checkbox" className="mt-1 w-5 h-5 accent-red-600" />
                          <span className="text-sm">I will obtain signed consent forms from elders before submitting</span>
                        </label>
                      </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
                      <p className="text-xs text-gray-700 leading-relaxed">
                        <strong>Privacy Notice:</strong> Your information will be used solely for the Dada Nani Festival program. Parent email verification is required for student safety.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t-2 border-gray-200 sticky bottom-0 bg-white">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold flex-1 text-lg shadow-lg"
                    >
                      Submit registration →
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowRegistration(false)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-10 py-4 rounded-lg font-bold text-lg"
                    >
                      Cancel
                    </motion.button>
                  </div>

                  {/* Success Info */}
                  <div className="mt-4 p-4 bg-white border-2 border-gray-300 rounded-lg">
                    <p className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      What happens after submission:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>✓ Verification email sent to parent's email</li>
                      <li>✓ Parent clicks verification link (48 hours validity)</li>
                      <li>✓ Confirmation email with login credentials</li>
                      <li>✓ Access student dashboard and materials</li>
                      <li>✓ Start documenting cultural heritage!</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* School Registration Form - Simplified version */}
              {registrationType === 'school' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
                >
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                    <h4 className="text-xl font-bold mb-2 text-black">School Registration Form</h4>
                  </div>
                  
                  {[
                    'School Name',
                    'State',
                    'City',
                    'Principal Name',
                    'Contact Email',
                    'Coordinator Name'
                  ].map((field, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">{field} *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  ))}

                  <div className="flex gap-4 pt-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold flex-1">
                      Submit
                    </button>
                    <button onClick={() => setShowRegistration(false)} className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-lg font-bold">
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Teacher Registration Form - Simplified */}
              {registrationType === 'teacher' && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
                >
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                    <h4 className="text-xl font-bold mb-2 text-black">Teacher Registration Form</h4>
                  </div>
                  
                  {[
                    'Full Name',
                    'School Name',
                    'City',
                    'Contact Number',
                    'Email Address'
                  ].map((field, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <label className="font-bold text-sm block mb-2 text-gray-700">{field} *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  ))}

                  <div className="flex gap-4 pt-4">
                    <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-bold flex-1">
                      Submit
                    </button>
                    <button onClick={() => setShowRegistration(false)} className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-lg font-bold">
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* HERO SECTION - Full Screen */}
      <section 
        className="relative h-screen w-full bg-white flex flex-col overflow-hidden"
      >
        {/* Background Image with controlled opacity for text visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1659546529315-b92a5ecc3a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmb3J0JTIwd2FsbCUyMHRleHR1cmUlMjBoZXJpdGFnZSUyMHJlZHxlbnwxfHx8fDE3NzM3Mjc1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080)` }}
        ></div>
        
        {/* Light elegant overlay */}
        <div className="absolute inset-0 bg-white/75"></div>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-600 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                scale: Math.random() 
              }}
              animate={{ 
                y: [null, Math.random() * window.innerHeight],
                scale: [null, Math.random()],
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Header */}
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.img 
                src={potliLogo} 
                alt="Potli Productions"
                className="h-16 object-contain bg-white backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform border-2 border-gray-200"
                whileHover={{ y: -5 }}
              />
              {[logo1, logo2, logo3, logo4].map((logo, i) => (
                <motion.img 
                  key={i}
                  src={logo} 
                  alt={`Partner ${i + 1}`}
                  className="h-14 object-contain bg-white backdrop-blur-sm p-2 rounded-lg shadow-lg hover:scale-105 transition-transform border-2 border-gray-200"
                  whileHover={{ y: -5 }}
                />
              ))}
            </div>

            
          </div>
        </motion.header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img src={dadaNaniLogo} alt="Dada Nani Festival" className="h-24 drop-shadow-xl" />
            </motion.div>
            
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl font-bold text-black mb-6 max-w-4xl"
            >
              Dada Nani Festival
            </motion.h1>
            
            <motion.p 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-800 mb-12 tracking-wide font-medium max-w-3xl"
            >
              India's first student-led cultural heritage documentation movement
            </motion.p>


          </div>
        </div>

       {/* Scroll Indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="relative z-10 pb-8 text-center"
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ChevronDown className="w-8 h-8 text-gray-800 mx-auto" />
  </motion.div>

  <div className="flex items-center justify-center gap-3 mt-4">
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => { 
        setShowRegistration(true); 
        setRegistrationType('school'); 
      }}
      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
    >
      Register as school
    </motion.button>

    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => { 
        setShowRegistration(true); 
        setRegistrationType('student'); 
      }}
      className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
    >
      Register as student
    </motion.button>
  </div>
</motion.div>
        
      </section>

      {/* MAIN CONTENT */}
      <motion.div 
        id="main-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: contentUnlocked ? 1 : 0,
          y: contentUnlocked ? 0 : 100,
          pointerEvents: contentUnlocked ? 'auto' : 'none'
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* About Dada Nani Festival */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-8 text-center text-black"
              >
                About Dada Nani Festival
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto leading-relaxed"
              >
                Potli Production works at the intersection of creative education, culture, and youth participation, 
                empowering the next generation to become custodians of India's rich cultural heritage.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
                {[
                  { number: '10,000+', label: 'Students engaged', icon: Users, color: 'bg-red-600' },
                  { number: '12', label: 'Cities covered', icon: MapPin, color: 'bg-black' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative p-8 rounded-2xl transition-all bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-red-600"
                  >
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-all duration-300`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-black mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Dada Nani Programme */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-8 text-center text-black"
              >
                The Dada Nani programme
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto"
              >
                An initiative focused on intergenerational learning and cultural documentation
              </motion.p>
              
              <motion.div 
                variants={scaleIn}
                className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto border-2 border-gray-200"
              >
                <div 
                  className="w-full h-80 bg-cover bg-center rounded-2xl mb-6 shadow-lg"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1738431432456-8bfb1839d6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBncmFuZG1vdGhlciUyMHRlbGxpbmclMjBzdG9yaWVzJTIwY2hpbGRyZW58ZW58MXx8fHwxNzczNDg5MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
                ></div>
                <h3 className="text-2xl font-bold mb-4 text-black">The programme enables students to:</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  {[
                    'Engage with elders and communities',
                    'Document everyday cultural practices and memories',
                    'Participate in school-based workshops',
                    'Contribute to student-led books and digital archive'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      variants={fadeInUp}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-8 h-8 ${i % 2 === 0 ? 'bg-red-600' : 'bg-black'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                Why it matters
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Safeguarding heritage', desc: 'Everyday cultural practices are disappearing', icon: Heart, color: 'bg-red-600' },
                  { title: 'Generational gaps', desc: 'Families now share fewer traditions', icon: Users, color: 'bg-black' },
                  { title: 'Cultural learning', desc: 'Students deep-dive into their culture', icon: BookOpen, color: 'bg-red-600' },
                  { title: 'Skill building', desc: 'Research, interviewing, documentation', icon: Award, color: 'bg-black' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200"
                  >
                    <div className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                How to participate
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Register online', desc: 'Sign up through our dedicated portal', color: 'bg-red-600' },
                  { step: 2, title: 'Attend our free online workshop', desc: 'Learn documentation techniques', color: 'bg-black' },
                  { step: 3, title: 'Talk to your grandparents or elder', desc: 'Interview family and community members', color: 'bg-red-600' },
                  { step: 4, title: 'Document it', desc: 'Writing, video, photos, or audio', color: 'bg-black' },
                  { step: 5, title: 'Upload your entry', desc: 'Submit through the portal', color: 'bg-red-600' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-6 border border-gray-200"
                  >
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                What you get
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Discover your family traditions', desc: 'Connect deeply with your cultural roots', icon: Heart, color: 'bg-red-600' },
                  { title: 'Win exciting prizes', desc: 'Get recognized for your contributions', icon: Trophy, color: 'bg-black' },
                  { title: 'Become a culture ambassador', desc: 'Champion of cultural preservation', icon: Award, color: 'bg-red-600' },
                  { title: 'Expert mentorship', desc: 'Learn from cultural professionals', icon: Users, color: 'bg-black' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200"
                  >
                    <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Journey - Editions in Columns */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-8 text-center text-black"
              >
                The journey
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-2xl text-center mb-12 font-medium text-gray-700"
              >
                Building the world's largest youth-led heritage archive
              </motion.p>
              
              <div className="grid grid-cols-3 gap-8">
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
                      className="w-full h-64 bg-cover bg-center relative overflow-hidden group"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                        >
                          <PlayCircle className="w-10 h-10 text-red-600" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className={`inline-block px-4 py-2 ${i % 2 === 0 ? 'bg-red-600' : 'bg-black'} text-white rounded-lg mb-4 font-bold text-lg`}>
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Themes */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                Documentation themes
              </motion.h2>
              
              <div className="grid grid-cols-4 gap-6">
                {[
                  { title: 'Oral traditions', items: ['Proverbs', 'Lullabies', 'Oral histories', 'Folk stories'], color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1764426381179-7aa7bfdb0e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBlbGRlcmx5JTIwd29tYW4lMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzM0ODkyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
                  { title: 'Community practices', items: ['Festivals', 'Customs & rituals', 'Traditional games'], color: 'bg-black', image: 'https://images.unsplash.com/photo-1769505313275-c8c9eb934811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYW1pbHklMjBjZWxlYnJhdGlvbiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MzQ4OTIwNnww&ixlib=rb-4.1.0&q=80&w=1080' },
                  { title: 'Knowledge systems', items: ['Food traditions', 'Traditional dresses', 'Ornaments'], color: 'bg-red-600', image: 'https://images.unsplash.com/photo-1763952180273-2a28208d3ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBjb29raW5nfGVufDF8fHx8MTc3MzQ4OTIwNnww&ixlib=rb-4.1.0&q=80&w=1080' },
                  { title: 'Art, craft & skills', items: ['Music', 'Dance', 'Crafts', 'Painting'], color: 'bg-black', image: 'https://images.unsplash.com/photo-1756201409582-e0abcd78a12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmFkaXRpb25hbCUyMGNyYWZ0JTIwaGFuZHN8ZW58MXx8fHwxNzczNDg5MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080' }
                ].map((theme, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200"
                  >
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${theme.image})` }}
                    >
                      <div className={`absolute inset-0 ${theme.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white text-center px-4">{theme.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2">
                        {theme.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sample Submissions */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                Student submissions
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { theme: 'Oral traditions', title: 'Traditional lullabies from Maharashtra', badge: 'bg-red-600', image: 'https://images.unsplash.com/photo-1738431432456-8bfb1839d6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBncmFuZG1vdGhlciUyMHRlbGxpbmclMjBzdG9yaWVzJTIwY2hpbGRyZW58ZW58MXx8fHwxNzczNDg5MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
                  { theme: 'Community practices', title: 'Pongal festival celebrations', badge: 'bg-black', image: 'https://images.unsplash.com/photo-1769505313275-c8c9eb934811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYW1pbHklMjBjZWxlYnJhdGlvbiUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MzQ4OTIwNnww&ixlib=rb-4.1.0&q=80&w=1080' },
                  { theme: 'Art & craft', title: 'Traditional craft documentation', badge: 'bg-red-600', image: 'https://images.unsplash.com/photo-1756625105713-a23921601ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmb2xrJTIwZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzM0ODkyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200"
                  >
                    <span className={`${item.badge} text-white px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4`}>
                      {item.theme}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                    <div 
                      className="w-full h-80 bg-cover bg-center rounded-2xl shadow-lg relative overflow-hidden group"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.2 }}
                          className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                        >
                          <Video className="w-12 h-12 text-red-600" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Orientation Materials */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl font-bold mb-12 text-center text-black"
              >
                Orientation materials
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-8">
                {/* For Teachers */}
                <motion.div 
                  variants={scaleIn}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-black">For teachers</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Teacher guide', desc: 'Complete handbook', icon: FileText, color: 'bg-red-600' },
                      { title: 'ICH documentation guide', desc: 'Best practices', icon: BookOpen, color: 'bg-black' },
                      { title: 'Sample questions', desc: 'Interview templates', icon: FileText, color: 'bg-red-600' },
                      { title: 'Video orientation', desc: '45-minute training', icon: PlayCircle, color: 'bg-black' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all border border-gray-200 cursor-pointer"
                      >
                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-md`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-800">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                        <Download className="w-5 h-5 text-red-600" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* For Students */}
                <motion.div 
                  variants={scaleIn}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-black">For students</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Student guide', desc: 'Simplified steps', icon: FileText, color: 'bg-black' },
                      { title: 'How to interview', desc: 'Video tutorial', icon: PlayCircle, color: 'bg-red-600' },
                      { title: 'Consent form', desc: 'Required document', icon: FileText, color: 'bg-black' },
                      { title: 'Documentation tips', desc: 'Quick reference', icon: BookOpen, color: 'bg-red-600' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:shadow-md transition-all border border-gray-200 cursor-pointer"
                      >
                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-md`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-800">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                        <Download className="w-5 h-5 text-black" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="mt-8 p-6 bg-white border-2 border-red-600 rounded-lg"
              >
                <p className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  Important: Consent required
                </p>
                <p className="text-sm text-gray-700">
                  All student submissions must include a signed consent form from parents/guardians and the elders being interviewed.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-6xl font-bold mb-6 text-center text-white drop-shadow-2xl"
              >
                Get in touch
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-center text-white/90 mb-16 max-w-2xl mx-auto"
              >
                Have questions about the Dada Nani Festival? We'd love to hear from you!
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Contact Form */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative backdrop-blur-2xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.2)] transition-all"
                >
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 text-white">Send us a message</h3>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Name</label>
                        <input 
                          type="text"
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Email</label>
                        <input 
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-white/90 mb-2">Message</label>
                        <textarea 
                          rows={4}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-600 transition-all resize-none"
                        ></textarea>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition-all"
                      >
                        Send message
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Contact Info */}
                <motion.div 
                  variants={fadeInUp}
                  className="space-y-6"
                >
                  {/* Image Card */}
                  <div 
                    className="w-full h-72 bg-cover bg-center rounded-3xl shadow-2xl relative overflow-hidden group"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1716703373020-17ff360924ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmFkaXRpb25hbCUyMHdvcmtzcGFjZSUyMG9mZmljZSUyMGN1bHR1cmFsfGVufDF8fHx8MTc3MzY0MDQzOXww&ixlib=rb-4.1.0&q=80&w=1080)` }}
                  >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">Potli Productions</h3>
                      <p className="text-white/90 mt-2">Preserving Cultural Heritage Since 2018</p>
                    </div>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 10 }}
                      className="flex items-center gap-5 p-5 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all cursor-pointer shadow-lg"
                    >
                      <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/70 font-semibold">Email us</div>
                        <div className="font-bold text-white text-lg">potliproductions@gmail.com</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 10 }}
                      className="flex items-center gap-5 p-5 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all cursor-pointer shadow-lg"
                    >
                      <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/70 font-semibold">Call us</div>
                        <div className="font-bold text-white text-lg">+91 7827072813</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.03, x: 10 }}
                      className="flex items-center gap-5 p-5 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all cursor-pointer shadow-lg"
                    >
                      <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/70 font-semibold">Contact person</div>
                        <div className="font-bold text-white text-lg">Apresh Mishra</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="mt-12"
              >
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowRegistration(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-lg text-2xl font-bold shadow-2xl transition-all"
                >
                  <Sparkles className="w-8 h-8 inline-block mr-3" />
                  Join the movement today
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t-4 border-red-600">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img src={dadaNaniLogo} alt="Dada Nani Festival" className="h-16 mx-auto opacity-90" />
              </div>
              <p className="text-lg mb-4">Preserving India's Cultural Heritage, One Story at a Time</p>
              <p className="text-sm text-purple-200">© 2025 Dada Nani Festival - Potli Productions. All rights reserved.</p>
              <div className="mt-6 flex justify-center gap-6">
                <div className="flex items-center gap-4">
                  {[logo1, logo2, logo3, logo4].map((logo, i) => (
                    <img key={i} src={logo} alt={`Partner ${i + 1}`} className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
