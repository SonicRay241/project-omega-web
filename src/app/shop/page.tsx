"use client"

import ShopHeader from "@/components/shop/page/header";
import ProductCard from "@/components/shop/page/productCard";

export default function Page() {
    return (
        <div className="">
            <ShopHeader />
            <div className="container mx-auto max-w-screen-lg">
                <div className="px-4 pt-1 md:pt-4 md:px-8">
                    <div className="grid grid-cols-2 gap-4">

                        <ProductCard
                            id="prod001"
                            imageUrl="/placeholder.svg"
                            name="Product Name"
                            onAddToCart={(e) => { }}
                            price={40000}
                        />
                        <ProductCard
                            id="prod001"
                            imageUrl="/placeholder.svg"
                            name="Product Name"
                            onAddToCart={(e) => { }}
                            price={40000}
                        />
                        <ProductCard
                            id="prod001"
                            imageUrl="/placeholder.svg"
                            name="Product Name"
                            onAddToCart={(e) => { }}
                            price={40000}
                        />
                        <ProductCard
                            id="prod001"
                            imageUrl="/placeholder.svg"
                            name="Product Name"
                            onAddToCart={(e) => { }}
                            price={40000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}