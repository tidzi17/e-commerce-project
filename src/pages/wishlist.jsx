import React from 'react'
import WishlistLayout from '../components/shopcomponents/wishlist-layout'
import TrendingProducts from '../components/shopcomponents/trendingProducts'
import RecomendedProducts from '../components/shopcomponents/recomendedProducts'

const Wishlist = () => {
  return (
    <div>
      <WishlistLayout />
      <div className='mt-44'>
        <TrendingProducts />
      </div>
    </div>
  )
}

export default Wishlist
