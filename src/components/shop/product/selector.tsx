"use client"

import { useState } from "react";
import Price from "./price";
import ProductVariant from "./variant";

export default function ProductSelector(props: {
    productId: string,
    apiUrl: string,
    variants: {
        name: string;
        price: number;
    }[]
    searchParamVariant: string | undefined
}) {
    // Just some linear search
    function checkVariantParam(variant: string | null) {
        if (!variant) return false
        for (let i = 0; i < props.variants.length; i++) {
            if (props.variants[i].name == variant)
                return true
        }
        return false
    }
    
    const [selectedVariant, setSelectedVariant] = useState<string>(
        props.searchParamVariant || props.variants[0].name
    )

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
                variantSelected={selectedVariant}
            />
        </>
    )
}