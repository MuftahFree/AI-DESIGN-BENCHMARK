import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);
const DIST_DIR = path.join(__dirname, 'dist');

// Trust first proxy (App Engine load balancer) so rate limiting uses real client IP
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Serve static assets from the Vite build output
app.use(express.static(DIST_DIR));

// SPA fallback — serve index.html only for HTML navigation routes
app.get('*', (req, res, next) => {
  const hasFileExtension = path.extname(req.path) !== '';
  const acceptsHtml = req.accepts('html');

  if (hasFileExtension || !acceptsHtml) {
    return next();
  }

  res.sendFile(path.join(DIST_DIR, 'index.html'), (err) => {
    if (!err) {
      return;
    }
    if (res.headersSent) {
      return;
    }

    const statusCode = err.statusCode || (err.code === 'ENOENT' ? 404 : 500);
    const message = statusCode === 404 ? 'Not Found' : 'Internal Server Error';

    res.status(statusCode).send(message);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
