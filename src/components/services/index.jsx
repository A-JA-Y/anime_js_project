import React from 'react'
import laundry from '../laundry.png'
import tailor from '../yessir.png'
import AnimatedComponent from '../animated-component'

function Services() {
  return (
    <>
    <AnimatedComponent />
    <div className="services bg-black p-5 text-white font-[Poppins] flex flex-col justify-center items-center">

      <h1 className='text-4xl md:text-7xl font-extrabold'>Services</h1>
      <div className="services flex flex-col md:flex-row justify-center items-center">
        <div className="service m-4 p-4 bg-gray-800 rounded-lg">
          <img src={laundry} alt="Laundry" className="w-full h-auto md:w-48 md:h-48 object-cover rounded-lg" />
          <h2 className='text-2xl md:text-6xl font-thin mt-4'>Laundry</h2>
          <p className="mt-2 text-center md:text-left">Get your clothes washed, dried, and ironed with our laundry service.</p>
        </div>
        <div className="service m-4 p-4 bg-gray-800 rounded-lg">
          <img src={tailor} alt="Tailoring" className="w-full h-auto md:w-48 md:h-48 object-cover rounded-lg" />
          <h2 className='text-2xl md:text-6xl font-thin mt-4'>Tailoring</h2>
          <p className="mt-2 text-center md:text-left">Get your clothes altered and tailored to fit you perfectly with our tailoring service.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services