# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Quick Deployment Comparison

| Platform | Cost | Setup Time | Auto-Deploy | Comments |
|----------|------|-----------|------------|----------|
| **Netlify** | Free | 2 min | Yes | Recommended - easiest setup |
| **Vercel** | Free | 2 min | Yes | Excellent for React/Next.js |
| **GitHub Pages** | Free | 5 min | Manual | Good for portfolios |
| **Firebase Hosting** | Free | 10 min | CLI | Reliable Google-backed |
| **Traditional Host** | Varies | 15 min | Manual | cPanel, FTP hosting |

## Option 1: Deploy to Netlify (Recommended) ⭐

### Step 1: Prepare Your Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
```

### Step 2: Push to GitHub
```bash
# Create a new repository on GitHub (https://github.com/new)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

### Step 3: Connect to Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 4: Configure Custom Domain (Optional)
1. In Netlify dashboard, go to Domain management
2. Click "Add domain"
3. Follow DNS configuration steps

### Netlify Configuration File (netlify.toml)
Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

# Redirect all routes to index.html (for SPA)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Performance headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache headers for assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, immutable, max-age=31536000"

[[headers]]
  for = "/*.{css,js,woff,woff2}"
  [headers.values]
    Cache-Control = "public, immutable, max-age=31536000"

# HTML files: no cache
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

## Option 2: Deploy to Vercel

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
vercel
# Follow the prompts to select your project
```

### Step 3: Auto-Deploy (Optional)
Connect your GitHub repo:
1. Go to https://vercel.com/dashboard
2. Import your GitHub repository
3. Vercel auto-detects Vite settings
4. Click "Deploy"

### Vercel Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "NODE_VERSION": "18"
  }
}
```

## Option 3: Deploy to GitHub Pages

### Step 1: Update Vite Config
Edit `vite.config.js`:
```js
export default defineConfig({
  base: '/my-portfolio/', // Replace with your repo name
  plugins: [react()],
  // ... rest of config
})
```

### Step 2: Build and Deploy
```bash
npm run build
```

### Step 3: Configure GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, /root or /docs
4. Upload the `dist` folder contents

Or use GitHub Actions:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Option 4: Firebase Hosting

### Step 1: Create Firebase Project
```bash
npm i -g firebase-tools
firebase login
firebase init hosting
```

### Step 2: Configure firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Step 3: Deploy
```bash
npm run build
firebase deploy
```

## Option 5: Traditional Hosting (cPanel, etc.)

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Upload Files
1. Connect via FTP or File Manager
2. Upload contents of `dist/` folder to `public_html/` or `www/`
3. Ensure `.htaccess` redirects are set up

### .htaccess for SPA Routing
Create `.htaccess` in your public directory:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Post-Deployment Checklist

- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Check all links work correctly
- [ ] Verify contact form submission
- [ ] Test smooth scrolling
- [ ] Check social media links
- [ ] Verify images load correctly
- [ ] Test on different browsers
- [ ] Check page load speed (Google PageSpeed Insights)
- [ ] Verify SEO meta tags
- [ ] Set up Google Analytics
- [ ] Configure custom domain if needed
- [ ] Set up SSL/HTTPS (usually automatic)

## Performance Optimization

### Monitor Performance
- Netlify Analytics: https://netlify.com
- Vercel Analytics: https://vercel.com
- Google PageSpeed Insights: https://pagespeed.web.dev
- Google Lighthouse: Built into Chrome DevTools

### Optimize Images
```bash
# Before uploading images, compress them:
# Online: https://tinypng.com, https://imageoptim.com
# CLI: npm install -g imagemin-cli
```

### Enable Gzip Compression
Usually enabled by default on modern hosts.

### Use CDN
- Netlify and Vercel include CDN by default
- For traditional hosting: Cloudflare Free Plan

## Environment Variables (If Needed)

### For Form Submissions
Create `.env.local`:
```
VITE_FORM_ENDPOINT=https://your-api.com/contact
VITE_EMAIL=your-email@example.com
```

Access in code:
```js
const endpoint = import.meta.env.VITE_FORM_ENDPOINT
```

For Netlify/Vercel, set in dashboard settings instead.

## Troubleshooting Deployment

### 404 Errors on Routes
- Ensure `index.html` is served for all routes (SPA routing)
- Check `_redirects` (Netlify) or `vercel.json` (Vercel)

### Styles Not Loading
- Verify CSS file is being served with correct MIME type
- Check that paths are relative to `dist/`
- Clear browser cache (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### Images Not Loading
- Check image paths are correct
- Use relative paths: `/assets/image.jpg` not `./assets/image.jpg`
- Verify images are in `dist/` folder after build

### Slow Performance
- Check bundle size: `npm run build -- --analyze` (if supported)
- Enable compression in hosting settings
- Optimize images before deploading

### Contact Form Not Working
- Verify form endpoint is configured
- Check CORS settings if using external API
- Test form locally first with `npm run dev`

## Custom Domain Setup

### For Netlify
1. Buy domain (Google Domains, GoDaddy, etc.)
2. In Netlify: Domain settings → Add domain
3. Follow DNS configuration
4. Usually takes 24-48 hours

### For Vercel
1. Buy domain
2. In Vercel: Settings → Domains → Add
3. Update nameservers or add CNAME records
4. Automatic SSL certificate provisioning

## SSL Certificate

Both Netlify and Vercel provide free SSL certificates automatically.
For traditional hosting, many include free SSL or use Let's Encrypt.

## Next Steps After Deployment

1. **Share Your Portfolio**
   - Update LinkedIn
   - Share on Twitter/X
   - Add to GitHub profile
   - Share with recruiters

2. **Monitor Performance**
   - Set up Google Analytics
   - Check metrics regularly
   - Fix any reported errors

3. **Keep Content Fresh**
   - Update projects regularly
   - Add new blog posts
   - Share recent achievements

4. **SEO Improvements**
   - Submit to Google Search Console
   - Add robots.txt
   - Create sitemap
   - Monitor search rankings

---

For help with deployment, check:
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Create React App: https://create-react-app.dev/deployment
