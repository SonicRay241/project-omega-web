export function MugIcon(props: {
    [key: string]: string
}) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 7h.5a2.5 2.5 0 0 1 0 5h-.5" />
            <path d="M3 7h14v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Z" />
            <path d="M6 1v6" />
            <path d="M10 1v6" />
        </svg>
    )
}