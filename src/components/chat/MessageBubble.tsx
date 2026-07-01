import { memo } from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import MarkdownRenderer from "./MarkdownRenderer";
import CopyMessageButton from "./CopyMessageButton";
import Sources from "./Sources";

interface Props {
    role: "user" | "assistant";
    content: string;
    sources?: string[];
}

function MessageBubble({
    role,
    content,
    sources,
}: Props) {
    const isUser = role === "user";

    return (
        <div className={`
        flex
        w-full
        ${isUser ? "justify-end" : "justify-start"}
    `}>
            <div
                className={
                    isUser
                        ? "flex w-full flex-row-reverse items-end gap-3"
                        : "flex w-full items-end gap-3"
                }
            >
                <Avatar role={role} />

                <div
                    className={
                        isUser
                            ? "max-w-fit md:max-w-fit"
                            : "max-w-fit md:max-w-fit"
                    }
                >

                    {!isUser && (

                        <div className="
mb-3
ml-1
flex
items-center
gap-2
">

                            <div
                                className="
        text-sm
        font-semibold
        text-slate-800
        tracking-wide
    "
                            >

                                Miriam

                            </div>
                            <span
                                className="
        rounded-full
        bg-emerald-100
        px-2
        py-0.5
        text-[10px]
        font-semibold
        uppercase
        text-emerald-700
    "
                            >

                                Backend Engineer @ Synamedia

                            </span>

                            <div className="text-xs text-slate-500">

                                Backend • Cloud • AI

                            </div>

                        </div>

                    )}

                    <div
                        className={
                            isUser
                                ? "rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 px-6 py-4 shadow-lg text-white shadow-md"
                                : "rounded-[28px] border border-slate-200 bg-white px-6 py-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 hover:shadow-xl"
                        }
                    >

                        <div
                            dir="auto"
                            className="
        max-w-none
        break-words
        leading-7
        select-text
    "
                        >
                            {content.length === 0 && !isUser ? (
                                <div className="flex items-center gap-2 py-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="h-2 w-2 rounded-full bg-slate-400"
                                            animate={{
                                                y: [0, -5, 0],
                                                opacity: [0.4, 1, 0.4],
                                            }}
                                            transition={{
                                                duration: 0.7,
                                                repeat: Infinity,
                                                delay: i * 0.15,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <MarkdownRenderer content={content} />
                            )}
                        </div>

                        {!isUser && content.length > 0 && (
                            <>
                                <div className="mt-4 flex justify-end border-t border-slate-100 pt-3">
                                    <CopyMessageButton text={content} />
                                </div>

                                <Sources sources={sources} />
                            </>
                        )}

                    </div>

                </div>
            </div>
        </div >
    );
}

export default memo(MessageBubble);