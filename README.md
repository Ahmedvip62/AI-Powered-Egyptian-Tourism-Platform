# 🇪🇬 AI-Powered Egyptian Tourism Platform
### *Bridging Ancient History with Visual RAG Technology*

---

## 🌟 Overview
The **AI-Powered Egyptian Tourism Platform** is an intelligent system designed to revolutionize the tourist experience in Egypt. By leveraging **Computer Vision (CLIP)** and **Vector Databases (FAISS)**, the platform identifies monuments from user-uploaded photos and generates instant, factual historical reports in PDF format.

## 🚀 Key Features
- **Visual Recognition:** Identify 50+ major Egyptian landmarks with high accuracy using **OpenAI's CLIP**.
- **Visual RAG Architecture:** Combines image embeddings with a structured knowledge base to prevent AI hallucinations.
- **Dynamic PDF Generation:** Automated reporting system that includes historical summaries and confidence scores.
- **Interactive UI:** A user-friendly interface built with **Gradio** for real-time identification.

## 🛠️ Tech Stack
| Category | Technology |
| :--- | :--- |
| **AI Engine** | Python, OpenAI CLIP, PyTorch |
| **Vector DB** | FAISS (Facebook AI Similarity Search) |
| **Data Science** | Pandas, NumPy, PIL |
| **Report Gen** | FPDF (Fast PDF Library) |
| **Interface** | Gradio (Web UI) |
| **Environment**| Google Colab / FastAPI |

## 📐 System Architecture
The platform follows a **Visual Retrieval-Augmented Generation (RAG)** pipeline:



1. **Input:** User uploads a photo (e.g., The Great Pyramid).
2. **Encoding:** CLIP converts the image into a high-dimensional vector.
3. **Retrieval:** FAISS searches the `vector_index.faiss` for the closest matches.
4. **Knowledge Bridge:** The system retrieves factual text from the `knowledge_base.jsonl`.
5. **Output:** A Markdown summary appears on screen, and a branded PDF is generated for download.

## 📂 Project Structure
```text
├── data/
│   ├── vector_index.faiss     # Pre-computed image embeddings
│   ├── metadata.jsonl         # Mapping of vectors to landmark names
│   └── knowledge_base.jsonl   # Historical text data (Scraped)
├── app/
│   ├── main_pipeline.py       # The core AI & UI logic
│   └── utils/pdf_gen.py       # PDF generation functions
├── logo.png                   # Startup branding logo
├── README.md                  # Project documentation
└── requirements.txt           # Python dependencies
