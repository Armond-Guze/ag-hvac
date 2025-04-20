import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-18 bg-[#1E1E1E] text-white px-12 w-full'>
      <div className='text-lg font-bold cursor-pointer'>
        logo
      </div>

      <div className='flex-1 justify-center hidden sm:flex'>
        <ul className='flex space-x-8 items-center text-lg'>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Careers</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>

      <button className='bg-blue-300 rounded p-2 text-black cursor-pointer'>
        Schedule Service
      </button>
    </div>
  )
}

export default Navbar