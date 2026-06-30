import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    onSend(message: string): void;
    disabled?: boolean;
}

export default function ChatInput({
    onSend,
    disabled,
}: Props) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const placeholders = [
        "Ask about Backend...",
        "Ask about AI...",
        "Ask about AWS...",
        "Ask about my biggest challenge...",
        "Ask why you should hire me...",
        "Ask about my projects..."
    ];

    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {

        inputRef.current?.focus();

        const interval = window.setInterval(() => {

            setPlaceholderIndex(prev =>
                (prev + 1) % placeholders.length
            );

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    function submit() {
        const message = value.trim();

        if (!message || disabled) {
            return;
        }

        onSend(message);

        setValue("");
    }

    return (
        <div className="flex items-end gap-3">

            <div className="relative flex-1">

                <input
                    value={value}
                    ref={inputRef}
                    disabled={disabled}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {
                            e.preventDefault();
                            submit();
                        }
                    }}
                    placeholder={placeholders[placeholderIndex]}
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white/90
                        px-5
                        py-4
                        pr-32
                        text-[15px]
                        shadow-sm
                        backdrop-blur
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-400
                        focus:border-violet-400
                        focus:ring-4
                        focus:ring-violet-100
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-5
                        top-1/2
                        hidden
                        -translate-y-1/2
                        text-xs
                        text-slate-400
                        md:block
                    "
                >
                    Enter ↵
                </div>

            </div>

            <motion.button
                whileHover={{
                    scale: 1.02,
                    y: -2
                }}

                whileTap={{
                    scale: 0.98
                }}
                type="button"
                onClick={submit}
                disabled={!value.trim() || disabled}
                className="
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
                    px-6
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-200
                    hover:shadow-xl
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                Send
            </motion.button>

        </div>
    );
}