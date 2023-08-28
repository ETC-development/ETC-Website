import { FormEvent, FormEventHandler } from "react";
import Button from "../utils/Button1";
import Spinner from "../utils/spinner";

interface INewsLetterButton {
    isLoading: boolean,
    onSubmit: FormEventHandler<HTMLElement>;
}

export default function NewsLetterButton({ isLoading, onSubmit }: INewsLetterButton) {

    const spinner = <div className="flex flex-row gap-5"> <div>{Spinner()}</div> Subscribing..</div>

    return <div className="w-[50%] max-w-[300px] mx-auto">
        <Button text={isLoading ? spinner : "Subscribe"} onSubmit={onSubmit}/>
    </div>;
}