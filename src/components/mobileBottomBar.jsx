import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MobileBottomBar = () => {
  return (
    <div className='flex justify-between items-center py-5 bg-white px-4 w-full border-t-[1px] border-black z-40  '>
    <span className='text-2xl text-black'><CiUser /></span>
     <Link to='/wishlist'><span className='text-black text-2xl '><CiHeart /></span></Link>
    <Link to='/cart'> <span className='text-black text-2xl '><IoBagHandleOutline /></span></Link>
    </div>
  )
}

export default MobileBottomBar;
