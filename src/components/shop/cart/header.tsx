"use client"

import BackButton from "@/components/backbutton";
import { cn } from "@/lib/utils";

export default function CartHeader(props: {
    top: boolean
}) {
    return (
            <div className={cn(
                "flex justify-center fixed h-14 left-0 top-0 w-screen z-50 bg-background transition-shadow",
                props.top ? "shadow-none" : "shadow-lg"
            )}>
                <div className="grid grid-cols-3 px-2 md:px-4 max-w-screen-lg w-full">
                    <div className="flex justify-start items-center">
                        <BackButton />
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="text-lg font-semibold">My Cart</h3>
                    </div>
                </div>
            </div>
    )
}