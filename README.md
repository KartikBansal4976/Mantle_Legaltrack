⚖️ LegalTrack4

WATCH LIVE (Frontend):
👉 https://legaltrackhost-12ep.vercel.app/

LegalTrack4 is an AI + Blockchain powered legal tech platform designed to modernize and simplify the legal process — from FIR assistance to legal support services — all in one place.

It brings together Artificial Intelligence, IPFS, and Blockchain to make FIR filing secure, tamper-proof, and transparent. Built for users, police departments, and legal professionals, it ensures FIRs are immutable and traceable on the blockchain while leveraging AI for predictions and automation.

📌 Problem Statement

The legal process in many regions suffers from delays, lack of transparency, and risks of tampering with records. FIRs (First Information Reports), in particular, are prone to mismanagement or loss in traditional systems. Victims often face challenges like:

Complex manual filing procedures

Lack of legal knowledge (which sections apply)

Data integrity issues (tampering or lost files)

Difficulty in tracking FIR status

💡 Our Solution

LegalTrack4 solves these challenges by combining AI, decentralized storage, and blockchain:

🧠 AI-driven Legal Prediction – Suggests relevant sections for FIRs using ANN models

🗣️ Voice-to-Text FIR Filing – Helps victims file FIRs faster

🔗 Blockchain Integration – Stores FIR CIDs on Mantle Sepolia blockchain (immutable, tamper-proof)

📂 IPFS Storage – Decentralized FIR storage with unique content hashes

📞 Emergency Support – Contact police/lawyers instantly

🚀 Tech Stack
Frontend

Framework: React 19 with Next.js 15

Styling: Tailwind CSS, ShadCN UI, Framer Motion

Auth: Clerk Authentication

Forms & Validation: React Hook Form, Zod

Backend

Runtime: Node.js

AI Models: ANN-based prediction for legal sections

AI Services: OpenRouter, Gemini API

PDF Generation: jsPDF

Storage: IPFS (via local node and Pinata API)

Blockchain

Network: Mantle Sepolia Testnet

Chain ID: 5003

Smart Contract: FIRSystem

Contract Address: 0x3033C34AA1b345EAc587E930c777A05683636B1f

Explorer: https://sepolia.mantlescan.xyz/address/0x3033C34AA1b345EAc587E930c777A05683636B1f

Wallet Integration: MetaMask

📜 Smart Contract Details

The FIRSystem contract is deployed on Mantle Sepolia Testnet at:

👉 Contract Address: 0x3033C34AA1b345EAc587E930c777A05683636B1f
👉 Explorer: https://sepolia.mantlescan.xyz/address/0x3033C34AA1b345EAc587E930c777A05683636B1f

Functions:

registerFIR(cid) → Stores FIR's IPFS CID on the Mantle blockchain

getFIR(firId) → Fetch FIR details by ID

owner() → Returns the contract owner address

This ensures immutability, transparency, and controlled updates of FIRs on the Mantle Sepolia blockchain.

📁 Project Structure
legaltrack4/
├── backend/                # Node.js backend logic
│   └── index.js           # Backend server entry point
├── app/                   # Next.js pages and routes
│   ├── file-fir/         # FIR filing page
│   ├── view-firs/        # View FIRs page
│   ├── predict/          # IPC prediction
│   └── ...
├── components/            # UI Components
├── lib/                  # Utilities and configs
│   └── contractConfig.ts # Mantle blockchain configuration
├── public/               # Static files
├── styles/               # Global styles
└── .env.local           # Environment variables

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/KartikBansal4976/Mantle_Legaltrack.git
cd Mantle_Legaltrack

2. Install Dependencies
npm install

3. Environment Variables

Create a .env.local file:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

OPENROUTER_API_KEY=your_openrouter_api_key
GEMINI_API_KEY=your_gemini_api_key
JWT=your_jwt_token

PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret_key

API_KEY=your_api_key
API_SECRET=your_api_secret

4. Run Frontend
npm run dev

5. Run Backend
cd backend
node index.js

🔗 FIR Filing Process

User Information Collection

Review & PDF Generation (jsPDF + integrity hash)

IPFS Storage (returns CID)

Blockchain Registration (CID stored on Mantle)

Status Tracking & Receipt Download

🧠 Features Overview

✅ AI Legal FIR Assistance

🗣️ Voice-to-Text FIR Filing

📋 Legal AI Chatbot

📞 Emergency Support

🧾 FIR PDF Generator

🌐 Animated, Responsive UI

🔗 Mantle + IPFS Integration

🔐 MetaMask Wallet Support

📊 IPC Section Prediction

🎬 Demo & Resources

🎥 Demo Video
https://1drv.ms/v/c/e44270becb740185/EaMsDn5zQ5xCuJVl09vXctEB2A4uGFZPMq6jWKbeDKjuyA?e=UPTs0c

🖼 Screenshots
https://1drv.ms/f/c/e44270becb740185/EqJyOk90KhRGg6zZg9Epc8IB_VGRO6VcY-z-c96NNxzBpQ?e=G3QxOO

📊 Presentation
https://gamma.app/docs/LEGALTRACK-Revolutionizing-FIR-Filing-evufj3uu6z7ge3l

🌐 Live Deployment

Frontend: https://legaltrackhost-12ep.vercel.app/

Network: Mantle Sepolia Testnet

Contract: 0x3033C34AA1b345EAc587E930c777A05683636B1f
