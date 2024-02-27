import React from 'react'
import SingleProductDetails from '../components/shopcomponents/singleProduct'
import RecomendedProducts from '../components/shopcomponents/recomendedProducts'

const ProductPage = () => {
  return (
    <div>
      <SingleProductDetails />
      <div className='my-20'>
      <RecomendedProducts />
      </div>
    </div>
  )
}

export default ProductPage
