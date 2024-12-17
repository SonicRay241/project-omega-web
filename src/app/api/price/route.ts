import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

type RequestBody = {
    uid: string
    variant: string
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as RequestBody

    const variant = await prisma.variant.findFirst({
        where: {
            productId: body.uid,
            name: body.variant
        },
    })

    if (!variant) {
        return NextResponse.json({ message: "Product or variant Not Found" }, { status: 404 })
    }

    return NextResponse.json({ price: variant.price }, { status: 200 })
}

