import React from 'react'
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/silk.png';

export default function ParallaxSilk() {
  return (

   <section className=' mb-10'>
     <Parallax
    bgImage={bgImage}
    strength={300} 
    className="w-full h-[40vh] lg:h-[60vh] xl:h-[75vh] rounded-2xl">
        <div className='flex flex-col justify-center gap-3 mt-[15%] md:mt-[10%] ml-2 md:ml-5 lg:ml-10 xl:ml-32 text-white'>
        <p className='uppercase font-bold tracking-widest text-5xl lg:text-7xl xl:text-9xl'>Purely.</p>
        <p className=' text-xl md:text-2xl tracking-wider'>Discover our story</p>
        <button className='w-fit border-[1px] border-white px-4 py-2 text-sm md:text-xl'>Discover</button>
        </div>
      
    </Parallax>
   </section>
  )
}