import React from 'react'
import bg from '../../assets/Screenshot_3.png';
import bgVideo from '../../assets/media/commercevideo.mp4';


function SkincareVideo() {
  return (
    <section className='w-full h-[50vh] md:h-[85vh] rounded-3xl mb-10'>
        <video src={bgVideo} type="video/mp4" controls={false} autoPlay loop muted playsInline
         className="rounded-3xl w-[100%] h-[100%] object-cover" alt="Background" />
   {/*  <img src={bg} alt='' className='rounded-3xl w-[100%] h-[100%] object-cover'/> */}
    </section>
  )
}

export default SkincareVideo
