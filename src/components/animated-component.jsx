import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from 'react-router-dom';

const AnimatedComponent = () => {
  const animationRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    anime({
      targets: animationRef.current,
      rotate: "2turn",
      easing: "easeInOutQuad",
      color: "#FFF",
      padding: "2rem",
      duration: 500,
      fontSize: "1rem",
      scale: 1.2,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="animatedNavbar h-[90px] w-full bg-zinc-800 text-white flex items-center justify-between shadow-inner shadow-xl drop-shadow-xl px-4 md:px-8">
        <div className="flex items-center">
          <div
            className="rounded-full text-sm text-center text-red-600"
            ref={animationRef}
            style={{ width: "50px", height: "50px", backgroundColor: "red" }}
          >
            <i className="text-teal-400 font-normal">Unique Khushboo</i>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-10 text-center items-center justify-center h-full w-full font-thin text-xl md:text-2xl`}
        >
          <li className="hover:text-red-600 drop-shadow-lg transition-all">
          <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 drop-shadow-lg transition-all">
          <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-red-600 drop-shadow-lg transition-all">
          <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-red-600 drop-shadow-lg transition-all">
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AnimatedComponent;
