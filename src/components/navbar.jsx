import React, { useState} from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import clsx from "clsx";

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const [isCartOpen, setCart] = useState(false);

  return (
    <nav className=''>
        <div className='flex items-center justify-between px-3 py-2 md:py-4 text-black'>
          
            <a href='/' className='no-underline text-black uppercase font-inter tracking-widest text-2xl xl:text-4xl'>Bagly.</a>

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

            <div className='md:flex items-center gap-3 hidden'>

            <div className='text-xl xl:text-3xl cursor-pointer'><CiUser /></div>
            <div className='flex items-center'>
                <span  className='text-xl xl:text-3xl z-10 cursor-pointer'><CiHeart /></span>
                <span className='bg-primaryBeige text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>2</span>
            </div>
            <div className='flex items-center cursor-pointer'>
                <span onClick={() => setCart(true)}  className=' text-xl xl:text-3xl z-10'><IoBagHandleOutline /></span>
                <span className='bg-primaryBeige  text-white rounded-full px-2 py-0.5 w-fit h-fit -mt-4 text-xs z-20 -ml-2.5'>2</span>
            </div>

            </div>

            
            {/*Sidebar menu CART */}
            <div  onClick={() => setCart(false)}
            className={
                clsx("fixed h-full transition-all w-screen -translate-x-full  bg-black/50 backdrop-blur-sm top-0 right-0 z-50",
                isCartOpen ? 'translate-x-0' : 'translate-x-full')}>
             <div className="text-black bg-white ml-auto transition-all  flex flex-col absolute  w-56 lg:w-64  right-0 top-0 h-screen  gap-8 z-50 py-5 px-10">
                <IoCloseOutline
                onClick={() => setCart(false)}
                 className="mt-0 mb-8 text-3xl lg:text-4xl cursor-pointer" />
                <p> t   his is cart</p>
             </div>
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
