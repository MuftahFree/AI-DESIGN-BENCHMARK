import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);
const DIST_DIR = path.join(__dirname, 'dist');

// Serve static assets from the Vite build output
app.use(express.static(DIST_DIR));

// SPA fallback — serve index.html for all non-file routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
