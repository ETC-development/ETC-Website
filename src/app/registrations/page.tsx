import Main from "@/components/registrations/Main";
import "@/components/registrations/registration.css";
import Footer from "@/components/Footer/Footer.index";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import AuthProvider from "@/components/auth/AuthProvider";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const revalidate = 0;

export const metadata = {
    title: "Join ETC Club - Member Registration",
    description: "Apply to join ENSIA Tech Community. Register and select your preferred department.",
};

export default async function RegistrationPage() {
    const supabase = await createServerSupabaseClient();

    const {
        data: { session }
    } = await supabase.auth.getSession();

    const accessToken = session?.access_token || null;

    const { data: clubInfoData } = await supabase
        .from("club_info")
        .select("*")
        .single();

    if (!clubInfoData) return null;

    return (
        <AuthProvider accessToken={accessToken}>
            <div className="bgGradientPage">
                <div className="flex items-center justify-center py-6 lg:py-20">
                    <Main />
                </div>
                <FadeInWhenVisible>
                    <Footer clubInfo={clubInfoData} />
                </FadeInWhenVisible>
            </div>
        </AuthProvider>
    );
}