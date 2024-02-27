import React from 'react'
import SelectedProducts from './selectedProductsComponent';
import { CartState } from '../../context/Context';

const TrendingProducts = () => {
    const { state: { products } } = CartState();

    const newarrivals = products.slice(15, 26);

  return (
    <section className='mt-20'>
      <SelectedProducts title="Trending Products" data={newarrivals}/>
    </section>
  )
}

export default TrendingProducts