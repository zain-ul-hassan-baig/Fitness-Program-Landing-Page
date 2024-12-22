import React from "react";

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 bg-blue-600 text-white text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Your Journey?
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
        Take the first step towards a healthier, fitter you!
      </p>
      <button className="bg-white text-blue-600 py-3 px-6 rounded-lg text-base sm:text-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
        Schedule a Demo
      </button>
    </section>
  );
};

export default CallToAction;
