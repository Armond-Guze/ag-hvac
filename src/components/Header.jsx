import React from "react";
import { IoCheckbox } from "react-icons/io5";
import upgradesPic from "../assets/upgradesPic.jpg";
import headerBackground from "../assets/headerBackground.jpg";

const Header = () => {
  return (
    <div className="relative flex flex-col lg:flex-row h-128 font-poppins text-white bg-blue-600 p-16 overflow-hidden">
      
      {/* Transparent Background Image */}
      <img
        src={headerBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none "
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left Section - Text */}
        <div className="xl:pl-24 flex-1">
          <div className="lg:text-xl">
            <h1 className="text-xxl lg:text-3xl md:text-2xl">
              24/7 Local Air Conditioning Services
            </h1>
            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mt-4">
              <span className="whitespace-nowrap">AG Heating & Cooling </span>
              <br /> Serving NJ, NY <br /> Reliable.
              <span className="text-red-200">Qualified.</span>
            </h1>
          </div>
          <div className="space-y-4 mt-4">
            <h1 className="flex items-center">
              <IoCheckbox
                size={20}
                className="bg-green-500 mr-2 rounded text-white"
              />
              Local family owned and operated
            </h1>
            <h1 className="flex items-center">
              <IoCheckbox
                size={20}
                className="bg-green-500 mr-2 rounded text-white"
              />
              Serving New Jersey for 10+ years
            </h1>
            <h1 className="flex items-center">
              <IoCheckbox
                size={20}
                className="bg-green-500 mr-2 rounded text-white"
              />
              Great work at a discount
            </h1>
          </div>
        </div>

        {/* Right Section - Foreground Image */}
        <div className="flex justify-end flex-1">
          <img
            src={upgradesPic}
            alt="air-conditioner"
            className="h-95 w-full lg:w-[600px] sm:w-[400px] xl:w-[1000px] shadow-black shadow-sm translate-x-40 object-cover hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
