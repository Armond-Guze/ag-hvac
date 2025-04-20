import React from "react";
import { IoCheckbox } from "react-icons/io5";
import acpic from "../assets/acpic.jpg";
const Header = () => {
  return (
    <div style={{ fontFamily: 'inter' }} className="flex flex-col lg:flex-row h-128 text-white bg-blue-600 p-16 overflow-hidden">
      <div className="xl:pl-24">
        <div className="lg:text-xl">
        <h1 className="text-2xl lg:text-3xl md:text-2xl ">24/7 Local Air Conditioning Services</h1>
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold mt-4">
          <span className="whitespace-nowrap">AG Heating & Cooling </span><br /> Serving NJ, NY <br /> Reliable.
          <span className="text-red-200">Qualified.</span>
        </h1>
        </div>
        <div className="space-y-4">
          <h1 className="mt-4">
            <IoCheckbox size={20} className="inline bg-green-500" />
            Local family owned and operated
          </h1>
          <h1>
            <IoCheckbox size={20} className="inline bg-green-500" />
            Serving New Jersey for 10+ years
          </h1>
          <h1>
            <IoCheckbox size={20} className="inline bg-green-500" />
            Great work at a discount
          </h1>
        </div>
      </div>
      <div className="sm:flex xl:w-[1200px] justify-end">
        <img src={acpic} alt="air-conditioner" className="h-95 w-full lg:w-[600px] sm:w-[400px] xl:w-[1000px] inline shadow-black translate-x-40" />
      </div>
    </div>
  );
};

export default Header;
