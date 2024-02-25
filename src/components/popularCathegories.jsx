import React from 'react'
import image from '../../src/assets/firstslide.webp'


const PopularCathegories = () => {
  return (
    
    <div className='px-2 mt-20 mb-36'>
        <div><h2 className='font-inter uppercase tracking-wider text-base md:text-xl  xl:text-2xl mb-3'>Popular Cathegories</h2></div>
        <div className='flex items-center justify-between gap-3'>
          {cardsdata.map((d, i) => (
            <div key={i} className='relative w-full h-[150px] md:h-[300px] xl:h-[400px] bg-primaryGrey'>
                <img src={d.url}  className=' w-[100%] h-[100%] object-cover' alt={d.title}/>

                <div className='h-fit absolute top-[40%] md:top-[60%] left-0 pl-2 flex flex-col gap-1'>
                    <p className='uppercase tracking-wide md:tracking-widest font-normal md:font-medium text-sm md:text-base xl:text-xl text-zinc-200'>{d.title}</p>
                    <a href={d.link} className='no-underline'>
                        <button
                        className=' text-white text-xs  md:text-sm  xl:text-lg border-[1px] border-black py-1 px-1 md:py-2 md:px-3 bg-black/50'
                        >Shop now</button>
                        </a>
                </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default PopularCathegories

const cardsdata = [
    {
        title: "hand bags",
        link: "/products",
        url: `${image}`
    },
    {
        title: "purses",
        link: "/products",
        url: `${image}`
    },
    {
        title: "large bags",
        link: "/products",
        url: `${image}`
    },
]
