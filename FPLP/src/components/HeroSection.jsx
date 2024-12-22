import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full  h-full object-cover sm:h-64 md:h-80 lg:h-full"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/10/16/135161-761273563_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl sm:text-3xl md:text-6xl font-bold mb-4">
          Transform Your Body Today
        </h1>
        <p className="text-lg sm:text-base md:text-xl mb-6">
          Join our fitness programs and achieve your goals
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
