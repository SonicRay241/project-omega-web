import { demandChannel } from "@/lib/rabbitmq/rabbitClient"
import { prisma } from "@/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = (await req.json()) as { userToken: string }

    const tokenData = await prisma.token.findFirst({
        where: {
            id: body.userToken
        }
    })

    if (!tokenData) {
        return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const timestamp = (new Date()).toISOString()

    // use uid to fetch cart and flush and rabbitmq
    const products = await prisma.productCart.findMany()

    if (products.length < 1) {
        return NextResponse.json({ message: "Empty" }, { status: 400 })
    }

    products.map(async (p) => {
        await demandChannel.basicPublish(
            "",
            "stock-demand",
            Buffer.from(
                JSON.stringify({
                    uid: p.productId,
                    variant: p.variantId,
                    demandDelta:p.count,
                    timestamp,
                })
            )
        )
    })

    await prisma.productCart.deleteMany({
        where: {
            userId: tokenData.userId
        }
    })

    return NextResponse.json({ message: "Success" }, { status: 200 })
}

