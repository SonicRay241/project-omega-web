"use client"

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
                "fixed flex h-14 items-center justify-center top-0 w-screen z-50 bg-background transition-shadow",
                scrolled ? "shadow-lg" : "shadow-none"
            )}>
                <div className="flex gap-3 items-center h-full">
                    <h3 className="text-lg font-semibold">Product Details</h3>
                </div>
            </div>
        </div>
    )
}