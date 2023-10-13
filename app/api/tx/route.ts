import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { subscribe } from "./subscribe";
import { Request } from "next/dist/compiled/@edge-runtime/primitives";

// export const revalidate = 0;

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        const { data } = await subscribe({ email });

        console.log(data);

        return NextResponse.json(data);
    } catch (e: any) {
        console.log(e);
        return new Response("Internal Server Error", { status: 500 });
    }
}
