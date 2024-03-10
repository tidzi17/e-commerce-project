import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CartState } from '../context/Context';

const MobileBottomBar = () => {
  const { state: { cart, wishlist } } = CartState();
  return (
    <div className='flex justify-between items-center py-4 bg-[#f4f0e5] px-4 w-full border-t-[1px] border-black z-40  '>
    <span className='text-2xl text-black'><CiUser /></span>

    <a href='/wishlist'><div className='flex items-center cursor-pointer'>
    <span  className=' text-2xl  z-10'><CiHeart /></span>
    <span className='bg-primaryBeige  text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>{wishlist.length}</span>
</div></a>

<a href='/cart'><div className='flex items-center cursor-pointer'>
    <span  className=' text-2xl  z-10'><IoBagHandleOutline /></span>
    <span className='bg-primaryBeige  text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>{cart.length}</span>
</div></a>

    </div>

  )
}

export default MobileBottomBar;
