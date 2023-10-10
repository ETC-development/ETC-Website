import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IResponseMessage } from "./Newsletter.forground";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setMessage: Dispatch<SetStateAction<IResponseMessage>>;

    email: String;
}

const handleSubmit =
    ({ email, setIsLoading, setMessage }: INewsLetterHandler) =>
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
            console.log("results", results);

            setMessage({ status: "success", text: "An e-mail has been sent" });
        } catch (e) {
            console.log(e);
            setMessage({ status: "error", text: "Failed to send e-mail" });
        }

        setIsLoading(false);
    };

export default handleSubmit;
