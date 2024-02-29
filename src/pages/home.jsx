import React from 'react'
import TrendingProducts from '../components/shopcomponents/trendingProducts'
import ParallaxSkincare from '../components/homecomponents/parallaxSkincare'
import FirstSectionHome from '../components/homecomponents/firstsection'
import ParallaxSilk from '../components/homecomponents/parallaxSilk'
import FeaturedCaths from '../components/homecomponents/cathliks'
import HighlightedProduct from '../components/homecomponents/highlightedProducts'
import SubSection from '../components/homecomponents/subandblog'
import SkincareVideo from '../components/homecomponents/skincareVideo'
import Hero from '../components/homecomponents/hero'
import PopUp from '../components/popup'

const Home = () => {
  return (
    <div className='flex flex-col'>
      
      <PopUp />
       <Hero />
      <TrendingProducts />
      <FirstSectionHome />
      <ParallaxSkincare />
      <FeaturedCaths />
      <p className='ml-auto text-[70px] md:text-[100px] lg:text-[150px] xl:text-[250px] tracking-widest uppercase font-extrabold text-black/10'>
        Purely.
        </p>
   <SkincareVideo />
     <HighlightedProduct />
     <ParallaxSilk />
        <SubSection />
    </div>
  )
}

export default Home
