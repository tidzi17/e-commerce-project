import React, { useState, useRef } from 'react'
import { formSchema } from './formSchema';
import axios from 'axios';
import { useFormik } from 'formik';
import { IoCloseOutline } from "react-icons/io5";
import bg from '../../assets/pexels-photo-3851905.webp'

function ContactForm() {

  const [isSubmitted, setIsSubmitted] = useState(false);
    const messageBoxRef = useRef(null);

    const onSubmit = async (values, actions) => {
        try {
            await axios.post("https://formspree.io/f/xbjnypla", values);
            actions.setSubmitting(false);
            actions.resetForm();
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            actions.setSubmitting(false);
        }
    };

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: formSchema,
        onSubmit: onSubmit,
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit();
    };

  return (
    <div className='w-full'>
      <form onSubmit={handleFormSubmit} autoComplete="off" className='w-full flex flex-col gap-5'>
      
      <div className='w-full relative'>
      <input
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
         type="text"
         name="name"
         id="name"
        placeholder='Your First and Last Name'
         className='placeholder-black w-full placeholder:font-junge pb-5 bg-transparent outline-none border-b-[1px] border-black'
         />
         {errors.name && touched.name && <p className="absolute bottom-[-1px] text-black  text-sm font-bold">{errors.name}</p>}
      </div>
        
       <div className='w-full relative'>
       <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        name="email"
        id="email"
        placeholder='Your E-mail'
         className='placeholder-black w-full placeholder:font-junge pb-5 bg-transparent outline-none border-b-[1px] border-black'
         />
          {errors.email && touched.email && <p className="absolute bottom-[-1px] text-black text-sm font-bold">{errors.email}</p>}
       </div>
      
       <div className='w-full h-32 relative'>
       <textarea
       value={values.message}
       onChange={handleChange}
       onBlur={handleBlur}
       type="message"
       name="message"
       id="message"
        placeholder='Your Message'
        className='placeholder-black placeholder:font-junge pb-5 bg-transparent resize-none outline-none border-b-[1px] border-black h-full w-full'
         />
         {errors.message && touched.message && <p className="absolute bottom-[-1px] text-black text-sm font-bold">{errors.message}</p>}
       </div>


         <button
         disabled={isSubmitting} type="submit"
         className='rounded-xl border-[1px] border-transparent bg-black text-white transform-all ease-in-out duration-500 hover:bg-transparent hover:border-black hover:text-black  w-fit px-10 py-2 text-base font-junge'>
          Submit
         </button>
      </form>
      {isSubmitted && (
                   <div ref={messageBoxRef} onClick={() => setIsSubmitted(false)}
                          style={{zIndex: "9998"}}
                          className="fixed flex items-center justify-center top-0 left-0 bg-black/70 w-[100%] h-[100%]"  >
                            <div
                            style={{zIndex: "9999"}}
                            className="relative w-11/12 md:w-1/2 h-1/2 md:h-2/3 bg-[#F9F1E6] flex "
                            >
                              <div className='w-1/2 h-full'>
                                  <img src={bg} alt='' className='w-[100%] h-[100%] object-cover'/>
                              </div>
            
            <div className='w-1/2 h-full px-5'>
            <div onClick={() => setIsSubmitted(false)} className='w-fit mt-2  cursor-pointer float-right right-10 text-2xl'><IoCloseOutline /></div>
            <div className='flex flex-col h-full items-center justify-center self-center'>
                <h2 className='text-2xl md:text-4xl text-cennter font-italiana'>Message Recieved!</h2>
                <p className='text-xs md:text-base text-center text-zinc-600 font-sans font-thin'>Thank you for taking time to send us a meesage! Our team will respond you as quiclky as possible!  </p>
            </div>
            </div>
          </div>
        </div>
            )}
      
    </div>
  )
}

export default ContactForm
