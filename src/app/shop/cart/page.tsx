import CartClientWrapper from "@/components/shop/cart/clientwrapper"
import { getCartList } from "@/db/cart"

export default async function Page() {
    const productList = await getCartList("e")

    if (!productList) return "Oh no!"

    return <CartClientWrapper
        productList={productList}
    />
}