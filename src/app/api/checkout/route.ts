import { NextRequest, NextResponse } from "next/server"

type CheckoutRequest = {
    uid: string
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as CheckoutRequest

    // use uid to fetch cart and flush

    return NextResponse.json(body)
}

