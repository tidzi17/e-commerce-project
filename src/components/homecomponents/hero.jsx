import React from 'react'
import image from '../../assets/86773.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='relative w-full h-[90vh] top-0 z-10 rounded-3xl bg-zinc-300 mb-10'>
   <img src={image} alt='' className='rounded-3xl w-[100%] h-[100%] object-cover'/>
   
   <div className='absolute  top-[50%] right-16 text-white w-1/3 text-right '>
    <h1 className='text-7xl font-light font-italiana'>
        Your Path <br></br>
         to Radiant Skin</h1>
    <p className='text-sm font-sans'>Discover our curated collection of skincare essentials designed to nourish, rejuvenate, and reveal your skin's natural radiance.
    From luxurious serums to revitalizing masks, Purely offers the perfect products to embark on your journey towards glowing, healthy skin. 
    </p>
   <Link to="/products">
    <button className='text-base bg-transparent ease-in-out duration-500 hover:bg-white/20 border-[1px] border-white px-3 py-2 w-fit ml-auto mt-2'>
        Shop Now
        </button>
        </Link> 
    </div>
  </section>
  )
}
