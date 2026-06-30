import { motion } from "framer-motion";

interface Props {

    icon: string;

    title: string;

    description: string;

    question: string;

    onClick: (question: string) => void;

}

export default function ExploreCard({

    icon,

    title,

    description,

    question,

    onClick

}: Props) {

    return (

        <motion.button

            whileHover={{
                y: -6,
                scale: 1.02
            }}

            whileTap={{
                scale: .98
            }}

            onClick={() => onClick(question)}

            className="
                w-full
                rounded-[28px]
                border
                border-white/50
                bg-white/70
                p-8
                text-left
                shadow-xl
                backdrop-blur
                transition-shadow
                hover:shadow-2xl
            "

        >

            <div className="text-5xl">

                {icon}

            </div>

            <h3
                className="
                    mt-6
                    text-2xl
                    font-bold
                    text-slate-900
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

            <div
                className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-indigo-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-indigo-700
                "
            >

                Ask Miriam

                →

            </div>

        </motion.button>

    );

}