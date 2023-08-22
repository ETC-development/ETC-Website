"use client";

import { useState , useEffect } from 'react';
import Button2 from '../utils/Button2';
import Button1 from '../utils/Button1';
import MoreNavbar from '../utils/MoreNavbar';
import Cross from '../utils/cross';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`
    ${scrollingUp ? "bg-bg-color border-b" : "bg-transparent border-none"}
    w-screen fixed  py-2  md:py-0 px-5 lg:px-14  border-silver-white lg:flex lg:items-center lg:justify-between
    `}>
      <div className="btn-ellipse-blur hover-glow left-0 bg-cyan "></div>
      <div className=" btn-ellipse-blur hover-glow right-[40%] bg-cyan "></div>
      <div className="btn-ellipse-blur hover-glow right-0 lg:right-[35%] bg-cyan "></div>
      <div className="btn-ellipse-blur hover-glow left-[25%] bg-cyan "></div>
     
      <div className="flex justify-between items-center">
        
        <div className=
         {`
         ${scrollingUp ? "flex" : "hidden"}
          gap-[10px] items-center relative group
         `}
         >
          <img 
          className="w-[50px] h-[50px] px-2 lg:w-[60px] lg:h-[60px]"
          src={'/Logo.svg'} 
          alt="" 
          />
          <img 
          className=" w-[151px] h-[40px] lg:w-[161px] lg:h-[60px]" 
          src={'/logoWord.svg'} 
          alt="" 
          />
        </div>
      
        <div 
        onClick={toggleHidden}
        className={`
        ${scrollingUp ? "relative" : "absolute right-2 top-2"}
        lg:hidden p-2
        `}
        >
            {
                isHidden?  <MoreNavbar  /> :  <Cross color='#DADBDD'/>
            }
        </div>
      </div>
      <div 
      className={ `flex lg:flex flex-col lg:flex-row gap-[10px] lg:gap-0  lg:w-[70%] lg:justify-between  lg:gap-[50px] p-4 
       ${isHidden ? 'hidden' : ''}
       `}>
        <Button2 text={'Home'} isActive={false} />
        <Button2 text={'Events'} isActive={false} />
        <Button2 text={'Projects'} isActive={false} />
        <Button2 text={'Contacts'} isActive={false} />
        <div className='hidden lg:flex '>
        <Button1 text={'Register Now'} />
        </div>
        
      </div>
    </div>
  );
}
