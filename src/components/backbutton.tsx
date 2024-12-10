import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function BackButton() {
    return (
        <Button
            className="[&_svg]:size-5 rounded-full size-10"
            variant="ghost"
            size="icon"
            onClick={() => {
                window.history.back()
            }}
        >
            <ArrowLeft />
        </Button>
    )
}