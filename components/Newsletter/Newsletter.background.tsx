import React from 'react'
import Frame from "../../public/assets/newsletter/Frame.svg";
import Frame1 from "../../public/assets/newsletter/Frame(1).svg";
import Frame2 from "../../public/assets/newsletter/Frame(2).svg";
import Frame3 from "../../public/assets/newsletter/Frame(3).svg";


export default function NewsletterBackground() {
  return (
    <div className="h-full w-full absolute bottom-0 right-0">
        <div className="elipse"></div>

        <img src={Frame3.src} className="w-[15rem] md:w-[30%]  absolute top-10t lg:right-[0%] right-[-40%]"/>

        <img src={Frame2.src} className="w-[15rem]  absolute bottom-20 lg:right-[12%] right-[-30%]"/>

        <img src={Frame1.src} className="w-[15rem] md:w-[30%]  absolute top-20 lg:left-[1%] left-[-20%]"/>

        <img src={Frame.src} className="h-[10rem] md:h-[20%] absolute bottom-0 left-[-10%] lg:left-[1%]"/>
      </div>
  )
}
