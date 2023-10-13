import { NewsLetterConfig } from "@/app/config";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IResponseMessage } from "./Newsletter.forground";

interface INewsLetterHandler {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setMessage: Dispatch<SetStateAction<IResponseMessage>>;
    setEmail: Dispatch<SetStateAction<string>>;
    email: String;
}

const handleSubmit =
    ({ email, setEmail, setIsLoading, setMessage }: INewsLetterHandler) =>
        async (event: FormEvent) => {
            event.preventDefault();

            setMessage({ status: "none", text: "" });

            if (email === "") return;

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
            };

            try {
                const requests = [
                    await fetch(NewsLetterConfig.API_URL, options),
                    await fetch("/api/tx", options)
                ];

                const results = await Promise.all(requests);

                results.forEach((res) => {
                    if (res.status !== 200) throw Error("Request Failed");
                });


                setMessage({
                    status: "success",
                    text: "Subscribed successfully"
                });
                setEmail("");
            } catch (e) {
                console.log(e);
                setMessage({
                    status: "error",
                    text: "There was a problem while subscribing to the newsletter, please try again"
                });
            }

            setIsLoading(false);
        };

export default handleSubmit;
