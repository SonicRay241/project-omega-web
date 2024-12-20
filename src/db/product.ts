import { prisma } from "@/prisma"
import { faker } from "@faker-js/faker"

export type ProductInfo = {
    name: string
    seller: string
    description: string
    rating: number // 1-5 floating point
    images: string[] // Array of image URLs
    variants: { name: string, price: number }[] // Array of variant names ex: (250ml, 1000ml) or (Small, Medium, Big)
}

export async function getProductInfo(productId: string): Promise<ProductInfo | null> {
    const productData = await prisma.product.findFirst({
        where: {
            id: productId
        },
        include: {
            // URL Implementation for later
            // images: {
            //     select: {
            //         id: true
            //     }
            // },
            user: {
                select: {
                    name: true
                }
            },
            variants: {
                select: {
                    name: true,
                    price: true
                }
            }
        }
    })

    if (!productData) return null

    return {
        name: productData.name,
        description: productData.description,
        seller: productData.user.name,
        rating: productData.rating,
        images: [
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
        ],
        variants: productData.variants
    }

    // Change this with db logic, thx
    // const data: ProductInfo = {
    //     name: "Lorem ipsum dolor sit amet",
    //     seller: "Seller Name",
    //     rating: 4.8,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     images: [
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //     ],
    //     variants: [
    //         { name: "250ml", price: 40000 },
    //         { name: "1000ml", price: 150000 },
    //     ]
    // }

    // return data
}

export type ProductReview = {
    username: string
    profile: string
    review: string
    rating: number // 1-5
}

export function getProductReviews(count: number = 5, offset: number = 0) {
    let data: ProductReview[] = []

    for (let i = 0; i < count; i++) {
        data = [...data,
        {
            username: faker.person.fullName(),
            profile: "/placeholder.svg",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: faker.number.float({
                min: 3,
                max: 5,
                multipleOf: 0.5
            })
        }
        ]
    }

    return data
}