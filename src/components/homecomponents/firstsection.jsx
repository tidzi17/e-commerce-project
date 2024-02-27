import React from 'react'
import image from '../../assets/woman-home-applying-cream-mask.jpg'
import imageSecond from '../../assets/woman-home-applying-cream-mask (1).jpg'

export default function FirstSectionHome() {
  return (
    <section>
        <div className='w-full h-[100vh]  '>
           <div className='w-full h-full flex items-center m-auto justify-between'>
           <div className='w-1/2 h-full'>
                <img src={image} alt='' className='rounded-2xl w-[100%]  h-[100%] object-cover'/>
            </div>
            <div className='w-1/2 flex flex-col items-center px-5'>
                <h3 className='text-5xl mb-2 font-italiana tracking-wide text-black'>Discover Your Inner Glow</h3>
                <p className='text-center mb-3 font-junge tracking-wide text-zinc-800'>
                Experience the transformative power of skincare as you pamper yourself with our exquisite range of products. Formulated with potent botanical extracts and cutting-edge technology, our skincare essentials work synergistically to enhance your natural beauty. Unveil a luminous complexion and radiate confidence with every application.
                </p>
                <button className='text-base px-5 py-2 border-[1px] border-transparent bg-black text-white'>Shop Now</button>
            </div>
           </div>
        </div>
        <div className='w-full h-[100vh]  '>
           <div className='w-full h-full flex items-center m-auto justify-between'>

            <div className='w-1/2 flex flex-col items-center px-5'>
                <h3 className='text-5xl  mb-2 font-italiana tracking-wide text-black'>Elevate Your Skincare Experience</h3>
                <p className='text-center mb-3 font-junge tracking-wide text-zinc-800'>
                Indulge in a luxurious skincare regimen with our premium selection of products. From gentle cleansers to potent serums, each step of your routine is meticulously crafted to nourish, hydrate, and revitalize your skin. Embrace the ritual of self-care and unlock the secret to radiant, youthful-looking skin. </p>
                <button className='text-base px-5 py-2 border-[1px] border-transparent bg-black text-white'>Shop Now</button>            
           
            </div>


            <div className='w-1/2 h-full'>
                <img src={imageSecond} alt='' className='rounded-2xl w-[100%]  h-[100%] object-cover'/>
            </div>

           </div>
        </div>
      
    </section>
  )
}
