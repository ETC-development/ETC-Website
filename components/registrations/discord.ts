"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";


export async function signOutFromDiscord(router: any) {
    const supabase = createClientComponentClient<Database>()

    await supabase.auth.signOut()

    router.replace("/registrations")

    location.reload()

}

export async function signInWithDiscord(router: any) {

    const supabase = createClientComponentClient<Database>()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options:{
            redirectTo: `${location.origin}/registrations`
        }

    })

    // router.refresh()

}
