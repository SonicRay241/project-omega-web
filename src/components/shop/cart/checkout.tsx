"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { uToken } from "@/lib/demo";
import { cn, formatStrNumber } from "@/lib/utils";
import { toast } from "sonner";

export default function CartCheckout(props: {
    className?: string,
    subtotal: number
}) {
    const discount = 10000

    return (
        <div className={cn(
            "w-full md:w-2/3 p-8",
            props.className,
            "md:shadow-none"
        )}>
            <Card className="border-none shadow-none md:border md:shadow">
                <CardContent className="p-0 md:p-6">
                    <div className="px-2">
                        <div className="flex justify-between">
                            <p className="text-zinc-400 font-semibold">Items</p>
                            <p className="font-semibold">Rp{formatStrNumber(props.subtotal.toString())}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-zinc-400 font-semibold">Discounts</p>
                            <p className="font-semibold">-Rp{formatStrNumber(discount.toString())}</p>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-zinc-400 font-semibold">Total</p>
                            <p className="font-semibold">Rp{formatStrNumber((props.subtotal - discount).toString())}</p>
                        </div>
                    </div>
                    <Button
                        variant="default"
                        size="lg"
                        className="rounded-full w-full h-14 md:h-10 mt-8 text-base font-semibold"

                        onClick={() => {
                            fetch("/api/checkout", {
                                method: "POST",
                                body: JSON.stringify({
                                    userToken: uToken, // For demo
                                }),
                            })
                            .then((res) => {
                                if (res.status == 200) {
                                    toast.success(
                                        "Checkout Complete!",
                                        {
                                            description: "",
                                            classNames: {
                                                icon: "text-green-600"
                                            },
                                            position: "top-center"
                                        }
                                    )

                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 2000)
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
                        Checkout
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}