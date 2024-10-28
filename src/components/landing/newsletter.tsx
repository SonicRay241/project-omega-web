import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Brewed In</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Subscribe to our newsletter for exclusive offers and coffee tips.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}