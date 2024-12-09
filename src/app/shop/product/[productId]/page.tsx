import { Star, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import Price from '@/components/shop/product/price'
import ImageCarousel from '@/components/shop/product/carousel'
import { Badge } from '@/components/ui/badge'
import { getProductInfo } from '@/db/product'
import ProductVariant from '@/components/shop/product/variant'
import { cn } from '@/lib/utils'
import ProductDescription from '@/components/shop/product/description'

function Rating(props: {
    rating: number,
    className?: string
}) {
    return (
        <Badge className={cn(
            "flex gap-1 bg-orange-200 h-fit w-fit py-1 px-2.5 text-orange-500 rounded-full mt-1.5",
            props.className
        )}>
            <Star className="w-4 h-4 fill-orange-500 stroke-orange-500" />
            <p className="font-bold text-sm translate-y-[0.5px]">{props.rating}</p>
        </Badge>
    )
}

export default async function Page(
    { params }: { params: Promise<{ productId: string }> }
) {
    const productId = (await params).productId
    const API_URL = process.env.API_URL || ""

    const data = getProductInfo()

    return (
        <div className="container mx-auto p-4 max-w-screen-md">
            <div className="grid md:grid-cols-2 gap-2 md:gap-6">
                <ImageCarousel images={data.images} />
                <div className="space-y-4 px-2">
                    <div className="flex justify-between gap-8 md:gap-2 md:flex-col">
                        <div className="">
                            <h1 className="text-4xl font-bold">{data.name}</h1>
                            <h2 className="text-base text-zinc-400 font-semibold mt-2">{data.seller}</h2>
                        </div>
                        <Rating rating={data.rating} />
                    </div>
                    <Price
                        productId={productId}
                        apiUrl={API_URL}
                    />
                    <ProductVariant
                        variants={data.variants}
                    />
                </div>
            </div>
            <div className="space-y-4 px-2 py-4 md:py-0">
                <ProductDescription description={data.description} />
            </div>
        </div>
    )
}