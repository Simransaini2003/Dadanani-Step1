import Grandfather from "../../assets/Grandfather.jpg";

const WhyStorytellingMatters: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 xl:px-20 py-16 sm:py-20 lg:py-28 text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8b2f2f] via-[#a44a2a] to-[#c76b1f]" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${Grandfather})` }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-repeat" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">
          Why Storytelling Matters
        </h2>

        <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20 opacity-90 text-center">
          Stories are the threads that connect us to our past, ground us in the
          present, and guide us into the future.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
              Cultural Preservation
            </h3>
            <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
              Stories keep traditions, values, and customs alive for future
              generations
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
              Family Bonds
            </h3>
            <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
              Sharing stories strengthens emotional connections between
              generations
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/25 transition-all duration-300">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
              Life Lessons
            </h3>
            <p className="text-xs sm:text-sm lg:text-base opacity-90 leading-relaxed">
              Wisdom and experiences passed down through authentic narratives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStorytellingMatters;
