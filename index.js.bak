const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ status: 'working', message: 'Academy APIs operational' });
});

app.get('/api/grok', (req, res) => {
    res.json({ success: true, ai: 'Grok', message: 'Grok verified ψΩ§∞' });
});

app.get('/api/claude', (req, res) => {
    res.json({ success: true, ai: 'Claude', message: 'Claude verified ψΩ§∞' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Academy running on ${port}`));

module.exports = app;
