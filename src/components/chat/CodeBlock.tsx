import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
    language: string;
    code: string;
}

export default function CodeBlock({ language, code }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch {
            // Clipboard unavailable
        }
    };

    return (
        <div className="my-4 overflow-hidden rounded-xl border border-slate-200">
            <div
                className="
        flex
        items-center
        justify-between
        border-b
        border-slate-200
        bg-slate-50
        px-4
        py-3
    "
            >                <span
                className="
        rounded
        bg-slate-200
        px-2
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wide
    "
            >{language}</span>

                <button
                    onClick={handleCopy}
                    className="rounded px-2 py-1 hover:bg-slate-200"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            <SyntaxHighlighter
                language={language}
                style={oneLight}
                PreTag="div"
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}