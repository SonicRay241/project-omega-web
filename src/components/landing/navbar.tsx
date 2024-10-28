import { MugIcon } from "@/lib/icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <MugIcon className="h-6 w-6" />
                <span className="sr-only">Brew Haven</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Shop
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Contact
                </Link>
                <Button size="icon" variant="ghost">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="sr-only">Cart</span>
                </Button>
                <Button size="icon" variant="ghost">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                </Button>
            </nav>
        </header>
    )
}