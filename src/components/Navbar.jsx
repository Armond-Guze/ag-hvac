import React from "react";
import agLogoTransparent from "../assets/agLogoTransparent.png";
import headerBackground from "../assets/headerBackground.jpg"

const Navbar = () => {
  return (
    <nav className="relative flex p-12 items-center justify-between h-18 bg-blue-600 text-white w-full">
      <img
              src={headerBackground}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-5 z-0 pointer-events-none"
            />
      <div className="text-lg font-bold cursor-pointer">
        <img src={agLogoTransparent} alt="logo" className="h-26"/>
      </div>

      <div className="flex-1 justify-center hidden sm:flex">
        <ul className="flex space-x-8 items-center text-lg font-semibold">
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>

      <button className="bg-blue-700 rounded p-2 text-white font-semibold cursor-pointer">
        Schedule Service
      </button>
    </nav>
  );
};

export default Navbar;
