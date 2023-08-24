import { ChangeEvent } from "react";
import "./buttons.css";

interface ITextInput {
    placeholder: string;
    type: "text" | "email" | "password";
    name: string;
    id: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextInput({ placeholder, id, name, type, setInputValue }: ITextInput) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={"relative font-montserrat font-medium"}>
            <div className={"btn-ellipse-blur left-0 !blur-xl !w-16 bg-cyan"}></div>
            <div className={"btn-ellipse-blur left-16 !blur-xl !w-16 bg-green"}></div>
            <div className={"btn-ellipse-blur left-36 !blur-xl !w-16 bg-less-dark-green"}></div>
            <input
                onChange={handleInputChange}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                className="relative bg-[#323232]/40 px-6 py-3 w-[26rem] outline-none border-[0.5px] rounded-full border-silver-white/60 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-silver-white placeholder:text-silver-white/80"
            />
        </div>
    );
}
