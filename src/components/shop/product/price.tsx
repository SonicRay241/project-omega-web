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

export default function Price(props: {
    productId: string
    apiUrl: string
    variant: string
}) {
    const [pageLoaded, setPageLoaded] = useState(false)
    const [currDuration, setCurrDuration] = useState(0)
    const [showNew, setShowNew] = useState(false)
    const [oldValue, setOldValue] = useState("0")
    const [tooltipOpen, setTooltipOpen] = useState(false)

    const ws = useWS(
        `ws://${props.apiUrl}/live-update/product/${props.productId}/price?variant=${props.variant}`,
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
            }
        }
    )

    useEffect(() => {
        setTimeout(() => {
            setOldValue(ws.val || "0")
        }, 300)
    }, [ws.val])

    return (
        <div className="flex gap-1 text-3xl font-bold">
            <motion.div
                className="relative block overflow-hidden whitespace-nowrap transition-opacity"
            >
                <motion.span
                    animate={{
                        transition: {
                            duration: currDuration,
                            ease: "circInOut"
                        },
                        y: showNew ? "100%" : 0,
                    }}
                    className={"inline-block"}
                >
                    { "Rp" + formatStrNumber(oldValue) }
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
                        className="inline-block"
                    >
                        { ws.val && "Rp" + formatStrNumber(ws.val) }
                    </motion.span>
                </div>
            </motion.div>
            <div className="h-full pt-1">
                <Tooltip open={tooltipOpen}>
                    <TooltipTrigger 
                        onMouseEnter={() => {setTooltipOpen(true)}}
                        onMouseLeave={() => {setTooltipOpen(false)}}
                        onClick={() => {setTooltipOpen(!tooltipOpen)}}
                        asChild
                    >
                        <Info className={`w-4 h-4 text-zinc-600 transition-opacity ${showNew ? "opacity-0" : "opacity-100"}`} />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-40">
                        <p>Price will change depending on demand</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}