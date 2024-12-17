import ShopHeader from "@/components/shop/page/header";
import ProductCard from "@/components/shop/page/productCard";
import getShopItems from "@/db/shop";

export default async function Page() {
    const items = await getShopItems()

    return (
        <div className="">
            <ShopHeader />
            <div className="container mx-auto max-w-screen-xl">
                <div className="px-4 pt-1 md:pt-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {
                            items.map((product, i) => {
                                return (
                                    <ProductCard
                                        id={product.id}
                                        imageUrl="/placeholder.svg"
                                        name={product.name}
                                        sellerName={product.user.name}
                                        key={i}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}