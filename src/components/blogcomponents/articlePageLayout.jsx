import React, { useState }  from 'react'
import { useParams } from 'react-router-dom';
import articles from '../../data/blog.json';
import ArrowButton from '../arrowbutton';


const ArticlePageLayout = () => {
    const { id } = useParams();
    const [article] = useState(articles.find(article => article.id === id));

    if (!article) {
        return <div className='w-fit m-auto'><p className='text-black font-italiana m-auto text-8xl'>Article not found</p></div>;
    }

  return (
    <section className='w-full xl:w-10/12 m-auto flex flex-col items-left text-left gap-5 mb-20'>
      <div className='w-full h-[60vh] rounded-2xl'>
        <img src={article.url} alt={article.title} className='w-[100%] h-[100%] object-cover rounded-2xl'/>
      </div>
      <div >
      <div>
               <div className='flex gap-2 text-zinc-400 font-sans font-light text-sm'><p>{article.date} |</p><p> {article.author}</p></div>
                <p className='text-black mt-2 font-italiana text-3xl tracking-wider'>{article.title}</p>
                <p className='text-xl mt-2 font-junge mb-2'>{article.intro}</p>
               </div>
               <p className='mb-10'>{article.paragraphs}</p>
               <a href='/blog' ><ArrowButton text="Back to all articles"/></a> 
      </div>

    </section>
  )
}

export default ArticlePageLayout
