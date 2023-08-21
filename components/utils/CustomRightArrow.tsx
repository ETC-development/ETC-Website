import React from 'react'

import rightArrow from "../../public/Right arrow.svg";
import Image from 'next/image';
import { CarouselArrowProps } from '@/types';

const CustomRightArrow = ({onClick, handleClick }: CarouselArrowProps) => {
  
  return (

    <div onClick={() => { handleClick(); onClick()}} className="hidden lg:flex absolute top-1/3 right-0 2xl:right-10 cursor-pointer">
      <Image src={rightArrow} alt="right arrow" width={30} height={40} />
    </div>
  )
}

export default CustomRightArrow