from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(
        min_length=1,
        max_length=5000,
    )

    language: str = Field(default="en")


class AIResponse(BaseModel):
    reply: str
    model: str
    provider: str
    finish_reason: str
    tokens: int
    sources: list[str] = []


class ChatResponse(AIResponse):
    pass


class StreamChunk(BaseModel):
    content: str