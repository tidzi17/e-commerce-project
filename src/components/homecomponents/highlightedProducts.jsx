import React, { useState, useEffect } from 'react'
import productsData from '../../data/products.json';

const HighlightedProduct = () => {
    const [randomProduct, setRandomProduct] = useState(null);
  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * productsData.length);
      const randomProd = productsData[randomIndex];
      setRandomProduct(randomProd);
    }, []); 
  
    return (
      <div className='w-full h-[80vh] flex justify-between gap-5'>

  <div className="w-1/2 h-full rounded-3xl bg-beigeBanner/30">
          
  {randomProduct && (
            <div className='w-full h-full m-auto flex '>
          <div className='w-3/5 flex items-center justify-center'>
            <img src={randomProduct.url} alt={randomProduct.name} className='w-[90%] h-[90%] '/>
          </div>

          <div className='flex flex-col gap-3 justify-center w-4/5'>
          <div className='w-full border-b-[1px] border-black pb-2'><h2 className='text-2xl'>{randomProduct.title}</h2></div>
            <p className='text-secondaryGrey text-sm tracking-wider'>{randomProduct.pageDescription}</p>
            <p className='text-base '>Ingredients: <span>{randomProduct.ingredients}</span></p>
            <p className='font-bold text-base'>Price: ${randomProduct.price}</p>
            <button className='w-fit text-base border-[1px] border-black px-3 py-2 rounded-lg'>Shop Now</button>
          </div>
          </div>
        )}
  </div>

  <div className="w-1/2 h-full rounded-3xl bg-beigeBanner/40">
          
          {randomProduct && (
                    <div className='w-full h-full m-auto flex '>
                  <div className='w-3/5 flex items-center justify-center'>
                    <img src={randomProduct.url} alt={randomProduct.name} className='w-[90%] h-[90%] '/>
                  </div>
        
                  <div className='flex flex-col gap-3 justify-center w-4/5'>
                  <div className='w-full border-b-[1px] border-black pb-2'><h2 className='text-2xl'>{randomProduct.title}</h2></div>
                    <p className='text-secondaryGrey text-sm tracking-wider'>{randomProduct.pageDescription}</p>
                    <p className='text-base '>Ingredients: <span>{randomProduct.ingredients}</span></p>
                    <p className='font-bold text-base'>Price: ${randomProduct.price}</p>
                    <button className='w-fit text-base border-[1px] border-black px-3 py-2 rounded-lg'>Shop Now</button>
                  </div>
                  </div>
                )}
          </div> 
          </div>
    );
  };

export default HighlightedProduct;
