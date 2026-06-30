interface Props {
    sources?: string[];
}

export default function Sources({ sources }: Props) {

    if (!sources?.length) {
        return null;
    }

    const uniqueSources = [...new Set(sources)];

    return (

        <div className="mt-5">

            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">

                Knowledge used

            </div>

            <div className="flex flex-wrap gap-2">

                {uniqueSources.map((source) => (

                    <span
                        key={source}
                        className="
                            rounded-full
                            border
                            border-indigo-100
                            bg-indigo-50
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-indigo-700
                        "
                    >

                        📄 {source.replace(".md", "")}

                    </span>

                ))}

            </div>

        </div>

    );

}