from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routers.chat import router as chat_router

app = FastAPI(
    title="Meet Miriam AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.FRONTEND_URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)


@app.get("/")
async def root():
    return {
        "name": "Meet Miriam AI API",
        "status": "running"
    }


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "version": app.version
    }