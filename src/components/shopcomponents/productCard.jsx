import React from 'react'
import { CartState } from '../../context/Context'
import { AddToWishlist } from './buttons';
import { RemoveFromWishlist } from './buttons';

const ProductCard = ( { prod }) => {
  const { state: { cart, wishlist } } = CartState();

  return (
    <div className='flex flex-col w-fit'>
      <a href={`/products/${prod.cathegory}/${prod.id}`}  className='rounded-2xl bg-primaryBeige/50 w-[350px] h-[280px] md:h-[450px] flex justify-center items-center '>
        <img src={prod.url} alt={prod.title} className='h-[80%] md:h-[75%] xl:h-[88%]'/>
      </a>
      <div className='flex justify-between'>

       <div className='flex flex-col gap-1'>
        <p className='uppercase text-xs text-zinc-400'>hand purse</p>
       <p className='uppercase text-sm text-black'>{prod.title}</p>
        <p className='text-sm text-black font-semibold'>${prod.price}</p>
       </div>

       <div className='mt-auto'>
       {
            wishlist.some(p => p.id === prod.id) 
            ? (
        <RemoveFromWishlist prod={prod} addButtonStyle="text-3xl cursor-pointer text-black"/>
            )
            : (
            <AddToWishlist prod={prod} addButtonStyle="text-3xl cursor-pointer text-black"/>
            )
        }
        
       </div>

      </div>

      
    </div>
  )
}

export default ProductCard
