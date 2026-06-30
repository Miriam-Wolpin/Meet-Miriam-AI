from collections.abc import Generator

from openai import OpenAI

from app.core.config import settings
from app.schemas.chat import AIResponse, ChatRequest


class OpenAIProvider:

    def __init__(self):

        self.client = OpenAI(
            api_key=settings.OPENAI_API_KEY
        )

    def generate(
        self,
        request: ChatRequest,
        prompt: str
    ) -> AIResponse:

        try:

            response = self.client.responses.create(
                model=settings.OPENAI_MODEL,
                input=prompt
            )

            usage = response.usage

            return AIResponse(
                reply=response.output_text,
                provider="OpenAI",
                model=response.model,
                finish_reason=response.status,
                tokens=usage.total_tokens if usage else 0
            )

        except Exception:

            return AIResponse(
                reply="Sorry, an internal error occurred.",
                provider="OpenAI",
                model=settings.OPENAI_MODEL,
                finish_reason="error",
                tokens=0
            )

    def stream(
        self,
        prompt: str
    ) -> Generator[str, None, None]:

        try:

            stream = self.client.responses.create(
                model=settings.OPENAI_MODEL,
                input=prompt,
                stream=True
            )

            for event in stream:

                if event.type == "response.output_text.delta":
                    yield event.delta

        except Exception:
            yield "Sorry, an internal error occurred."


openai_provider = OpenAIProvider()