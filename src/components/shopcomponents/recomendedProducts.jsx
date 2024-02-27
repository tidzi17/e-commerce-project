import React from 'react'
import SelectedProducts from './selectedProductsComponent';
import { CartState } from '../../context/Context';

const RecomendedProducts = () => {
    const { state: { products } } = CartState();

    const newarrivals = products.slice(15, 26);

  return (
    <section>
      <SelectedProducts title="You might also like" data={newarrivals}/>
    </section>
  )
}

export default RecomendedProducts