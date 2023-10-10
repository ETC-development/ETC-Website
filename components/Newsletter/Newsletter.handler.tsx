import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    email: String;
}

const handleSubmit =
    ({ email, setIsLoading }: INewsLetterHandler) =>
    async (event: FormEvent) => {
        event.preventDefault();

        if (email === "") return;

        setIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                list_uuids: NewsLetterConfig.LIST_UUIDS,
            }),
        };

        try {
            const requests = [
                await fetch(NewsLetterConfig.API_URL, options),
                await fetch("/api/tx", options),
            ];

            const results = await Promise.all(requests);
            console.log(results);
        } catch (e) {
            console.log(e);
        }

        setIsLoading(false);
    };

export default handleSubmit;
