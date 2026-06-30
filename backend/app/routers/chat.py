from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.ai_service import ai_service
from app.services.context_router import context_router

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post(
    "",
    response_model=ChatResponse,
)
async def chat(
    request: ChatRequest,
):

    response = ai_service.generate(
        request
    )

    return ChatResponse(
        **response.model_dump()
    )


@router.post(
    "/stream"
)
async def stream_chat(
    request: ChatRequest,
):

    def event_stream():

        for chunk in ai_service.stream(
            request
        ):
            yield f"data:{chunk}\n\n"

        sources = context_router.get_files(
            request.message
        )

        yield (
            "event:sources\n"
            f"data:{','.join(sources)}\n\n"
        )

    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream",
    )