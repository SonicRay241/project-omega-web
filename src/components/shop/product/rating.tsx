import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export default function ProductRating(props: {
    rating: number,
    className?: string
}) {
    return (
        <Badge className={cn(
            "flex gap-1 bg-orange-200 hover:bg-orange-200 h-fit w-fit py-1 px-2.5 text-orange-500 rounded-full mt-1.5",
            props.className
        )}>
            <Star className="w-4 h-4 fill-orange-500 stroke-orange-500" />
            <p className="font-bold text-sm translate-y-[0.5px]">{props.rating}</p>
        </Badge>
    )
}