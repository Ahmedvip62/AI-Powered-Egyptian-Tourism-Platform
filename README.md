# 🇪🇬 AI-Powered Egyptian Tourism Platform
### *Graduation Project: Visual RAG-based Identification & Reporting System*

---

## 📌 Project Overview
As outlined in the official project proposal, this platform aims to enhance the Egyptian tourism experience by bridging the gap between **Computer Vision** and **Historical Knowledge Retrieval**. The system allows users to identify 50+ Egyptian landmarks using **OpenAI's CLIP** and receive factual, structured reports, fulfilling the primary objective of creating an automated AI tour guide.

## 🎯 Project Objectives (Phase 1 Accomplished)
- [x] **Data Acquisition:** Automated scraping of 1,500+ images and historical metadata from Wikipedia.
- [x] **Visual Encoding:** Implementing CLIP (Contrastive Language-Image Pre-training) for robust image feature extraction.
- [x] **Vector Search:** Building a high-performance similarity search using **FAISS**.
- [x] **RAG Pipeline:** Integrating retrieval-augmented generation to provide accurate historical summaries.
- [x] **Document Automation:** Exporting identified results into branded PDF reports.

## 🛠️ Technical Stack (As per Proposal)
| Component | Technology |
| :--- | :--- |
| **Backend Framework** | **FastAPI** (Python 3.12) |
| **Frontend Framework** | **React.js** (Web) / Gradio (Prototype) |
| **AI Models** | **OpenAI CLIP (ViT-B/32)** |
| **Vector Database** | **FAISS** (Facebook AI Similarity Search) |
| **Document Engine** | **FPDF** for dynamic PDF generation |
| **Environment** | Google Colab for GPU-accelerated processing |

## 📐 System Architecture & Workflow
The implementation follows the 5-week roadmap defined in the proposal:

1. **Preprocessing:** Images are normalized and encoded into 512-dimension vectors.
2. **Indexing:** Vectors are stored in a `FlatL2` FAISS index for microsecond retrieval.
3. **Query Logic:** The system uses **Majority Voting** across Top-5 neighbors to ensure prediction stability.
4. **Knowledge Retrieval:** Post-identification, the system queries a JSONL database to fetch curated historical data.
5. **Reporting:** A final PDF is compiled containing the landmark name, confidence score, and history.

## 📂 Repository Structure
```text
├── backend/                # FastAPI source code (Proposed Stack)
├── ai_engine/              # CLIP & FAISS Indexing scripts
├── data/                   # The 'Gold Dataset' (Index, Metadata, Knowledge Base)
├── docs/                   # Full Proposal PDF & System Diagrams
├── logo.png                # Project Branding
└── README.md               # Current Documentation
