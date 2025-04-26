import React from "react";
import { Snowflake, Flame, Wrench, HardHat } from "lucide-react";

const IconSection = () => {
  return (
    <div className="flex flex-row justify-center items-center h-32 w-full bg-blue-700 text-white ">
      <ul className="flex flex-row space-x-4 lg:space-x-12 text-sm md:space-x-32">
        <li className="flex items-center">
          <Snowflake size={32} className="text-blue-300 mr-1" />Residential and commercial Air conditioning
        </li>
        <li className="flex items-center">
          <Flame size={32} className="text-red-500 mr-1 fill-current" />Gas ducted and Air conditioning
        </li>
        <li className="flex items-center">
          <HardHat size={32} className="text-yellow-500 mr-1 fill-current" />All service and repairs
        </li>
        <li className="flex items-center">
          <Wrench size={32} className="text-gray-400 mr-1 fill-current" />AC and gas maintenance
        </li>
      </ul>
    </div>
  );
};

export default IconSection;
