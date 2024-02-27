import React from 'react'
import articles from '../../data/blog.json'
import BlogLayout from './layout'

const PopularArticles = () => {
    const dataFirst = articles.slice(0, 1); 
    const dataSecond = articles.slice(2, 5); 

    const dataThird = articles.slice(6, 7); 
    const dataForth = articles.slice(7, 10);

    const dataFifth = articles.slice(11, 12); 
    const dataSixt = articles.slice(13, 16);

  return (
    <section className='w-11/12 m-auto mb-10'>
      <h2 className='text-5xl font-italiana tracking-wider text-black mb-5 '>Popular articles</h2>
      <BlogLayout articleFirst={dataFirst} articlesSecond={dataSecond}/>
      <BlogLayout articleFirst={dataThird} articlesSecond={dataForth}/>
      <BlogLayout articleFirst={dataFifth} articlesSecond={dataSixt}/>
    </section>
  )
}

export default PopularArticles
