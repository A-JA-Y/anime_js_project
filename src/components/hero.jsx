import React from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {

    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.fromTo(".text-center h1",
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        tl.fromTo(".text-center p",
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.5"
        );
        tl.fromTo(".spilineComp",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
            "-=0.5",
            {
                scrollTrigger: {
                    trigger: ".spilineComp",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            }
        );
        tl.fromTo(".spilineComp .onScroll",
            { y: 50, opacity: 0 },
            {
                rotateX: 10,
                rotateY: 10,
                transformPerspective: 1000,
                transformOrigin: "50% 50%",
                ease: "power2.out",
                duration: 1


            },
            "-=0.5",
            {
                scrollTrigger: {
                    trigger: ".spilineComp .onScroll",
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            }
        );
        return () => {
            tl.kill();
        }
        
    })
    return (
        <div className="bg-[#040404] min-h-screen text-white flex flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-thin">Get your vibe matched !!</h1>
                    <p className="text-2xl md:text-4xl font-thin mt-4">with <i><span className="text-teal-400">Unique-Khushboo</span></i></p>
                </div>
            </div>
            <div className="flex-1  p-4 text-white rounded-full  " >
                <Spline className="spilineComp onScroll  rounded " scene="https://prod.spline.design/Mmp8qKZGS0MI-XMZ/scene.splinecode" 
                     />
                     
            </div>
        </div>
    );
}

export default Hero;
