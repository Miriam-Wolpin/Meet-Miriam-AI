interface Props {
    text: string;
}

export default function Badge({
    text
}: Props) {
    return (
        <div
            className="
                rounded-full
                bg-violet-100
                text-violet-700
                text-sm
                font-semibold
                px-4
                py-2
            "
        >
            {text}
        </div>
    );
}