import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {

    return (

        <section
            className="
                mx-auto
                mt-32
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

                Why talk to an AI portfolio?

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

                Instead of reading a static CV,
                recruiters can ask follow-up questions,
                explore technical decisions and understand
                the reasoning behind real projects.

            </p>

            <div
                className="
                    mt-16
                    grid
                    gap-8
                    md:grid-cols-3
                "
            >

                <FeatureCard

                    icon="💼"

                    title="Experience"

                    description="
Learn about my professional journey,
companies and engineering challenges."

                />

                <FeatureCard

                    icon="🚀"

                    title="Projects"

                    description="
Explore production systems,
AI projects and architecture decisions."

                />

                <FeatureCard

                    icon="🤖"

                    title="Interactive"

                    description="
Ask anything.
Continue asking.
Dig deeper just like a real interview."

                />

            </div>

        </section>

    );

}