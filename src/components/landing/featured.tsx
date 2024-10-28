import { Button } from "../ui/button";

export default function Featured(props: {
    product: {
        name: string,
        price: number,
        image: string
    }[]
}) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {props.product.map((product) => (
                        <div key={product.name} className="flex flex-col items-center">
                            <img
                                alt={product.name}
                                className="object-cover w-full h-60 mb-4 rounded-md"
                                height="200"
                                src={product.image}
                                style={{
                                    aspectRatio: "200/200",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">${product.price}</p>
                            <Button className="mt-2">Add to Cart</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}