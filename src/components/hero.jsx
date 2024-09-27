import React from "react";
import Spline from "@splinetool/react-spline";

function Hero() {
    return (
        <>
            <div className="bg-[#040404] h-screen text-white flex">
                <div className="left w-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-6xl font-thin">Get your vibe matched !!</h1>
                        <p className="text-4xl font-thin">with <i><span className="text-teal-400">Unique-Khushboo</span></i></p>
                    </div>
                </div>
                <div className="right bg-black w-full">

                    <Spline scene="https://prod.spline.design/Mmp8qKZGS0MI-XMZ/scene.splinecode"   />
                </div>
            </div>
        </>
    );
}

export default Hero;
