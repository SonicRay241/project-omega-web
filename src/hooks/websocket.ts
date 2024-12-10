import { useEffect, useRef, useState } from "react"

export const useWS = (
    url: string,
    options?: {
        onOpen?: () => void,
        onClose?: (event: CloseEvent) => void,
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
        
        socket.onclose = (event) => {
            setIsReady(false)
            options?.onClose && options.onClose(event)
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

    // Wrap send to ensure it maintains its `this` binding
    const send = (data: string | ArrayBuffer | Blob | ArrayBufferView) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(data);
        } else {
            console.warn("WebSocket is not open.");
        }
    };

    const close = (code?: number, reason?: string) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.close(code, reason);
        } else {
            console.warn("WebSocket is not open.");
        }
    }

    // bind is needed to make sure `send` references correct `this`
    return {isReady, val, send, close}
}