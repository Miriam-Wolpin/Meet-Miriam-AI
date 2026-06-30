import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface Props {
    content: string;
}

export default function MarkdownRenderer({ content }: Props) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}
            components={{
                code({ className, children }) {
                    const match = /language-(\w+)/.exec(className || "");

                    return className ? (
                        <CodeBlock
                            language={match?.[1] ?? "text"}
                            code={String(children).replace(/\n$/, "")}
                        />
                    ) : (
                        <code className="rounded-md
bg-slate-100
px-1.5
py-1
font-mono
text-[0.9em] px-1 py-0.5 text-sm">
                            {children}
                        </code>
                    );
                },

                a({ href, children }) {
                    return (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-indigo-600 transition-colors hover:text-indigo-800 hover:underline break-all"
                        >
                            {children}
                        </a>
                    );
                },

                table({ children }) {
                    return (
                        <div className="overflow-x-auto">
                            <table className="table-auto border-collapse">
                                {children}
                            </table>
                        </div>
                    );
                },

                th({ children }) {
                    return (
                        <th className="border bg-slate-100 px-3 py-2">
                            {children}
                        </th>
                    );
                },

                td({ children }) {
                    return (
                        <td className="border px-3 py-2">
                            {children}
                        </td>
                    );
                },

                p({ children }) {
                    return <p className="leading-7">
                        {children}
                    </p>;
                },

                h2({ children }) {
                    return (
                        <h2 className="mb-3 mt-7 text-xl font-bold">
                            {children}
                        </h2>
                    );
                },

                ul({ children }) {
                    return (
                        <ul className="mb-5 ml-6 list-disc space-y-2">
                            {children}
                        </ul>
                    );
                },

                blockquote({ children }) {
                    return (
                        <blockquote className="border-l-4 border-indigo-400 pl-4">
                            {children}
                        </blockquote>
                    );
                },

                hr() {
                    return (
                        <hr className="my-8 border-slate-200" />
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}