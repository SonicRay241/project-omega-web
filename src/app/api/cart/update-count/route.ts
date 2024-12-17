import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

type RequestBody = {
    userToken: string
    cartItemId: string
    count: number
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as RequestBody

    const tokenData = await prisma.token.findFirst({
        where: {
            id: body.userToken
        }
    })

    if (!tokenData) {
        return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    await prisma.productCart.update({
        where: {
            id: body.cartItemId
        },
        data: {
            count: body.count
        }
    })

    return NextResponse.json({ message: "Updated cart" }, { status: 200 })
}

