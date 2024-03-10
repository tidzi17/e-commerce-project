import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating, onClick, className}) => {
  return (
    <div className='flex'>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} className={className} >
            {rating > i 
            ? (
                <AiFillStar fontSize="15px" />
            ) 
            : (
                <AiOutlineStar fontSize="15px"/>
            )
            }
        </span>
      ))}
    </div>
  )
}

export default Rating