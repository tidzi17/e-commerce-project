import React from 'react'
/* import articles from '../../data/blog.json'; */
import ArrowButton from '../arrowbutton';


const BlogLayout = ( {articleFirst, articlesSecond} ) => {
  return (
    <div className='w-full m-auto'>
      <div className='w-full m-auto h-[90vh] flex gap-2'>
        <div className='w-1/2 h-full flex flex-col'>
            {articleFirst.map((article, i) => (
                <div key={i} className='w-full h-full'>
               <a href={`/blog/${article.id}`}>
               <div className='w-full h-[60%] rounded-2xl'>
                    <img src={article.url} alt={article.title} className='w-[100%] h-[100%] object-cover rounded-2xl'/>
                </div>
               </a>
               <div className='ml-2'>
               <div className='flex gap-2 text-zinc-400 font-sans font-light text-sm'><p>{article.date} |</p><p> {article.author}</p></div>
                <p className='text-black mt-2 font-italiana text-3xl tracking-wider'>{article.title}</p>
                <p className='text-sm mt-2 font-junge mb-2'>{article.intro}</p>
               <a href={`/blog/${article.id}`} ><ArrowButton text="Read all"/></a> 
               </div>
                </div>
                
            ))}
        </div>
        <div className='w-1/2 h-full flex flex-col gap-2'>
        {articlesSecond.map((article, i) => (
                <div key={i} className=' h-1/3 flex'>

                  <a href={`/blog/${article.id}`} className='h-[90%] w-[45%]'>
                  <div className='h-full w-full rounded-2xl'>
                    <img src={article.url} alt={article.title} className='w-[100%] h-[100%] object-cover rounded-2xl'/>
                </div>
                  </a>

               <div className='flex flex-col w-[50%] text-xs ml-5'>
                <p className='text-black mt-2 font-italiana text-xl tracking-wider'>{article.title}</p>
                <div className='flex gap-2 text-zinc-400 font-sans font-light text-xs'><p>{article.date} |</p><p> {article.author}</p></div>
                <p className='text-xs mt-2 font-junge mb-2'>{article.intro}</p>
                <a href={`/blog/${article.id}`} ><ArrowButton text="Read all"/></a> 
               </div>
                </div>
                
            ))}
        </div>
      </div>

    </div>
  )
}

export default BlogLayout
