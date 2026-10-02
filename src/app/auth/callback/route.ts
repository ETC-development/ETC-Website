import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const origin = requestUrl.origin;

    if (code) {
        const supabase = await createServerSupabaseClient();
        await supabase.auth.exchangeCodeForSession(code);
    }

    // Redirect to registrations page
    return NextResponse.redirect(`${origin}/registrations`);
}