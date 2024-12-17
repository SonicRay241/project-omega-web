"use client"

import { Button } from "@/components/ui/button";
import { uToken } from "@/lib/demo";
import { Heart, MessageSquareText, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function ProductFooter(props: {
    variant: string
    productId: string
}) {
    return (
        <div className="h-20">
            <div className="fixed flex justify-center gap-5 w-screen h-20 z-50 bottom-0">
                <Button
                    className="rounded-full p-4 w-fit h-fit drop-shadow-xl"
                    size="lg"
                    variant="outline"
                >
                    <Heart />
                </Button>
                <Button
                    className="flex gap-3 rounded-full h-fit px-5 py-4 drop-shadow-xl"
                    size="lg"
                    onClick={() => {
                        fetch("/api/cart/add-item", {
                            method: "POST",
                            body: JSON.stringify({
                                userToken: uToken, // For demo
                                productId: props.productId,
                                variant: props.variant
                            }),
                        })
                        .then((res) => {
                            if (res.status == 200) {
                                toast.success(
                                    "Added item to cart!",
                                    {
                                        description: "",
                                        classNames: {
                                            icon: "text-green-600"
                                        },
                                        position: "top-center"
                                    }
                                )
                            }
                            else {
                                toast.error(
                                    "An error occured",
                                    {
                                        description: "An error happened when updating yout cart",
                                        classNames: {
                                            icon: "text-red-600"
                                        },
                                        position: "top-center"
                                    }
                                )
                            }
                        })
                        .catch(() => {
                            toast.error(
                                "An error occured",
                                {
                                    description: "An error happened when updating yout cart",
                                    classNames: {
                                        icon: "text-red-600"
                                    },
                                    position: "top-center"
                                }
                            )
                        })
                    }}
                >
                    <ShoppingBag />
                    <p>Add to cart</p>
                </Button>
                <Button
                    className="rounded-full p-4 w-fit h-fit drop-shadow-xl"
                    size="lg"
                    variant="outline"
                >
                    <MessageSquareText />
                </Button>
            </div>
        </div>
    )
}