import React, { useState } from 'react';

import ProductCard from './productCard';
import { useNavigate } from 'react-router-dom'; 
import { CartState } from '../../context/Context';


const ProductsLayout = () => {
  const { state: { products  }} = CartState();
  const [selectedCategory, setSelectedCategory] = useState('all');
 
  const navigate = useNavigate(); 

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigate(`/products/${category}`, { replace: true }); 
  };


  const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(prod => prod.cathegory === selectedCategory);

  return (
    <div  className='mb-10  md:gap-5 px-3 py-14 md:py-36  lg:px-10 xl:px-32 '>
      <div>
      <div className='w-full flex justify-between text-zinc-800  mb-4 '>
            <p className='text-xl md:text-2xl'>Filter products</p>

            <select value={selectedCategory} onChange={handleCategoryChange} className='rounded-lg px-2 bg-zinc-200 text-lg md:text-xl'>
              <option value="all">All</option>
              <option value="hand purse">Hand</option>
              <option value="large purse">Large</option>
              <option value="small purse">Small</option>
              <option value="pink purse">Pink</option>
            </select>
        
      </div>
      <div className='w-full flex justify-center  m-auto '>
    <div className='flex flex-wrap  justify-between  min845:justify-start items-left m-auto'>
    {
            filteredProducts.map((prod) => {
               return <ProductCard
                prod={prod}
                 key={prod.id}
                 containerClassName="border-transparent shadow-zinc-300 shadow-lg m-2"
                imageContainerClassName="shadow-zinc-200 shadow-lg border-[1px]"
                titleClassName="text-zinc-800"
                priceClassName="text-zinc-700"
                />
            })
        }
    </div>
   </div>
      </div>
    
    </div>
  )
}

export default ProductsLayout