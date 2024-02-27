import React from 'react'
import SelectedProducts from './selectedProductsComponent';
import { CartState } from '../../context/Context';

const NewArrivals = () => {
    const { state: { products } } = CartState();

    const newarrivals = products.slice(21, 31);

  return (
    <section>
      <SelectedProducts title="New arrivals" data={newarrivals}/>
    </section>
  )
}

export default NewArrivals
