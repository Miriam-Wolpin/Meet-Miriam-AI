interface Props {
    language: "he" | "en";
    onSelect: (text: string) => void;
}

export default function QuickActions({
    language,
    onSelect,
}: Props) {
    const actions =
        language === "he"
            ? [
                "👋 ספרי לי על עצמך",
                "🚀 במה את הכי חזקה?",
                "🏗️ ספרי לי על הפרויקט הכי מורכב שלך",
                "💼 למה כדאי לגייס אותך?",
                "🥞 אפשר את מתכון הפנקייקס?",
                "📧 איך יוצרים איתך קשר?"
            ]
            : [
                "👋 Tell me about yourself",
                "🚀 What are your strongest skills?",
                "🏗️ Tell me about your most challenging project",
                "💼 Why should we hire you?",
                "🥞 Can I get your pancake recipe?",
                "📧 How can I contact you?"
            ];

    return (
        <>
            <div
                className="
        mb-2
        text-center
        text-xs
        font-semibold
        uppercase
        tracking-[0.15em]
        text-slate-400
    "
            >

                {language === "he"
                    ? "שאלות נפוצות"
                    : "Popular Questions"}

            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {actions.map((item) => (
                    <button
                        key={item}
                        onClick={() => onSelect(item)}
                        className="
group
rounded-full
border
border-slate-200
bg-white
px-3
py-2
text-sm
font-medium
shadow-sm
transition-all
duration-200
hover:-translate-y-1
hover:border-indigo-300
hover:bg-indigo-50
hover:shadow-lg
active:scale-95
"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}