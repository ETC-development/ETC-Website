/**
 * Application Configuration
 * Centralized configuration for external services
 */

// Newsletter Configuration
export const NewsLetterConfig = {
    /**
     * Newsletter subscription API endpoint
     * Points to Listmonk public subscription endpoint
     */
    API_URL: "/api/tx",
    
    /**
     * List UUIDs for newsletter subscriptions
     * Multiple lists can be used for different purposes
     */
    LIST_UUIDS: [
        process.env.NEXT_PUBLIC_LISTMONK_FOSSFLASH_LIST_UUID,
        process.env.NEXT_PUBLIC_LISTMONK_DEFAULT_LIST_UUID
    ].filter(Boolean), // Remove undefined values
} as const;

// Server-side only configuration
// These should NEVER be exposed to the client
export const ServerConfig = {
    LISTMONK_URL: process.env.LISTMONK_URL,
    LISTMONK_USERNAME: process.env.LISTMONK_USERNAME,
    LISTMONK_PASSWORD: process.env.LISTMONK_PASSWORD,
    LISTMONK_FROM_EMAIL: process.env.LISTMONK_FROM_EMAIL,
    LISTMONK_TEMPLATE_ID: parseInt(process.env.LISTMONK_TEMPLATE_ID || "1", 10),
    LISTMONK_LIST_UUID: process.env.LISTMONK_LIST_UUID,
} as const;

// Validate server config (only runs on server)
if (typeof window === "undefined") {
    const requiredServerVars = [
        "LISTMONK_URL",
        "LISTMONK_USERNAME",
        "LISTMONK_PASSWORD",
        "LISTMONK_FROM_EMAIL",
        "LISTMONK_LIST_UUID",
    ] as const;

    for (const key of requiredServerVars) {
        if (!process.env[key]) {
            console.warn(`Warning: ${key} environment variable is not set`);
        }
    }
}

// Application metadata
export const AppConfig = {
    NAME: "ETC Club",
    FULL_NAME: "ENSIA Tech Community",
    DESCRIPTION: "ENSIA Tech Community, a scientific club founded in March 2022",
    URL: "https://etc-club.vercel.app",
} as const;
