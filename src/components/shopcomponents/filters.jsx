import React from 'react'
import { CartState } from '../../context/Context';
import Rating from './ratings';

const Filters = () => {
    const {
        productState: {byRating, sort},
         productDispatch} = CartState();

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        productDispatch({
          type: 'SORT_BY_PRICE',
          payload: selectedOption === 'Increase' ? 'lowToHigh' : 'highToLow'
        });
      };

  return (
    <div className='flex flex-col gap-10'>
        <div >
  <h5 className='text-base uppercase'>Price</h5>
  <select value={sort === 'lowToHigh' ? 'Increase' : 'Decrease'}
   onChange={handleSortChange}
    className='mt-5 pb-2 px-5 bg-transparent w-full border-b-[1px] border-white text-base'>
 <option value='Increase'>Increase</option>
<option value='Decrease'>Decrease</option>
  

</select>
</div>

<div >
                        <h5 className='text-base uppercase mb-2'>Ratings</h5>
                        <Rating rating={byRating}
                        onClick={(i) => productDispatch({
                        type: 'FILTER_BY_RATING',
                        payload: i + 1,
                        })}
                        className="cursor-pointer"/>

                        </div>

                        <div>

<button className='bg-black px-2 py-2 text-white'
onClick={() => 
    productDispatch({
        type: 'CLEAR_FILTERS'
    })
}>Remove filters</button>
</div>
        </div>       

      
    
  )
}

export default Filters
