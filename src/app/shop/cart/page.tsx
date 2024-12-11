"use client"

import CartCheckout from "@/components/shop/cart/checkout";
import CartHeader from "@/components/shop/cart/header";
import CartList from "@/components/shop/cart/list";

export default function Page() {
    return (
        <div className="container mx-auto max-w-screen-md h-screen">
            <CartHeader />
            <div className="px-4 pt-20 md:pt-20 md:px-8 h-full">
                <div className="flex flex-col md:flex-row justify-between md:gap-6 h-full">
                    <CartList />
                    <CartCheckout />
                </div>
            </div>
        </div>
    )
}