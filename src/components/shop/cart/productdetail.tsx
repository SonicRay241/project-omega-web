"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Dot, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { type CartProductInfo } from "@/db/cart"
import Link from "next/link"
import { formatStrNumber } from "@/lib/utils"
import { useEffect, useState } from "react"
import { uToken } from "@/lib/demo"

export default function ProductDetail(props: {
    productInfo: CartProductInfo,
    onSubtotalUpdate: (delta: number) => void
}) {
    const [count, setCount] = useState(props.productInfo.count)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (isLoaded)
            fetch("/api/cart/update-count", {
                method: "POST",
                body: JSON.stringify({
                    userToken: uToken,
                    cartItemId: props.productInfo.cartId,
                    count: count
                }),
            })
        
        setIsLoaded(true)
    }, [count])

    return (
        <div className="w-full">
            <div className="w-full h-24 flex gap-4">
                <Image
                    src={props.productInfo.image}
                    alt={`Product Name`}
                    width={64}
                    height={64}
                    className="size-24 object-cover rounded-xl col-span-2 shadow-lg"
                />
                <div className="w-full">
                    <Link href={`${props.productInfo.url}?variant=${props.productInfo.variant}`}>
                        <h2 className="font-semibold text-lg">
                            {props.productInfo.name}
                        </h2>
                    </Link>
                    <div className="flex items-center text-zinc-400 text-sm">
                        <p>{props.productInfo.seller}</p>
                        <Dot />
                        <p>{props.productInfo.variant}</p>
                    </div>
                    <div className="flex w-full justify-between mt-2">
                        <div className="mt-2">
                            <p className="text-lg font-semibold">
                                Rp{formatStrNumber(props.productInfo.price.toString())}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                className="rounded-full w-0 h-0 px-0 p-4"
                                onClick={() => {
                                    if (count > 0) {
                                        setCount(count - 1)
                                        props.onSubtotalUpdate(-props.productInfo.price)
                                    }
                                
                                }}
                                disabled={count < 2}
                            >
                                <Minus />
                            </Button>
                            <p className="">{count}</p>
                            <Button
                                variant="outline"
                                className="rounded-full w-0 h-0 px-0 p-4"
                                onClick={() => {
                                    setCount(count + 1)
                                    props.onSubtotalUpdate(props.productInfo.price)
                                }}
                            >
                                <Plus />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="my-6" />
        </div>
    )
}