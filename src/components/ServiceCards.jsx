import React from "react";

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
      <div className="flex flex-row mt-12 text-xl justify-center items-center align-items">
        <ul className="flex flex-row space-x-8">
          <li className="bg-white px-16 py-42 text-blue-800">Installation</li>
          <li className="bg-white px-16 py-42 text-blue-800">Repairs</li>
          <li className="bg-white px-16 py-42 text-blue-800">Maintenence</li>
          <li className="bg-white px-16 py-42 text-blue-800">Upgrades</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;
