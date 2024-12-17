import { demandChannel } from "@/lib/rabbitmq/rabbitClient"
import { NextRequest, NextResponse } from "next/server"

type CheckoutRequest = {
    uid: string
    variant: string
    count: number
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as CheckoutRequest

    // use uid to fetch cart and flush and rabbitmq
    const uid = body.uid
    const timestamp = (new Date()).toISOString()

    console.log({ uid, demandDelta: body.count, timestamp })

    const publish = await demandChannel.basicPublish(
        "",
        "stock-demand",
        Buffer.from(
            JSON.stringify({
                uid,
                variant: body.variant,
                demandDelta: body.count,
                timestamp,
            })
        )
    )


    return NextResponse.json({ uid, demandDelta: body.count, timestamp, publish }, { status: 200 })
}

