import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import MessageBubble from "./MessageBubble";

import type { ChatMessageModel } from "../../types/chat";

interface Props {
    messages: ChatMessageModel[];
}

export default function ChatWindow({
    messages,
}: Props) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages]);

    return (
        <div
            className="
                flex
                flex-col
                gap-8
                pb-6
            "
        >
            <AnimatePresence initial={false}>
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        role={message.role}
                        content={message.content}
                        sources={message.sources}
                    />
                ))}
            </AnimatePresence>

            <div
                ref={bottomRef}
                className="h-2"
            />
        </div>
    );
}