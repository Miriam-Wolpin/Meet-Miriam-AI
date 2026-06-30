import re
from collections.abc import Generator

from app.schemas.chat import AIResponse, ChatRequest
from app.services.context_router import context_router
from app.services.prompt_builder import prompt_builder
from app.services.providers.openai_provider import openai_provider


class AIService:

    def generate(self, request: ChatRequest) -> AIResponse:

        if not self.is_professional_question(request.message):

            if request.language == "he":

                return AIResponse(
                    answer=(
                        "😊 אני כאן כדי לדבר על הניסיון המקצועי שלי, "
                        "הפרויקטים שבניתי, הארכיטקטורה, AI, Backend "
                        "והקריירה שלי.\n\n"
                        "על שאלות כלליות כמו מתכונים או טריוויה "
                        "אני מעדיפה לא לענות כאן.\n\n"
                        "נסו לשאול אותי משהו על הניסיון שלי 🙂"
                    ),
                    sources=[],
                )

            return AIResponse(
                answer=(
                    "😊 I'm here to talk about my professional experience, "
                    "projects, backend engineering, AI and my career.\n\n"
                    "I intentionally don't answer general knowledge questions "
                    "such as recipes or trivia.\n\n"
                    "Feel free to ask me anything about my work or projects!"
                ),
                sources=[],
            )

        files = context_router.get_files(request.message)

        knowledge_files = [
            file
            for file in files
            if file
            not in [
                "system_prompt.md",
                "about.md",
            ]
        ]

        if not knowledge_files:

            if request.language == "he":

                return AIResponse(
                    answer=(
                        "😊 אני כאן כדי לדבר על הניסיון המקצועי שלי, "
                        "על הפרויקטים שבניתי ועל הדרך שלי כמהנדסת תוכנה.\n\n"
                        "אני לא מיועד לענות על שאלות ידע כלליות.\n\n"
                        "אפשר לשאול אותי על Backend, Cloud, AI, "
                        "הקריירה שלי או הפרויקטים שלי."
                    ),
                    sources=[],
                )

            return AIResponse(
                answer=(
                    "😊 This portfolio is focused on my professional background.\n\n"
                    "I don't answer general knowledge questions here.\n\n"
                    "Feel free to ask me about my experience, projects, backend engineering, cloud or AI."
                ),
                sources=[],
            )

        prompt = prompt_builder.build(request)

        response = openai_provider.generate(request=request, prompt=prompt)

        response.sources = context_router.get_files(request.message)

        return response

    def stream(self, request: ChatRequest) -> Generator[str, None, None]:

        prompt = prompt_builder.build(request)

        yield from openai_provider.stream(prompt)


ai_service = AIService()
