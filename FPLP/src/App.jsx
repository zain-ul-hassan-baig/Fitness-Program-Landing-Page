// import React from "react";
// import HeroSection from "./components/HeroSection";
// import SubscriptionPlans from "./components/SubscriptionPlans";
// import Testimonials from "./components/Testimonials";
// import CallToAction from "./components/CallToAction";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="font-sans">
//       <HeroSection />
//       <SubscriptionPlans />
//       <Testimonials />
//       <CallToAction />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="mt-16">
        <section id="home">
          <HeroSection />
        </section>

        <section id="subscriptionplans">
          <SubscriptionPlans />
        </section>
        <section id="testimonials">
        <Testimonials />
        </section>

        <section id="calltoaction">
          <CallToAction />
        </section>
      
      </div>

      <Footer />
    </div>
  );
}

export default App;
