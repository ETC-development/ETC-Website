import { TransactionalEmailConfig } from "@/app/config";
import axios, { AxiosRequestConfig } from "axios";

export const subscribe = async ({ email }: { email: string }) => {
    const body = {
        subscriber_email: email,
        template_id: TransactionalEmailConfig.TEMPLATE_ID,
    };

    const config: AxiosRequestConfig= {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        auth: {
            username: TransactionalEmailConfig.AUTH.USERNAME || "",
            password: TransactionalEmailConfig.AUTH.PASSWORD || "",
        },
    };

    return axios.post(TransactionalEmailConfig.API_URL, body, config);
};
