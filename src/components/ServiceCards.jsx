import React from "react";
import installPic from "../assets/installPic.jpg";
import repairsPic from '../assets/repairsPic.jpg'
import maintenence from '../assets/maintenence.jpg'
import upgradesPic from '../assets/upgradesPic.jpg'

const ServiceCards = () => {
  return (
    <div className="flex text-xl flex-col justify-center items-center align-items  h-[720px] text-white lg:text-6xl bg-red-500">
      <div className="flex-col">
        <h1 className="font-semibold">QUALIFIED AIR CONDITIONING SERVICES</h1>
        <p className="lg:text-xl mt-6">
          Our range of air conditioning services is designed to cater to the
          diverse needs of both residential <br /> and commerical clients in New
          Jersey and New York. With our team of of Qualified technicians,
          cutting-edge <br /> technology, and commitment to excellence, we
          guarentee satisfaction in every service we provide.
        </p>
      </div>
      <div className="flex flex-row mt-12 text-xl justify-center items-center ">
        <ul className="flex flex-row space-x-8">
          <li className="bg-white px-6 py-8 max-w-sm rounded shadow-lg">
            <img
              src={installPic}
              alt="install"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-800 mb-2">
              Installation
            </h1>
            <p className="text-base text-black mb-4">
              Expert installation of energy-efficient heating and cooling
              systems for both residential and commercial spaces. We ensure
              seamless setup and optimal performance from day one.
            </p>
          </li>

          <li className="bg-white px-6 py-8 max-w-sm rounded shadow-lg">
            <img src={repairsPic} alt="repairs" className="mb-4 w-full h-48 rounded-md object-cover" />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Repairs</h1>
            <p className="text-base text-black">
              Fast, reliable HVAC repairs done right the first time. Our
              certified technicians diagnose and fix issues efficiently to
              restore your comfort quickly.
            </p>
          </li>
          <li className="bg-white px-6 py-8 max-w-sm rounded shadow-lg">
            <img src={maintenence} alt="" className="mb-4 w-full object-cover h-48 rounded:md" />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">
              Maintenance
            </h1>
            <p className="text-base text-black">
              Prevent breakdowns and extend the life of your HVAC system with
              routine maintenance. We keep your equipment running like new.
            </p>
          </li>
          <li className="bg-white px-6 py-8 max-w-sm rounded shadow-lg">
            <img src={upgradesPic} alt="" className="mb-4 w-full object-cover h-48 rounded:md" />
            <h1 className="text-2xl font-bold text-blue-800 mb-4">Upgrades</h1>
            <p className="text-base text-black">
              Upgrade to smarter, energy-efficient systems and reduce energy
              bills. Modernize your home's HVAC today.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;
