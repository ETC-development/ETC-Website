"use client";
import { createClientSupabaseClient } from "@/lib/supabase/client";


export async function signOutFromDiscord(router: any) {
    const supabase = createClientSupabaseClient();

    await supabase.auth.signOut();

    router.replace("/registrations");

    location.reload();
}

export async function signInWithDiscord(router: any) {
    const supabase = createClientSupabaseClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            redirectTo: `${location.origin}/auth/callback`
        }
    });

    if (error) {
        console.error('Discord OAuth error:', error);
    }
}
