"use client"

import { KeyboardEventHandler, useState } from "react"

type ReadMoreProps = {
    id: string
    text: string
    amountOfWords?: number
}

export const ReadMore = ({ id, text, amountOfWords = 36 }: ReadMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const splittedText = text.split(' ')
    const itCanOverflow = splittedText.length > amountOfWords
    const beginText = itCanOverflow
        ? splittedText.slice(0, amountOfWords - 1).join(' ')
        : text
    const endText = splittedText.slice(amountOfWords - 1).join(' ')

    return (
        <p id={id}>
            {beginText}
            {itCanOverflow && (
                <>
                    {!isExpanded && <span>... </span>}
                    <span
                        className={`${!isExpanded && 'hidden'}`}
                        aria-hidden={!isExpanded}
                    >
                        {" " + endText}
                    </span>
                    <span
                        className='text-zinc-400 ml-2'
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                        aria-controls={id}
                        onKeyDown={(e) => {
                            if (e.code === 'Space' || e.code === 'Enter') {
                                setIsExpanded(!isExpanded)
                            }
                        }}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'show less' : 'show more'}
                    </span>
                </>
            )}
        </p>
    )
}