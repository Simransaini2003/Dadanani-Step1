export default function MissionSection() {
  return (
    <section className="bg-[#faf5ef] px-4 sm:px-6 lg:px-30 py-12 sm:py-16">
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-28">
        
        {/* ================= OUR MISSION ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 p-4 sm:p-6 lg:p-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#fff1dc] text-[#b45309] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              ⦿ Our Mission
            </span>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#1f1f1f] leading-tight mb-4 sm:mb-6">
              Creating Safe and Inclusive Spaces ....<br />
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed mb-4 sm:mb-5">
              At Potli Productions, our mission is to create safe, inclusive,
              and joyful spaces where children, youth, and women can learn,
              grow, and express themselves freely. Through creative experiences,
              we help individuals connect with their cultural roots while
              building confidence, values, and skills to contribute positively
              and meaningfully to their communities.
            </p>

            <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
              We inspire change-makers to rise with confidence, celebrate their
              identity, and lead their communities with purpose.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="src/assets/mission.jpg"
              alt="Cultural storytelling"
              className="w-full lg:w-130 h-64 sm:h-80 lg:h-105 object-cover rounded-2xl lg:rounded-3xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-4 sm:left-10 bg-white shadow-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
              <div className="bg-[#f4b400] text-white p-2 sm:p-3 rounded-full text-base sm:text-lg">
                ♥
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-[#1f1f1f]">5000+</p>
                <p className="text-xs sm:text-sm text-gray-500">Hearts Touched</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OUR VISION ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 p-4 sm:p-6 lg:p-10">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="src/assets/vision.jpg"
              alt="Our vision"
              className="w-full lg:w-130 h-64 sm:h-80 lg:h-105 object-cover rounded-2xl lg:rounded-3xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-10 bg-white shadow-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
              <div className="bg-[#c41e3a] text-white p-2 sm:p-3 rounded-full text-base sm:text-lg">
                ✦
              </div>
              <div>
                <p className="text-lg sm:text-xl font-semibold text-[#1f1f1f]">Future</p>
                <p className="text-xs sm:text-sm text-gray-500">Driven by Purpose</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl text-right">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#ffe4e8] text-[#c41e3a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              ⦿ Our Vision
            </span>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#1f1f1f] leading-tight mb-4 sm:mb-6">
              Building a Future Rooted in Culture & Confidence ....
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed mb-4 sm:mb-5">
              Our vision is to create a world where every child and young person
              feels empowered to embrace their identity, celebrate their roots,
              and express themselves without fear. We aim to build communities
              where creativity and culture become tools for confidence,
              leadership, and unity.
            </p>

            <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
              We envision a society where stories, traditions, and values are
              preserved through meaningful experiences that inspire future
              generations to lead with kindness and purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
