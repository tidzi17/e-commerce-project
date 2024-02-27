import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaPinterestP, FaFacebookF, FaInstagram     } from "react-icons/fa6";


export default function Footer() {

    const socialIcons = [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
        { icon: <FaXTwitter />, link: 'https://twitter.com/' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
        { icon: <FaPinterestP />, link: 'https://www.pinterest.com/' },
      ];

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
        {
            label: "Wishlist",
            link: "/wishlist"
        },
        {
            label: "Cart",
            link: "/cart"
        }
    ]

  return (
    <footer className='px-2 md: mb-[70px] w-full h-full md:mb-2'>
        <div className='w-full h-[60vh] bg-black rounded-2xl px-5 py-5'>
      <div className='w-full h-[90%] flex flex-col gap-5 items-center justify-center m-auto'>
        <p className='text-8xl text-white font-inter uppercase tracking-widest font-bold'>Purely.</p>
      
        <div className='flex items-center gap-5'>
        {navlinks.map((d, i) => 
                 <a key={i} href={d.link} className="no-underline text-white font-light  font-inter uppercase text-lg transform duration-300 ease-in-out hover:scale-95 tracking-widest ">{d.label}</a>
                 )}
        </div>
        <div className='flex item-center gap-5'>
     {socialIcons.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="mb-2 transform-all duration-500 ease-in-out bg-zinc-800 text-white hover:bg-white hover:text-zinc-800 inline-block rounded-full p-3 text-sm font-medium uppercase leading-normal  shadow-md transition  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            {social.icon}
          </button>
        </a>
      ))}
        </div>
      </div>
      <div className="w-full mt-auto border-t-[1px] border-zinc-300 m-auto flex items-center pt-2">
     <p className="m-auto text-sm lg:text-base font-sans text-zinc-500">&copy;Designed & Developed by <span className="font-bold text-lg md:text-xl">t.</span></p>
        </div>
        </div>
    </footer>
  )
}




