import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section className="bg-[#fbf1e4] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 sm:mb-6 text-[#2b1b12]">
          Our Vision for the Future
        </h2>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-[#6b4a32]">
          We envision a world where every grandparent's story is valued,
          preserved, and celebrated. Through Potli Productions, we're building
          a digital archive of living history, one story at a time.
        </p>

        {/* Card */}
        <div className="bg-[#fff3e4] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Left Column */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 text-[#2b1b12]">
              What We Believe
            </h3>

            <ul className="space-y-4 sm:space-y-5">
              {[
                "Every elder has wisdom worth sharing",
                "Stories create empathy and understanding",
                "Cultural heritage must be preserved",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-[#5c3a25]">
                  <span className="flex items-center justify-center flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5b301] text-white text-sm sm:text-base font-bold">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 text-[#2b1b12]">
              Our Commitment
            </h3>

            <ul className="space-y-4 sm:space-y-5">
              {[
                "Provide a safe, nurturing platform",
                "Support students in their creative journey",
                "Celebrate and honor our elders",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-[#5c3a25]">
                  <span className="flex items-center justify-center flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5b301] text-white text-sm sm:text-base font-bold">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
