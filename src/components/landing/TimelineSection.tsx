const items = [

    {

        year: "2023 – Today",

        title: "Backend Software Engineer · Synamedia",

        text: "Developing cloud-native backend microservices for large-scale OTT platforms using Node.js, AWS, Redis, MongoDB, Docker and Kubernetes."

    },

    {

        year: "2022 – 2023",

        title: "Full Stack Developer · Synamedia",

        text: "Built end-to-end features with React, Node.js and MongoDB while collaborating closely with Product and UX teams."

    },

    {

        year: "2021 – 2022",

        title: "Frontend Developer · Applied Materials",

        text: "Developed enterprise React applications, improved user experience and maintained production features."

    },

    {

        year: "Personal Projects",

        title: "Meet Miriam AI",

        text: "An AI-powered interactive portfolio that lets visitors explore my experience through conversation instead of a traditional resume."

    }

];

export default function TimelineSection() {

    return (

        <section
            className="
                mx-auto
                mt-40
                max-w-5xl
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

                Professional Journey

            </h2>

            <div
                className="
                    mt-16
                    space-y-10
                "
            >

                {items.map(item => (

                    <div
                        key={item.year}
                        className="
                            flex
                            gap-6
                        "
                    >

                        <div
                            className={`
    mt-1
    h-4
    w-4
    rounded-full
    shrink-0
    ${item.year === "Personal Projects"
                                    ? "bg-sky-500"
                                    : "bg-indigo-500"}
`}
                        />

                        <div>

                            <div
                                className="
                                    font-bold
                                    text-indigo-600
                                "
                            >

                                {item.year}

                            </div>

                            <div
                                className="
                                    mt-2
                                    text-xl
                                    font-semibold
                                "
                            >

                                {item.title}

                            </div>

                            <p
                                className="
                                    mt-2
                                    leading-8
                                    text-slate-600
                                "
                            >

                                {item.text}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}