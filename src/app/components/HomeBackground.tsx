import bgImage from "../../assets/bgImg.jpg";

const HomeBackground = () => {
  return (<div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-10 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <img
            key={i}
            src={bgImage}
            alt="background pattern"
            className="w-full h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBackground;