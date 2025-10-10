import axios from "axios";
import { ServerConfig } from "@/lib/config";

export async function subscribe({ email }: { email: string }) {
    const listmonkUrl = ServerConfig.LISTMONK_URL;
    
    if (!listmonkUrl || !ServerConfig.LISTMONK_USERNAME || !ServerConfig.LISTMONK_PASSWORD) {
        throw new Error("Missing Listmonk configuration");
    }
    
    const listmonkAuth = Buffer.from(
        `${ServerConfig.LISTMONK_USERNAME}:${ServerConfig.LISTMONK_PASSWORD}`
    ).toString("base64");

    try {
        // Subscribe to mailing list
        const subscribeResponse = await axios.post(
            `${listmonkUrl}/api/public/subscription`,
            {
                email,
                name: email.split('@')[0], // Use email prefix as name
                list_uuids: [ServerConfig.LISTMONK_LIST_UUID],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        // Send transactional welcome email (optional)
        let txResponse = null;
        if (ServerConfig.LISTMONK_TEMPLATE_ID && ServerConfig.LISTMONK_FROM_EMAIL) {
            try {
                txResponse = await axios.post(
                    `${listmonkUrl}/api/tx`,
                    {
                        subscriber_email: email,
                        template_id: parseInt(String(ServerConfig.LISTMONK_TEMPLATE_ID), 10),
                        from_email: ServerConfig.LISTMONK_FROM_EMAIL,
                        data: {
                            email: email,
                        },
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Basic ${listmonkAuth}`,
                        },
                    }
                );
            } catch (txError: any) {
                // Log but don't fail if transactional email fails
                console.warn("Transactional email failed (non-critical):", txError.response?.data || txError.message);
            }
        }

        return {
            data: {
                subscription: subscribeResponse.data,
                transactional: txResponse?.data || null,
            },
        };
    } catch (error: any) {
        console.error("Listmonk API error:", error);
        if (error.response) {
            console.error("Response status:", error.response.status);
            console.error("Response data:", error.response.data);
        }
        throw error;
    }
}