"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

function VariantButtons(props: {
    variants: string[]
}) {
    const [indexSelected, setIndexSelected] = useState(0)
    return (
        <div className="flex flex-wrap gap-4">
            {props.variants.map((variant, i) => {
                return (
                    <Button 
                        className="rounded-full font-semibold px-6"
                        key={i}
                        variant={indexSelected == i ? "default" : "outline"}
                        size="lg"
                        onClick={() => setIndexSelected(i)}
                    >
                        {variant}
                    </Button>
                )
            })}
        </div>
    )
}

export default function ProductVariant(props: {
    variants: string[]
}) {
    return (
        <div className="mt-4 text-lg space-y-3 font-medium">
            <h2>Select Variant</h2>
            <VariantButtons variants={props.variants} />
        </div>
    )
}