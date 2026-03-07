const {
  validateScoreSubmission,
  proxyToUpstream
} = require('../../src/proxy-utils');

const API_BASE_URL = process.env.API_BASE_URL;

module.exports = async (req, res, subPath) => {
  if (!API_BASE_URL || !process.env.API_KEY) {
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const body =
    typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : req.body || {};

  if (req.method === 'POST' && subPath === 'add') {
    const err = validateScoreSubmission(body);
    if (err) return res.status(err.status).json(err.body);
  }

  // Preserve query string for upstream (e.g. ?page=1&orderBy=score...)
  const qs = (req.url || '').includes('?')
    ? req.url.substring(req.url.indexOf('?'))
    : '';
  const upstreamUrl = `${API_BASE_URL}/api/solitaire/${subPath}${qs}`;

  try {
    const response = await proxyToUpstream(upstreamUrl, req.method, body);
    const data = await response.text();
    if (!response.ok) {
      console.error(
        `Upstream error ${response.status} for ${upstreamUrl}:`,
        data
      );
    }
    res.status(response.status);
    const ct = response.headers.get('content-type');
    if (ct) res.setHeader('Content-Type', ct);
    res.send(data);
  } catch (err) {
    console.error('Proxy error:', err.message, '| URL:', upstreamUrl);
    res.status(502).json({ error: 'Proxy error', detail: err.message });
  }
};
