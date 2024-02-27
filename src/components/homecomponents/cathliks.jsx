import React from 'react'
import img1 from '../../assets/face.webp';
import img2 from '../../assets/body.webp';
import img3 from '../../assets/hair.webp';

export default function FeaturedCaths() {
  return (
    <section className='w-full h-[100vh] flex  items-center justify-center'>
        <div className='w-9/12 h-full flex flex-col  justify-center'>
           <div className='flex flex-col w-fit float-right  ml-auto'>
           <div className='w-[35px] h-[1px] bg-black/70 self-end'></div>
            <h2 className='uppercase text-3xl mb-5 font-italiana text-right text-black/70'>Trending</h2>
           </div>
            <div className='w-full h-[600px]  flex justify-between gap-5'>

                <div className='rounded-2xl relative  w-[100%] flex flex-col items-center overflow-hidden'>
                    <img src={img1} alt="" className='rounded-2xl w-[100%] h-[100%] object-cover transform ease-in-out duration-500 hover:scale-110'/>
                    <p
                     className='absolute bottom-5 left-2 text-white/60 text-4xl font-extrabold'
                     >Face.</p>
                </div>
                <div className='rounded-2xl relative  w-[100%] flex flex-col items-center overflow-hidden'>
                    <img src={img2} alt="" className='rounded-2xl w-[100%] h-[100%] object-cover transform ease-in-out duration-500 hover:scale-110'/>
                    <p
                     className='absolute bottom-5 left-2 text-white/60 text-4xl font-extrabold'
                     >Body.</p>
                </div>
                <div className='rounded-2xl relative  w-[100%] flex flex-col items-center overflow-hidden'>
                    <img src={img3} alt="" className='rounded-2xl w-[100%] h-[100%] object-cover transform ease-in-out duration-500 hover:scale-110'/>
                    <p
                     className='absolute bottom-5 left-2 text-white/60 text-4xl font-extrabold'
                     >Hair.</p>
                </div>
            </div>

        </div>
      
    </section>
  )
}
