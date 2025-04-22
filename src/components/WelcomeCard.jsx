import React from 'react'

const WelcomeCard = () => {
  return (
    <div className='flex flex-col h-96 bg-white items-center '>
        <h1 className='text-blue-600 mt-12 text-5xl font-semibold'>Welcome to AG Heating and Cooling</h1>
        <h2 className='text-red-600 mt-6 text-2xl font-semibold'>Your trusted partner for Air Conditioning Solutions</h2>
        <p className='text-center max-w-4xl mt-8'>At AG Heating & Cooling, we take pride in delivering reliable, high-quality air conditioning solutions that keep your home comfortable year-round. Your comfort is our top priority, and we treat every AC system like it’s our own.</p>
        <button className='bg-blue-600 px-8 py-4 rounded text-xl text-white mt-6'>Book Now</button>
    </div>
  )
}

export default WelcomeCard