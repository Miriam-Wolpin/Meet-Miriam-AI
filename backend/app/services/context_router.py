from pathlib import Path

DATA_DIR = Path(__file__).parent.parent.parent / "data"


class ContextRouter:

    def get_files(self, message: str) -> list[str]:

        message = message.lower()

        files = ["system_prompt.md"]

        if any(
            word in message
            for word in [
                "skill",
                "technology",
                "tech",
                "react",
                "node",
                "python",
                "docker",
                "kubernetes",
                "aws",
                "redis",
                "mongodb",
                "typescript",
                "javascript",
                "טכנולוג",
                "יכולת",
                "skills",
            ]
        ):

            files.append("skills.md")

        # ------------------------
        # About / Introduction
        # ------------------------

        if any(
            word in message
            for word in [
                "about",
                "yourself",
                "introduce",
                "introduction",
                "who are you",
                "tell me about yourself",
                "ספר",
                "מי את",
                "מי אתה",
                "על עצמך",
                "הצג",
            ]
        ):

            files.extend(
                [
                    "profile.md",
                    "knowledge.md",
                    "personality.md",
                ]
            )

        # ------------------------
        # Work Experience
        # ------------------------

        if any(
            word in message
            for word in [
                "experience",
                "career",
                "work",
                "company",
                "companies",
                "worked",
                "job",
                "employment",
                "synamedia",
                "applied",
                "applied materials",
                "ניסיון",
                "עבודה",
                "חברה",
                "חברות",
                "מקום עבודה",
            ]
        ):

            files.extend(
                [
                    "profile.md",
                    "projects.md",
                    "knowledge.md",
                ]
            )

        # ------------------------
        # Skills
        # ------------------------

        if any(
            word in message
            for word in [
                "skill",
                "skills",
                "strength",
                "strongest",
                "technology",
                "technologies",
                "tech",
                "backend",
                "frontend",
                "node",
                "nodejs",
                "python",
                "react",
                "typescript",
                "docker",
                "kubernetes",
                "aws",
                "redis",
                "mongodb",
                "יכולת",
                "יכולות",
                "חוזקה",
                "טכנולוג",
                "בקאנד",
                "פרונט",
            ]
        ):

            files.extend(
                [
                    "skills.md",
                    "technologies.md",
                ]
            )

        # ------------------------
        # Projects
        # ------------------------

        if any(
            word in message
            for word in [
                "project",
                "projects",
                "portfolio",
                "meet miriam",
                "job agent",
                "architecture",
                "github",
                "פרויקט",
                "פרויקטים",
            ]
        ):

            files.extend(
                [
                    "projects.md",
                    "knowledge.md",
                    "examples.md",
                ]
            )

        # ------------------------
        # AI
        # ------------------------

        if any(
            word in message
            for word in [
                "ai",
                "llm",
                "openai",
                "rag",
                "fastapi",
                "prompt",
                "בינה",
                "מודל",
                "צאט",
                "צ'אט",
            ]
        ):

            files.extend(
                [
                    "projects_personal.md",
                    "engineering_decisions.md",
                    "technologies.md",
                ]
            )

        # ------------------------
        # Education
        # ------------------------

        if any(
            word in message
            for word in [
                "study",
                "education",
                "degree",
                "college",
                "university",
                "לימודים",
                "השכלה",
            ]
        ):

            files.append("education.md")

            # ------------------------
        # Contact
        # ------------------------

        if any(
            word in message
            for word in [
                "contact",
                "email",
                "mail",
                "phone",
                "linkedin",
                "github",
                "reach",
                "resume",
                "cv",
                "צור קשר",
                "יצירת קשר",
                "אימייל",
                "מייל",
                "טלפון",
                "לינקדאין",
                "גיטהאב",
                "קורות חיים",
            ]
        ):

            files.extend(
                [
                    "profile.md",
                    "interview_faq.md",
                ]
            )

        # ------------------------
        # Why should we hire you
        # ------------------------

        if any(
            word in message
            for word in [
                "hire",
                "why should",
                "why you",
                "best candidate",
                "strength",
                "fit",
                "למה",
                "למה כדאי",
                "למה שנבחר",
                "חוזקה",
                "יתרון",
            ]
        ):

            files.extend(
                [
                    "profile.md",
                    "knowledge.md",
                    "interview_faq.md",
                    "personality.md",
                ]
            )

        # ------------------------
        # Engineering Decisions
        # ------------------------

        if any(
            word in message
            for word in [
                "architecture",
                "design",
                "decision",
                "tradeoff",
                "trade-off",
                "scalable",
                "performance",
                "microservice",
                "ארכיטקטורה",
                "תכנון",
                "סקייל",
                "ביצועים",
            ]
        ):

            files.append("engineering_decisions.md")

        # ------------------------
        # Career Goals
        # ------------------------

        if any(
            word in message
            for word in [
                "looking for",
                "career goal",
                "future",
                "next role",
                "מחפשת",
                "מחפש",
                "משרה",
                "עתיד",
                "יעדים",
            ]
        ):

            files.extend(
                [
                    "career_summary.md",
                    "faq.md",
                ]
            )

        # ------------------------
        # FAQ
        # ------------------------

        if any(
            word in message
            for word in [
                "favorite",
                "favourite",
                "enjoy",
                "learn",
                "learning",
                "favorite technology",
                "אוהבת",
                "לומדת",
                "לימוד",
            ]
        ):

            files.append("faq.md")

        if len(files) == 1:
            files.extend(
                [
                    "profile.md",
                    "knowledge.md",
                    "personality.md",
                ]
            )

        files.extend(
            [
                "knowledge.md",
                "personality.md",
            ]
        )
        return list(dict.fromkeys(files))


context_router = ContextRouter()
