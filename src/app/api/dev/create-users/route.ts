import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"
import { faker } from "@faker-js/faker"
import crypto from "crypto"

export async function POST(req: NextRequest) {
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                passwordHash: crypto.createHash("sha256").update("123").digest("hex"),
            }
        })
    }

    return NextResponse.json({ status: "OK" }, { status: 200 })
}

