import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatStrNumber } from '@/lib/utils'
import { Plus } from 'lucide-react'
import ProductRating from '../product/rating'
import ShopRating from './rating'

interface ProductCardProps {
    id: string
    name: string
    price: number | null
    imageUrl: string
    onAddToCart: (id: string) => void
}

export default function ProductCard(props: ProductCardProps) {
    // Format price or display 'N/A' if price is null or undefined
    const formattedPrice = "Rp" + formatStrNumber(props.price ? props.price.toString() : "0")

    return (
        <div className="w-full flex flex-col justify-between rounded-2xl hover:bg-secondary/80 p-2 transition-colors">
            <div className="space-y-2">
                <div className="relative w-full aspect-square">
                    <Image
                        src={props.imageUrl || '/placeholder.svg'}
                        alt={props.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-opacity duration-300 rounded-xl"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="px-1">
                        <h2 className="font-semibold">{props.name || 'Unnamed Product'}</h2>
                        <h3 className="text-muted-foreground text-sm">Seller Name</h3>
                    </div>
                    <ShopRating rating={4.5} />
                </div>
            </div>
            <div className="flex justify-between items-end gap-2 pl-1 pt-2">
                <div className="">
                    <p className="font-semibold pb-1">{formattedPrice}</p>
                </div>
                <Button
                    className="rounded-full size-8 p-0 [&_svg]:stroke-[3px] [&_svg]:opacity-90"
                >
                    <Plus />
                </Button>
            </div>
        </div>
    )
}

