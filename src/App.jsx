import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import IconSection from "./components/IconSection";
import ServiceCards from "./components/ServiceCards";
import WelcomeCard from "./components/WelcomeCard";

const App = () => {
  return (
    <div className="bg-gray-400 h-258">
      <Navbar />
      <Header />
      <IconSection />
      <WelcomeCard />
      <ServiceCards />
      
    </div>
  );
};

export default App;
