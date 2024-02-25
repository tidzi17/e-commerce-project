import { Carousel } from 'flowbite-react';

import React from 'react';

const HomeSlider = () => {

  const slides = [
    {
      id: 1,
      text: 'First slide',
      caption: {
        title: 'First slide label',
        content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      }
    },
    {
      id: 2,
      text: 'Second slide',
      caption: {
        title: 'Second slide label',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    },
    {
      id: 3,
      text: 'Third slide',
      caption: {
        title: 'Third slide label',
        content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    }
  ];

  const images = [

    'https://via.placeholder.com/800x400',
    'https://via.placeholder.com/800x400',
    'https://via.placeholder.com/800x400'

  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">

      <div className="relative w-full h-[30vh] md:h-[50vh] xl:h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              index === activeIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={getRandomImage()} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={handlePrev}
      >
        {/* Previous button */}
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={handleNext}
      >
        {/* Next button */}
      </button>

    </div>

  );
};

export default HomeSlider;




