import { useEffect, useRef, useState } from "react"

export const useWS = (
    url: string,
    options?: {
        onOpen?: () => void,
        onClose?: () => void,
        onError?: () => void,
        onMessage?: () => void
    }
) => {
    const [isReady, setIsReady] = useState(false)
    const [val, setVal] = useState<string | null>(null)

    const ws = useRef<WebSocket | null>(null)

    useEffect(() => {
        const socket = new WebSocket(url)

        socket.onopen = () => {
            setIsReady(true)
            options?.onOpen && options.onOpen()
        }
        
        socket.onclose = () => {
            setIsReady(false)
            options?.onClose && options.onClose()
        }

        socket.onerror = () => {
            // setIsReady(false)
            options?.onError && options.onError()
        }

        socket.onmessage = (event) => {
            setVal(event.data)
            options?.onMessage && options.onMessage()
        }
        ws.current = socket

        return () => {
            socket.close()
        }
    }, [])

    // bind is needed to make sure `send` references correct `this`
    return {isReady, val, bind: ws.current?.send.bind(ws.current)}
}