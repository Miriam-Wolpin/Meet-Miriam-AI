import Hero from "../components/landing/Hero";
import FeaturesSection from "../components/landing/FeaturesSection";
import ScrollIndicator from "../components/landing/ScrollIndicator";
import ProjectsSection from "../components/landing/ProjectsSection";
import TimelineSection from "../components/landing/TimelineSection";
import ExploreSection from "../components/landing/ExploreSection";
import Footer from "../components/common/Footer";

export default function LandingPage() {

    return (

        <main
            className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-slate-100
                via-indigo-50
                to-cyan-50
            "
        >

            <div
                className="
                    absolute
                    -left-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-violet-300
                    opacity-30
                    blur-[180px]
                "
            />

            <div
                className="
                    absolute
                    bottom-0
                    right-0
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-cyan-300
                    opacity-30
                    blur-[180px]
                "
            />

            <div
                className="
                    relative
                    flex
                    min-h-screen
                    flex-col
                    items-center
                    px-6
                    pt-20
                    pb-32
                "
            >

                <Hero />

                <ScrollIndicator />

                <FeaturesSection />

                <ProjectsSection />

                <TimelineSection />

                <ExploreSection />

                <Footer />


            </div>

        </main>

    );

}