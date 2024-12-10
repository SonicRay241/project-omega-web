import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CartButton() {
    return (
        <Button
            asChild
            variant="ghost"
            size="icon"
            className="[&_svg]:size-5 rounded-full size-10"
        >
            <Link href="/shop/cart">
                <ShoppingBag />
            </Link>
        </Button>
    )
}