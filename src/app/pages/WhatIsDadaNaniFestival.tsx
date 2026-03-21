const WhatIsDadaNaniFestival: React.FC = () => {
  return (
    <section className="bg-[#faf5ef] px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-28">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1f1f1f] mb-3 sm:mb-4 px-2">
          What is Dada Nani Festival?
        </h2>
        <p className="text-[#7a5c3e] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
          A unique cultural initiative that celebrates grandparents through
          student-created video stories
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-lg">
          {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
          <div className="flex flex-row md:flex-col items-start md:items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-[#f4b400] w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl">
              📖
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Storytelling Platform
              </h3>
              <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
                A dedicated space where students can record, upload, and share
                heartwarming stories about their grandparents' lives, experiences,
                and wisdom.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-lg">
          {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
          <div className="flex flex-row md:flex-col items-start md:items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-[#ff9f2d] w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl">
              🏫
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Educational Program
              </h3>
              <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
                An integrated curriculum that teaches students the art of
                storytelling, video creation, and the importance of
                intergenerational connections.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-lg">
          {/* Icon and Text Layout - Mobile: Left-Right, Desktop: Stacked */}
          <div className="flex flex-row md:flex-col items-start md:items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-[#ff8a33] w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl">
              🏅
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Cultural Celebration
              </h3>
              <p className="text-sm sm:text-base text-[#5c5c5c] leading-relaxed">
                An annual festival that showcases the best stories, recognizes
                outstanding contributions, and celebrates our rich cultural
                heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDadaNaniFestival;
