import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

type RequestBody = {
    uid: string
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as RequestBody

    const variant = await prisma.variant.findFirst({
        where: {
            productId: body.uid,
        },
        select: {
            name: true
        }
    })

    if (!variant) {
        return NextResponse.json({ message: "Product or variant Not Found" }, { status: 404 })
    }

    return NextResponse.json({ variant: variant.name }, { status: 200 })
}

