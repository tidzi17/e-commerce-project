import React from 'react'
import HomeSlider from '../components/homeSlider'
import PopularCathegories from '../components/popularCathegories'
import TrendingProducts from '../components/shopcomponents/selectedProducts'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <PopularCathegories />
      <TrendingProducts />
    </>
  )
}

export default Home
