import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    email: String
}

const handleSubmit = ({ email, setIsLoading }: INewsLetterHandler) => async (event: FormEvent) => {
    event.preventDefault();


    if ( email === "") return;

    setIsLoading(true);


    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            list_uuids: NewsLetterConfig.LIST_UUIDS
        })
    }

    try {

        await fetch(NewsLetterConfig.API_URL, options);


    } catch (e) {
        console.log(e);
    }

    setIsLoading(false);
}


export default handleSubmit;