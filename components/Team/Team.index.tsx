"use client";

import { react , useState} from "react"
import { Swiper , SwiperSlide } from "swiper/react"


import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow , Pagination , Navigation } from "swiper/modules"
import TeamCard from "./TeamCard"



export default function Team() { 
    
    const handleChange = ()=>{
       const slide = document.getElementById("slide");
       slide?.classList.add("fade");
    }
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const getModifier = () => {
        if (window.innerWidth < 1024) {
            return 50;
        } else {
            return 7;
        }
    };
    const managers = [
        {
                name: 'Salah Eddine Makdour',
                position: 'President',
                talent: 'Backend & FrontEnd Developer',
                year: '3rd year student at ENSIA',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                email:'Salah Eddine Makdour',
                img: "/salah.jpeg"
        },
        {
                name: 'Nesrine Abdelhak',
                position: 'HR Manager',
                talent: 'Backend & FrontEnd Developer',
                year: '3rd year student at ENSIA',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                email:'Salah Eddine Makdour',
                img: "/nesrine.jpeg"
        },
        {
                name: 'Marouane Oulad Ali',
                position: 'Communication Manager',
                talent: 'Backend & FrontEnd Developer',
                year: '3rd year student at ENSIA',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                email:'Salah Eddine Makdour',
                img: "./mar1.jpeg"
        },
        {
                name: 'Lyes Hajar',
                position: 'Design Manager',
                talent: 'UI/UX Designer',
                year: '2nd year student at ENSIA',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                email:'Salah Eddine Makdour',
                img: "/ilyes.png"
        },
        {
                name: 'Hamza dia',
                position: 'Marketing Manager',
                talent: 'Backend & FrontEnd Developer',
                year: '2nd year student at ENSIA',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
                email:'Salah Eddine Makdour',
                img: "/hamza.jpeg"
        }
];
    const activeManager = managers[activeSlideIndex];

    return <div className="bg-bg-color w-screen py-9 flex flex-col items-center  gap-12 ">
        <p className=" text-white font-azonix text-[40px] md:text-[70px] font-normal ">
           etc team 
        </p>
      
        <div className=" relative w-[90%] flex items-center justify-center  gap-12 py-4 ">
            <Swiper
              
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: getModifier() ,
            }}

            pagination={{ clickable: true }}
            navigation={{
                nextEl:'.swiper-button-next' , 
                prevEl:'.swiper-button-prev' , 
            }}
            modules={[EffectCoverflow , Pagination , Navigation]}
            className="swiper_container w-full md:w-[65%] md:!m-0  "
            >
                 { managers.map(( content , index  ) =>
                     <SwiperSlide className=" !w-auto  "> 
                        <TeamCard 
                        // isActive={index === activeSlideIndex}
                        {...content}
                        />
                     </SwiperSlide>
                 )}
            

                 <div className="slider-controler ">
                    <div className="swiper-button-prev slider-arrow after:hidden ">
                        <img 
                        src={"/previous.svg"}
                        alt="" 
                        className=""
                        /> 
                    </div>
                    <div className="swiper-button-next slider-arrow after:hidden">
                        <img 
                        src={"/next.svg"}
                        alt="" 
                        className=""
                        /> 
                    </div>
                    <div className=" swiper-pagination ">
                        
                    </div>
                 </div>
            </Swiper>
             
         
                  <div 
                  className="hidden md:flex flex-col items-center justify-center gap-[5px] w-[20%] text-center "
                  id="slide"
                  onChange={handleChange}
                  >
                    <p className="text-center font-azonix md:text-[25px] font-normal manager_title ">
                     {activeManager.position}
                    </p>
                    <p className="text-white text-[25px] font-montserrat ">
                        {activeManager.name}
                    </p>
                    <p className="text-white text-[15px] font-montserrat ">
                        {activeManager.talent}
                    </p>
                    <p className="text-white text-[15px] font-montserrat ">
                        {activeManager.year}
                    </p>  
                  </div>

        </div>
       
    </div>
}
