export const NewsLetterConfig = {
    API_URL: "/api/newsletter/subscribe",
    LIST_UUIDS: [process.env.NEXT_PUBLIC_LISTMONK_FOSSFLASH_LIST_UUID, process.env.NEXT_PUBLIC_LISTMONK_DEFAULT_LIST_UUID]
}
export const TransactionalEmailConfig = {
    API_URL: `${process.env.NEXT_PUBLIC_LISTMONK_URL}api/tx`,
    TEMPLATE_ID: 5,
    AUTH: {
        USERNAME: process.env.NEXT_PUBLIC_LISTMONK_USERNAME,
        PASSWORD: process.env.NEXT_PUBLIC_LISTMONK_PASSWORD
    }
}