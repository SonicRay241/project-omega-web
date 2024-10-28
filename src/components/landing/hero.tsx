import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Welcome to Brew Haven
                        </h1>
                        <p className="mx-auto max-w-[700px] text-white md:text-xl">
                            Discover the perfect blend for your daily ritual
                        </p>
                    </div>
                    <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
                </div>
            </div>
        </section>
    )
}