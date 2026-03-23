import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const partners = [partner1, partner2, partner3, partner4, partner5];

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Contact Us", to: "#contact" },
  ];

  const handleNavigation = (item) => {
    setIsOpen(false);

    // ✅ HOME CLICK FIX
    if (item.to === "/") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (item.to === "#contact") {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(item.to);
    }
  };

  // detect scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRegistrationPage =
    location.pathname === "/register" ||
    location.pathname === "/register/school";

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`
          w-full fixed top-0 left-0 z-50 transition-all duration-300
          ${
            isRegistrationPage
              ? "bg-white shadow-sm"
              : isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">

          {/* LOGOS */}
          <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto">
            {partners.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-6 sm:h-8 md:h-9 object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <button
                  key={item.to}
                  onClick={() => handleNavigation(item)}
                  className={`font-semibold transition ${
                    isActive
                      ? "text-red-600"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="absolute right-4 top-16 w-44 bg-white rounded-xl shadow-lg border border-gray-200"
            >
              <div className="flex flex-col py-3">
                {navItems.map((item) => (
                  <button
                    key={item.to}
                    onClick={() => handleNavigation(item)}
                    className="px-4 py-2 text-left text-gray-800 hover:text-red-600 hover:bg-gray-50 transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SPACING FIX */}
      <div className="h-[80px]"></div>
    </>
  );
}