import React, { useState } from 'react';
import './registration.css';

interface CardProps {
  placeholder: string;
  options: string[]; // Assuming options is an array of strings
}

export default function Option({
  placeholder,
  options
}: CardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className='flex justify-center items-center p-1  bg-transparent borderGradient rounded-2xl '>
    <select
      className={`${
        isClicked ? 'bg-[#074F57]' : 'bg-[#093441]'
      } z-20  self-stretch flex-1 rounded-xl  font-montserrat outline-none text-[#C7C7C7] pl-8 py-3 lg:py-4   text-[12px] lg:text-[16px] `}
      name=""
      id=""
    >
      <option 
        value="" 
        selected>
        {placeholder}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
}
