import React from 'react'
import articles from '../../data/blog.json';
import ArrowButton from '../arrowbutton';

export default function SubSection() {
  return (
    <div className='w-full h-[120vh] md:h-[80vh] flex md:flex-row flex-col justify-between gap-5 mb-10'>

    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between rounded-3xl bg-black/10 p-4">
        <div className='mt-3 md:mt-7 h-fit'>
            <p className='text-base lg::text-xl font-junge'>Explore</p>
            <p className='text-2xl lg:text-3xl mb-2 font-italiana'>Read our Blog</p>
            <p className='text-xs lg:text-lg font-junge text-zinc-700'>Dive into our blog for insightful articles, expert tips, and skincare trends. Discover the latest in beauty, wellness, and self-care, crafted to inspire and elevate your skincare journey.</p>
        </div>
        <div className='w-full h-[70%]  flex flex-col gap-2'>
            <div className='w-full h-full  gap-2 flex '>
            {articles.slice(0, 2).map((article, i) => (
                <div key={i} className='w-1/2 h-full  gap-1 flex flex-col'>
                     <a href={`/blog/${article.id}`} className='w-[90%] h-[70%] rounded-2xl'>
                    <div className='w-full h-full rounded-2xl'>
                        <img src={article.url} alt={article.title} className='rounded-2xl w-[100%] h-[100%] object-cover'/>
                    </div>
                    </a>
                    <div className='mt-2 left-4'>
                        <p className='font-junge text-xs lg:text-xl md:mb-2'>{article.title}</p>
                        <a href={`/blog/${article.id}`}>
                        <ArrowButton text="Read more..." />
                        </a>
                    </div>
                </div>
                 ))}
            </div>
           
        </div>
 
    </div>

    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center px-10  ">
        <h1 className='text-3xl lg:text-5xl mb-2 font-italiana tracking-widest uppercase'>Subscribe</h1>
        <p className='text-xs lg:text-base text-center mb-5 font-junge text-zinc-600'>Stay updated with our latest news, exclusive offers, and skincare tips. Join our community today for a radiant journey towards healthier, glowing skin.</p>
        <input type="email" placeholder='Enter your e-mail address' className='w-full border-[1px] border-black px-2 py-3'/>
        <button  className='w-full border-[1px] border-transparent bg-black text-white px-2 py-3 mt-2 text-sm lg:text-base  uppercase tracking-wider font-mono'>Subscribe</button>
    </div>
  
            </div>
  )
}
