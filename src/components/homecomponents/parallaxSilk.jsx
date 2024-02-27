import React from 'react'
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/silk.png';

export default function ParallaxSilk() {
  return (

   <section className='mt-20 mb-10'>
     <Parallax
    bgImage={bgImage}
    strength={300} 
    className="w-full h-[65vh] rounded-2xl">
        <div className='flex flex-col justify-center gap-3 mt-[10%] ml-32 text-white'>
        <p className='uppercase font-bold tracking-widest text-9xl'>Purely.</p>
        <p className='text-2xl tracking-wider'>Discover our story</p>
        <button className='w-fit border-[1px] border-white px-4 py-2 text-xl'>Discover</button>
        </div>
      
    </Parallax>
   </section>
  )
}