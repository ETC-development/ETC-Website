export const NewsLetterConfig = {
    API_URL: "/api/newsletter/subscribe",
    LIST_UUIDS: ["158c2ca0-4ca5-4f9a-aa3d-79abf1167231", "87175bb4-5f7d-41b3-a69b-a2d8dcafa485"]
}
export const TransactionalEmailConfig = {
    API_URL: `${process.env.NEXT_PUBLIC_LISTMONK_URL}api/tx`,
    TEMPLATE_ID: 5,
    AUTH: {
        USERNAME: process.env.NEXT_PUBLIC_LISTMONK_USERNAME,
        PASSWORD: process.env.NEXT_PUBLIC_LISTMONK_PASSWORD
    }
}