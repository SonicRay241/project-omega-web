import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function CartCheckout(props: {
    className?: string
}) {
    return (
        <div className={cn(
            "w-full md:w-96 p-8",
            props.className,
            "md:shadow-none"
        )}>
            <div className="px-2">
                <div className="flex justify-between">
                    <p className="text-zinc-400 font-semibold">Items</p>
                    <p className="font-semibold">Rp80.000</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="text-zinc-400 font-semibold">Discounts</p>
                    <p className="font-semibold">-Rp10.000</p>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between">
                    <p className="text-zinc-400 font-semibold">Total</p>
                    <p className="font-semibold">Rp70.000</p>
                </div>
            </div>
            <Button
                variant="default"
                size="lg"
                className="rounded-full w-full h-14 md:h-10 mt-8 text-base font-semibold"
            >
                Checkout
            </Button>
        </div>
    )
}