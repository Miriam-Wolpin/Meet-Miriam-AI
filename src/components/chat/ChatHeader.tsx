import type { Language } from "../../types/language";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FileText } from "lucide-react";

import avatar from "../../assets/avatar.png";

interface Props {
    language: Language;
    onLanguageChange: (language: Language) => void;
}

export default function ChatHeader({
    language,
    onLanguageChange
}: Props) {
    const navigate = useNavigate();
    return (
        <header
            className="
                sticky
                top-0
                z-20
                border-b
                border-slate-200/70
                bg-white/80
                px-6
                py-4
                backdrop-blur-xl
                md:px-8
            "
        >
            <div className="flex items-center justify-between gap-6">

                <div className="flex min-w-0 items-center gap-4">

                    <button
                        onClick={() => navigate("/")}
                        title="Back"
                        className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-600
            transition-all
            hover:-translate-y-0.5
            hover:border-violet-300
            hover:bg-violet-50
            hover:text-violet-700
        "
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="
            flex
            items-center
            gap-4
            text-left
        "
                    >

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="relative shrink-0"
                        >
                            <img
                                src={avatar}
                                alt="Miriam"
                                className="
                    h-14
                    w-14
                    rounded-full
                    object-cover
                    ring-2
                    ring-white
                    shadow-lg
                "
                            />

                            <span
                                className="
                    absolute
                    bottom-0
                    right-0
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-white
                    bg-emerald-500
                "
                            />
                        </motion.div>

                        <div>

                            <div className="flex items-center gap-2">

                                <h1 className="text-2xl font-bold text-slate-900">

                                    Meet Miriam AI

                                </h1>

                                <span
                                    className="
                        rounded-full
                        bg-emerald-100
                        px-2
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-emerald-700
                    "
                                >
                                    AI Powered
                                </span>

                            </div>

                            <p className="text-sm text-slate-500">

                                Interactive AI Portfolio

                            </p>

                        </div>

                    </button>

                </div>

                <div className="flex items-center gap-3">

                    <div
                        className="
                            hidden
                            rounded-full
                            border
                            border-slate-200
                            bg-slate-50
                            p-1
                            sm:flex
                        "
                    >
                        <a
                            href="/Miriam_Wolpin_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        hidden
        md:flex
        items-center
        gap-2
        rounded-full
        border
        border-slate-200
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        transition-all
        hover:-translate-y-0.5
        hover:border-violet-300
        hover:bg-violet-50
    "
                        >
                            <FileText size={16} />

                            Resume
                        </a>
                        <button
                            onClick={() => onLanguageChange("en")}
                            className={`
                                rounded-full
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                transition-all
                                ${language === "en"
                                    ? "bg-white shadow text-slate-900"
                                    : "text-slate-500 hover:text-slate-800"
                                }
                            `}
                        >
                            🇺🇸 EN
                        </button>

                        <button
                            onClick={() => onLanguageChange("he")}
                            className={`
                                rounded-full
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                transition-all
                                ${language === "he"
                                    ? "bg-white shadow text-slate-900"
                                    : "text-slate-500 hover:text-slate-800"
                                }
                            `}
                        >
                            🇮🇱 עברית
                        </button>

                    </div>

                    <select
                        value={language}
                        onChange={(e) =>
                            onLanguageChange(
                                e.target.value as Language
                            )
                        }
                        className="
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-2
                            text-sm
                            shadow-sm
                            outline-none
                            transition
                            sm:hidden
                        "
                    >
                        <option value="en">
                            🇺🇸 English
                        </option>

                        <option value="he">
                            🇮🇱 עברית
                        </option>
                    </select>

                </div>

            </div>
        </header>
    );
}