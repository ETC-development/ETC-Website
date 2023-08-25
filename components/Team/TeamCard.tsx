import ManagerContact from "./ManagerContact"

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./team.css"

interface cardprops{
    name : string,
    position : string,
    talent : string,
    year : string,
    desc : string,
    email : string,
    img : string,
    // isActive : boolean,
}

export default function TeamCard({
     name,
    position,
    talent,
    year,
    desc,
    email,
    img,
    // isActive,
} : cardprops) {

 const [flip, setFlip] = useState(false);
 const isPhoneview = ()=>{

    if (window.innerWidth < 768) {
       return true;
      }
     else return false;
 }


 return (
    <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">
        
        <div 
        className={`
        flex flex-col items-center gap-[20px] w-[300px] h-[400px] shrink-0 rounded-[25px] border borderr-[#C3C3C3] bg-bg-color 
        `}
        onClick={() => ( isPhoneview() ? setFlip(!flip) : '' )}
        >
            <div className=" flex flex-col items-center gap-[20px] w-full h-full rounded-[25px]  bg-teamCard p-3 ">
                
                <img 
                    className="rounded-full w-[130px] h-[130px] "
                    src={img}
                    alt="" 
                />
           
           <div>
              <div className="flex flex-col items-center justify-center gap-[5px]">

              <p className="text-center text-white  text-[14px] font-normal px-4 font-comfortaa hidden md:flex">
                 {desc}
              </p>

              <p className="  md:hidden text-center font-azonix text-[14px] font-normal manager_title ">
                 {position}
                </p>
                <p className=" md:hidden text-white text-[24px] font-montserrat ">
                    {name}
                </p>
                <p className=" md:hidden  text-white text-[16px] ffont-montserrat ">
                    {talent}
                </p>
                <p className=" md:hidden  text-white text-[16px] font-montserrat ">
                    {year}
                </p>  
              </div>


              
          </div>
          <ManagerContact discordLink=" " emailLink={email} linkedinLink=" "  />
            </div>
        </div>
        <div 
        className={`
        flex flex-col items-center justify-center gap-[20px] w-[300px] h-[400px] shrink-0 rounded-[25px] border borderr-[#C3C3C3] bg-bg-color 
        `}
        onClick={() => setFlip(!flip)}
        >   
          <div className="w-full h-full  bg-teamCard rounded-[25px] flex flex-col items-center justify-center">
            <p className="text-center font-montserrat text-[18px] font-normal text-white p-3">
            {desc}
            </p>
          </div>
           
          
        </div>
    </ReactCardFlip>
);
   
}


