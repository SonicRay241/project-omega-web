import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, formatStrNumber } from "@/lib/utils";

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
                    >
                        Checkout
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}