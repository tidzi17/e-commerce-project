import React, { useState } from 'react';
import ProductCard from './productCard';
import { useNavigate } from 'react-router-dom'; 
import { CartState } from '../../context/Context';

const ProductsLayout = () => {
  const { state: { products }} = CartState();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const navigate = useNavigate(); 

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setCurrentPage(1); // Reset current page when changing categories
    navigate(`/products/${category}`, { replace: true }); 
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(prod => prod.cathegory === selectedCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='mb-10 gap-1 md:gap-5 px-3 py-14 md:py-36 lg:px-10 xl:px-32'>
      <div>
        <div className='w-full flex justify-between text-zinc-800 mb-4'>
          <p className='text-xl md:text-2xl'>Filter products</p>
          <select value={selectedCategory} onChange={handleCategoryChange} className='rounded-lg px-2 bg-zinc-200 text-lg md:text-xl'>
            <option value="all">All</option>
            <option value="face">Face</option>
            <option value="hair">Hair</option>
            <option value="body">Body</option>

          </select>
        </div>
        <div className='w-full flex flex-col justify-center m-auto'>
          <div className='flex flex-wrap gap-1 md:gap-5 justify-between min845:justify-start items-left m-auto'>
            {currentProducts.map((prod) => (
              <ProductCard
                prod={prod}
                key={prod.id}
                containerClassName="border-transparent shadow-zinc-300 shadow-lg m-2"
                imageContainerClassName="shadow-zinc-200 shadow-lg border-[1px]"
                titleClassName="text-zinc-800"
                priceClassName="text-zinc-700"
              />
            ))}
          </div>
          <div className='pagination text-black'>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsLayout;
