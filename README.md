<div align="center">

# 🏛️ AI-Powered Egyptian Tourism Platform

### *Intelligent Visual Tour Guide — Powered by CLIP + FAISS + RAG*

[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square)]()

<br/>

> Upload a photo of any Egyptian monument — get instant AI-generated historical context,  
> powered by Visual Retrieval-Augmented Generation.

<br/>

**[🚀 Live Demo](#)** &nbsp;·&nbsp; **[📄 Proposal](docs/AI_Tourism_Proposal.pdf)** &nbsp;·&nbsp; **[🐛 Report Bug](../../issues)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [UML Diagrams](#-uml-diagrams)
  - [Class Diagram](#1-class-diagram)
  - [Entity Relationship Diagram](#2-entity-relationship-diagram)
  - [Use Case Diagram](#3-use-case-diagram)
  - [Sequence Diagram — AI Pipeline](#4-sequence-diagram--ai-pipeline)
  - [Sequence Diagram — Authentication](#5-sequence-diagram--authentication)
  - [Activity Diagram — AI Analysis](#6-activity-diagram--ai-analysis)
  - [Activity Diagram — Itinerary](#7-activity-diagram--itinerary-planning)
  - [Component Diagram](#8-component-diagram)
  - [Deployment Diagram](#9-deployment-diagram)
  - [State Machine — AI Query](#10-state-machine--ai-query)
  - [State Machine — User Session](#11-state-machine--user-session)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Team](#-team)
- [Milestones](#-milestones)

---

## 🌟 Overview

The **AI-Powered Egyptian Tourism Platform** is a graduation project that brings Egypt's ancient heritage to life through artificial intelligence. Users can explore all Egyptian governorates, browse thousands of archaeological sites, and use our AI visual assistant to identify monuments and receive rich historical descriptions — all in real time.

The core innovation is a **Visual RAG (Retrieval-Augmented Generation)** pipeline:

```
Upload Image  →  CLIP Encoding  →  FAISS Vector Search  →  LLM Generation  →  Historical Description
```

---

## ✨ Features

| Feature | Description | Status |
|---|---|---|
| 🗺️ **Governorate Explorer** | Browse all 27 Egyptian governorates with sites & landmarks | ✅ Planned |
| 🤖 **AI Monument Identifier** | Upload image → instant historical description | ✅ Core Feature |
| 🔍 **Smart Search** | Filter sites by era, type, region | ✅ Planned |
| 📅 **Itinerary Builder** | Plan custom multi-day tours | ✅ Planned |
| ⭐ **Reviews & Ratings** | Community-driven site ratings | ✅ Planned |
| 🌐 **Multi-language** | Arabic & English support | 🔄 In Progress |
| 📄 **PDF Export** | Export AI reports as branded PDFs | ✅ Done |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **AI / Vision** | OpenAI CLIP (ViT-B/32), FAISS, PyTorch, Transformers, LLM |
| **AI Service** | Python 3.12, FastAPI |
| **Backend** | .NET 8 / ASP.NET Core, PostgreSQL, Redis |
| **Frontend** | React 18, Vite, Tailwind CSS, React Query |
| **DevOps** | Docker, Docker Compose, AWS ECS/S3/RDS, GitHub Actions |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                       │
│                   React.js Frontend                     │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTPS / REST
┌──────────────────────────▼──────────────────────────────┐
│               API GATEWAY  (FastAPI)                    │
│              Auth  ·  Rate Limit  ·  Routing            │
└──────┬───────────────────┬───────────────────┬──────────┘
       │                   │                   │
┌──────▼──────┐  ┌─────────▼──────┐  ┌────────▼────────┐
│  .NET API   │  │  AI Service    │  │  Search Service │
│ Sites/Users │  │  Python/Torch  │  │   Full-text     │
└──────┬──────┘  └────────┬───────┘  └────────┬────────┘
       │                  │                    │
       │         ┌────────▼────────┐           │
       │         │   RAG PIPELINE  │           │
       │         │ CLIP→FAISS→LLM  │           │
       │         └─────────────────┘           │
       │                                       │
┌──────▼───────────────────────────────────────▼──────────┐
│                      DATA LAYER                         │
│         PostgreSQL  ·  Redis  ·  AWS S3                 │
└─────────────────────────────────────────────────────────┘
```

---

## 📐 UML Diagrams

### 1. Class Diagram

```mermaid
classDiagram
    class User {
        +int id
        +string name
        +string email
        +string passwordHash
        +register()
        +login()
        +updateProfile()
    }
    class TouristSite {
        +int id
        +string name
        +string governorate
        +string category
        +float latitude
        +float longitude
        +getDetails()
        +getRelatedSites()
    }
    class Governorate {
        +int id
        +string name
        +string arabicName
        +string region
        +getSites()
    }
    class AIQuery {
        +int id
        +int userId
        +string imageUrl
        +float[] embedding
        +string generatedDescription
        +float confidenceScore
        +processImage()
        +retrieveContext()
        +generateResponse()
    }
    class Monument {
        +int id
        +int siteId
        +string name
        +string dynasty
        +string period
        +getHistoricalContext()
    }
    class Review {
        +int id
        +int userId
        +int siteId
        +int rating
        +string comment
        +submit()
    }
    class CLIPEncoder {
        +string modelName
        +int embeddingDim
        +encode(image) float[]
        +preprocess(image)
    }
    class VectorDatabase {
        +string collectionName
        +insert(embedding)
        +search(queryEmbedding, topK)
    }
    class LLMService {
        +string modelName
        +generateDescription(context)
        +translate(text, lang)
    }
    class Itinerary {
        +int id
        +int userId
        +string name
        +TouristSite[] sites
        +addSite(siteId)
        +export()
    }

    User "1" --> "0..*" Review : writes
    User "1" --> "0..*" Itinerary : creates
    User "1" --> "0..*" AIQuery : submits
    TouristSite "1" --> "0..*" Review : receives
    TouristSite "1" --> "0..*" Monument : contains
    TouristSite "0..*" --> "1" Governorate : belongsTo
    AIQuery --> CLIPEncoder : uses
    AIQuery --> VectorDatabase : queries
    AIQuery --> LLMService : uses
    Itinerary "0..*" --> "0..*" TouristSite : includes
```

---

### 2. Entity Relationship Diagram

```mermaid
erDiagram
    USERS {
        int id PK
        string name
        string email
        string password_hash
        string preferred_language
        datetime created_at
    }
    GOVERNORATES {
        int id PK
        string name
        string arabic_name
        string region
    }
    TOURIST_SITES {
        int id PK
        int governorate_id FK
        string name
        text description
        string category
        float latitude
        float longitude
        float avg_rating
    }
    MONUMENTS {
        int id PK
        int site_id FK
        string name
        string dynasty
        string period
        text historical_context
    }
    SITE_IMAGES {
        int id PK
        int site_id FK
        string image_url
        boolean is_primary
    }
    AI_QUERIES {
        int id PK
        int user_id FK
        string image_url
        text generated_description
        float confidence_score
        datetime created_at
    }
    EMBEDDINGS {
        int id PK
        int monument_id FK
        string vector_id
        string model_version
    }
    REVIEWS {
        int id PK
        int user_id FK
        int site_id FK
        int rating
        text comment
    }
    ITINERARIES {
        int id PK
        int user_id FK
        string name
        date start_date
        date end_date
    }
    ITINERARY_SITES {
        int itinerary_id FK
        int site_id FK
        int visit_order
        int duration_minutes
    }

    USERS ||--o{ REVIEWS : "writes"
    USERS ||--o{ AI_QUERIES : "submits"
    USERS ||--o{ ITINERARIES : "creates"
    GOVERNORATES ||--o{ TOURIST_SITES : "contains"
    TOURIST_SITES ||--o{ MONUMENTS : "has"
    TOURIST_SITES ||--o{ SITE_IMAGES : "has"
    TOURIST_SITES ||--o{ REVIEWS : "receives"
    MONUMENTS ||--o{ EMBEDDINGS : "has"
    ITINERARIES ||--o{ ITINERARY_SITES : "includes"
    TOURIST_SITES ||--o{ ITINERARY_SITES : "appears_in"
```

---

### 3. Use Case Diagram

```mermaid
flowchart LR
    Tourist(["👤 Tourist\nGuest"])
    RegUser(["👤 Registered\nUser"])
    Admin(["👤 Admin"])
    AI(["🤖 AI Engine"])

    subgraph System["🏛️ Egyptian Tourism Platform"]
        direction TB
        UC1["Browse Sites by Governorate"]
        UC2["View Site Details"]
        UC3["Search & Filter Sites"]
        UC4["Upload Monument Image"]
        UC5["Receive AI Description"]
        UC6["Register / Login"]
        UC7["Write Review"]
        UC8["Create Itinerary"]
        UC9["Save Favourite Sites"]
        UC10["Manage Sites & Content"]
        UC11["Manage Users"]
        UC12["View Analytics"]
        UC13["Update AI Model"]
    end

    Tourist --> UC1 & UC2 & UC3 & UC4 & UC6
    RegUser --> UC1 & UC2 & UC3 & UC4 & UC7 & UC8 & UC9
    UC4 --> UC5
    UC5 --> AI
    Admin --> UC10 & UC11 & UC12 & UC13
```

---

### 4. Sequence Diagram — AI Pipeline

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant Gateway as API Gateway
    participant AI as AI Service
    participant CLIP as CLIP Encoder
    participant FAISS as Vector DB (FAISS)
    participant LLM as Language Model

    User->>Frontend: Upload monument image
    Frontend->>Frontend: Validate format & size
    Frontend->>Gateway: POST /api/ai/analyze
    Gateway->>AI: Forward request
    AI->>CLIP: encode(image)
    CLIP-->>AI: 512-dim embedding
    AI->>FAISS: search(embedding, topK=5)
    FAISS-->>AI: Top-5 similar monuments
    AI->>LLM: generate(context, prompt)
    LLM-->>AI: Historical description
    AI->>AI: Save query to DB
    AI-->>Gateway: description + confidence
    Gateway-->>Frontend: 200 OK
    Frontend-->>User: Display result
```

---

### 5. Sequence Diagram — Authentication

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant API as Backend API (.NET)
    participant Auth as Auth Service
    participant DB as PostgreSQL

    User->>Frontend: Fill registration form
    Frontend->>Frontend: Client-side validation
    Frontend->>API: POST /api/auth/register
    API->>DB: Check email exists
    DB-->>API: Not found
    API->>Auth: hashPassword(password)
    Auth-->>API: passwordHash
    API->>DB: INSERT user
    DB-->>API: User created
    API->>Auth: generateJWT(userId)
    Auth-->>API: JWT token
    API-->>Frontend: 201 Created + token
    Frontend-->>User: Redirect to dashboard
```

---

### 6. Activity Diagram — AI Analysis

```mermaid
flowchart TD
    A([Start]) --> B[User selects image]
    B --> C{Valid format?}
    C -- No --> D[Show error]
    D --> B
    C -- Yes --> E{Size under 10MB?}
    E -- No --> F[Show size error]
    F --> B
    E -- Yes --> G[Upload to storage]
    G --> H[Send to AI Service]
    H --> I[CLIP encodes image\nto 512-dim vector]
    I --> J[FAISS retrieves\nTop-5 monuments]
    J --> K{Confidence\nover 0.6?}
    K -- No --> L[Return generic\nEgypt description]
    K -- Yes --> M[Retrieve historical texts]
    M --> N[LLM generates description]
    N --> O[Save query to DB]
    L --> P[Return result to user]
    O --> P
    P --> Q([End])
```

---

### 7. Activity Diagram — Itinerary Planning

```mermaid
flowchart TD
    A([Start]) --> B[Open Itinerary Builder]
    B --> C[Select governorate]
    C --> D[Browse available sites]
    D --> E{Add site?}
    E -- Yes --> F[Set visit date & duration]
    F --> G[Add to itinerary]
    G --> H{Add another?}
    H -- Yes --> D
    H -- No --> I[Review itinerary]
    E -- No --> D
    I --> J{Reorder sites?}
    J -- Yes --> K[Drag & drop reorder]
    K --> I
    J -- No --> L[Name itinerary]
    L --> M{Save as public?}
    M -- Public --> N[Save & generate share link]
    M -- Private --> O[Save privately]
    N --> P([End])
    O --> P
```

---

### 8. Component Diagram

```mermaid
flowchart TB
    subgraph Client["🖥️ Client Layer"]
        React["⚛️ React Frontend"]
    end

    subgraph GW["🔀 API Gateway (FastAPI)"]
        Auth["Auth Middleware"]
        Router["Request Router"]
        RateLimit["Rate Limiter"]
    end

    subgraph Backend["⚙️ Backend Services (.NET)"]
        SiteAPI["Site & Governorate API"]
        UserAPI["User & Auth API"]
        ReviewAPI["Review API"]
    end

    subgraph AICore["🧠 AI Service (Python)"]
        CLIP["CLIP Encoder"]
        FAISS["FAISS Vector DB"]
        LLM["LLM Generator"]
        RAG["RAG Orchestrator"]
    end

    subgraph Data["🗄️ Data Layer"]
        PG["PostgreSQL"]
        Redis["Redis Cache"]
        S3["AWS S3"]
    end

    React -->|HTTPS| GW
    GW --> SiteAPI & UserAPI & ReviewAPI & RAG
    RAG --> CLIP --> FAISS --> LLM
    SiteAPI & UserAPI & ReviewAPI --> PG
    UserAPI --> Redis
    RAG --> S3
```

---

### 9. Deployment Diagram

```mermaid
flowchart TB
    User(["👤 End User"])

    subgraph CDN["🌐 CloudFront CDN"]
        CF["React Static Build"]
    end

    subgraph AWS["☁️ AWS Cloud"]
        ALB["Application Load Balancer"]

        subgraph ECS["ECS Containers"]
            C1["🐳 .NET API"]
            C2["🐳 FastAPI Gateway"]
            C3["🐳 AI Service (GPU)"]
        end

        subgraph Storage["Data Layer"]
            RDS["🐘 RDS PostgreSQL"]
            Cache["⚡ ElastiCache Redis"]
            Bucket["🪣 S3 Bucket"]
        end

        FAISS_SVC["FAISS Vector Service"]
    end

    User -->|HTTPS| CF
    CF -->|API| ALB
    ALB --> C1 & C2 & C3
    C1 --> RDS & Cache
    C2 --> RDS
    C3 --> FAISS_SVC & Bucket
```

---

### 10. State Machine — AI Query

```mermaid
stateDiagram-v2
    [*] --> Idle

    Idle --> Uploading : User submits image
    Uploading --> Validating : Image received
    Validating --> Encoding : Passed validation
    Validating --> Failed : Invalid file

    Encoding --> Retrieving : CLIP done
    Retrieving --> Generating : High confidence
    Retrieving --> Fallback : Low confidence

    Generating --> Completed : Description ready
    Fallback --> Completed : Generic response

    Completed --> Saving : Write to DB
    Saving --> Idle : Done

    Failed --> Idle : Error returned
```

---

### 11. State Machine — User Session

```mermaid
stateDiagram-v2
    [*] --> Guest

    Guest --> Registering : Click register
    Guest --> LoggingIn : Click login

    Registering --> Verified : Email verified
    Registering --> Guest : Cancel

    LoggingIn --> Authenticated : Valid credentials
    LoggingIn --> Guest : Wrong credentials

    Authenticated --> BrowsingSites : Browse
    Authenticated --> UsingAI : Upload image
    Authenticated --> PlanningTrip : Itinerary
    Authenticated --> LoggedOut : Logout

    BrowsingSites --> Authenticated
    UsingAI --> Authenticated
    PlanningTrip --> Authenticated

    Verified --> LoggingIn
    LoggedOut --> Guest
    LoggedOut --> [*]
```

---

## 📁 Project Structure

```
AI-Powered-Egyptian-Tourism-Platform/
│
├── 📁 frontend/                    # React 18 + Vite
│   └── src/
│       ├── components/             # Reusable UI components
│       ├── pages/                  # Home, Explorer, AI Tool, Itinerary
│       ├── hooks/                  # Custom React hooks
│       └── utils/                  # Helper functions
│
├── 📁 backend/                     # .NET 8 REST API
│   ├── Controllers/                # SiteController, UserController, ReviewController
│   ├── Models/                     # Entity models
│   ├── Services/                   # Business logic
│   └── Data/                       # EF Core DbContext & Migrations
│
├── 📁 ai-service/                  # Python AI Pipeline (FastAPI)
│   ├── encoders/clip_encoder.py    # CLIP image encoding
│   ├── retrieval/vector_search.py  # FAISS similarity search
│   ├── generation/llm_generator.py # LLM description generation
│   ├── rag_pipeline.py             # Orchestrates full RAG flow
│   └── requirements.txt
│
├── 📁 data/                        # Tourism Dataset (1,500+ images)
│   ├── monuments/                  # Monument metadata (JSON)
│   ├── embeddings/                 # Precomputed CLIP vectors
│   ├── knowledge-base/             # Historical texts (JSONL)
│   └── scripts/                    # Scraping & preprocessing
│
├── 📁 ml-training/notebooks/       # Google Colab training notebooks
│   ├── 01_data_collection.ipynb
│   ├── 02_clip_indexing.ipynb
│   └── 03_rag_evaluation.ipynb
│
├── 📁 deployment/                  # Docker + AWS configs
│   ├── docker/                     # Dockerfiles per service
│   ├── aws/                        # ECS task definitions
│   └── nginx/                      # Reverse proxy config
│
├── 📁 docs/diagrams/               # UML diagrams (HTML interactive)
├── 📁 .github/workflows/           # GitHub Actions CI/CD
├── docker-compose.yml              # Local dev environment
├── .env.example                    # Environment variables template
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.12+ · Node.js 20+ · .NET 8 SDK · Docker

### Run with Docker (recommended)

```bash
git clone https://github.com/Ahmedvip62/AI-Powered-Egyptian-Tourism-Platform.git
cd AI-Powered-Egyptian-Tourism-Platform
cp .env.example .env          # fill in your credentials
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| .NET API + Swagger | http://localhost:5000/swagger |
| AI Service + Docs | http://localhost:8001/docs |

### Run services individually

```bash
# AI Service
cd ai-service && pip install -r requirements.txt
uvicorn main:app --reload --port 8001

# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && dotnet restore && dotnet run
```

---

## 👥 Team

| Name | Role |
|---|---|
| **Ahmed Ramadan** ⭐ | Project Leader & AI Vision + RAG |
| **Osama Abdel-Rahman** | AI Vision + RAG System |
| **Ahmed Yaser** | Backend Development + Deployment |
| **Ahmed Abdelkader** | Backend Development |
| **Menna Mohamed** | Frontend Development (UI/UX) |
| **Amr Mohamed** | Data Collection & ML Model |
| **Hassan Mohamed** | Data Collection & ML Model |

**Academic Supervisor:** Dr. Morad Raafat

---

## 📅 Milestones

| # | Milestone | Timeline | Status |
|---|---|---|---|
| M1 | Research & Planning | Week 1–2 | ✅ Done |
| M2 | Tourism Data Collection | Week 2–4 | ✅ Done |
| M3 | AI Pipeline Development | Week 4–6 | 🔄 In Progress |
| M4 | Website Development | Week 6–8 | 🔄 In Progress |
| M5 | Integration & Testing | Week 8–10 | ⏳ Pending |
| M6 | Deployment & Presentation | Week 10–12 | ⏳ Pending |

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Made with ❤️ in Egypt &nbsp;·&nbsp; 2025–2026

*Innovation meets Heritage — Preserving the past through the technology of the future* 🏛️

</div>
