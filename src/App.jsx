import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import IconSection from "./components/IconSection";
import ServiceCards from "./components/ServiceCards";
import WelcomeCard from "./components/WelcomeCard";
import headerBackground from "./assets/headerBackground.jpg";

const App = () => {
  return (
    <div className="relative">
      {/* Wrap just Navbar and Header with background */}
      <div className="relative overflow-hidden">
        <img
          src={headerBackground}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
        />
        <div className="relative z-10">
          <Navbar />
          <Header />
        </div>
      </div>

      {/* These sections won't have that background image */}
      <IconSection />
      <WelcomeCard />
      <ServiceCards />
    </div>
  );
};

export default App;