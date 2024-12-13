import BackButton from "@/components/backbutton";
import CartButton from "@/components/cartbutton";
import { cn } from "@/lib/utils";

export default function ShopHeader() {
    return (
        <div className="h-14">
            <div className={cn(
                "flex justify-center fixed h-14 pt-4 top-0 w-screen z-50 bg-background transition-shadow",
                // scrolled ? "shadow-lg" : "shadow-none"
            )}>
                <div className="grid grid-cols-5 px-2 md:px-4 max-w-screen-lg w-full">
                    <div className="flex justify-start items-center">
                        {/* <BackButton /> */}
                    </div>
                    <div className="flex justify-center items-center col-span-3">
                        <h3 className="text-lg font-semibold">Product Catalogue</h3>
                    </div>
                    <div className="flex justify-end items-center">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}