import React from 'react'

function Contact() {
  return (
    <>
      {/* build a contact us page */}
      <div className="contact bg-black p-5 text-white font-[Poppins] flex flex-col justify-center items-center">
        <h1 className='text-4xl md:text-7xl font-extrabold text-center'>Contact Us</h1>
        <div className="contact flex flex-col md:flex-row justify-center items-center w-full">
          <div className="contact m-4 p-4 bg-gray-800 rounded-lg w-full md:w-1/3">
            <h2 className='text-2xl md:text-6xl font-thin mt-4 text-center md:text-left'>Email</h2>
            <p className="mt-2 text-center md:text-left">Email us at: </p>
            <p className="mt-2 text-center md:text-left">
              <a href="mailto:mailtoajay7007@gmail.com">info@uniquekhushboo.com</a>
            </p>
          </div>
          <div className="contact m-4 p-4 bg-gray-800 rounded-lg w-full md:w-1/3">
            <h2 className='text-2xl md:text-6xl font-thin mt-4 text-center md:text-left'>Phone</h2>
            <p className="mt-2 text-center md:text-left">Call us at: </p>
            <p className="mt-2 text-center md:text-left">
              <a href="tel:+91-9260967689">+91-9260967689</a>
            </p>
          </div>
          <div className="contact m-4 p-4 bg-gray-800 rounded-lg w-full md:w-1/3">
            <h2 className='text-2xl md:text-6xl font-thin mt-4 text-center md:text-left'>WhatsApp</h2>
            <p className="mt-2 text-center md:text-left">Chat with us on WhatsApp: </p>
            <p className="mt-2 text-center md:text-left">
              <a href="https://wa.me/919260967689" target="_blank" rel="noopener noreferrer">+91-9260967689</a>
            </p>
          </div>
        </div>
        <div className="contact m-4 p-4 bg-gray-800 rounded-lg w-full">
          <h2 className='text-2xl md:text-6xl font-thin mt-4 text-center md:text-left'>Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284634431!2d144.9630579153169!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f3b1b1e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633078871234!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Contact