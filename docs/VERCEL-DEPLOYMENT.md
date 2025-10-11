# Deploying to Vercel with Storybook

This guide explains how to deploy both your Next.js app and Storybook to Vercel in a single deployment.

## 🎯 Overview

Your Vercel deployment will serve:

- **Main App**: `https://your-app.vercel.app/`
- **Storybook**: `https://your-app.vercel.app/storybook`

## 🔧 How It Works

1. **Build Process**: Storybook is built as static files and copied to `public/storybook/`
2. **Next.js Rewrites**: Next.js serves the static Storybook files from the public directory
3. **Single Deployment**: Everything deploys together to Vercel

## 📝 Configuration Files

### package.json

```json
{
  "scripts": {
    "build": "npm run build-storybook && npm run copy-storybook && next build",
    "build-storybook": "storybook build -o storybook-static",
    "copy-storybook": "mkdir -p public/storybook && cp -r storybook-static/* public/storybook/"
  }
}
```

### next.config.js

```javascript
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
      {
        source: '/storybook/:path*',
        destination: '/storybook/:path*',
      },
    ];
  },
};
```

### .storybook/main.ts

```typescript
const config: StorybookConfig = {
  // staticDirs: ['../public'], // Commented out to avoid circular copy
  // ... rest of config
};
```

### .storybook/manager-head.html

```html
<base href="/storybook/" />
```

> **Critical**: This tells Storybook to load its assets from `/storybook/` instead of the root path.

### vercel.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

> **Important**: This file ensures Vercel uses our custom build script that builds Storybook first, then Next.js.

## 🚀 Deployment Steps

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Configure Storybook for Vercel deployment"
   git push origin main
   ```

2. **Import in Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Access Your Deployment**
   - Main app: `https://your-app.vercel.app/`
   - Storybook: `https://your-app.vercel.app/storybook`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## ✅ Verification

After deployment:

1. **Check Main App**: Visit your Vercel URL
2. **Check Storybook**: Visit `your-url/storybook`
3. **Test Stories**: Click through different stories in Storybook
4. **Test Controls**: Verify interactive controls work

## 🔍 Local Testing

Test the production build locally before deploying:

```bash
# Build everything (including Storybook)
npm run build

# Start production server
npm run start

# Visit:
# - http://localhost:3000/ (main app)
# - http://localhost:3000/storybook (Storybook)
```

## 📁 What Gets Deployed

```
.next/                    # Next.js build output
public/
  └── storybook/          # Static Storybook build
      ├── index.html
      ├── iframe.html
      ├── *.bundle.js
      └── ... (all Storybook assets)
```

## 🎨 Build Statistics

**Main App**: ~102 KB First Load JS
**Storybook**: ~3.2 MB total assets (includes all stories, addons, and framework code)

## ⚙️ Environment Variables

No environment variables are required for this setup. Both the app and Storybook work out of the box.

## 🐛 Troubleshooting

### Blank Page or 404 Errors for Assets

**Issue**: Storybook loads but shows blank page, or console shows 404 errors for `/sb-addons/...`, `/sb-manager/...` files

**Cause**: Storybook assets are being requested from root (`/sb-addons/`) instead of `/storybook/sb-addons/`

**Solution**: Create `.storybook/manager-head.html` with base href:

```html
<base href="/storybook/" />
```

This tells Storybook's HTML to load all assets relative to `/storybook/` instead of root.

### Build Not Running on Vercel

**Issue**: Vercel builds Next.js but Storybook files are missing
**Cause**: Vercel's Next.js auto-detection may skip the Storybook build step
**Solution**: Add `vercel.json` to explicitly set the build command

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

After adding these files:

```bash
git add vercel.json .storybook/manager-head.html
git commit -m "Fix Vercel Storybook deployment"
git push origin main
```

Vercel will rebuild with the correct configuration.

### Storybook Returns 404

**Issue**: `/storybook` returns 404 error
**Solution**: Ensure the build script ran successfully and `public/storybook/` exists

```bash
# Check if Storybook was built
ls -la public/storybook/

# Rebuild if needed
npm run build-storybook
npm run copy-storybook
```

### Storybook Styles Missing

**Issue**: Storybook loads but styles are broken
**Solution**: Check that all assets were copied correctly

```bash
# Verify all files copied
ls -la public/storybook/ | wc -l
# Should show ~25-30 files
```

### Build Fails on Vercel

**Issue**: Vercel build fails with "cp: cannot copy"
**Solution**: Check that `.storybook/main.ts` has `staticDirs` commented out

### Development vs Production

**Development** (`npm run dev`):

- Next.js: `http://localhost:3000`
- Storybook: `npm run storybook` → `http://localhost:6006` (separate)

**Production** (`npm run build && npm start`):

- Next.js: `http://localhost:3000`
- Storybook: `http://localhost:3000/storybook` (integrated)

## 🔄 Updating Storybook

When you update stories or Storybook config:

1. Changes reflect immediately in dev mode (`npm run storybook`)
2. For production, rebuild:
   ```bash
   npm run build
   ```
3. Vercel will automatically rebuild on git push

## 📚 Alternative Approaches

### Separate Deployments

If you prefer separate deployments:

1. **Main App**: Deploy as-is to Vercel
2. **Storybook**: Use [Chromatic](https://www.chromatic.com/) or deploy to a separate Vercel project

```bash
# Build and deploy Storybook separately
npm run build-storybook
vercel --cwd storybook-static
```

### Subdomain

For a cleaner URL structure, use Vercel domains:

- Main: `app.yourdomain.com`
- Storybook: `storybook.yourdomain.com`

Configure in Vercel dashboard under "Domains".

## 🎉 Benefits of This Setup

✅ **Single Deployment**: One command deploys everything
✅ **Same Domain**: No CORS issues, simpler setup
✅ **Cost Effective**: One Vercel project instead of two
✅ **Easy Access**: Share a single URL with `/storybook` path
✅ **Automatic Rebuilds**: Vercel rebuilds both on every push

---

**Status**: ✅ Production Ready
**Build Time**: ~6 seconds (Storybook) + ~2 seconds (Next.js)
**Deployment**: Automatic on git push
