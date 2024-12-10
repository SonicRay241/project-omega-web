"use client"

import { useWS } from "@/hooks/websocket"
import { formatStrNumber } from "@/lib/utils"
import { toast } from "sonner"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function AITooltip(props: {
    showNew: boolean
}) {
    const [tooltipOpen, setTooltipOpen] = useState(false)

    return (
        <div className="h-full pt-1">
            <Tooltip open={tooltipOpen}>
                <TooltipTrigger
                    onMouseEnter={() => { setTooltipOpen(true) }}
                    onMouseLeave={() => { setTooltipOpen(false) }}
                    onClick={() => { setTooltipOpen(!tooltipOpen) }}
                    asChild
                >
                    <Info className={`w-4 h-4 text-zinc-600 transition-opacity ${props.showNew ? "opacity-0" : "opacity-100"}`} />
                </TooltipTrigger>
                <TooltipContent className="max-w-40">
                    <p>Price will change depending on demand</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default function Price(props: {
    productId: string
    apiUrl: string
    selectedVariant: string
}) {
    const [pageLoaded, setPageLoaded] = useState(false)
    const [currDuration, setCurrDuration] = useState(0)
    const [showNew, setShowNew] = useState(false)
    const [oldValue, setOldValue] = useState("0")

    const ws = useWS(
        `ws://${props.apiUrl}/live-update/product/${props.productId}/price`,
        {
            onMessage: () => {
                if (!pageLoaded) {
                    setTimeout(() => {
                        setPageLoaded(true)
                    }, 100)
                }
                setShowNew(true)
                setCurrDuration(0.25)
                setTimeout(() => {
                    setShowNew(false)
                    setCurrDuration(0)
                }, 300)
            },
            onError: () => {
                toast.error(
                    "An error occured",
                    {
                        description: "Connection to a live service interrupted",
                        classNames: {
                            icon: "text-red-600"
                        },
                        position: "top-center"
                    }
                )
            },
            onClose: () => {
                toast.error(
                    "An error occured",
                    {
                        description: "Connection to a live service closed, please reload the page",
                        classNames: {
                            icon: "text-red-600"
                        },
                        position: "top-center"
                    }
                )
            }
        }
    )

    // Update variant
    useEffect(() => {
        ws.send(props.selectedVariant)
    }, [props.selectedVariant])

    // Update animation data
    useEffect(() => {
        setTimeout(() => {
            setOldValue(ws.val || "0")
        }, 255)
    }, [ws.val])

    return (
        <div className="flex gap-1 text-3xl font-bold">
            <motion.div
                className="relative block overflow-hidden whitespace-nowrap transition-opacity w-full"
            >
                <motion.span
                    animate={{
                        transition: {
                            duration: currDuration,
                            ease: "circInOut"
                        },
                        y: showNew ? "100%" : 0,
                    }}
                    className={"flex gap-1"}
                >
                    {"Rp" + formatStrNumber(oldValue)}
                    <AITooltip showNew={showNew} />
                </motion.span>
                <div className="absolute inset-0">
                    <motion.span
                        animate={{
                            transition: {
                                duration: currDuration,
                                ease: "circInOut"
                            },
                            y: showNew ? 0 : "-100%",
                        }}
                        className="flex"
                    >
                        {ws.val && "Rp" + formatStrNumber(ws.val)}
                        <AITooltip showNew={showNew} />
                    </motion.span>
                </div>
            </motion.div>
        </div>
    )
}