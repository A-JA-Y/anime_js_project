import React from 'react';

function Footer() {
    return (
        <>
            <footer className="footer bg-black text-white py-12 px-4 font-thin font-[Poppins]">
                <h2 className="text-center mb-8 text-4xl md:text-6xl">Contact Us</h2>
                <div className="footer__contact grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
                    <div className="footer__contact__info flex flex-col items-center">
                        <h3 className="text-lg md:text-xl drop-shadow-lg font-normal">Email</h3>
                        <p className="text-base md:text-lg">
                            <a href="mailto:mailtoajay7007@gmail.com" className="text-red-600">info@uniquekhushboo.com</a>
                        </p>
                    </div>
                    <div className="footer__contact__info flex flex-col items-center">
                        <h3 className="text-lg md:text-xl drop-shadow-lg font-normal">Phone</h3>
                        <p className="text-base md:text-lg">
                            <a href="tel:+919999999999" className="text-red-600">+91 9999999999</a>
                        </p>
                    </div>
                </div>
                <div className="footer__bottom text-center mt-8">
                    <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} <i className='text-teal-400'>UniqueKhushboo.com</i> All rights reserved.</p>
                    <p className="text-xs md:text-sm">Privacy Policy | Terms of Service</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;