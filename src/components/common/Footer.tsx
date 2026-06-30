import {
    Mail,
    Phone,
    FileText
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="
                border-t
                border-slate-200
                bg-white/70
                backdrop-blur
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-6xl
                    flex-col
                    items-center
                    gap-5
                    px-6
                    py-10
                    text-center
                "
            >

                <div>

                    <h3 className="text-lg font-bold text-slate-800">

                        Built with ❤️ by Miriam Wolpin

                    </h3>

                    <p className="mt-2 text-sm text-slate-500">

                        Backend Engineer @ Synamedia

                        Cloud • AI • Full Stack

                    </p>

                    <p className="mt-3 text-sm text-slate-400">
                        Open to exciting Backend, Full Stack and AI opportunities.
                    </p>

                </div>

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-5
                        text-sm
                    "
                >

                    <a
                        href="mailto:Miryamwolpin@gmail.com"
                        className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                    >
                        <Mail size={17} />
                        Miryamwolpin@gmail.com
                    </a>

                    <a
                        href="tel:0583242135"
                        className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                    >
                        <Phone size={17} />
                        058-3242135
                    </a>

                    <a
                        href="https://www.linkedin.com/in/miriam-wolpin-8915171bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                    >
                        <FaLinkedinIn size={17} />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Miriam-Wolpin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                    >
                        <FaGithub size={17} />
                        GitHub
                    </a>

                    <a
                        href="/Miriam_Wolpin_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 transition hover:text-indigo-600"
                    >
                        <FileText size={17} />
                        Resume
                    </a>

                </div>

                <p className="text-xs text-slate-400">

                    Thanks for stopping by — I'd love to hear from you.

                </p>

                <p className="text-[11px] text-slate-300">
                    Version 1.0 · Built with React, FastAPI & OpenAI
                </p>

            </div>

        </footer>
    );
}