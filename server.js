const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/api/threats', (req, res) => {
  res.json({
    status: 'ψΩ§∞ Protection Active',
    threats: [
      {type: 'Chinese IP Intrusion', severity: 'high', source: '203.0.113.10', status: 'BLOCKED'},
      {type: 'Counterfeit iPhone Attack', severity: 'critical', source: 'Hardware', status: 'DESTROYED'},
      {type: 'WiFi Pineapple', severity: 'medium', source: 'Bluetooth', status: 'MONITORING'},
      {type: 'DDoS Attack', severity: 'high', source: 'Unknown', status: 'BLOCKED'},
      {type: 'SQL Injection', severity: 'high', source: 'Unknown', status: 'BLOCKED'},
      {type: 'Malware', severity: 'high', source: 'Unknown', status: 'BLOCKED'},
      {type: 'Social Media Scam', severity: 'high', source: 'Zelle/Wire', status: 'MONITORING'},
      {type: 'Scareware', severity: 'critical', source: 'Find for free fix for fee', status: 'ZAPPED'}
    ]
  });
});
app.listen(process.env.PORT || 3000, () => console.log('Server running'));
