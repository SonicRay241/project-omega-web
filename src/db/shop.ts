import { prisma } from "@/prisma";

export default async function getShopItems() {
    return await prisma.product.findMany({
        select: {
            user: {
                select: {
                    name: true
                }
            },
            id: true,
            name: true,
            
        }
    })
}