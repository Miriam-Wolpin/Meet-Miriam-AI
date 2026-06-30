import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {

    icon: string;

    title: string;

    description: string;

}

export default function FeatureCard({

    icon,

    title,

    description

}: Props) {

    return (

        <div
            className="
                rounded-[28px]
                border
                border-white/40
                bg-white/70
                p-8
                shadow-xl
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >

            <div className="text-5xl">

                {icon}

            </div>

            <h3
                className="
                    mt-6
                    text-xl
                    font-bold
                "
            >

                {title}

            </h3>

            <p
                className="
                    mt-4
                    leading-8
                    text-slate-600
                "
            >

                {description}

            </p>

        </div>

    );

}