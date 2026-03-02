const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const API_TARGET = 'https://node-api-serverless.vercel.app';

// Parse JSON bodies for POST requests
app.use(express.json());

// Proxy all /api requests
app.use('/api', async (req, res) => {
  const url = `${API_TARGET}${req.originalUrl}`;
  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://js-solitaire-game.vercel.app',
      },
      ...(req.method === 'POST' ? { body: JSON.stringify(req.body) } : {}),
    });
    const data = await response.text();
    res.status(response.status);
    const ct = response.headers.get('content-type');
    if (ct) res.set('Content-Type', ct);
    res.send(data);
  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(502).json({ error: 'Proxy error' });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});
