import React from 'react'
import bg from '../../assets/products.webp';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section>
        <div  className='w-10/12 h-[90vh] m-auto mb-10 flex flex-row items-center'>
            <div className='w-1/2 h-full rounded-2xl rounded-image'>
                <img src={bg} alt='' className='w-[100%] h-[100%] object-cover rounded-2xl'/>
            </div>
            <div className='w-1/2 h-full  flex flex-col justify-center px-5'>
            <div className=' h-fit mb-7'>
    <p className='text-xl font-junge'>Contact Us</p>
    <p className='text-3xl mb-2 font-italiana'>Get in Touch</p>
    <p className='text-lg font-junge text-zinc-700'>Have a question or feedback? Feel free to reach out to us! Our team is here to assist you with any inquiries and provide support. Whether it's a product inquiry, partnership opportunity, or just to say hello, we'd love to hear from you!</p>
</div>
                <div className='mt-5'>
                  <ContactForm /></div>
            </div>
        </div>
      
    </section>
  )
}
