import React from 'react'

function ContactForm() {
  return (
    <div className='w-full'>
      <form className='w-full flex flex-col gap-5'>
       <input
        type='text'
        name='Name'
        placeholder='Your First and Last Name'
         className='placeholder-black placeholder:font-junge pb-5 bg-transparent outline-none border-b-[1px] border-black'
         />
        
        <input
        type='email'
        name='email'
        placeholder='Your E-mail'
         className='placeholder-black placeholder:font-junge pb-5 bg-transparent outline-none border-b-[1px] border-black'
         />
      
        <textarea
        placeholder='Your Message'
        className='placeholder-black placeholder:font-junge pb-5 bg-transparent resize-none outline-none border-b-[1px] border-black h-32'
         />
         <button
         type='submit'
         className='rounded-xl border-[1px] border-transparent bg-black text-white transform-all ease-in-out duration-500 hover:bg-transparent hover:border-black hover:text-black  w-fit px-10 py-2 text-base font-junge'>
          Submit
         </button>
      </form>
      
    </div>
  )
}

export default ContactForm
