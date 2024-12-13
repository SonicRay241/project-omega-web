"use client"

import ShopHeader from "@/components/shop/page/header";
import ProductCard from "@/components/shop/page/productCard";

export default function Page() {
    return (
        <div className="">
            <ShopHeader />
            <div className="container mx-auto max-w-screen-xl">
                <div className="px-4 pt-1 md:pt-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
                            name="This is a long product name for testing purposes"
                            onAddToCart={(e) => { }}
                            price={40000}
                        />
                        <ProductCard
                            id="prod001"
                            imageUrl="/placeholder.svg"
                            name="Medium Sized Product Name"
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