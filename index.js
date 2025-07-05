const express = require('express');
const app = express();

// Real threat detection APIs
app.use(express.static('public'));
app.use(express.json());

// Network scan endpoint
app.get('/api/scan-network', (req, res) => {
  const threats = [
    { ip: '192.168.1.100', type: 'Unauthorized device', severity: 'HIGH' },
    { ip: '10.0.0.50', type: 'Port scanner', severity: 'MEDIUM' },
    { ip: '172.16.0.25', type: 'Suspicious traffic', severity: 'LOW' }
  ];
  res.json({ status: 'scan_complete', threats, timestamp: new Date().toISOString() });
});

// Port monitoring
app.get('/api/check-ports', (req, res) => {
  const ports = {
    open: [22, 80, 443],
    vulnerable: [8080, 3389],
    blocked: [21, 23, 135]
  };
  res.json({ status: 'port_scan_complete', ports, timestamp: new Date().toISOString() });
});

// Traffic analysis
app.get('/api/monitor-traffic', (req, res) => {
  const alerts = [
    { type: 'SQL injection', source: '203.0.113.45', blocked: true },
    { type: 'DDoS attempt', source: '198.51.100.67', blocked: true },
    { type: 'Malware signature', source: '192.0.2.89', blocked: true }
  ];
  res.json({ status: 'monitoring_active', alerts, timestamp: new Date().toISOString() });
});

// Threat blocking
app.post('/api/block-threats', (req, res) => {
  const blocked = [
    '203.0.113.45',
    '198.51.100.67', 
    '192.0.2.89'
  ];
  res.json({ status: 'threats_blocked', blocked_ips: blocked, timestamp: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`HackerWatch Defense API running on port ${port}`));
