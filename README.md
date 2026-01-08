# ⚖️ LegalTrack4  
### 🚀 AI + Blockchain Powered FIR Management Platform  

**🌐 Live Demo:**  
👉 https://legaltrackhost-12ep.vercel.app/

---

## 📖 About LegalTrack4

LegalTrack4 is an **AI + Blockchain powered legal tech platform** designed to modernize and simplify the legal process — from **FIR assistance to legal support services** — all in one place.

It combines **Artificial Intelligence, IPFS, and Blockchain** to make FIR filing **secure, tamper-proof, and transparent**. Built for **citizens, police departments, and legal professionals**, it ensures FIRs are immutable, traceable, and supported by AI-driven automation.

---

## 📌 Problem Statement

Traditional FIR and legal systems often suffer from:

❌ Delays and slow processing  
❌ Lack of transparency  
❌ Risk of tampering or data loss  
❌ Complex manual procedures  
❌ Poor FIR tracking mechanisms  

Victims commonly face:

- 📝 Complicated FIR filing  
- ⚖️ Lack of legal knowledge  
- 🔐 Data integrity issues  
- 📍 No real-time FIR status tracking  

---

## 💡 Our Solution

LegalTrack4 solves these challenges using **AI + Decentralization + Blockchain**:

- 🧠 **AI Legal Prediction** – Suggests relevant IPC sections using ANN models  
- 🗣️ **Voice-to-Text FIR Filing** – Faster, easier FIR creation  
- 🔗 **Blockchain Integration** – FIR CIDs stored on Mantle Sepolia (immutable)  
- 📂 **IPFS Storage** – Decentralized and verifiable FIR records  
- 📞 **Emergency Support** – One-click police & legal help  

---

## 🧩 System Architecture

User → Web App → AI Engine → PDF Generator → IPFS → Mantle Blockchain
↓
FIR Tracking UI

---

## 🚀 Tech Stack

### 🎨 Frontend
- React 19 + Next.js 15  
- Tailwind CSS, ShadCN UI, Framer Motion  
- Clerk Authentication  
- React Hook Form, Zod  

### ⚙️ Backend
- Node.js  
- ANN-based IPC Prediction  
- OpenRouter, Gemini API  
- jsPDF  
- IPFS + Pinata  

### 🔗 Blockchain
- Mantle Sepolia Testnet  
- Chain ID: 5003  
- Smart Contract: `FIRSystem`  
- Contract: `0x3033C34AA1b345EAc587E930c777A05683636B1f`  
- Explorer: https://sepolia.mantlescan.xyz/address/0x3033C34AA1b345EAc587E930c777A05683636B1f  
- Wallet: MetaMask  

---

## 📜 Smart Contract Details

**Network:** Mantle Sepolia Testnet  
**Contract:** `FIRSystem`

### 🔧 Functions
- `registerFIR(cid)` → Store FIR IPFS CID  
- `getFIR(firId)` → Retrieve FIR details  
- `owner()` → Contract owner  

✔️ Ensures **immutability, transparency, and trustless verification**.

---

## 📁 Project Structure

```bash
legaltrack4/
├── backend/
│   └── index.js
├── app/
│   ├── file-fir/
│   ├── view-firs/
│   ├── predict/
│   └── ...
├── components/
├── lib/
│   └── contractConfig.ts
├── public/
├── styles/
└── .env.local
⚙️ Installation & Setup

git clone https://github.com/KartikBansal4976/Mantle_Legaltrack.git
cd Mantle_Legaltrack
npm install
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

OPENROUTER_API_KEY=
GEMINI_API_KEY=
JWT=

PINATA_API_KEY=
PINATA_SECRET_API_KEY=

API_KEY=
API_SECRET=
npm run dev
cd backend
node index.js
🔗 FIR Filing Workflow

👤 User details & incident input

📄 FIR PDF + hash generation

📦 Upload to IPFS

🔗 CID stored on Mantle blockchain

📊 FIR tracking & receipt download

✨ Features

✅ AI FIR assistant

🗣️ Voice FIR filing

📋 Legal chatbot

📞 Emergency help

🧾 FIR PDF receipt

🔗 Blockchain verified storage

🔐 MetaMask integration

📊 IPC prediction system

🎬 Demo & Resources

🎥 Demo Video
https://1drv.ms/v/c/e44270becb740185/EaMsDn5zQ5xCuJVl09vXctEB2A4uGFZPMq6jWKbeDKjuyA

🖼 Screenshots
https://1drv.ms/f/c/e44270becb740185/EqJyOk90KhRGg6zZg9Epc8IB_VGRO6VcY-z-c96NNxzBpQ

📊 Presentation
https://gamma.app/docs/LEGALTRACK-Revolutionizing-FIR-Filing-evufj3uu6z7ge3l

🌐 Live Deployment

Frontend: https://legaltrackhost-12ep.vercel.app/

Network: Mantle Sepolia Testnet
Contract: 0x3033C34AA1b345EAc587E930c777A05683636B1f

