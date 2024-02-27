import React from 'react'
import image from '../../assets/woman-home-applying-cream-mask.jpg'
import imageSecond from '../../assets/woman-home-applying-cream-mask (1).jpg'

export default function FirstSectionHome() {
  return (
    <section className=''>
        <div className='w-full h-fit md:h-[70vh] lg:h-[100vh] mb-10 md:mb-10'>
           <div className='w-full  md:order-first h-full flex flex-col md:flex-row md:items-center m-auto md:justify-between'>
           <div className='w-full md:w-1/2  h-[400px] md:h-full'>
                <img src={image} alt='' className='rounded-2xl w-[100%]  h-[100%] object-cover'/>
            </div>
            <div className=' w-fit order-first md:order-last md:w-1/2 flex flex-col md:items-center md:px-5 mb-5 md:mb-0'>
                <h3 className='md:text-center text-3xl md:text-4xl lg:text-5xl mb-2 font-italiana tracking-wide text-black'>Discover Your Inner Glow</h3>
                <p className='text-left text-xs md:text-base  md:text-center mb-3 font-junge tracking-wide text-zinc-700'>
                Experience the transformative power of skincare as you pamper yourself with our exquisite range of products. Formulated with potent botanical extracts and cutting-edge technology, our skincare essentials work synergistically to enhance your natural beauty. Unveil a luminous complexion and radiate confidence with every application.
                </p>
              <a href='/products'>
              <button className='text-xs  rounded-md md:text-base px-5 py-2 border-[1px] border-transparent bg-black text-white'>Shop Now</button>
              </a>

            </div>
           </div>
        </div>

        <div className='w-full h-fit md:h-[70vh] lg:h-[100vh]'>
           <div className='w-full   h-full flex flex-col md:flex-row md:items-center m-auto md:justify-between'>

            <div className=' w-fit md:w-1/2 flex flex-col md:items-center md:px-5 mb-5 md:mb-0'>
                <h3 className='md:text-center text-3xl md:text-4xl lg:text-5xl mb-2 font-italiana tracking-wide text-black'>Elevate Your Skincare Experience</h3>
                <p className='text-left text-xs md:text-base  md:text-center mb-3 font-junge tracking-wide text-zinc-700'>
                Indulge in a luxurious skincare regimen with our premium selection of products. From gentle cleansers to potent serums, each step of your routine is meticulously crafted to nourish, hydrate, and revitalize your skin. Embrace the ritual of self-care and unlock the secret to radiant, youthful-looking skin.
                </p>
              <a href='/products'>
              <button className='text-xs  rounded-md md:text-base px-5 py-2 border-[1px] border-transparent bg-black text-white'>Shop Now</button>
              </a>

            </div>

            <div className='w-full md:w-1/2 h-[400px] md:h-full'>
                <img src={imageSecond} alt='' className='rounded-2xl w-[100%]  h-[100%] object-cover'/>
            </div>

           </div>
        </div>
      
    </section>
  )
}
