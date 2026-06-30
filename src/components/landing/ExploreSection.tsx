import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ExploreCard from "./ExploreCard";

const cards = [
    {
        icon: "💼",
        title: "Experience",
        description:
            "Companies, responsibilities, architecture decisions and engineering challenges.",
        question: "Tell me about your work experience."
    },
    {
        icon: "🚀",
        title: "Projects",
        description:
            "Production systems, personal projects and the problems they solve.",
        question: "Tell me about your projects."
    },
    {
        icon: "☁️",
        title: "Cloud",
        description:
            "AWS, Kubernetes, Docker, scalable services and distributed systems.",
        question: "Tell me about your cloud experience."
    },
    {
        icon: "🤖",
        title: "AI",
        description:
            "LLMs, RAG, OpenAI, LangChain and AI-powered applications.",
        question: "Tell me about your AI experience."
    },
    {
        icon: "📄",
        title: "Career",
        description:
            "Explore my professional journey, key roles and the technologies I've worked with.",
        question: "Summarize your resume."
    },
    {
        icon: "📬",
        title: "Contact",
        description:
            "Want to continue the conversation? Ask for my contact details or download my resume.",
        question: "How can I contact you?"
    }
];

export default function ExploreSection() {
    const navigate = useNavigate();

    function ask(question: string) {
        navigate(`/chat?q=${encodeURIComponent(question)}`);
    }

    return (
        <section
            className="
                mx-auto
                mt-40
                max-w-6xl
                px-8
            "
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <span
                    className="
                        mx-auto
                        inline-flex
                        rounded-full
                        bg-sky-100
                        px-4
                        py-1
                        text-sm
                        font-semibold
                        text-sky-700
                    "
                >
                    Conversation starters
                </span>

                <h2
                    className="
                        mt-5
                        text-center
                        text-4xl
                        font-black
                    "
                >
                    What would you like to know?
                </h2>

                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-center
                        text-lg
                        leading-8
                        text-slate-600"
                >
                    Choose any topic below to start the conversation.
                    You can always ask follow-up questions, just like in a real interview.
                </p>
            </motion.div>

            <div
                className="
                    mt-16
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.08
                        }}
                    >
                        <ExploreCard
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            question={card.question}
                            onClick={ask}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="
                    mt-14
                    text-center
                    text-slate-500
                "
            >
                <p className="text-sm">
                    💡 Every topic opens the chat with a suggested question, and you can continue the conversation naturally from there.                    question.
                </p>
            </motion.div>
        </section>
    );
}