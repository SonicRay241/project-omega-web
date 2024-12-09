import { Star, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import Price from '@/components/shop/product/price'
import ImageCarousel from '@/components/shop/product/carousel'
import { Badge } from '@/components/ui/badge'

export default async function Page(
    { params }: { params: Promise<{ productId: string }> }
) {
    const productId = (await params).productId
    const API_URL = process.env.API_URL || ""

    return (
        <div className="container mx-auto p-4 max-w-screen-md">
            <div className="grid md:grid-cols-2 gap-2">
                <ImageCarousel />
                <div className="space-y-4 px-2">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="text-3xl font-bold">Product Name</h1>
                            {/* <h1 className="text-3xl font-bold">{productId}</h1> */}
                            <h2 className="text-base text-secondary font-semibold mt-2">Seller</h2>
                        </div>
                        {/* <div className="flex items-center space-x-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary" />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">(121 reviews)</span>
                        </div> */}
                        <Badge className="flex gap-1 bg-orange-200 h-fit py-1 px-2.5 text-orange-500 rounded-full mt-1">
                            <Star className="w-4 h-4 fill-orange-500 stroke-orange-500" />
                            <p className="font-bold text-sm translate-y-[0.5px]">4.8</p>
                        </Badge>
                    </div>
                    <Price
                        productId={productId}
                        apiUrl={API_URL}
                    />
                    <p className="text-muted-foreground">
                        Experience ultimate comfort with our ergonomic desk chair. Designed to support your body during long work hours, this chair features adjustable lumbar support, breathable mesh back, and customizable armrests.
                    </p>
                    <Button className="w-full md:w-auto" size="lg">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                </div>
            </div>
            <div className="mt-12 space-y-8">
                <Separator />
                {/* <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Ergonomic design for optimal comfort</li>
                            <li>Adjustable lumbar support</li>
                            <li>Breathable mesh back</li>
                            <li>Customizable armrests</li>
                            <li>360-degree swivel</li>
                            <li>Weight capacity: 300 lbs</li>
                        </ul>
                    </CardContent>
                </Card> */}
                <div className="">
                    <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Ergonomic design for optimal comfort</li>
                        <li>Adjustable lumbar support</li>
                        <li>Breathable mesh back</li>
                        <li>Customizable armrests</li>
                        <li>360-degree swivel</li>
                        <li>Weight capacity: 300 lbs</li>
                    </ul>
                </div>
                {/* <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
                        <p className="text-muted-foreground">
                            Free shipping on orders over $500. Standard delivery takes 3-5 business days. Express shipping options available at checkout.
                        </p>
                    </CardContent>
                </Card> */}
                <Separator />
                <div className="">
                    <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
                    <p className="text-muted-foreground">
                        Free shipping on orders over $500. Standard delivery takes 3-5 business days. Express shipping options available at checkout.
                    </p>
                </div>
            </div>
        </div>
    )
}