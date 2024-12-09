import { ReadMore } from "@/components/ui/readmore"

export default function ProductDescription(props: {
    description: string
}) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="hidden md:block">{props.description}</p>
            <div className="md:hidden">
                <ReadMore
                    id="product-description"
                    text={props.description}
                />
            </div>
        </div>
    )
}