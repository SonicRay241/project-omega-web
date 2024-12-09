"use client"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { getProductReviews, ProductReview } from "@/db/product"
import ProductRating from "./rating"
import { useState } from "react"
import { Button } from "@/components/ui/button"

function ReviewCard(props: {
    reviewData: ProductReview
}) {
    return (
        <Card className="w-full">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={props.reviewData.profile} alt={props.reviewData.username} />
                            <AvatarFallback>{props.reviewData.username.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <p className="text-base font-semibold m-0">{props.reviewData.username}</p>
                    </div>
                    <ProductRating
                        className="mt-0"
                        rating={+props.reviewData.rating.toPrecision(2)}
                    />
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600">{props.reviewData.review}</p>
            </CardContent>
        </Card>
    )
}

export default function ProductReviews() {
    const firstReview = getProductReviews(1)[0]
    const reviews = getProductReviews(5, 1)

    const [showMore, setShowMore] = useState(false)

    return (
        <div className="space-y-2">
            <h3 className="text-lg font-medium">Reviews</h3>
            <div className="space-y-4">
                <ReviewCard reviewData={firstReview} />
                {showMore && reviews.map((data, i) => {
                    return (
                        <ReviewCard reviewData={data} key={i} />
                    )
                })}
                <Button
                    variant="ghost"
                    onClick={() => setShowMore(!showMore)}
                >
                    { showMore ? "Hide" : "Show more reviews" }
                </Button>
            </div>
        </div>
    )
}