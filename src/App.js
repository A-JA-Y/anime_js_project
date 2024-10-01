import Swiper from './components/carousel';
import AnimatedComponent from './components/animated-component';
import Hero from './components/hero';
import Perfumes from './components/perfumes';
import PerfumesComp from './components/products';
import Others from './components/others';
import Footer from './components/footer';

function App() {
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
  );
}

export default App;
