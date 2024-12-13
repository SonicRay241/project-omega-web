import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export default function ShopRating(props: {
    rating: number,
    className?: string
}) {
    return (
        <Badge className={cn(
            "flex gap-0.5 bg-orange-200 hover:bg-orange-200 h-fit w-fit py-1 px-1.5 text-orange-500 rounded-full mt-1",
            props.className
        )}>
            <Star className="w-3 h-3 fill-orange-500 stroke-orange-500" />
            <p className="font-bold text-xs translate-y-[0.5px]">{props.rating}</p>
        </Badge>
    )
}