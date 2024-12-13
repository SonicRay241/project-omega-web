import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
    id: string
    name: string
    price: number | null
    imageUrl: string
    onAddToCart: (id: string) => void
}

export default function ProductCard(props: ProductCardProps) {
    // Format price or display 'N/A' if price is null or undefined
    const formattedPrice = props.price != null ? `$${props.price.toFixed(2)}` : 'N/A'

    return (
        <div className="w-full col-span-1">
            <div className="relative w-full">
                <Image
                    src={props.imageUrl || '/placeholder.svg'}
                    alt={props.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-75 aspect-square"
                />
            </div>
            <div className="">

            </div>
        </div>
        // <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
        //     <div className="relative h-24 w-full p-4">
        //     </div>
        //     <CardHeader>
        //         <h2 className="text-lg font-semibold">{props.name || 'Unnamed Product'}</h2>
        //     </CardHeader>
        //     <CardContent>
        //         <p className="text-muted-foreground">{formattedPrice}</p>
        //     </CardContent>
        //     <CardFooter>
        //         <Button
        //             onClick={() => props.onAddToCart(props.id)}
        //             className="w-full"
        //             disabled={props.price == null}
        //         >
        //             {props.price != null ? 'Add to Cart' : 'Not Available'}
        //         </Button>
        //     </CardFooter>
        // </Card>
    )
}

