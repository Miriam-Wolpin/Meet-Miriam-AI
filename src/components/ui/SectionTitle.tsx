interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle
}: Props) {
    return (
        <>
            <h2 className="text-5xl font-black">
                {title}
            </h2>

            {subtitle && (
                <p className="text-slate-500 mt-3 text-lg">
                    {subtitle}
                </p>
            )}
        </>
    );
}