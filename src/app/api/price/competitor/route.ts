import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"

type RequestBody = {
    uid: string
    variant: string
    category: string
}

export async function POST(req: NextRequest) {
    const body = (await req.json()) as RequestBody

    const agg = await prisma.variant.aggregate({
        where: {
            name: {
                contains: body.variant
            },
            product: {
                category: body.category,
            },
            NOT: {
                product: {
                    id: body.uid
                }
            }
        },
        _avg: {
            price: true
        }
    })

    if (!agg._avg.price) {
        return NextResponse.json({ price: 0 }, { status: 404 })
    }

    return NextResponse.json({ price: agg._avg.price }, { status: 200 })
}

