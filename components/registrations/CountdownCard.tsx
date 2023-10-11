"use client"
interface ICardContent {
    text: string;
    type: string;
}

export default function CountdownCard({ text, type }: ICardContent) {
    return (
        <div className={"flex flex-col gap-3 justify-center items-center"}>
            <div
                className={"flex justify-center items-center w-16 h-16 md:w-28 md:h-28 border-4 rounded-2xl border-[#01ecc9] text-xl md:text-5xl text-center font-montserrat font-semibold"}>
                <span className={"align-middle"}>{text}</span>
            </div>

            <div className={"font-montserrat text-sm md:text-xl"}>
                {type}
            </div>
        </div>);
}