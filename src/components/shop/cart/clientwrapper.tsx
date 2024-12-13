"use client"

import CartCheckout from "@/components/shop/cart/checkout";
import CartHeader from "@/components/shop/cart/header";
import CartList from "@/components/shop/cart/list";
import { CartProductInfo } from "@/db/cart";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function CartClientWrapper(props: {
    productList: CartProductInfo[]
}) {
    const listRef = useRef<HTMLDivElement>(null)
    const [top, setTop] = useState(true);
    const [bottom, setBottom] = useState(false)
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        let subtotal = 0
        props.productList.forEach((product) => {
            subtotal += product.price
        })

        setSubtotal(subtotal)
    }, [props.productList])

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                if (listRef.current.scrollTop > 0) {
                    setTop(false);
                }
                else {
                    setTop(true);
                }

                if (Math.abs(listRef.current.scrollHeight - listRef.current.clientHeight - listRef.current.scrollTop) <= 1) {
                    setBottom(true)
                }
                else {
                    setBottom(false)
                }
            }
        };

        listRef.current && listRef.current.addEventListener("scroll", handleScroll);

        handleScroll()

        // Cleanup listener on component unmount
        return () => {
            listRef.current && listRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto max-w-screen-lg h-screen">
            <CartHeader top={top} />
            <div className="pt-14 md:px-4 h-full">
                <div className="flex flex-col md:flex-row justify-between md:gap-6 h-full">
                    <CartList
                        productList={props.productList}
                        ref={listRef}
                    />
                    <CartCheckout
                        className={cn(
                            bottom ? "shadow-none" : "shadow-[0_-4px_6px_-1px_rgb(0_0_0/0.1)]",
                            props.productList.length < 1 && "hidden"
                        )}
                        subtotal={subtotal}
                    />
                </div>
            </div>
        </div>
    )
}