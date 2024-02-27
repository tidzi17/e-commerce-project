import React from 'react'
import bgImage from '../../assets/otherproducts.webp';

export default function FirstSectionBlog() {
  return (
    <section className='mb-10 relative'>
      <div className='items-center justify-center relative w-full md:w-11/12  lg:w-10/12 h-[60vh] lg:h-[90vh] m-auto px-10 xl:px-20 flex'>
        <div className='z-20 absolute md:relative w-full md:w-1/2  rounded-3xl flex flex-col items-center justify-center text-center font-italiana text-black text-5xl md:text-5xl lg:text-7xl xl:text-9xl'>
            Find <br></br>
            Your <br></br>
            Routine
        </div>
        <div className=' relative w-full md:w-1/2 h-full z-10  rounded-3xl rounded-image'>
        <img src={bgImage} alt='' className='w-[100%] h-[100%] object-cover rounded-3xl'/>
        </div>
      </div>
    </section>
  )
}
