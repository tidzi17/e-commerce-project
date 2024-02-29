import React, { useState, useEffect } from 'react';
import bg from '../assets/face.webp';
import { IoCloseOutline } from "react-icons/io5";

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); 
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleClose = () => {
      setIsOpen(false);
    };

  return (
    <>
      {isOpen && (
        <div
        style={{zIndex: "9998"}}
         className="fixed flex items-center justify-center top-0 left-0 bg-black/70 w-[100%] h-[100%]"  >
          <div
          style={{zIndex: "9999"}}
           className="relative w-11/12 md:w-1/2 h-1/2 md:h-2/3 bg-[#F9F1E6] flex "
           >
            <div className='w-1/2 h-full'>
                <img src={bg} alt='' className='w-[100%] h-[100%] object-cover'/>
            </div>
            
            <div className='w-1/2 h-full px-5'>
            <div onClick={handleClose} className='w-fit mt-2  cursor-pointer float-right right-10 text-2xl'><IoCloseOutline /></div>
            <div className='flex flex-col h-full items-center justify-center self-center'>
                <h2 className='text-4xl font-italiana'>Join our family</h2>
                <p className='text-center text-zinc-600 font-sans font-thin'>Be first one to find out latest beauty news, offers and promos.</p>
                <input
                  placeholder='Email adress'
                  className='w-full h-8 placeholder:font-thin pl-1 mt-5'/>
                <button
                className='w-full mt-1 h-8 bg-black text-white font-sans font-thin uppercase'
                >Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUp
