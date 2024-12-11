"use client"

import { Button } from "@/components/ui/button"
import useIsOverflow from "@/hooks/overflow"
import { Separator } from "@radix-ui/react-separator"
import { Dot, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

function ProductDetail() {
    return (
        <div className="w-full">
            <div className="w-full h-24 flex gap-4">
                <Image
                    src={"/placeholder.svg"}
                    alt={`Product Name`}
                    width={64}
                    height={64}
                    className="size-24 object-cover rounded-xl col-span-2 shadow-lg"
                />
                <div className="w-full">
                    <h2 className="font-semibold text-lg">Product Name</h2>
                    <div className="flex items-center text-zinc-400 text-sm">
                        <p>Seller Name</p>
                        <Dot/> 
                        <p>1000ml</p>
                    </div>
                    <div className="flex w-full justify-between mt-2">
                        <div className="mt-2">
                            <p className="text-lg font-semibold">Rp80.000</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                className="rounded-full w-0 h-0 px-0 p-4"
                            >
                                <Minus/>
                            </Button>
                            <p className="">2</p>
                            <Button
                                variant="outline"
                                className="rounded-full w-0 h-0 px-0 p-4"
                            >
                                <Plus/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="h-[1px] bg-zinc-200 my-7" />
        </div>
    )
}


export default function CartList(props: {
    onScrollBottom?: () => void
}) {
    return (
        <div
            className="w-full flex flex-col gap-2 px-4 overflow-y-auto no-scrollbar"
            onScroll={(e) => {
                const target = e.target as HTMLDivElement
                Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight)) <= 1
                && props.onScrollBottom && props.onScrollBottom()
            }}
        >
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
        </div>
    )
}