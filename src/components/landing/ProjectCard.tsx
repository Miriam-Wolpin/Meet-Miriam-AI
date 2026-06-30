interface Props {

    title: string;

    description: string;

    tech: string[];

}

export default function ProjectCard({

    title,

    description,

    tech

}: Props) {

    return (

        <div
            className="
                rounded-[28px]
                bg-white/70
                backdrop-blur
                border
                border-white/40
                shadow-xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >

            <h3
                className="
                    text-2xl
                    font-bold
                "
            >

                {title}

            </h3>

            <p
                className="
                    mt-5
                    leading-8
                    text-slate-600
                "
            >

                {description}

            </p>

            <div
                className="
                    mt-8
                    flex
                    flex-wrap
                    gap-2
                "
            >

                {tech.map(item => (

                    <span
                        key={item}
                        className="
                            rounded-full
                            bg-indigo-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-indigo-700
                        "
                    >

                        {item}

                    </span>

                ))}

            </div>

        </div>

    );

}