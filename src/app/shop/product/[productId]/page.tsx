import ImageCarousel from '@/components/shop/product/carousel'
import { getProductInfo } from '@/db/product'
import ProductDescription from '@/components/shop/product/description'
import ProductFooter from '@/components/shop/product/footer'
import ProductReviews from '@/components/shop/product/reviews'
import ProductRating from '@/components/shop/product/rating'
import ProductSelector from '@/components/shop/product/selector'
import ProductHeader from '@/components/shop/product/header'

export default async function Page(
    { params }: { params: Promise<{ productId: string }> }
) {
    const productId = (await params).productId
    const API_URL = process.env.API_URL || ""

    const data = getProductInfo()

    return (
        <div className="">
            <ProductHeader />
            <div className="container mx-auto max-w-screen-md">
                <div className="px-4 pt-1 md:px-8">
                    <div className="grid md:grid-cols-2 gap-2 md:gap-6">
                        <ImageCarousel images={data.images} />
                        <div className="space-y-4 px-2">
                            <div className="flex justify-between gap-8 md:gap-2 md:flex-col">
                                <div className="">
                                    <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
                                    <h2 className="text-base text-zinc-400 font-semibold mt-2">{data.seller}</h2>
                                </div>
                                <ProductRating rating={data.rating} />
                            </div>
                            <ProductSelector 
                                apiUrl={API_URL}
                                productId={productId}
                                variants={data.variants}
                            />
                        </div>
                    </div>
                    <div className="space-y-4 px-2 py-4 md:py-0">
                        <ProductDescription description={data.description} />
                        <ProductReviews />
                    </div>
                </div>
            </div>
            <ProductFooter />
        </div>
    )
}