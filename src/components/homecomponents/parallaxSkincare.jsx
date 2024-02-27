import React from 'react'
import { Parallax } from 'react-parallax';
import bgImage from '../../assets/woman-visiting-cosmetologist-making-rejuvenation-procedures.jpg';

export default function ParallaxSkincare() {
  return (

   <section className='mt-10 md:mt-20 mb-10 md:mb-20'>
     <Parallax
    bgImage={bgImage}
    strength={300} 
    className="w-full h-[30vh] md:h-[40vh] lg:h-[60vh] xl:h-[75vh] rounded-2xl">
        <div className=' w-fit ml-5 md:ml-20 mt-[10%] md:mt-[20%]'>
        <p className='text-3xl md:text-4xl lg:text-8xl  text-white/20 font-italiana'>
          Find
          Your<br></br>
          Routine
        </p>
        </div>
      
    </Parallax>
   </section>
  )
}
