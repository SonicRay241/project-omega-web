import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import ShopRating from './rating'
import Link from 'next/link'

interface ProductCardProps {
    id: string
    name: string
    imageUrl: string
    sellerName: string
}

export default function ProductCard(props: ProductCardProps) {
    return (
        <Link href={`/shop/product/${props.id}`}>
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
                            <h3 className="text-muted-foreground text-sm">{props.sellerName}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-2 pl-1 pt-2">
                    <ShopRating rating={4.5} className='mb-1' />
                    <Button
                        className="rounded-full size-8 p-0 [&_svg]:stroke-[3px] [&_svg]:opacity-90"
                    >
                        <Plus />
                    </Button>
                </div>
            </div>
        </Link>
    )
}

