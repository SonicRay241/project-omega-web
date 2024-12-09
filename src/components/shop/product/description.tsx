import { ReadMore } from "@/components/ui/readmore"

export default function ProductDescription(props: {
    description: string
}) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-medium">Description</h3>
            <ReadMore
                id="product-description"
                text={props.description}
            />
        </div>
    )
}