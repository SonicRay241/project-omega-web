import CartHeader from "@/components/shop/cart/header";
import CartList from "@/components/shop/cart/list";

export default function Page() {
    return (
        <div className="container mx-auto max-w-screen-md">
            <CartHeader />
            <div className="px-4 pt-5 md:pt-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-2 md:gap-6">
                    <CartList />
                </div>
            </div>
        </div>
    )
}