<div align="center">

<img src="https://img.shields.io/badge/Egypt-Tourism%20AI-c8a850?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2M4YTg1MCIgZD0iTTEyIDJMMyAyMmgxOEwxMiAyem0wIDRsNi41IDEySC41NUwxMiA2eiIvPjwvc3ZnPg==" alt="Egypt Tourism AI"/>

# 🏛️ AI-Powered Egyptian Tourism Platform

### *Intelligent Visual Tour Guide — Powered by CLIP + FAISS + RAG*

[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)]()

<br/>

> Upload a photo of any Egyptian monument — get instant AI-generated historical context, powered by Visual Retrieval-Augmented Generation.

<br/>

**[📊 View UML Diagrams](https://htmlpreview.github.io/?https://github.com/Ahmedvip62/AI-Powered-Egyptian-Tourism-Platform/blob/main/docs/diagrams/tourism_diagrams.html)** · **[📄 Read Proposal](docs/AI_Tourism_Proposal.pdf)** · **[🚀 Live Demo](#-demo)** · **[🐛 Report Bug](https://github.com/Ahmedvip62/AI-Powered-Egyptian-Tourism-Platform/issues)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [AI Pipeline](#-ai-pipeline)
- [Team](#-team)
- [Milestones](#-milestones)
- [License](#-license)

---

## 🌟 Overview

The **AI-Powered Egyptian Tourism Platform** is a graduation project that brings Egypt's ancient heritage to life through artificial intelligence. Users can explore all Egyptian governorates, browse thousands of archaeological sites, and use our AI visual assistant to identify monuments and receive rich historical descriptions — all in real time.

The core innovation is a **Visual RAG (Retrieval-Augmented Generation)** pipeline that:
1. Encodes uploaded monument images via **CLIP** into semantic vectors
2. Searches a curated heritage **vector database (FAISS)** for similar monuments
3. Passes retrieved context to an **LLM** to generate accurate historical narratives

---

## ✨ Features

| Feature | Description | Status |
|---|---|---|
| 🗺️ **Governorate Explorer** | Browse all 27 Egyptian governorates with sites & landmarks | ✅ Planned |
| 🤖 **AI Monument Identifier** | Upload image → get instant historical description | ✅ Core Feature |
| 🔍 **Smart Search** | Filter sites by era, type, region | ✅ Planned |
| 📅 **Itinerary Builder** | Plan custom multi-day tours | ✅ Planned |
| ⭐ **Reviews & Ratings** | Community-driven site ratings | ✅ Planned |
| 🌐 **Multi-language** | Arabic & English support | 🔄 In Progress |
| 📄 **PDF Export** | Export AI reports as branded PDFs | ✅ Done |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                       │
│                   React.js Frontend                     │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTPS / REST
┌──────────────────────────▼──────────────────────────────┐
│                    API GATEWAY                          │
│              FastAPI  ·  Auth  ·  Rate Limit            │
└──────┬───────────────────┬───────────────────┬──────────┘
       │                   │                   │
┌──────▼──────┐  ┌─────────▼──────┐  ┌────────▼────────┐
│  .NET API   │  │  AI Service    │  │  Search Service │
│ Sites/Users │  │  Python/Torch  │  │   Full-text     │
└──────┬──────┘  └─────────┬──────┘  └────────┬────────┘
       │                   │                   │
       │          ┌────────▼────────┐          │
       │          │   RAG PIPELINE  │          │
       │          │ CLIP→FAISS→LLM  │          │
       │          └─────────────────┘          │
       │                                       │
┌──────▼───────────────────────────────────────▼──────────┐
│                      DATA LAYER                         │
│         PostgreSQL  ·  Redis  ·  AWS S3                 │
└─────────────────────────────────────────────────────────┘
```

> 📊 Full UML diagrams (Class, ERD, Use Case, Sequence, Activity, Component, Deployment, State Machine) → **[View Here](https://htmlpreview.github.io/?https://github.com/Ahmedvip62/AI-Powered-Egyptian-Tourism-Platform/blob/main/docs/diagrams/tourism_diagrams.html)**

---

## 🛠️ Tech Stack

### AI / Machine Learning
| Tool | Purpose |
|---|---|
| `OpenAI CLIP (ViT-B/32)` | Image → 512-dim semantic embedding |
| `FAISS (FlatL2)` | High-speed vector similarity search |
| `PyTorch + Transformers` | Model loading & inference |
| `LLM (GPT / Local)` | Historical description generation |

### Backend
| Tool | Purpose |
|---|---|
| `FastAPI (Python 3.12)` | AI service API & gateway |
| `.NET 8 / ASP.NET Core` | Sites, Users, Reviews REST API |
| `PostgreSQL` | Primary relational database |
| `Redis` | Session cache & rate limiting |

### Frontend
| Tool | Purpose |
|---|---|
| `React 18 + Vite` | Web application UI |
| `Tailwind CSS` | Styling |
| `React Query` | Server state management |

### DevOps
| Tool | Purpose |
|---|---|
| `Docker + Docker Compose` | Containerization |
| `AWS ECS + S3 + RDS` | Cloud deployment |
| `GitHub Actions` | CI/CD pipeline |

---

## 📁 Project Structure

```
AI-Powered-Egyptian-Tourism-Platform/
│
├── 📁 frontend/                    # React.js Web Application
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Home, Explorer, AI Tool, Itinerary
│   │   ├── hooks/                  # Custom React hooks
│   │   └── utils/                  # Helper functions
│   ├── public/
│   └── package.json
│
├── 📁 backend/                     # .NET 8 REST API
│   ├── Controllers/                # SiteController, UserController, ReviewController
│   ├── Models/                     # Entity models (Site, User, Monument, ...)
│   ├── Services/                   # Business logic layer
│   ├── Data/                       # EF Core DbContext & migrations
│   └── Program.cs
│
├── 📁 ai-service/                  # Python AI Pipeline (FastAPI)
│   ├── encoders/
│   │   └── clip_encoder.py         # CLIP image encoding
│   ├── retrieval/
│   │   └── vector_search.py        # FAISS similarity search
│   ├── generation/
│   │   └── llm_generator.py        # LLM description generation
│   ├── api/
│   │   └── routes.py               # FastAPI endpoints
│   ├── rag_pipeline.py             # Orchestrates full RAG flow
│   ├── main.py                     # App entry point
│   └── requirements.txt
│
├── 📁 data/                        # Tourism Dataset
│   ├── monuments/                  # Monument metadata (JSON)
│   ├── embeddings/                 # Precomputed CLIP vectors
│   ├── knowledge-base/             # Historical texts (JSONL)
│   └── scripts/                   # Data collection & scraping scripts
│
├── 📁 ml-training/                 # Model Training (Google Colab)
│   └── notebooks/
│       ├── 01_data_collection.ipynb
│       ├── 02_clip_indexing.ipynb
│       └── 03_rag_evaluation.ipynb
│
├── 📁 deployment/                  # Infrastructure & DevOps
│   ├── docker/
│   │   ├── Dockerfile.frontend
│   │   ├── Dockerfile.backend
│   │   └── Dockerfile.ai
│   ├── aws/                        # ECS task definitions
│   └── nginx/                      # Reverse proxy config
│
├── 📁 docs/                        # Documentation
│   ├── diagrams/
│   │   └── tourism_diagrams.html   # ← Full UML Diagrams (interactive)
│   └── AI_Tourism_Proposal.pdf
│
├── 📁 .github/
│   ├── workflows/
│   │   └── ci.yml                  # GitHub Actions CI/CD
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
│
├── docker-compose.yml              # Local dev environment
├── docker-compose.prod.yml         # Production config
├── .env.example                    # Environment variables template
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- Node.js 20+
- .NET 8 SDK
- Docker & Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/Ahmedvip62/AI-Powered-Egyptian-Tourism-Platform.git
cd AI-Powered-Egyptian-Tourism-Platform
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your API keys and DB credentials
```

### 3. Run with Docker Compose (recommended)

```bash
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| .NET API | http://localhost:5000/swagger |
| AI Service | http://localhost:8001/docs |

### 4. Run services individually

```bash
# AI Service
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8001

# Frontend
cd frontend
npm install && npm run dev

# Backend (.NET)
cd backend
dotnet restore && dotnet run
```

---

## 🧠 AI Pipeline

The Visual RAG pipeline processes a monument image in 3 steps:

```
User uploads image
        │
        ▼
┌───────────────┐
│  CLIP Encoder │  →  512-dimensional vector embedding
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  FAISS Search │  →  Top-5 most similar monuments retrieved
└───────┬───────┘       (Confidence threshold: 0.6)
        │
        ▼
┌───────────────┐
│  LLM Generate │  →  Rich historical description
└───────────────┘
```

**Dataset:** 1,500+ images across 50+ Egyptian landmarks scraped from Wikipedia with curated historical metadata.

---

## 👥 Team

| Name | Role |
|---|---|
| **Ahmed Ramadan** ⭐ | Project Leader & Coordination |
| **Osama Abdel-Rahman** | AI Vision + RAG System |
| **Ahmed Ramadan** | AI Vision + RAG System |
| **Ahmed Yaser** | Backend Development (API + DB) |
| **Ahmed Abdelkader** | Backend Development (API + DB) |
| **Menna Mohamed** | Frontend Development (UI/UX) |
| **Ahmed** | Frontend Development |
| **Amr Mohamed** | Data Collection & ML Model |
| **Hassan Mohamed** | Data Collection & ML Model |
| **Osama + Ahmed Yaser** | Deployment |

**Supervisor:** Dr. Morad Raafat

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

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Made with ❤️ in Egypt · 2025–2026

*Innovation meets Heritage — Preserving the past through the technology of the future* 🏛️

</div>
