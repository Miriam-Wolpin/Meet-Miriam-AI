import type { Language } from "../../types/language";

interface Props {
    language: Language;
    onChange: (language: Language) => void;
}

export default function LanguageToggle({
    language,
    onChange
}: Props) {
    return (
        <div className="flex gap-2">

            <button
                onClick={() => onChange("he")}
                className={`rounded-full px-4 py-2 transition ${language === "he"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100"
                    }`}
            >
                🇮🇱 עברית
            </button>

            <button
                onClick={() => onChange("en")}
                className={`rounded-full px-4 py-2 transition ${language === "en"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100"
                    }`}
            >
                🇺🇸 English
            </button>

        </div>
    );
}