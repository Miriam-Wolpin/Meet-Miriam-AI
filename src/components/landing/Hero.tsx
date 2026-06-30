import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import avatar from "../../assets/avatar.png";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const suggestedQuestions = [
    "Tell me about your backend experience",
    "What AI projects have you built?",
    "Show me your favorite project",
    "Why should I hire you?"
];

export default function Hero() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl"
        >
            <Card>
                <div className="px-8 py-14 md:px-16 md:py-20">

                    <div className="flex justify-center">
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -6, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src={avatar}
                                alt="Miriam"
                                className="
                                    h-40
                                    w-40
                                    rounded-full
                                    object-cover
                                    shadow-2xl
                                    ring-4
                                    ring-white
                                "
                            />

                            <span
                                className="
                                    absolute
                                    bottom-2
                                    right-2
                                    h-6
                                    w-6
                                    rounded-full
                                    border-4
                                    border-white
                                    bg-emerald-500
                                "
                            />

                            <motion.div
                                className="absolute -inset-2 rounded-full border border-sky-300/40"
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.45, 0.1, 0.45]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                            />
                        </motion.div>
                    </div>

                    <div className="mt-6 flex justify-center gap-3 flex-wrap">
                        <Badge text="AI Powered" />
                        <Badge text="Portfolio AI" />
                        <Badge text="Interactive Resume" />
                        <Badge text="English + Hebrew" />
                    </div>

                    <div className="mt-8 text-center">
                        <SectionTitle
                            title="Meet Miriam AI"
                            subtitle="Your next interview starts here."
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.03, 1]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity
                            }}
                        >
                            <Button
                                onClick={() => navigate("/chat")}
                                className="
px-14
py-6
text-2xl
font-bold
shadow-2xl
"
                            >
                                💬 Chat with Miriam

                            </Button>
                        </motion.div>
                        <p
                            className="
        mt-5
        text-center
        text-sm
        text-slate-500
    "
                        >
                            ✓ No signup required &nbsp;&nbsp;•&nbsp;&nbsp;
                            ✓ English & Hebrew &nbsp;&nbsp;•&nbsp;&nbsp;
                            ✓ Resume available
                        </p>
                    </div>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-center
                            text-xl
                            leading-9
                            text-slate-600
                        "
                    >
                        I'm a Backend Software Engineer with 5+ years of experience building cloud-native applications.

                        Ask me anything about my projects, architecture decisions, cloud experience or AI work.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {suggestedQuestions.map((question) => (
                            <motion.button
                                key={question}
                                whileHover={{ y: -3, scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() =>
                                    navigate("/chat", {
                                        state: {
                                            initialPrompt: question
                                        }
                                    })
                                }
                                className="
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white/70
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    shadow-sm
                                    transition
                                    hover:border-sky-300
                                    hover:bg-sky-50
                                "
                            >
                                💬 {question}
                            </motion.button>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-8 text-center">

                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                5+
                            </div>
                            <div className="text-sm text-slate-500">
                                Years Experience
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                AI
                            </div>
                            <div className="text-sm text-slate-500">
                                Portfolio Experience
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                Full Stack
                            </div>
                            <div className="text-sm text-slate-500">
                                Backend Focus
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                AWS
                            </div>
                            <div className="text-sm text-slate-500">
                                Cloud & Microservices
                            </div>
                        </div>

                    </div>

                    <p
                        className="
                            mt-8
                            text-center
                            text-sm
                            text-slate-500
                        "
                    >
                        Supports natural conversations in English 🇺🇸 and עברית 🇮🇱
                    </p>

                </div>
            </Card>
        </motion.div>
    );
}