import React from 'react'
import { CartState } from '../../context/Context'
import { AddToWishlist } from './buttons';
import { RemoveFromWishlist } from './buttons';
import Rating from './ratings';

const ProductCard = ( { prod }) => {
  const { state: { cart, wishlist } } = CartState();

  return (
    <div className='flex flex-col  w-[165px] sm:w-[220px]  md:w-[240px] lg:w-[315px]'>
      <a href={`/products/${prod.cathegory}/${prod.id}`}  className='w-full rounded-2xl bg-primaryBeige/50 h-[220px] md:h-[350px] lg:h-[450px] flex justify-center items-center '>
        <img src={prod.urls[0]} alt={prod.title} className='h-[80%] md:h-[75%] xl:h-[90%]'/>
      </a>
      <div className='flex justify-between'>

       <div className='flex flex-col gap-1'>
        <p className='uppercase text-xs text-zinc-400'>{prod.cathegory}</p>
        <span><Rating rating={prod.ratings}/></span>
       <p className='uppercase text-xs md:text-sm text-black'>{prod.title}</p>
        <p className='text-xs md:text-sm text-black font-semibold'>${prod.price}</p>
       </div>

       <div className='mt-auto'>
       {
            wishlist.some(p => p.id === prod.id) 
            ? (
        <RemoveFromWishlist prod={prod} addButtonStyle="text-xl md:text-3xl cursor-pointer text-black"/>
            )
            : (
            <AddToWishlist prod={prod} addButtonStyle="text-xl md:text-3xl cursor-pointer text-black"/>
            )
        }
        
       </div>

      </div>

      
    </div>
  )
}

export default ProductCard
