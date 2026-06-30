# Engineering Decisions

## Why FastAPI?

I chose FastAPI because I wanted a modern Python backend with:

- Excellent typing support
- High performance
- Automatic OpenAPI documentation
- Great developer experience

---

## Why React?

React is the framework I know best professionally.

Using React allowed me to focus on building the AI experience rather than learning a new frontend framework.

---

## Why TypeScript?

Type safety becomes increasingly important as projects grow.

TypeScript helps catch many bugs before runtime and improves maintainability.

---

## Why OpenAI?

The project focuses on building an intelligent assistant rather than training language models.

Using OpenAI allows me to focus on product design, architecture and user experience.

---

## Why Markdown Knowledge Base?

Keeping knowledge outside the codebase makes it much easier to maintain.

Updating my professional profile becomes a content change instead of a code change.

It also prepares the project for future RAG support.

---

## Why Context Routing?

Sending every document to the model is expensive and unnecessary.

The Context Router selects only the relevant knowledge for each question.

This reduces token usage and improves answer quality.

---

## Future Architecture

The long-term architecture includes:

- RAG
- Vector Database
- Conversation Memory
- Streaming Responses
- Resume Upload
- Automatic Knowledge Updates