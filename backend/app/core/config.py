from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    HOST: str = "0.0.0.0"

    PORT: int = 8000

    FRONTEND_URL: str = "http://localhost:5173"

    OPENAI_API_KEY: str = ""

    OPENAI_MODEL: str = "gpt-4.1-mini"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


@lru_cache
def get_settings():

    return Settings()


settings = get_settings()