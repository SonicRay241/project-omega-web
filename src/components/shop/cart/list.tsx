import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Dot, Minus, Plus } from "lucide-react"
import Image from "next/image"

function ProductDetail() {
    return (
        <div className="w-full space-y-3">
            <div className="w-full h-24 grid grid-cols-7 gap-4">
                <Image
                    src={"/placeholder.svg"}
                    alt={`Product Name`}
                    width={64}
                    height={64}
                    className="w-full object-cover rounded-xl col-span-2 shadow-lg"
                />
                <div className="col-span-5">
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
            <Separator className="h-[1px] bg-zinc-200" />
        </div>
    )
}


export default function CartList() {


    return (
        <div className="grid grid-cols-1 gap-2 px-4">
            <ProductDetail />
        </div>
    )
}