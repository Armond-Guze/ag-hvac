import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-12 h-32 relative bg-black text-white text-center flex-row mx-auto '>
        <div>
            logo
        </div>
        <ul className='flex space-x-8 justify-center items-center loading-none list-non text-lg '>
            <li>About us</li>
            <li>Services</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>
        <button className='bg-blue-300 rounded p-2 flex-end cursor-pointer'>Schedule Service / Book Now</button>
    </div>
  )
}

export default Navbar