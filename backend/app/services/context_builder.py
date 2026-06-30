from pathlib import Path

from app.services.context_router import context_router


DATA_DIR = Path(__file__).parent.parent.parent / "data"


class ContextBuilder:

    def build(
        self,
        message: str,
    ) -> str:

        parts: list[str] = []

        for file_name in context_router.get_files(message):

            file_path = DATA_DIR / file_name

            if not file_path.exists():
                continue

            parts.append(
                file_path.read_text(
                    encoding="utf-8"
                )
            )

        return "\n\n".join(parts)


context_builder = ContextBuilder()