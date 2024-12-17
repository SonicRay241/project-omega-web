import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma"
import fs from "fs"
import readline from "readline"


export async function POST(req: NextRequest) {
    const fileStream = fs.createReadStream('./data.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    let idx = 0

    for await (const line of rl) {
        if (idx == 0) {
            idx++
            continue
        }

        const columns = line.split(",")
        // Each line in input.txt will be successively available here as `line`.

        let product = await prisma.product.findFirst({
            where: {
                sellerId: columns[5],
                name: columns[0],
                description: "",
                category: columns[2],
                rating: +columns[1],
            }
        })

        console.log(product)

        if (!product) {
            product = await prisma.product.create({
                data: {
                    sellerId: columns[5],
                    name: columns[0],
                    description: "",
                    category: columns[2],
                    rating: +columns[1],
                },
            })

        }

        await prisma.variant.create({
            data: {
                productId: product.id,
                name: columns[3],
                price: +columns[4],
            }
        })

        idx++
    }

    return NextResponse.json({ message: "OK" }, { status: 200 })
}

