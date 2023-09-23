interface IRegTitleProps {
    title: string;
    subtitle: string;
}


export default function RegistrationTitle({title, subtitle}: IRegTitleProps) {
    return <div className="relative flex flex-col self-stretch px-5 gap-5 items-center">
        <div className="absolute bgGradient top-0 bottom-0 "></div>
        <p className="text-white text-center leading-10 font-azonix text-[34px] lg:text-[54px] drop-shadow-md">
            {title}
        </p>
        <p className=" text-white text-center font-montserrat text-[15px] lg:text-[20px] max-w-xs font-semibold">
            {subtitle}
        </p>
    </div>;
}
