import Button1 from "../utils/Button1";
import { Typewriter } from 'react-simple-typewriter'


export default function HeroDesc(){
        return  <div className="hero-desc w-fit flex flex-col items-center md:items-start lg:text-start gap-2 lg:gap-3 mt-3">
        <div className="slogan w-fit lg:w-[412px] flex flex-col items-center md:items-start relative">
              <div className=" font-azonix text-white text-[30px] md:text-[40px] xl:text-[50px] ">empowered          </div> 
              <div className="by-innovation font-azonix flex">
              <div className="  text-white text-[30px] md:text-[40px] xl:text-[50px] mr-2">by</div> 
              <div className="innovation-animation text-white text-[30px] md:text-[40px] xl:text-[50px] flex">
                 <div className="innovation-flou text-white blur-[2px] text-opacity-25">Innovation </div>
                <div className="innovation absolute stroke-zinc-50 ">
        <Typewriter
            words={[" innovation"]}
            loop={false}
            cursor ={false}
            typeSpeed={900}
            delaySpeed={1000}
          /></div></div>
                </div> 

        </div>
        <div className="club-desc w-fit md:w-80 lg:w-96">
         <div className="font-montserrat text-white text-center text-sm lg:text-base md:text-start p-4 md:p-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
        </div>
        <div className="registerBtn w-fit m-3">
                <Button1 text="Register Now" ></Button1>
         </div>
        </div>
}
