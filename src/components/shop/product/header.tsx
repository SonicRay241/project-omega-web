"use client"

import BackButton from "@/components/backbutton";
import CartButton from "@/components/cartbutton";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ProductHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="h-14">
            <div className={cn(
                "flex justify-center fixed h-14 top-0 w-screen z-50 bg-background transition-shadow",
                scrolled ? "shadow-lg" : "shadow-none"
            )}>
                <div className="grid grid-cols-5 px-2 md:px-4 max-w-screen-md w-full">
                    <div className="flex justify-start items-center">
                        <BackButton />
                    </div>
                    <div className="flex justify-center items-center col-span-3">
                        <h3 className="text-lg font-semibold">Product Details</h3>
                    </div>
                    <div className="flex justify-end items-center">
                        <CartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}