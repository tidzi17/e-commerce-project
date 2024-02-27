import ProductCard from './productCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartState } from '../../context/Context';


const SelectedProducts = ( { title, data }) => {

  const { state: { products } } = CartState();

    const settings = {
        dots: false,
        infinite: true, 
        speed: 500, 
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 510,
                settings: {
                  slidesToShow: 2,
                },
              },
          ],
       
    };

  return (
    <div className='w-full px-2 mb-20 '>
        <div>
        <h2 className='font-inter uppercase tracking-wider text-base md:text-xl  xl:text-2xl mb-3'>{title}</h2>
        </div>
      
       <Slider {...settings} className='w-full ml-0 md:ml-2  flex justify-between items-center mt-2'>
        {
            data.map((prod) => {
               return <ProductCard
                prod={prod}
                key={prod.id}
                />
            })
        }
        </Slider>
       
   
      
    </div>
  )
}

export default SelectedProducts