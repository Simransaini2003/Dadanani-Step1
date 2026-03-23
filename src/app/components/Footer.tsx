import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo1 from '../../assets/partner1.png';
import logo2 from '../../assets/partner2.png';
import logo4 from '../../assets/partner4.png';
import logo5 from '../../assets/partner5.png';
import dadaNaniLogo from "../../assets/dadaNaniLogo.png";
import bgPattern from '../../assets/muddywall3.jpg';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-gray-800 py-12 border-t border-amber-200 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 248, 242, 0.45) 0%, rgba(245, 239, 232, 0.4) 100%), url(${bgPattern})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 🔝 Dada Nani Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={dadaNaniLogo}
            alt="Dada Nani Festival"
            className="h-16 sm:h-20"
          />
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-8">

            {/* Organised By */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-amber-900 mb-3">
                Organised by
              </h3>

              <img
                src={logo1}
                alt="Potli Productions"
                className="h-16 hover:scale-105 transition"
              />
            </div>

            {/* Supported By */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-amber-900 mb-3">
                Supported by
              </h3>

              <div className="flex gap-4 justify-center md:justify-start">
                {[logo2, logo4, logo5].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="
                      h-12 sm:h-14
                      opacity-80 hover:opacity-100 
                      hover:scale-110 
                      transition-all duration-300 
                      mix-blend-multiply
                    "
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-amber-900 mb-4">
              Contact Us
            </h3>

            <a
              href="mailto:info@dadananifestival.com"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-700 transition mb-3 group"
            >
              <Mail className="w-4 h-4 text-amber-700 group-hover:scale-110 transition" />
              info@dadananifestival.com
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-700 transition mb-3 group"
            >
              <Phone className="w-4 h-4 text-amber-700 group-hover:scale-110 transition" />
              +91 9876543210
            </a>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="w-4 h-4 text-amber-700" />
              New Delhi, India
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-amber-200 pt-6 text-center">
          <p className="text-xs md:text-sm text-gray-600">
            © 2025 Dada Nani Festival - Potli Productions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}