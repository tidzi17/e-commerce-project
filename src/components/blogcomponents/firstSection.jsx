import React from 'react'
import bgImage from '../../assets/otherproducts.webp';

export default function FirstSectionBlog() {
  return (
    <section className='mb-10'>
      <div className='w-10/12 h-[90vh] m-auto px-20 flex'>
        <div className='w-1/2 h-full  rounded-3xl flex flex-col items-center justify-center text-center font-italiana text-black text-9xl'>
            Find <br></br>
            Your <br></br>
            Routine
        </div>
        <div className='w-1/2 h-full  rounded-3xl rounded-image'>
        <img src={bgImage} alt='' className='w-[100%] h-[100%] object-cover rounded-3xl'/>
        </div>
      </div>
    </section>
  )
}
