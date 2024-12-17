import CartClientWrapper from "@/components/shop/cart/clientwrapper"
import { getCartList } from "@/db/cart"
import { uToken } from "@/lib/demo"

export default async function Page() {
    const productList = await getCartList(uToken) // For demo

    if (productList == null) return "Oh no!"

    return <CartClientWrapper
        productList={productList}
    />
}