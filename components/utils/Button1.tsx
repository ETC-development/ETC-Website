import "./buttons.css";

interface ButtonProps {
    text: string;
}

export default function Button1({ text }: ButtonProps) {
    return (
        <button className=" min-w-max bg-[#323232]/70 relative md:py-3 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-montserrat font-medium px-8 md:px-4 lg:px-8 border-silver-white rounded-full border-[0.5px] cursor-pointer group hover:bg-[#757575]/70">
            <div className="btn-ellipse-blur hover-glow left-0 bg-cyan "></div>
            <div className="btn-ellipse-blur hover-glow left-0 !w-16 right-0 bg-green"></div>
            <div className="btn-ellipse-blur hover-glow right-0 bg-less-dark-green "></div>
            <p className="z-10 text-silver-white relative">{text}</p>
        </button>
    );
}
