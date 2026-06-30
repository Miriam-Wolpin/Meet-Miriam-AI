import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {

    return (

        <section
            className="
                mx-auto
                mt-40
                max-w-6xl
                px-8
            "
        >

            <h2
                className="
                    text-center
                    text-4xl
                    font-black
                "
            >

                Projects & Professional Experience

            </h2>

            <p
                className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-center
                    text-lg
                    leading-8
                    text-slate-600
                "
            >

                A selection of professional and personal projects that reflect my experience in cloud systems, backend engineering and AI.

            </p>

            <div
                className="
                    mt-16
                    grid
                    gap-8
                "
            >

                <ProjectCard

                    title="IRIS – OTT Decision Platform"

                    description="A large-scale cloud platform at Synamedia that selects personalized advertisements in real time for OTT and broadcast services. I worked on backend microservices, AWS infrastructure, caching strategies and high-performance systems handling massive traffic."

                    tech={[
                        "Node.js",
                        "AWS",
                        "Redis",
                        "MongoDB",
                        "Kubernetes",
                        "Microservices"
                    ]}

                />

                <ProjectCard

                    title="Meet Miriam AI"

                    description="An interactive AI portfolio that lets recruiters chat with me instead of reading a traditional resume. Built with React, FastAPI, OpenAI and a custom retrieval system."

                    tech={[
                        "React",
                        "FastAPI",
                        "OpenAI",
                        "RAG"
                    ]}

                />

                <ProjectCard

                    title="AI Job Agent"

                    description="An autonomous assistant that searches for relevant jobs, analyzes job descriptions and prepares personalized applications while keeping the user in control."

                    tech={[
                        "Python",
                        "LangChain",
                        "OpenAI",
                        "Agents"
                    ]}

                />

            </div>

        </section>

    );

}