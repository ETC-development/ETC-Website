import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { subscribe } from "./subscribe";

// export const revalidate = 0;

export async function POST(req: NextApiRequest) {
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
