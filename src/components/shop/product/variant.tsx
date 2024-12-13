"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProductVariants(props: {
    variants: {
        name: string;
        price: number;
    }[]
    onVariantChange: (variant: string) => void
    variantSelected: string
}) {

    return (
        <div className="mt-4 text-lg space-y-3 font-medium">
            <h2>Select Variant</h2>
            <div className="flex flex-wrap gap-4">
                {props.variants.map((variant, i) => {
                    return (
                        <Button
                            className="rounded-full font-semibold px-6"
                            key={i}
                            variant={props.variantSelected == variant.name ? "default" : "outline"}
                            size="lg"
                            onClick={() => {
                                props.onVariantChange(props.variants[i].name)
                            }}
                        >
                            {variant.name}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}