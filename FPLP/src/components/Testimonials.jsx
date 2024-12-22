import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This fitness program changed my life!",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing results in just 3 months!",
    image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                {testimonial.feedback}
              </p>
              <h4 className="text-base sm:text-lg font-semibold">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
