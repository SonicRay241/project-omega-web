import { Button } from "@/components/ui/button";
import { Heart, MessageSquareText, Share, Share2, ShoppingBag } from "lucide-react";

export default function ProductFooter() {
    return (
        <div className="h-20">
            <div className="fixed flex justify-center gap-5 w-screen h-20 z-50 bottom-0">
                <Button
                    className="rounded-full p-4 w-fit h-fit drop-shadow-xl"
                    size="lg"
                    variant="outline"
                >
                    <Heart size={64} />
                </Button>
                <Button
                    className="flex gap-3 rounded-full h-fit px-5 py-4 drop-shadow-xl"
                    size="lg"
                >
                    <ShoppingBag />
                    <p>Add to cart</p>
                </Button>
                <Button
                    className="rounded-full p-4 w-fit h-fit drop-shadow-xl"
                    size="lg"
                    variant="outline"
                >
                    <MessageSquareText size={64} />
                </Button>
            </div>
        </div>
    )
}