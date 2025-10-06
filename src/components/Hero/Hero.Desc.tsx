import Button1 from "../utils/Button1";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";
import { Database } from "@/lib/database.types";


interface IHeroDescProps {
    onRegBtnClick: () => void;
    clubInfo: Database["public"]["Tables"]["club_info"]["Row"];
}


export default function HeroDesc({onRegBtnClick, clubInfo}: IHeroDescProps) {
    return <div className="hero-desc w-fit flex flex-col items-center md:items-start lg:text-start gap-2 lg:gap-3 mt-3">
        <div className="slogan w-fit lg:w-[412px] flex flex-col items-center md:items-start relative">
            <div className=" font-azonix text-white text-[30px] md:text-[40px] xl:text-[50px] ">empowered</div>
            <div className="by-innovation font-azonix flex">
                <div className="  text-white text-[30px] md:text-[40px] xl:text-[50px] mr-2">by</div>
                <div className="innovation-animation text-white text-[30px] md:text-[40px] xl:text-[50px] flex">
                    <div className="innovation-flou text-white blur-[2px] text-opacity-25">Innovation</div>
                    <div className="innovation absolute stroke-zinc-50 ">
                        <Typewriter
                            words={[" innovation"]}
                            loop={false}
                            cursor={false}
                            typeSpeed={900}
                            delaySpeed={1000}
                        /></div>
                </div>
            </div>

        </div>
        <div className="club-desc w-fit md:w-80 lg:w-96">
            <div className="font-montserrat text-white text-center text-sm lg:text-base md:text-start p-4 md:p-0">
                {clubInfo.club_description}
            </div>
        </div>
        <div className="registerBtn w-fit m-3">
            <Button1 onSubmit={onRegBtnClick} text="Register Now"></Button1>
        </div>
    </div>;
}
