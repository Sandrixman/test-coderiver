import { useEffect, useRef, useState } from "react"
import "./RevealText.css"

interface RevealTextProps {
    children: React.ReactNode
    delay?: number
}

export default function RevealText({ children, delay = 0 }: RevealTextProps) {
    const [visible, setVisible] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => {
            setVisible(true)
        }, delay)

        return () => {
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
        }
    }, [delay])

    return (
        <span className='reveal-wrapper'>
            <span className={`reveal-text ${visible ? "visible" : ""}`}>{children}</span>
        </span>
    )
}
