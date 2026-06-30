# Miriam's Professional Projects

This document describes the major projects Miriam has worked on throughout her career.

---

# IRIS - OTT Advertisement Decision System

IRIS is one of the largest and most interesting systems Miriam has worked on at Synamedia.

It is a cloud-based distributed system responsible for selecting advertisements in real time for OTT and Broadcast platforms.

The system serves millions of requests and therefore every architectural decision focuses on scalability, latency and reliability.

Miriam worked on the backend cloud services of this platform.

Technologies included:

- Node.js
- MongoDB
- Redis
- DynamoDB
- AWS
- Lambda
- Docker
- Kubernetes (EKS)
- Microservices

---

## What does IRIS do?

When a user is about to watch content that contains an advertisement opportunity, the client sends a request asking which advertisement should be shown.

The decision service receives this request and selects the most appropriate advertisement according to business rules, subscriber information and campaign priorities.

The response must be extremely fast because users are already watching the content.

---

## High Level Architecture

The system is composed of many independent microservices.

Examples include:

- Ad Manager
- Decision Server
- Delivery Service
- Reporter
- API Gateway

Internal communication happens between backend services deployed inside AWS.

The infrastructure runs on Kubernetes.

---

## Performance Challenges

One of the biggest engineering challenges is handling extremely high traffic.

Linear television may generate millions of requests simultaneously.

To support this scale the system relies heavily on caching.

Instead of querying MongoDB for every request, background services periodically prepare data and store optimized results inside Redis.

This dramatically reduces latency.

---

## Redis

Redis stores information that can be reused quickly.

Examples include:

- Active campaigns
- Subscriber information
- Campaign priorities
- Frequency capping
- Spacing rules

The Decision Server can therefore answer requests without expensive database operations.

---

## AWS

The platform uses several AWS services including:

- Lambda
- Kubernetes (EKS)
- VPC
- Cloud infrastructure
- Distributed deployments

Miriam regularly worked with cloud-native services while developing backend features.

---

## Monitoring

Production services were monitored using tools such as:

- Prometheus
- Lightstep

Monitoring helped detect production issues and analyze system performance.

---

## CI/CD

Development included automated deployment pipelines.

Code changes were integrated through GitHub workflows and deployed using containerized infrastructure.

---

## Working Environment

Development followed Agile Scrum.

Typical activities included:

- Sprint Planning
- Daily Meetings
- Code Reviews
- Architecture Discussions
- Production Support

---

# Full Stack Development at Synamedia

Before moving to the backend team, Miriam worked as a Full Stack Developer.

This role included both frontend and backend responsibilities.

Technologies included:

- React
- TypeScript
- Node.js
- MongoDB

She implemented complete end-to-end features.

This role involved close collaboration with Product Managers and UX Designers.

She particularly enjoyed this role because she had broader ownership over complete features and could understand the system from multiple perspectives.

---

## Frontend Responsibilities

Examples included:

- Building React components.
- Optimizing rendering performance.
- Reducing unnecessary API calls.
- Working with React Hooks.
- Context API.
- REST API integration.

---

## Backend Responsibilities

Examples included:

- Node.js services.
- API development.
- Business logic.
- Database integration.

---

# Applied Materials

At Applied Materials Miriam worked as a Frontend Developer.

She developed enterprise software used internally by the company.

Technologies included:

- React
- Redux
- TypeScript
- CSS
- Jest

Responsibilities included:

- New feature development.
- UI improvements.
- Bug fixing.
- Working with UX teams.
- Maintaining large production applications.

---

# Meet Miriam AI

Meet Miriam AI is one of Miriam's personal projects.

It is an AI-powered website that allows recruiters and engineers to chat with an AI assistant representing Miriam professionally.

The assistant answers questions about:

- Professional experience
- Projects
- Technologies
- Engineering decisions
- Career history

The project was created to provide an interactive alternative to a traditional resume.

---

## Technologies

The project combines several technologies including:

Backend

- Python
- FastAPI
- LangChain

AI

- OpenAI
- Retrieval-Augmented Generation (RAG)
- Vector Search

Frontend

- React
- TypeScript
- Vite

Deployment

- Railway
- Vercel

---

## Why did Miriam build it?

Miriam enjoys learning emerging technologies.

Instead of creating another portfolio website, she wanted to build something practical that demonstrates her engineering skills.

The project also allowed her to gain hands-on experience with AI applications, prompt engineering, retrieval systems and LLM integration.

---

# Favorite Project

When asked which project she enjoyed the most, Miriam usually answers that she especially enjoyed her Full Stack role at Synamedia.

Although the backend cloud project is technically very interesting, the Full Stack position gave her broader ownership and a better understanding of the entire product.

She enjoys understanding complete systems rather than working on only one isolated component.

---

# Typical Questions About Projects

## Which project are you most proud of?

Meet Miriam AI demonstrates Miriam's curiosity and willingness to learn new technologies.

IRIS demonstrates her experience with large-scale production systems.

Her Full Stack work demonstrates product ownership and end-to-end engineering.

---

## Have you worked on large-scale systems?

Yes.

The IRIS platform handles very high traffic and was designed around scalability, distributed services and low latency.

---

## Have you worked with cloud technologies?

Yes.

Miriam has experience working with AWS, Docker, Kubernetes, Lambda, Redis, MongoDB, DynamoDB and cloud-native microservices.

---

## Did you work independently?

Yes.

Miriam owned backend tasks, collaborated with Product and Engineering teams and participated in architecture discussions, implementation, testing, deployment and production support.