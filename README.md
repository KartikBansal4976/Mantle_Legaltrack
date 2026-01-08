⚖️ LegalTrack4
WATCH LIVE(Frontend) https://legaltrackhost-12ep.vercel.app/

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

🧠 AI-driven Legal Prediction – Suggests relevant sections for FIRs using ANN models.
🗣️ Voice-to-Text FIR Filing – Helps victims file FIRs faster.
🔗 Blockchain Integration – Stores FIR CIDs on Mantle Sepolia blockchain (immutable, tamper-proof).
📂 IPFS Storage – Decentralized FIR storage with unique content hashes.
📞 Emergency Support – Contact police/lawyers instantly.
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
Create a .env.local file in the root directory:

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Services
OPENROUTER_API_KEY=your_openrouter_api_key
GEMINI_API_KEY=your_gemini_api_key
JWT=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# IPFS / Pinata
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret_key

# Backend Auth
API_KEY=your_api_key
API_SECRET=your_api_secret
JWT=your_jwt_token
4. Run the Frontend
npm run dev
The app will run at: http://localhost:3000

5. Run the Backend
Open a new terminal:

cd backend
node index.js
Backend runs at: http://localhost:3001

🔗 FIR Filing Process in LegalTrack4
1. User Information Collection
Collects personal details (name, contact, ID proof) and incident details (date, time, description, witnesses).

2. Review & PDF Generation
Users review before submitting
jsPDF generates a PDF with hash for data integrity
3. IPFS Storage
FIR uploaded to local IPFS node (http://localhost:3001/upload)
Returns a CID (unique identifier)
4. Blockchain Integration
Users connect MetaMask wallet to Mantle Sepolia
CID is registered on Mantle blockchain via FIRSystem contract
Creates an immutable FIR record on Mantle Sepolia
5. Status Tracking
Shows FIR ID, IPFS CID, hash, blockchain status
Users can download receipt as PDF
View transaction on Mantle Sepolia explorer
🔐 Blockchain Features
Mantle Sepolia Network Configuration
Network Name: Mantle Sepolia Testnet
Chain ID: 5003
RPC URL: https://rpc.sepolia.mantle.xyz
Currency Symbol: MNT
Block Explorer: https://sepolia.mantlescan.xyz
Smart Contract Functions
✅ View FIRs by ID - Retrieve FIR details from blockchain
✅ Register FIR - Store IPFS CID on-chain
✅ Owner Management - Contract ownership verification
🧠 Features Overview
✅ AI Legal FIR Assistance (ANN Model)
🗣️ Voice-to-Text FIR Filing
📋 Legal AI Chatbot
📞 Emergency Numbers Integration
🧾 PDF FIR Generation
🌐 Responsive, Animated UI
🔗 Mantle Blockchain + IPFS FIR Storage
🔐 MetaMask Wallet Integration
📊 IPC Section Prediction
🎬 Demo & Resources
Demo Video: https://1drv.ms/v/c/e44270becb740185/EaMsDn5zQ5xCuJVl09vXctEB2A4uGFZPMq6jWKbeDKjuyA?e=UPTs0c
Screenshots: https://1drv.ms/f/c/e44270becb740185/EqJyOk90KhRGg6zZg9Epc8IB_VGRO6VcY-z-c96NNxzBpQ?e=G3QxOO
Presentation: https://gamma.app/docs/LEGALTRACK-Revolutionizing-FIR-Filing-evufj3uu6z7ge3l
Contract Explorer: https://sepolia.mantlescan.xyz/address/0x3033C34AA1b345EAc587E930c777A05683636B1f
🌐 Live Deployment
Frontend: https://legaltrackhost-12ep.vercel.app/
Blockchain: Mantle Sepolia Testnet
Contract: 0x3033C34AA1b345EAc587E930c777A05683636B1f
👨‍💻 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Mantle Network - For providing the blockchain infrastructure
IPFS - For decentralized storage
OpenRouter & Gemini - For AI services
Clerk - For authentication
Vercel - For hosting
