import { prisma } from "@/prisma"

export type CartProductInfo = {
    name: string
    seller: string
    url: string
    image: string
    variant: string // Array of variant names ex: (250ml, 1000ml) or (Small, Medium, Big)
    price: number
}

export async function getCartList(userToken: string): Promise<CartProductInfo[] | null> {
    const cartData = await prisma.token.findFirst({
        where: {
            userId: userToken
        },
        include: {
            User: {
                include: {
                    productCarts: {
                        include: {
                            Product: {
                                select: {
                                    id: true,
                                    name: true,
                                    user: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            },
                            Variant: {
                                select: {
                                    name: true,
                                    price: true
                                }
                            }
                        }
                    }
                }
            }
        },
    })

    if (!cartData) return null

    const data: CartProductInfo[] = cartData.User.productCarts.map(
        (p) => {
            return {
                name: p.Product.name,
                seller: p.Product.user.name,
                url: `/shop/product/${p.Product.id}`,
                image: "/placeholder.svg",
                variant: p.Variant.name,
                price: p.Variant.price
            }
        }
    )

    return data
}