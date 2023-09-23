import React, { useState } from 'react';
import "./registration.css"

interface cardprops{
    placeholder : string ,
    type : string,
    height : string 
}
export default function Input({
    placeholder,
    type , 
    height 
} : cardprops ) 
{
    return (
      <div className='flex justify-center items-center p-1 bg-transparent borderGradient rounded-2xl'>
       <input 
       className={`focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 outline-none rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 lg:py-4 text-[12px] lg:text-[16px] ${height} `}
       type={type}
       name="" 
       id="" 
       placeholder={placeholder}
       />
      </div>
    );
}
