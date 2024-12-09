"use client"

import { useState } from "react";
import Price from "./price";
import ProductVariant from "./variant";

export default function ProductSelector(props: {
    productId: string,
    apiUrl: string,
    variants: string[]
}) {
    const [selectedVariant, setSelectedVariant] = useState(props.variants[0])

    return (
        <>
            <Price
                productId={props.productId}
                apiUrl={props.apiUrl}
                selectedVariant={selectedVariant}
            />
            <ProductVariant
                onVariantChange={setSelectedVariant}
                variants={props.variants}
            />
        </>
    )
}