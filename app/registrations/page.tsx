import Main from "@/components/registrations/Main";
import "../../components/registrations/registration.css";
import Footer from "@/components/Footer/Footer.index";
import FadeInWhenVisible from "@/components/utils/FadeInWhenVisible";
import AuthProvider, { AuthContext } from "@/components/auth/AuthProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export const revalidate = 0;

export default async function registrationPages() {


    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session }
    } = await supabase.auth.getSession();

    const accessToken = session?.access_token || null;

    const { data: clubInfoData, error: infoError } = await supabase.from("club_info").select("*").single();

    if (infoError)
        return;


    return (
        <AuthProvider accessToken={accessToken}>
            <div className={"bgGradientPage"}>
                <div className="flex items-center justify-center py-6 lg:py-20">
                    <Main />
                </div>
                <FadeInWhenVisible>
                    <Footer clubInfo={clubInfoData}/>
                </FadeInWhenVisible>
            </div>
        </AuthProvider>
    );
}
