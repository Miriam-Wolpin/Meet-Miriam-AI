import { useEffect, useRef, useState } from "react";

interface Props {
    text: string;
}

export default function CopyMessageButton({ text }: Props) {
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<number>();

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(text);

            setCopied(true);

            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch { }
    }

    return (
        <button
            onClick={handleCopy}
            className="
            flex
            items-center
            gap-2
            rounded-lg
            px-3
            py-2
            text-sm
            font-medium
            text-slate-500
            transition-all
            duration-200
            hover:bg-slate-100
            hover:text-slate-700
        "
        >
            <span>

                {copied ? "✓" : "📋"}

            </span>

            <span>

                {copied ? "Copied" : "Copy"}

            </span>

        </button>
    );
}