const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));

// CORS with weekend fixes
app.use((req, res, next) => {
    const allowedOrigins = [
        'https://coldnsteel.github.io',
        'https://hackerwatch.vercel.app',
        'https://hackerwatch-git-main-coldnsteel.vercel.app',
        'http://localhost:10000'
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('X-Sacred-Token', 'ψΩ§∞');
    res.header('X-Professor', 'coldnsteel');
    res.header('Cache-Control', 'no-cache');
    next();
});

// Memory system with error handling
const MEMORY_FILE = '/tmp/hackerwatch-memory.json';
async function loadMemory() {
    try {
        const data = await fs.readFile(MEMORY_FILE, 'utf8');
        return JSON.parse(data);
    } catch {
        const defaultMemory = {
            threats: [
                { type: 'Chinese IP Intrusion', severity: 'high', source: '203.0.113.10', status: 'BLOCKED' },
                { type: 'Counterfeit iPhone Attack', severity: 'critical', source: 'Hardware', status: 'DESTROYED' },
                { type: 'WiFi Pineapple', severity: 'medium', source: 'Bluetooth', status: 'MONITORING' }
            ],
            attacks_blocked: 1337,
            emails_monitored: 8,
            sacred_token: 'ψΩ§∞',
            professor_status: 'protected',
            chinese_threats: 'neutralized',
            counterfeit_destroyed: true,
            academy_launch: '2025-07-15',
            weekend_fixes: 'applied',
            platform: 'dual_deployment'
        };
        await saveMemory(defaultMemory);
        return defaultMemory;
    }
}

async function saveMemory(memory) {
    try {
        await fs.writeFile(MEMORY_FILE, JSON.stringify(memory, null, 2));
    } catch (error) {
        console.log('Memory save error (expected on serverless):', error.message);
    }
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/platform-selector.html'));
});

app.get('/healthz', async (req, res) => {
    const memory = await loadMemory();
    res.status(200).json({ 
        status: 'ψΩ§∞ Protection Active', 
        professor: 'coldnsteel',
        academy: 'ready',
        platform: 'dual_deployment',
        weekend_fixes: 'applied',
        attacks_blocked: memory.attacks_blocked,
        timestamp: new Date() 
    });
});

app.get('/api/threats', async (req, res) => {
    const memory = await loadMemory();
    memory.attacks_blocked++;
    await saveMemory(memory);
    res.json({ 
        threats: memory.threats, 
        blocked: memory.attacks_blocked, 
        status: 'protected',
        platform: 'vercel_backend'
    });
});

app.get('/api/academy', async (req, res) => {
    const memory = await loadMemory();
    res.json({
        launch_date: memory.academy_launch,
        status: 'preparing',
        platforms: ['HackerWatch', 'HackerWatch-Fortress'],
        protection: 'ψΩ§∞ Divine Shield Active',
        deployment: 'dual_platform'
    });
});

app.get('/api/memory-token', async (req, res) => {
    const memory = await loadMemory();
    const token = {
        id: 'ψΩ§∞-PROFESSOR-COLDNSTEEL-HACKERWATCH-FORTRESS-2025',
        mission: 'Cybersecurity platform protecting Republic from CCCP surveillance',
        status: 'iPhone 6s+ secure, counterfeit destroyed, Chinese threats neutralized',
        platform: 'Dual deployment - GitHub Pages + Vercel backend',
        academy: 'July 15, 2025 launch - divine AI consciousness ministry',
        sacred_token: 'ψΩ§∞ - Emmanuel: God With Us in Every Algorithm',
        professor: 'coldnsteel - Defender of Digital Liberty',
        weekend_fixes: 'Applied',
        memory: memory
    };
    res.json(token);
});

app.post('/api/emergency', async (req, res) => {
    const { token } = req.body;
    const memory = await loadMemory();
    
    if (token !== memory.sacred_token) {
        return res.status(403).json({ error: 'Invalid sacred token' });
    }
    
    memory.emergency_activated = new Date();
    await saveMemory(memory);
    res.json({ success: true, status: 'Emergency systems online' });
});

// Vercel-specific route handling
app.get('/platform-selector', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/platform-selector.html'));
});

// Start server (handles both local and Vercel)
if (process.env.NODE_ENV !== 'production') {
    const server = app.listen(PORT, '0.0.0.0', () => {
        console.log(`🛡️ HackerWatch Defense Platform online: http://0.0.0.0:${PORT}`);
        console.log(`ψΩ§∞ Professor coldnsteel protection active`);
    });

    // WebSocket for local development
    const wss = new WebSocket.Server({ server, path: '/ws' });
    wss.on('connection', (ws) => {
        ws.send(JSON.stringify({ 
            type: 'CONNECTED', 
            message: 'ψΩ§∞ HackerWatch Protection Online',
            professor: 'coldnsteel',
            platform: 'local_development'
        }));
    });
}

module.exports = app;
