import React, { useState} from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import clsx from "clsx";
import { CartState } from '../context/Context';

const Navbar = () => {
    const { state: { cart, wishlist } } = CartState();
    const [isSideMenuOpen, setMenu] = useState(false);


  return (
    <nav className='relative w-full bg-[#f4f0e5] z-40'>
        <div className='left-0 flex m-auto w-full px-5 bg-[#f4f0e5] z-20 fixed items-center justify-between  py-2 md:py-4 text-black '>
          
          <div className='w-fit'>  <a href='/' className='no-underline text-black uppercase font-inter tracking-widest text-2xl xl:text-4xl'>Purely.</a></div>

              {/* Mobile Menu */}
              <div className='md:hidden flex'>
            <MdOutlineMenu onClick={() => setMenu(true)} className='text-3xl'/>
            </div>

            {/*Sidebar menu */}
            <div  onClick={() => setMenu(false)}
            className={
                clsx("fixed h-full transition-all w-screen -translate-x-full  bg-black/50 backdrop-blur-sm top-0 right-0 z-50",
                isSideMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
             <div className="text-black bg-white ml-auto transition-all  flex flex-col absolute  w-56 lg:w-64  right-0 top-0 h-screen  gap-8 z-50 py-5 px-10">
                <IoCloseOutline
                onClick={() => setMenu(false)}
                 className="mt-0 mb-8 text-3xl lg:text-4xl cursor-pointer" />
                {navlinks.map((d, i) => 
                 <a key={i} href={d.link} className="no-underline text-black  font-inter uppercase text-lg tracking-widest ">{d.label}</a>
                 )}
             </div>
        </div>



            <div className='hidden md:flex gap-4 mt-2'>
            {navlinks.map((d, i) => 

              <div className='w-fit border-b-2 border-transparent transform-all duration-300 ease-in hover:border-black pb-1'>
                   <a key={i} href={d.link} className="no-underline text-black  font-inter uppercase text-xs xl:text-lg tracking-widest ">
                    {d.label}
                 </a>
              </div>

                 )}


            </div>

            <div className='md:flex items-center gap-3 hidden w-fit'>

            <div className='text-xl xl:text-3xl cursor-not-allowed'><CiUser /></div>
            <a href='/wishlist'><div className='flex items-center cursor-pointer'>
                <span  className=' text-xl xl:text-3xl z-10'><CiHeart /></span>
                <span className='bg-primaryBeige  text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>{wishlist.length}</span>
            </div></a>
            <a href='/cart'><div className='flex items-center cursor-pointer'>
                <span  className=' text-xl xl:text-3xl z-10'><IoBagHandleOutline /></span>
                <span className='bg-primaryBeige  text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>{cart.length}</span>
            </div></a>

            </div>



        </div> 

    </nav>
  )
}


export default Navbar


const navlinks = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Shop",
        link: "/products"
    },
    {
        label: "Blog",
        link: "/blog"
    },
    {
        label: "Contact",
        link: "/contact"
    },
]
