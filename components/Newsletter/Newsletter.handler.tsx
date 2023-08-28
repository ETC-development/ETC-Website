import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    email: String
}

const handleSubmit = ({ email, setIsLoading }: INewsLetterHandler) => async (event: FormEvent) => {
    event.preventDefault();


    setIsLoading(true);

   await fetch(`localhost:3000/api/newsletter/subscibe?email=${email}`)

    setIsLoading(false);
}


export default handleSubmit;