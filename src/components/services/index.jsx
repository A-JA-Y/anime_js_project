import React from 'react'
import laundry from '../laundry.png'
import tailor from '../yessir.png'

function Services() {
  return (
    <><div className="services bg-black p-5 text-white font-[Poppins] flex flex-col justify-center items-center">

      <h1 className='text-7xl font-extrabold'>Services</h1>
      <div className="services">
        <div className="service">
          <img src={laundry} alt="Laundry" />
          <h2 className='text-6xl font-thin'>Laundry</h2>
          <div className="container">

          </div>
          

              
            
         
          <p>Get your clothes washed, dried, and ironed with our laundry service.</p>
        </div>
        <div className="service">
          <img src={tailor} alt="Tailoring" />
          <h2 className='text-6xl font-thin'>Tailoring</h2>
          <div className="container">

          </div>
          <p>Get your clothes altered and tailored to fit you perfectly with our tailoring service.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services