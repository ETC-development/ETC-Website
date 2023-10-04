import RegistrationTitle from "@/components/registrations/RegistrationTitle";
import bot1P from "@/public/assets/registration/Bot1P.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import CountdownCard from "@/components/registrations/CountdownCard";


interface IStayTunedProps {
    days: string;
    hours: string;
    seconds: string;
    minutes: string;
}


const Colon = () => {
    return <div className={"font-montserrat font-bold text-2xl md:text-6xl mb-10 text-[#01ecc9]"}>
        :
    </div>;
};


export default function StayTuned({ days, hours, seconds, minutes }: IStayTunedProps) {


    return (
        <div className={"flex flex-col items-center gap-8"}>

            <Image
                className="animationReg absolute hidden sm:block sm:w-32 sm:left-2 md:left-4 xl:left-6 md:w-40 xl:w-72"
                src={bot1P}
                alt=""
            >
            </Image>

            <RegistrationTitle title={"STAY TUNED"} subtitle={"ETC-Day, our open day event is coming very soon!"} />
            <div className={"flex justify-center items-center gap-1 md:gap-4"}>
                <CountdownCard text={days} type={"Days"} />
                <Colon />
                <CountdownCard text={hours} type={"Hours"} />
                <Colon />
                <CountdownCard text={minutes} type={"Minutes"} />
                <Colon />
                <CountdownCard text={seconds} type={"Seconds"} />
            </div>

            <p className="text-white text-center font-montserrat text-[15px] lg:text-[20px] max-w-xs font-semibold">
                Be ready to join a group of sharp minded people
            </p>
        </div>
    );
}