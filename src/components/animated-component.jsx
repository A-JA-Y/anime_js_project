import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const AnimatedComponent = () => {
  const animationRef = useRef(null);

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

  return (
    <>
      <nav className="animatedNavbar  h-[90px] w-full bg-zinc-800 text-white flex items-center justify-center shadow-inner shadow-xl drop-shadow-xl">
        <ul className="flex gap-10 text-center items-center justify-center h-full w-full font-thin text-2xl  ">
          <li className="w-[75px] h-[75px]">
            <div
              className="rounded-full text-sm text-center text-red-600"
              ref={animationRef}
              style={{ width: "50px", height: "50px", backgroundColor: "red" }}
            >
              Logo Here
            </div>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AnimatedComponent;
