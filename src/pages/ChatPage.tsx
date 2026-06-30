import { useEffect, useRef, useState } from "react";
import {
    useLocation,
    useNavigate,
    useSearchParams
} from "react-router-dom";
import ChatHeader from "../components/chat/ChatHeader";
import ChatInput from "../components/chat/ChatInput";
import ChatWindow from "../components/chat/ChatWindow";
import QuickActions from "../components/chat/QuickActions";
import Footer from "../components/common/Footer";

import type { ChatMessageModel } from "../types/chat";
import type { Language } from "../types/language";

import { streamChatMessage } from "../services/chatService";

export default function ChatPage() {
    const [language, setLanguage] = useState<Language>("en");
    const [messages, setMessages] = useState<ChatMessageModel[]>([]);

    const abortController = useRef<AbortController | null>(null);
    const initialQuestionSent = useRef(false);

    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        return () => {
            abortController.current?.abort();
        };
    }, []);

    useEffect(() => {
        setMessages([
            {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    language === "he"
                        ? `👋 שלום!

אני מרים.

אפשר לשאול אותי כל דבר על הניסיון שלי, פרויקטים, Backend, Cloud או AI.` : `👋 Hi!

I'm Miriam.

Welcome to Meet Miriam AI.

Ask me anything about my experience, projects, cloud engineering or AI work.`
            }
        ]);

        initialQuestionSent.current = false;

    }, [language]);


    useEffect(() => {

        if (initialQuestionSent.current) {
            return;
        }

        const statePrompt =
            (location.state as { initialPrompt?: string } | null)
                ?.initialPrompt;

        const queryPrompt =
            searchParams.get("q");

        const prompt =
            statePrompt ?? queryPrompt;

        if (!prompt) {
            return;
        }

        initialQuestionSent.current = true;

        if (queryPrompt) {

            navigate(
                "/chat",
                {
                    replace: true
                }
            );

        } else if (statePrompt) {

            navigate(
                ".",
                {
                    replace: true,
                    state: null
                }
            );

        }

        setTimeout(() => {
            send(prompt);
        }, 150);

    }, [
        location.state,
        searchParams,
        language,
        navigate
    ]);

    async function send(text: string) {
        console.count("SEND");
        console.log(text);

        abortController.current?.abort();

        abortController.current = new AbortController();

        const userMessage: ChatMessageModel = {
            id: crypto.randomUUID(),
            role: "user",
            content: text
        };

        const assistantId = crypto.randomUUID();

        const assistantMessage: ChatMessageModel = {
            id: assistantId,
            role: "assistant",
            content: "",
            streaming: true
        };

        setMessages(prev => [
            ...prev,
            userMessage,
            assistantMessage
        ]);

        try {

            await streamChatMessage(
                {
                    message: text,
                    language
                },
                chunk => {

                    setMessages(prev =>
                        prev.map(message =>
                            message.id === assistantId
                                ? {
                                    ...message,
                                    content:
                                        message.content + chunk
                                }
                                : message
                        )
                    );

                },
                abortController.current.signal
            );

        } catch (error) {

            if (
                error instanceof DOMException &&
                error.name === "AbortError"
            ) {
                return;
            }

            setMessages(prev =>
                prev.map(message =>
                    message.id === assistantId
                        ? {
                            ...message,
                            content:
                                language === "he"
                                    ? "אירעה שגיאה. נסה שוב."
                                    : "Something went wrong. Please try again."
                        }
                        : message
                )
            );

        } finally {

            setMessages(prev =>
                prev.map(message =>
                    message.id === assistantId
                        ? {
                            ...message,
                            streaming: false
                        }
                        : message
                )
            );

        }

    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50">

            <div className="mx-auto max-w-5xl p-4 md:p-8">

                <div
                    className="
                        flex
                        h-[90vh]
                        flex-col
                        overflow-hidden
                        rounded-[32px]
                        bg-white/70
                        shadow-2xl
                        backdrop-blur-xl
                    "
                >

                    <ChatHeader
                        language={language}
                        onLanguageChange={setLanguage}
                    />

                    <div
                        className="
                            flex-1
                            overflow-y-auto
                            bg-gradient-to-b
                            from-white/20
                            to-transparent
                            px-5
                            py-8
                            md:px-8
                        "
                    >

                        <ChatWindow
                            messages={messages}
                        />

                    </div>

                    <div
                        className="
                            space-y-3
                            border-t
                            border-slate-200
                            bg-white/75
                            p-4
                            backdrop-blur
                            md:p-6
                        "
                    >

                        <QuickActions
                            language={language}
                            onSelect={send}
                        />

                        <ChatInput
                            onSend={send}
                        />

                    </div>

                </div>

            </div>
            <Footer />


        </main>
    );
}