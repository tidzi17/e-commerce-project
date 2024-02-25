import React from 'react'
import { CartState } from '../../context/Context'

const ProductCard = ( { prod }) => {
  const { state: { cart } } = CartState();

  return (
    <div className='flex flex-col'>
      <div className='w-[90%] h-[300px] md:h-[450px] flex justify-center items-center bg-primaryGrey'>
        <img src={prod.url} className='h-full'/>
      </div>
      <div>
        <p>{prod.title}</p>
        <p>{prod.price}</p>
      </div>

      
    </div>
  )
}

export default ProductCard
