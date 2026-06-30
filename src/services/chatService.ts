import { API_BASE_URL } from "../config/api";

export interface ChatRequest {
    message: string;
    language: "he" | "en";
}

export interface ChatResponse {
    reply: string;
    model: string;
    provider: string;
    finish_reason: string;
    tokens: number;
}

export async function sendChatMessage(
    request: ChatRequest
): Promise<ChatResponse> {

    const response = await fetch(
        `${API_BASE_URL}/chat`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
    );

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return response.json();

}

export async function streamChatMessage(
    request: ChatRequest,
    onChunk: (chunk: string) => void,
    signal?: AbortSignal
): Promise<void> {

    const response = await fetch(
        `${API_BASE_URL}/chat/stream`,
        {
            method: "POST",
            signal,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
    );

    if (!response.ok) {
        throw new Error("Request failed");
    }

    if (!response.body) {
        throw new Error("Missing response body");
    }

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    let buffer = "";

    try {

        while (true) {

            const { done, value } = await reader.read();

            if (done) break;

            buffer += decoder.decode(value, {
                stream: true
            });

            const events = buffer.split("\n\n");

            buffer = events.pop() ?? "";

            for (const event of events) {

                if (!event.startsWith("data:")) {
                    continue;
                }

                const chunk = event.startsWith("data:")
                    ? event.slice(5)
                    : event;

                if (chunk) {
                    onChunk(chunk);
                }

            }

        }

    } finally {

        reader.releaseLock();

    }

}