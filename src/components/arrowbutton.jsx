import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const ArrowButton = ({ text, textColor,  onClick }) => {
    return (
        <button className="cta flex items-center text-xs md:text-[14px] justify-center w-fit" onClick={onClick}>
            <span className={`hover-underline-animation font-sans text-sm pr-3 ${textColor || 'text-black'}`}>
                {text}
            </span>
            <LiaLongArrowAltRightSolid
                size={24}
                className="transform translate-x-0 transition-transform ease-in-out duration-300"
                style={{ marginLeft: '5px', color: textColor || 'currentColor' }}
            />
        </button>
    );
};

export default ArrowButton;
