import { NextRequest, NextResponse } from "next/server";
import { subscribe } from "./subscribe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const { data } = await subscribe({ email });

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error in newsletter API:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}