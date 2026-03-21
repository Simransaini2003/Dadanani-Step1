import React from "react";
import { useNavigate } from "react-router-dom";
import WhatIsDadaNaniFestival from "./WhatIsDadaNaniFestival";
import WhyStorytellingMatters from "./WhyStorytellingMatters";
import OurTeam from "./Ourteam";
import HomeBackground from "../components/HomeBackground";
import WaveDivider from "../components/WaveDivider";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ fontFamily: "sans-serif" }}>
        {/* Hero Section */}
        <section id="top" className="relative min-h-[75vh] pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-[rgba(139,69,19,0.85)] to-[rgba(205,92,92,0.85)] bg-cover bg-center text-white overflow-hidden">
          <HomeBackground />

          {/* Back Button */}
          <div className="absolute top-28 sm:top-32 lg:top-40 left-4 sm:left-8 lg:left-12 z-50 pointer-events-auto">
            <button
              onClick={() => navigate('/')}
              className="bg-white/25 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20 hover:bg-white/35 transition-all duration-300 text-white inline-block cursor-pointer"
            >
              ← Back
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl pt-16 sm:pt-20 lg:pt-24 relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
              Igniting Change Through Creative Expressions
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl font-light">
              The Dada Nani Festival is a unique initiative by Potli Productions
              that invites students across India to connect with their
              grandparents and elders, documenting their stories, traditions,
              and cultural heritage through creative storytelling and multimedia
              projects.
            </p>
          </div>
        </section>

        <WaveDivider backgroundColor="#fff7ed" flip={true} />
      </div>

      <WhatIsDadaNaniFestival />
      <WaveDivider backgroundColor="#fef3c7" />
      <WhyStorytellingMatters />
      <WaveDivider backgroundColor="#f9fafb" />
      <OurTeam />
    </>
  );
};

export default AboutUs;