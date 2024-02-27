import React from 'react'
import HomeSlider from '../components/homeSlider'
import NewArrivals from '../components/shopcomponents/newArrivals'
import TrendingProducts from '../components/shopcomponents/trendingProducts'
import ExploreSection from '../components/exploreSection'
import ParallaxSkincare from '../components/homecomponents/parallaxSkincare'
import bgImage from '../assets/bg.jpg'
import FirstSectionHome from '../components/homecomponents/firstsection'
import ParallaxSilk from '../components/homecomponents/parallaxSilk'
import FeaturedCaths from '../components/homecomponents/cathliks'
import HighlightedProduct from '../components/homecomponents/highlightedProducts'
import image from '../assets/86773.jpg';
import bg from '../assets/Screenshot_3.png';
import SubSection from '../components/homecomponents/subandblog'
import SkincareVideo from '../components/homecomponents/skincareVideo'
import Hero from '../components/homecomponents/hero'

const Home = () => {
  return (
    <div className='flex flex-col'>
<Hero />
      <TrendingProducts />
      <FirstSectionHome />
      <ParallaxSkincare />
      <FeaturedCaths />
      
      {/* <NewArrivals /> */}
      <p className='ml-auto text-[250px] tracking-widest uppercase font-extrabold text-black/10'>
        Purely.
        </p>
   <SkincareVideo />
     <HighlightedProduct />
     <ParallaxSilk />
        <SubSection />
      
      {/* <ExploreSection />
      <TrendingProducts /> */}
    </div>
  )
}

export default Home
