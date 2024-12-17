import { forwardRef } from "react"
import { type CartProductInfo } from "@/db/cart"
import ProductDetail from "./productdetail"

type ComponentProps = {
    onScrollBottom?: () => void
    productList: CartProductInfo[],
    onSubtotalUpdate: (delta: number) => void
}

export default forwardRef<HTMLDivElement, ComponentProps>
((props, ref) => {
    return (
        <div
            className="w-full flex flex-col gap-2 px-8 overflow-y-auto no-scrollbar pt-6 md:pb-20"
            onScroll={(e) => {
                const target = e.target as HTMLDivElement
                Math.abs(target.scrollHeight - (target.scrollTop + target.clientHeight)) <= 1
                    && props.onScrollBottom && props.onScrollBottom()
            }}
            ref={ref}
        >
            {props.productList.length > 0
                ? props.productList.map((productData, i) => {
                    return <ProductDetail
                        productInfo={productData}
                        key={i}
                        onSubtotalUpdate={props.onSubtotalUpdate}
                    />
                })
                : <div className="flex w-full justify-center items-center h-10">
                    <p className="text-zinc-300 text-lg">
                        Your cart is empty.
                    </p>
                </div>
            }
        </div>
    )
})