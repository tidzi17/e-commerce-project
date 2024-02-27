import React, { useState, useEffect } from 'react'
import productsData from '../../data/products.json';
import image from '../../assets/38.png'

const HighlightedProduct = () => {
    const [randomProduct, setRandomProduct] = useState(null);
  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      const randomProd = productsData[randomIndex];
      setRandomProduct(randomProd);
    }, []); 
  
    return (
      <div className='w-full h-[80vh] flex  justify-between gap-5'>

  <div className="w-1/2 h-full rounded-3xl bg-beigeBanner/30">
          
  {randomProduct && (
            <div className='w-full h-full m-auto flex flex-col items-center justify-center '>
          <div className='w-3/5 h-1/2 flex items-center justify-center'>
            <img src={image} alt={randomProduct.name} className='w-[70%] h-[100%] '/>
          </div>

          <div className='flex flex-col gap-3 justify-center w-4/5'>
          <div className='w-full pb-2'><h2 className='text-2xl font-junge tracking-wider'>{randomProduct.title}</h2></div>
            <p className='text-secondaryGrey text-sm tracking-wider font-sans'>{randomProduct.pageDescription}</p>
            <p className='text-base font-junge'>Ingredients: <span>{randomProduct.ingredients}</span></p>
            <p className='font-junge  text-base'>Price: ${randomProduct.price}</p>
            <a href={`/products/${randomProduct.cathegory}/${randomProduct.id}`}>
            <button className='w-fit text-base border-[1px] border-black px-5 py-2 rounded-lg'>Shop Now</button>
            </a>
          </div>
          </div>
        )}
  </div>

  <div className="w-1/2 h-full rounded-3xl bg-beigeBanner/30">
          
          {randomProduct && (
                    <div className='w-full h-full m-auto flex flex-col items-center justify-center '>
                  <div className='w-3/5 h-1/2 flex items-center justify-center'>
                    <img src={image} alt={randomProduct.name} className='w-[70%] h-[100%] '/>
                  </div>
        
                  <div className='flex flex-col gap-3 justify-center w-4/5'>
                  <div className='w-full pb-2'><h2 className='text-2xl font-junge tracking-wider'>{randomProduct.title}</h2></div>
                    <p className='text-secondaryGrey text-sm tracking-wider font-sans'>{randomProduct.pageDescription}</p>
                    <p className='text-base font-junge'>Ingredients: <span>{randomProduct.ingredients}</span></p>
                    <p className='font-junge  text-base'>Price: ${randomProduct.price}</p>
                    <a href={`/products/${randomProduct.cathegory}/${randomProduct.id}`}>
                    <button className='w-fit text-base border-[1px] border-black px-5 py-2 rounded-lg'>Shop Now</button>
                    </a>
                  </div>
                  </div>
                )}
          </div>

          </div>
    );
  };

export default HighlightedProduct;
