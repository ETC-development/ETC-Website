import {motion} from "framer-motion";
import { useState, useEffect } from "react";

interface StaticProps {
        text: string;
        icon: React.ReactNode;
        detail: string;
        direction : number;
}

export default function Statistics({ text, icon, detail, direction }: StaticProps){
        // let [statisticStyle,setStaticStyle] = useState({});

        // useEffect(() => {
        //         if (window.innerWidth > 768) {
        //                 if (window.innerWidth < 1024) {
        //                         if(top> 89 ){
        //                                 setStaticStyle({
        //                                         top: `${top/2 + 30}%`,
        //                                         left: `${left}%`,
        //                                         width: `${width}%`,
        //                                       });   
        //                           } 
        //                          else{setStaticStyle({
        //                                 top: `${top}%`,
        //                                 left: `${left}%`,
        //                                 width: `${width}%`,
        //                               });} 
        //                 }
        //          else{setStaticStyle({
        //             top: `${top}%`,
        //             left: `${left}%`,
        //             width: `${width}%`,
        //           });} 
        //         } else {
        //           if(top> 89 ){
        //                 setStaticStyle({
        //                         top: `${(top/2 + 30)}%`,
        //                         left: `${left+8}%`,
        //                         maxWidth: "100%",
        //                       });   
        //           } else {
        //                 setStaticStyle({
        //                         top: `${(top)}%`,
        //                         left: `${left+16}%`,
        //                         maxWidth: "100%",
        //                         });
        //           }
                 
        //         }
        //       }, [top, left, width]);


        return  <motion.div 
        className={`statistic p-2 gap-2 rounded-xl md:rounded-[16px] lg:rounded-[19px] lg:gap-5`}
        initial={{y: 0}}
                animate={{y:[0, direction, 0],
                transition: {
                duration:10,
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut", 
                },}}
                >
                        <div className="ellipse-blur left-2 top-10  w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] blur-[35px] bg-green absolute"></div>
                        <div className="stat-icon w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[37px] md:h-[37px] " >
                        {icon}
                        </div>
                        <div className="stat-text flex flex-col text-[12px] sm:text-[14px] lg:text-[16px]  xl:text-[18px]">
                        <div className="font-montserrat  stat-type">
                                {text}
                        </div>
                        <div className="font-montserrat hidden stat-detail text-gray-700 xl:block">
                                {detail}
                        </div>
                        </div>
                        <div className="ellipse-blur right-2 top-1 w-[40px] h-[40px] blur-[35px] bg-green absolute"></div>
  
        </motion.div>
} 