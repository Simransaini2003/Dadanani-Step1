import React from "react";

type TeamMember = {
  name: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Deepali Raina",
    image: "src/assets/Deepali-Raina.jpg",
  },
  {
    name: "Apresh Mishra",
    image: "src/assets/Apresh.jpeg",
  },
  {
    name: "Sweksha Bhagat",
    image: "src/assets/Sweksha-Bhagat.jpg",
  },
  {
    name: "Amit Kaur",
    image: "src/assets/Amit-Kaur.jpg",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f4f2] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      
      {/* Heading */}
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-black mb-2 sm:mb-3">
          Our <span className="text-[#b50000] font-bold">Team</span>
        </h2>

        {/* underline style */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl font-bold tracking-widest text-black">
            ....
          </span>
          <div className="h-[2px] sm:h-[3px] w-20 sm:w-28 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group w-full sm:w-64 max-w-xs bg-white/50 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-md px-5 sm:px-6 py-8 sm:py-10 lg:py-12 text-center 
            transition-all duration-500 ease-in-out transform 
            hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105 hover:shadow-xl hover:shadow-black/20"
          >
            {/* Image */}
            <div className="w-24 h-24 sm:w-[110px] sm:h-[110px] rounded-lg sm:rounded-2xl overflow-hidden mx-auto mb-5 sm:mb-8 border border-black/10">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black transition-all duration-500 group-hover:text-[#b50000]">
              {member.name}
            </h3>

            {/* Small underline animation */}
            <div className="w-0 h-[2px] bg-[#b50000] mx-auto mt-2 sm:mt-3 transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
