import React from "react";
import Spline from "@splinetool/react-spline";

function Hero() {
    return (
        <div className="bg-[#040404] min-h-screen text-white flex flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-thin">Get your vibe matched !!</h1>
                    <p className="text-2xl md:text-4xl font-thin mt-4">with <i><span className="text-teal-400">Unique-Khushboo</span></i></p>
                </div>
            </div>
            <div className="flex-1 bg-black p-4">
                <Spline scene="https://prod.spline.design/Mmp8qKZGS0MI-XMZ/scene.splinecode" />
            </div>
        </div>
    );
}

export default Hero;
