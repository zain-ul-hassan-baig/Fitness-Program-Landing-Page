import React from "react";

const plans = [
  { name: "Basic", price: "$29/month", features: ["Gym Access", "1 Personal Trainer Session"] },
  { name: "Standard", price: "$49/month", features: ["Gym Access", "Group Classes", "3 Personal Trainer Sessions"] },
  { name: "Premium", price: "$99/month", features: ["All Features", "Unlimited Classes", "Diet Plan"] },
];

const SubscriptionPlans = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          Subscription Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                {plan.name}
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">
                {plan.price}
              </p>
              <ul className="mb-4 sm:mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-600 text-sm sm:text-base mb-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white text-sm sm:text-base py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
