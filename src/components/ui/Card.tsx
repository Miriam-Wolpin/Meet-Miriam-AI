import type { PropsWithChildren } from "react";

export default function Card({
    children
}: PropsWithChildren) {
    return (
        <div
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/60
                bg-white/75
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                transition-all
                duration-300
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/50
                    via-transparent
                    to-cyan-100/20
                "
            />

            <div className="relative">
                {children}
            </div>
        </div>
    );
}