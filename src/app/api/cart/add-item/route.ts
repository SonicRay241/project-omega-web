import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

type RequestBody = {
    userToken: string
    variant: string
    productId: string
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

    const variant = await prisma.variant.findFirst({
        where: {
            name: body.variant,
            productId: body.productId
        }
    })

    if (!variant) {
        return NextResponse.json({ message: "Variant not found" }, { status: 404 })
    }

    let cartData = await prisma.productCart.findFirst({
        where: {
            userId: tokenData.userId,
            productId: variant.productId,
            variantId: variant.id
        }
    })

    if (!cartData) {
        await prisma.productCart.create({
            data: {
                userId: tokenData.userId,
                productId: variant.productId,
                variantId: variant.id,
                count: 1
            }
        })
    }

    return NextResponse.json({ message: "Updated cart" }, { status: 200 })
}

