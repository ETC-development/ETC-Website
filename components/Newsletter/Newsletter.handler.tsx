import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    email: String
}

const handleSubmit = ({ email, setIsLoading }: INewsLetterHandler) => async (event: FormEvent) => {
    event.preventDefault();


    setIsLoading(true);

    try {

        await fetch(NewsLetterConfig.API_URL);

        
    } catch (e) {
        console.log(e);
    }

    setIsLoading(false);
}


export default handleSubmit;