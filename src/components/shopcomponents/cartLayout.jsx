import React, { useState, useEffect } from 'react'
import { CartState } from '../../context/Context'
import { TfiClose } from "react-icons/tfi";
import ArrowButton from '../arrowbutton';

const CartLayout = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();

      const [total, setTotal] = useState();
    
      useEffect(() => {
        const newTotal = cart.reduce(
          (acc, curr) => acc + parseFloat(curr.price) * curr.qty,
          0
        );
        setTotal(newTotal.toFixed(2)); 
      }, [cart]);

  return (
    <section className='py-10 mb-10'>
      <div>
          {cart.length > 0
          ?
          <div>
           <h3 className="uppercase font-italiana tracking-wider text-2xl md:text-2xl">Your cart ({cart.length}) items</h3>
           <div className=' w-full xl:w-11/12   m-auto mt-10 flex flex-col md:flex-row gap-5'>

<div className='flex flex-col w-full md:border-r-[1px] md:border-black'>
<div className='w-full  flex flex-col justify-between  h-full  md:px-6'>
 {cart.map((prod) => (
       <div key={prod.id} className="border-b-[1px] border-zinc-500 px-1" >
         <div className="flex items-center justify-between h-[180px] md:h-[140px]">
           <button onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              } ><TfiClose className="text-2xl"/></button>
           <div className="h-full">
           <a  href={`/products/${prod.cathegory}/${prod.id}`} className="flex items-center justify-center h-full mr-5 md:mr-0 ">
             <img src={prod.urls[0]} alt={prod.title} className="h-[80%] " />
             {/* className="w-[130px] md:w-[120px]"  */}
           </a>
           </div>

           <div className="flex flex-col md:flex-row gap-3 sm:min-w-[20%]  md:justify-between md:w-[90%] xl:w-[70%]">
             
           <div className="">
             <span className="text-zinc-800 ">{prod.title}</span>
           </div>

          
          <div className="text-zinc-800">${prod.price}</div>
          
         <div className="flex gap-4 items-center">
         <div >
          <select
            as="select"
            value={prod.qty}
            className="bg-transparent font-sans font-thin border-b-[1px] border-black pb-1 outline-none w-14 xl:w-20 px-1"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: {
                  id: prod.id,
                  qty: e.target.value,
                },
              })
            }
          >
            {[...Array(prod.inStock).keys()].map((x) => (
              <option className=""
               key={x + 1} >{x + 1}</option>
            ))}
          </select>
          </div>
          <div >

          </div>
         </div>

          </div>
           </div>

         </div>
       
     ))}
     {/* COUPON */}

 </div>
 <div className='bottom-0 left-0 w-full h-fit mt-10'>
       <h3 className='font-sans font-thin text-base md:text-2xl'>Have a coupon? Enter your code.</h3>
       <div className='flex w-full mt-10 gap-5'>
           <input
            placeholder='Try HIREME11'
            className='outline-none bg-transparent border-b-[1px] border-black w-1/3 md:h-7 '/>
           <button

           className='font-sans font-thin uppercase border-[1px] border-black outline-none text-sm md:text-xl px-6'
           >Apply</button>
       </div>
     </div>
</div>

     <div className=' md:w-[45%] lg:w-[35%]  h-[500px] flex justify-around flex-col'>
       <h2 className='font-sans uppercase text-2xl'>Cart totals</h2>
       <div className='flex flex-col gap-6'>
           <div className=' text-base text-zinc-700 font-sans border-t-[1px] border-b-2 border-black flex flex-col gap-4 py-6'>
           <div className='flex justify-between'>
               <p>Shipping and Delivery</p>
               <p className='font-medium'>Free</p>
           </div>

           <div className='flex justify-between'>
               <p>TAX</p>
               <p className='font-medium'>$0</p>
           </div>
           <div className='flex justify-between'>
               <p>Subtotal</p>
               <p className='font-medium'>${total}</p>
           </div>
           </div>
           <div className='flex w-full justify-between font-sans text-lg'>
           <p>Total:</p>
           <p className='font-medium'>${total}</p>
       </div>

       </div>

       <div className='flex flex-col items-center w-full'>
       <button
       disabled
       className='bg-black mb-2 w-full text-white text-lg uppercase font-sans font-thin tracking-wide py-2'
       >Checkout</button>

       
       <ArrowButton text="Continue Shopping"/></div>
     </div>
 </div>
           </div>
        :<div className="mt-10">
          <h3 className="uppercase font-italiana tracking-wider text-2xl"> Your cart is empty </h3>
          <a href="/products" className="uppercase font-italiana tracking-wider text-xl underline">Browse products</a>
          </div>}
        </div>

    </section>
  )
}

export default CartLayout
