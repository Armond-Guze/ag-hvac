import React from "react";
import { Snowflake, Flame, Wrench, HardHat, User } from "lucide-react";

const IconSection = () => {
  return (
    <div className="flex flex-row justify-center items-center h-32 w-full bg-[#1E1E1E] text-white ">
      <ul className="flex flex-row lg:space-x-48 space-x-6 text-sm md:space-x-32">
        <li>
          <Snowflake size={32} className="text-blue-300" />Residential and commercial Air conditioning
        </li>
        <li>
          <HardHat size={32} className="text-yellow-500" />All service and repairs
        </li>
        <li>
          <Wrench size={32} className="text-gray-400" />AC and gas heating 
        </li>
        <li className="">
          <Flame size={32} className="text-red-500" />Gas ducted and Air conditioning
        </li>
        <li className="">
          <User size={32} className="text-white" />Quality service 
        </li>
      </ul>
    </div>
  );
};

export default IconSection;
