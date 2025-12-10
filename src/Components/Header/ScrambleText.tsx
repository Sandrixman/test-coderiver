import { useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!<>-_\\/[]{}—=+*^?#"

interface Props {
    text: string
}

export default function ScrambleText({ text }: Props) {
    const [scrambled, setScrambled] = useState(text)
    const frameRef = useRef<number | null>(null)

    const handleMouseOver = () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current)

        let iteration = 0

        const animate = () => {
            const output = text
                .split("")
                .map((_, i) => {
                    if (i < iteration) return text[i]
                    return CHARS[Math.floor(Math.random() * CHARS.length)]
                })
                .join("")

            setScrambled(output)

            iteration += 1 / 4

            if (iteration < text.length) {
                frameRef.current = requestAnimationFrame(animate)
            }
        }

        // start with full chaos
        setScrambled(
            text
                .split("")
                .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
                .join("")
        )

        frameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseOut = () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current)
        setScrambled(text)
    }

    return (
        <span
            className='scramble-wrapper'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {/* invisible original text used for width */}
            <span className='scramble-base'>{text}</span>

            {/* absolutely positioned scrambled text */}
            <span className='scramble-anim'>{scrambled}</span>
        </span>
    )
}
