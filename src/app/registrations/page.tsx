import type { Metadata } from "next";
import { RegisterClosed, RegisterFlow, RegisterHeader } from "@/components/register";
import { CLUB, REGISTRATION } from "@/data/club";

export const metadata: Metadata = {
    title: "Join ETC",
    description:
        "Apply to join ENSIA Tech Community: connect Discord, rank your three cells, tell us about you.",
};

export default function RegistrationPage() {
    const club = CLUB;
    return (
        <div className="rg">
            <RegisterHeader />
            {REGISTRATION.open ? (
                <RegisterFlow discordInvite={club.discord_link} />
            ) : (
                <RegisterClosed discordInvite={club.discord_link} />
            )}
        </div>
    );
}
