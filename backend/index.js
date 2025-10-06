require('dotenv').config();
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const cors = require('cors'); // Import cors

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS for both development and production
app.use(cors({
    origin: function (origin, callback) {
        // Allow no-origin (mobile apps, curl) and localhost/dev, and specific prod origins
        const allowed = [
            undefined,
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'https://legaltrackhost-12ep.vercel.app'
        ];
        if (!origin || allowed.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // fallback: allow all to avoid dev CORS issues
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health check
app.get('/health', (_, res) => res.json({ ok: true }));

// Setup Multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads'; // Define the upload path
        if (!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const safeFileName = file.originalname.replace(/[^a-z0-9.]/gi, '_');
        cb(null, Date.now() + '-' + safeFileName);
    }
});

const upload = multer({ storage: storage });

async function uploadToIPFS(filePath) {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
    const data = new FormData();
    data.append('file', fs.createReadStream(filePath));

    const pinataApiKey = process.env.PINATA_API_KEY;
    const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

    const res = await axios.post(url, data, {
        maxContentLength: 'Infinity', 
        headers: {
            ...data.getHeaders(), 
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey
        }
    });

    fs.unlinkSync(filePath);
    return res.data.IpfsHash;
}

app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const filePath = req.file.path;
        const ipfsHash = await uploadToIPFS(filePath);
        res.send({ ipfsHash });
    } catch (error) {
        console.error('Failed to upload to IPFS:', error);
        if (req.file && req.file.path) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error('Failed to cleanup file:', req.file.path);
            });
        }
        res.status(500).send('Server error during IPFS upload');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
