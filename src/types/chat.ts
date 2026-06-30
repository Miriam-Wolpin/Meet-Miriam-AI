export interface ChatMessageModel {

    id: string;

    role: "user" | "assistant";

    content: string;

    streaming?: boolean;

    sources?: string[];

}