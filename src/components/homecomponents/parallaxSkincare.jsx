import React from 'react'
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg';

export default function ParallaxSkincare() {
  return (

   <section className='mt-20 '>
     <Parallax
    bgImage={bgImage}
    strength={300} 
    className="w-full h-[75vh] rounded-2xl">
        <div className=' w-fit ml-20 mt-[20%]'>
        <p className='text-8xl text-white/20 font-italiana'>
          Find
          Your<br></br>
          Routine
        </p>
        </div>
      
    </Parallax>
   </section>
  )
}
