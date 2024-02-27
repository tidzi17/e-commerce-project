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
      <div className='w-full h-[30vh] md:h-[80vh] flex  flex-row justify-between gap-5 mb-10 md:mb-20'>

  <div className=" px-2 md:px-3 w-1/2 h-full rounded-3xl bg-beigeBanner/30">
          
  {randomProduct && (
            <div className='w-full h-full m-auto flex flex-col items-center justify-center '>
          <div className='w-3/5 h-1/2 flex items-center justify-center'>
            <img src={image} alt={randomProduct.name} className='w-[70%] h-[100%] '/>
          </div>

          <div className='flex flex-col gap-1 justify-center lg:w-4/5 h-1/2'>
          <div className='w-full pb-1'><h2 className='text-xl lg:text-2xl font-junge tracking-wider'>{randomProduct.title}</h2></div>
            <p className='md:flex hidden text-secondaryGrey text-xs lg:text-sm tracking-wider font-sans'>{randomProduct.pageDescription}</p>
            <p className='md:flex hidden text-xs lg:text-base font-junge'>Ingredients: <span>{randomProduct.ingredients}</span></p>
            <p className='md:flex hidden font-junge text-xs lg:text-base'>Price: ${randomProduct.price}</p>
            <a href={`/products/${randomProduct.cathegory}/${randomProduct.id}`}>
            <button className='w-fit text-xs lg:text-base border-[1px] border-black px-2 md:px-5 py-1 mdpy-2 rounded-lg'>Shop Now</button>
            </a>
          </div>
          </div>
        )}
  </div>

  <div className=" px-2 md:px-3 w-1/2 h-full rounded-3xl bg-beigeBanner/30">
          
          {randomProduct && (
                    <div className='w-full h-full m-auto flex flex-col items-center justify-center '>
                  <div className='w-3/5 h-1/2 flex items-center justify-center'>
                    <img src={image} alt={randomProduct.name} className='w-[70%] h-[100%] '/>
                  </div>
        
                  <div className='flex flex-col gap-1 justify-center lg:w-4/5 h-1/2'>
                  <div className='w-full pb-1'><h2 className='text-xl lg:text-2xl font-junge tracking-wider'>{randomProduct.title}</h2></div>
                    <p className='md:flex hidden text-secondaryGrey text-xs lg:text-sm tracking-wider font-sans'>{randomProduct.pageDescription}</p>
                    <p className='md:flex hidden text-xs lg:text-base font-junge'>Ingredients: <span>{randomProduct.ingredients}</span></p>
                    <p className='md:flex hidden font-junge text-xs lg:text-base'>Price: ${randomProduct.price}</p>
                    <a href={`/products/${randomProduct.cathegory}/${randomProduct.id}`}>
                    <button className='w-fit text-xs lg:text-base border-[1px] border-black px-2 md:px-5 py-1 mdpy-2 rounded-lg'>Shop Now</button>
                    </a>
                  </div>
                  </div>
                )}
          </div>
        

          </div>
    );
  };

export default HighlightedProduct;
