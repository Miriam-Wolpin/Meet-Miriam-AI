import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const base = `
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        font-semibold
        tracking-wide
        transition-all
        duration-300
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
        focus:outline-none
        focus:ring-4
        focus:ring-violet-200
    `;

    const styles =
        variant === "primary"
            ? `
                bg-gradient-to-r
                from-violet-600
                via-indigo-600
                to-cyan-500
                text-white
                shadow-lg
                shadow-violet-500/20
                hover:-translate-y-0.5
                hover:scale-[1.02]
                hover:shadow-2xl
                hover:shadow-cyan-500/25
            `
            : `
                border
                border-slate-200
                bg-white/80
                text-slate-700
                backdrop-blur
                hover:bg-white
                hover:border-slate-300
                hover:shadow-lg
            `;

    return (
        <button
            className={`${base} ${styles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}