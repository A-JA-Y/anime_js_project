import React from 'react'
import Swiper from '../carousel';
import AnimatedComponent from '../animated-component';
import Hero from '../hero';
import Perfumes from '../perfumes';
import PerfumesComp from '../products';
import Others from '../others';
import Footer from '../footer';

function Home() {
  return (
    <>
    <AnimatedComponent />
    <Swiper/>
    <Hero/>
    <Perfumes/>
    <PerfumesComp/>
    <Others/>
    <Footer/>
    </>
  )
}

export default Home