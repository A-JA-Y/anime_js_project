import React from 'react'
import laundry from './laundry.png' 
import tailor from './yessir.png'

function Others() {
    return (
        <>
        {/* A section for other services that we offer to our customers, services are named "Yes Sir Laundary" and "Yes Sir Tailors" , they should have logos  */}
        <section className="others bg-black text-white py-12 px-4 font-thin font-[Poppins] ">
                <h2 className="  text-center mb-8  text-6xl ">Other Services</h2>
               
                <div className="others__services grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
                        <div className="others__service flex flex-col items-center">
                                <img src={laundry} alt="Yes Sir Laundary" className="w-32 h-32 mb-4" />
                                <h3 className="text-xl  drop-shadow-lg font-normal"><span className='text-red-600'> Yes Sir</span>  Laundary</h3>
                        </div>
                        <div className="others__service flex flex-col items-center">
                                <img src={tailor} alt="Yes Sir Tailors" className="w-32 h-32 mb-4" />
                                <h3 className="text-xl  drop-shadow-lg font-normal"> <span className='text-red-600'>Yes Sir</span> Tailors</h3>
                        </div>
                </div>
        </section>
        </>
    )
}

export default Others
