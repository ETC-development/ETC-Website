/**
 * "They trusted us": companies that backed ETC events, shown on the home page.
 * Logos live in public/companies and are displayed in one light tone (CSS turns every opaque
 * pixel off-white), so use a transparent background: a white fill inside the logo becomes a solid
 * shape. Trim transparent margins so every logo fills its tile the same way.
 */

export const PARTNERS: { name: string; src: string }[] = [
    { name: "Huawei", src: "/companies/huawei.webp" },
    { name: "Algérie Télécom", src: "/companies/algerie-telecom.webp" },
    { name: "Mobilis", src: "/companies/mobilis.webp" },
    { name: "GICA", src: "/companies/gica.webp" },
    { name: "Ramy", src: "/companies/ramy-logo.webp" },
    { name: "Turkinvest", src: "/companies/turkinvest.webp" },
];
