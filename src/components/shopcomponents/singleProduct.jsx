import React, { useState }  from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { AddToCartButton, AddToWishlist, RemoveFromCartButton, RemoveFromWishlist } from './buttons';
import { CartState } from "../../context/Context";
import deliveryIcon from '../../assets/icons/shipped.png';
import refundIcon from '../../assets/icons/product-return.png';
import qualityIcon from '../../assets/icons/service.png';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const SingleProductDetails = () => {


    const { id } = useParams();
    const { state: { cart, wishlist } } = CartState();
    const [product] = useState(products.find(product => product.id === id));
    const [selectedImage, setSelectedImage] = useState(product.urls[0]);

    const [showDescription, setShowDescription] = useState(true);
    const [showUsage, setShowUsage] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);



    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleUsage = () => {
        setShowUsage(!showUsage);
    };

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };
  
    if (!product) {
        return <div><p className='text-primaryBeige text-8xl'>Product not found</p></div>;
    }
    
    const isInCart = cart.some(p => p.id === product.id);
    const isInWishlist = wishlist.some(p => p.id === product.id);

    const changeImage = (e) => {
        setSelectedImage(e.target.getAttribute('src'));
      };

  return (
    <div className=''>
          <div className=' w-full px-3 lg:px-24  xl:px-44 pt-5 '>

       <div className=''>
      <div className='flex flex-col md:flex-row'>

        <div className='flex flex-col justify-between shadow-xl md:w-1/2 h-[500px] lg:h-[650px] rounded-xl '>
            <div className='flex items-center justify-center w-full h-[65%] border-[1px] border-black/20'>
                <img src={selectedImage} alt={product.title}
                className=' h-[100%]'
                />
            </div>
            <div className='w-full h-[32%]  grid grid-cols-3 gap-2'>
            {product.urls.map((url, index) => (
                <div key={index} className='h-full bg-primaryBeige flex items-center justify-center '>
                    <img
                        onClick={changeImage}
                        src={url}
                        alt={`Product ${index + 1}`}
                        className='h-[75%] w-[25%]'
                    />
                </div>
            ))}
            </div>
            {/* <img src={product.url} alt="" className='h-full'/> */}
        </div>

        <div className='md:w-1/2 text-zinc-900 flex flex-col md:justify-around md:px-10'>
            <div>
                <h1 className='font-junge mt-2 md:mt-0 text-xl md:text-2xl lg:text-3xl'>{product.title}</h1>
                <div><span>Stars</span></div>
                <p className='font-sans text-black/70  text-lg'>${product.price}</p>
                </div>

            <div className=' py-5 md:py-0 flex flex-col mt-3 md:mt-0 gap-1 md:gap-2  border-b-[1px] border-black md:border-none'>
            <p className='font-inter tracking-wider text-base'>{product.cardDescription}</p>
           <div className='font-inter text-black/70 text-base'>
           {!product.inStock ?
             <p>Out of Stock</p> 
             :
             <p>In Stock ({product.inStock})</p>
              
              }
             
           </div>
            </div>

            <div className='flex gap-2 h-fit  w-fit'>
           <div className='flex items-center justify-center gap-5'>
           <div className='  md:text-xl mt-7 md:mt-0'>
            {isInCart 
            ? <RemoveFromCartButton prod={product} addButtonStyle="bg-primaryBeige rounded-md h-10 px-4  text-xl font-junge text-zinc-200 border-[2px] border-transparent"/> 
            : <AddToCartButton prod={product} addButtonStyle="bg-black font-junge rounded-md h-10 px-4 text-xl text-zinc-200 border-[2px] border-transparent transform-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black"/>}
            </div>
            <div className='mt-auto border-2 border-black flex items-center justify-center h-10 px-4 rounded-md'>
                {isInWishlist
                ? <RemoveFromWishlist prod={product} addButtonStyle="text-black text-2xl" />
                : <AddToWishlist prod={product} addButtonStyle="text-black text-2xl" />
                }
            </div>
           </div>
            </div>
            <div className=' w-full h-[20%] grid grid-cols-3 gap-2 mt-2'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={deliveryIcon} alt='icon' />
                    <p className='text-base font-sans'>2-4 days delivery</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={refundIcon} alt='icon' />
                    <p className='text-base font-sans'>30 days refund</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={qualityIcon} alt='icon' />
                    <p className='text-base font-sans'>Best quality</p>
                </div>
            </div>
        </div>

      </div>

{/* Description section */}

      <div className=' w-full py-2 flex flex-col gap-3 mt-12'>
                        <div id='description' className='w-full h-fit  p-2  border-zinc-700  border-t-[1px] '>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleDescription}>
                                <p className='text-zinc-900 font-junge'>Description</p>
                                {showDescription ? <AiOutlineMinus className='cursor-pointer'/> : <AiOutlinePlus className='cursor-pointer'/>}
                            </div>
                            {showDescription && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-sans font-thin'>{product.pageDescription}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit  p-2  border-y-[1px] border-zinc-700'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleUsage}>
                                <p className='text-zinc-900 font-junge'>How to use</p>
                                {showUsage ? <AiOutlineMinus className='cursor-pointer hover:rotate-180'/> : <AiOutlinePlus className='cursor-pointer transform ease-in-out '/>}
                            </div>
                            {showUsage && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-sans font-thin'>{product.usage}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit   p-2 border-zinc-700  border-b-[1px]'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleIngredients}>
                                <p className='text-zinc-900 font-junge'>Ingredients</p>
                                {showIngredients ? <AiOutlineMinus className='cursor-pointer'/> : <AiOutlinePlus className='cursor-pointer'/>}
                            </div>
                            {showIngredients && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-sans font-thin'>{product.ingredients}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

      
           </div>
    </div>
  )
  
}

export default SingleProductDetails
