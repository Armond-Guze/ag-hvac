import React from "react";
import installPic from "../assets/installPic.jpg";
import repairsPic from '../assets/repairsPic.jpg';
import maintenence from '../assets/maintenence.jpg';
import upgradesPic from '../assets/upgradesPic.jpg';

const ServiceCards = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white lg:text-6xl bg-red-500 py-16">
      <div className="text-center mb-12">
        <h1 className="font-semibold text-2xl lg:text-4xl">QUALIFIED AIR CONDITIONING SERVICES</h1>
        <p className="lg:text-xl mt-6 text-center max-w-4xl mx-auto">
          Our range of air conditioning services is designed to cater to the
          diverse needs of both residential and commercial clients in New Jersey and New York. 
          With our team of qualified technicians, cutting-edge technology, and commitment to excellence, 
          we guarantee satisfaction in every service we provide.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <ul className="flex flex-wrap justify-center gap-8">
          <li className="bg-white px-6 py-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-72 xl:w-80">
            <img
              src={installPic}
              alt="Install"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-800 mb-2">Installation</h1>
            <p className="text-base text-black mb-4">
              Expert installation of energy-efficient heating and cooling systems for both residential and commercial spaces. We ensure seamless setup and optimal performance from day one.
            </p>
          </li>

          <li className="bg-white px-6 py-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-72 xl:w-80">
            <img
              src={repairsPic}
              alt="Repairs"
              className="mb-4 w-full h-48 rounded-md object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Repairs</h1>
            <p className="text-base text-black">
              Fast, reliable HVAC repairs done right the first time. Our certified technicians diagnose and fix issues efficiently to restore your comfort quickly.
            </p>
          </li>

          <li className="bg-white px-6 py-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-72 xl:w-80">
            <img
              src={maintenence}
              alt="Maintenance"
              className="mb-4 w-full object-cover h-48 rounded-md"
            />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Maintenance</h1>
            <p className="text-base text-black">
              Prevent breakdowns and extend the life of your HVAC system with routine maintenance. We keep your equipment running like new.
            </p>
          </li>

          <li className="bg-white px-6 py-8 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-72 xl:w-80">
            <img
              src={upgradesPic}
              alt="Upgrades"
              className="mb-4 w-full object-cover h-48 rounded-md"
            />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Upgrades</h1>
            <p className="text-base text-black">
              Upgrade to smarter, energy-efficient systems and reduce energy bills. Modernize your home's HVAC today.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;