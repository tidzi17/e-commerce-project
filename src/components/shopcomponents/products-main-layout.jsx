import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './productCard';
import { useNavigate } from 'react-router-dom'; 
import { CartState } from '../../context/Context';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCloseOutline } from 'react-icons/io5'
import clsx from 'clsx';

const ProductsLayout = () => {
  const { state: { products }} = CartState();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ filtersOpen, setFilters ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate(); 
  const { category } = useParams(); 

  useEffect(() => {
    if (category) {
      setSelectedCategory(category); 
    }
  }, [category]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setCurrentPage(1); 
    navigate(`/products/${newCategory}`, { replace: true }); 
  };

  const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(prod => prod.cathegory === (category || selectedCategory));


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

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`bg-secondaryBeige text-base px-3 font-sans py-1 rounded-md mx-1 text-black ${currentPage === i ? 'bg-white' : ''}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='mb-10 py-5 lg:py-14 w-full h-auto'>
      <div className='w-full h-auto flex flex-col  justify-between'>

     {/* FILTERS */}
      <div onClick={() => setFilters(true)} className='cursor-pointer flex items-center mt-5 mb-6 gap-5'>
       <h4 className='font-sans font-light text-2xl text-black'>Filter Products</h4>
     <span className='text-2xl text-black'><HiOutlineAdjustmentsHorizontal /></span>
       </div>

       <div className={clsx("fixed h-full -translate-x-full transition-all w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 z-40", filtersOpen && 'translate-x-0')}>
             <div className="text-black bg-white flex flex-col absolute w-56 lg:w-64 left-0 top-0 h-screen p-10 gap-8 z-50 ">
                <IoCloseOutline
                onClick={() => setFilters(false)}
                 className="mt-0 mb-8 text-3xl lg:text-4xl cursor-pointer" />
                <div className='flex mt-16  justify-between w-full'>
<span className='text-2xl'><HiOutlineAdjustmentsHorizontal /></span>
</div>



<div >
  <h5 className='text-base uppercase'>Select Cathegory</h5>
  <select value={selectedCategory} onChange={handleCategoryChange} className='mt-5 pb-2 px-5 bg-transparent w-full border-b-[1px] border-white text-base'>
  <option className='text-black' value="all">All</option>
  <option className='text-black' value="face">Face</option>
  <option className='text-black' value="hair">Hair</option>
  <option className='text-black' value="body">Body</option>

</select>
</div>

<div >
  <h5 className='text-base uppercase'>Price</h5>
  <select value={selectedCategory} onChange={handleCategoryChange} className='mt-5 pb-2 px-5 bg-transparent w-full border-b-[1px] border-white text-base'>
  <option className='text-black' value="all">Incrase</option>
  <option className='text-black' value="face">Dicrase</option>
  

</select>
</div>

<div >
  <h5 className='text-base uppercase'>Ratings</h5>
  <select value={selectedCategory} onChange={handleCategoryChange} className='mt-5 pb-2 px-5 bg-transparent w-full border-b-[1px] border-white text-base'>
  <option className='text-black' value="all">Incrase</option>
  <option className='text-black' value="face">Dicrase</option>
</select>
</div>
             </div>
        </div>

       {/* PRODUCTS LAYOUT */}
      <div className='w-full flex flex-col'>
        <div className='w-fit flex flex-col justify-center m-auto'>
          <div className='flex flex-wrap gap-1 md:gap-5 justify-between   min845:justify-start items-left m-auto'>
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
         <div className=' flex items-center w-fit m-auto mt-10'>
            <button onClick={prevPage} disabled={currentPage === 1} className="bg-primaryBeige/80 px-2 py-1 rounded-md font-sans text-base uppercase">Previous</button>
            <span >{renderPageNumbers()}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages} className="bg-primaryBeige/80 px-2 py-1 rounded-md font-sans text-base uppercase">Next</button>
          </div>
        </div>
      </div>



      </div>
    </div>
  )
}

export default ProductsLayout;

