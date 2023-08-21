import React from 'react'

import leftArrow from "../../public/left arrow.svg";
import Image from 'next/image';

import { CarouselArrowProps } from '@/types';

const CustomLeftArrow = ({onClick, handleClick }: CarouselArrowProps) => {  
  return (
    <div onClick={() => { handleClick(); onClick()}} className="hidden lg:flex absolute top-1/3 left-0 2xl:left-10 cursor-pointer">
      <Image  src={leftArrow} alt="left arrow" width={30} height={40} />
    </div>
    
  )
}

export default CustomLeftArrow