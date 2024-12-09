type ProductInfo = {
    name: string
    seller: string
    description: string
    rating: number // 1-5 floating point
    images: string[] // Array of image URLs
    variants: string[] // Array of variant names ex: (250ml, 1000ml) or (Small, Medium, Big)
}

export function getProductInfo(): ProductInfo {
    // Change this with db logic, thx
    const data: ProductInfo = {
        name: "Lorem ipsum dolor sit amet",
        seller: "Seller Name",
        rating: 4.8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: [
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
        ],
        variants: [
            "250ml",
            // "500ml",
            // "750ml",
            "1000ml",
            // "2000ml",
        ]
    }

    return data
}