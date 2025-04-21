import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-12 items-center justify-between h-18 bg-blue-600 text-white px-12 w-full">
      <div className="text-lg font-bold cursor-pointer">logo</div>

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
    </div>
  );
};

export default Navbar;
