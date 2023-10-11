import supabase from "@/supabase";
import { redirect } from "next/dist/server/api-utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


export async function signOutFromDiscord(router: AppRouterInstance) {
    const supabase = createClientComponentClient<Database>()

    await supabase.auth.signOut()

    router.refresh()

    location.reload()

}

export async function signInWithDiscord(router: AppRouterInstance) {

    const supabase = createClientComponentClient<Database>()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options:{
            // skipBrowserRedirect: true,
            // redirectTo:
            redirectTo: `${location.origin}/auth/callback`
        }

    })

    router.refresh()

}
