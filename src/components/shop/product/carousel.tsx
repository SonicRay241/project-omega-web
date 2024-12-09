'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export function CarouselDots(props: {
    api: CarouselApi,
    images: string[]
}) {
    return (
        <div className="flex justify-center space-x-1 px-2 py-1.5 bg-secondary rounded-full mt-1.5 md:mt-2 h-fit">
            {props.images.map((_, index) => (
                <button
                    key={index}
                    className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all",
                        props.api?.selectedScrollSnap() === index ? "bg-zinc-400 scale-100" : "bg-zinc-300 scale-75"
                    )}
                    onClick={() => props.api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default function ImageCarousel(props: {
    images: string[]
}) {
    const [api, setApi] = useState<CarouselApi | undefined>(undefined)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="w-full max-w-screen-sm mx-auto">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {props.images.map((src, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-0 rounded-3xl">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <Image
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        width={400}
                                        height={400}
                                        className="w-full object-cover rounded-3xl"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex w-full justify-center gap-2 md:py-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => api?.scrollPrev()}
                    className="hidden md:flex rounded-full"
                >
                    <ChevronLeft />
                </Button>
                <CarouselDots
                    api={api} 
                    images={props.images}
                />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => api?.scrollNext()}
                    className="hidden md:flex rounded-full"
                >
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

