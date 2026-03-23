import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo1 from '../../assets/partner1.png';
import logo2 from '../../assets/partner2.png';
import logo3 from '../../assets/partner3.png';
import logo4 from '../../assets/partner4.png';
import logo5 from '../../assets/partner5.png';
import dadaNaniLogo from "../../assets/dadaNaniLogo.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#FFF8F2] to-[#FFF0E6] text-gray-800 py-12 border-t border-amber-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          {/* Supported By */}
          <div className="flex flex-col items-center md:items-start">

            <img
              src={dadaNaniLogo}
              alt="Potli Productions"
              className="h-16 mb-3 hover:scale-105 transition"
            />

            <p className="text-sm text-gray-700 text-center md:text-left max-w-sm">
              Preserving India's Cultural Heritage, One Story at a Time
            </p>
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

        {/* Divider */}
        <div className="border-t border-amber-200 my-8"></div>

        {/* Organised By */}
        <div className="mb-10">
          <h3 className="text-center text-sm font-semibold text-amber-900 mb-6">
            Organised by
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="
                  h-12 sm:h-14 md:h-16
                  opacity-80 hover:opacity-100 
                  hover:scale-110 
                  transition-all duration-300 
                  mix-blend-multiply
                "
              />
            ))}
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