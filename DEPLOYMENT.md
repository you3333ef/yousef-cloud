# 🚀 SyrianDev Platform - Automatic Deployment to Cloudflare Pages

## 📋 Prerequisites

Before setting up automatic deployment, ensure you have:

1. **Cloudflare Account** - Sign up at https://cloudflare.com
2. **GitHub Repository** - Code pushed to GitHub (✅ Already done)
3. **Cloudflare API Token** - With Pages write permissions
4. **Cloudflare Account ID** - Found in Cloudflare dashboard

---

## 🔧 Setup Instructions

### Step 1: Get Cloudflare Credentials

#### 1.1 Get Account ID
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account (or create one)
3. Copy the **Account ID** from the right sidebar
4. Save it for later

#### 1.2 Create API Token
1. Go to [My Profile > API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **"Create Token"**
3. Choose **"Custom token"**
4. Set permissions:
   - **Account** - Cloudflare Pages:Edit
   - **Account** - Account Settings:Read
5. Click **"Continue to summary"**
6. Click **"Create Token"**
7. **IMPORTANT**: Copy the token immediately (you won't see it again!)

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository: https://github.com/you3333ef/yousef-cloud
2. Navigate to **Settings > Secrets and variables > Actions**
3. Click **"New repository secret"**
4. Add the following secrets:

#### Required Secrets:
```
Name: CLOUDFLARE_API_TOKEN
Value: [Your API Token from Step 1.2]

Name: CLOUDFLARE_ACCOUNT_ID
Value: [Your Account ID from Step 1.1]
```

**Note**: `GITHUB_TOKEN` is automatically provided by GitHub Actions

### Step 3: Create Cloudflare Pages Project

#### Option A: Manual Setup (Recommended)
1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click **"Create a project"**
3. Connect to Git
4. Select your repository: `you3333ef/yousef-cloud`
5. Configure project:
   - **Project name**: `syrian-dev-platform`
   - **Production branch**: `main`
   - **Framework preset**: None
6. Build settings:
   - **Build command**: `pnpm run build`
   - **Build output directory**: `build/client`
   - **Node version**: `20`
7. Click **"Save and Deploy"**

#### Option B: Automatic (via wrangler)
```bash
# Login to Cloudflare
npx wrangler login

# Create Pages project
npx wrangler pages project create syrian-dev-platform
```

### Step 4: Automatic Deployment

Once configured, deployment is **automatic**:

✅ **Every push to `main` branch** triggers deployment
✅ **Manual deployment** via GitHub Actions (workflow_dispatch)
✅ **Preview deployments** for pull requests

---

## 📊 Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. ✅ Checkout code from GitHub
2. ✅ Setup Node.js 20
3. ✅ Setup pnpm package manager
4. ✅ Install dependencies from `pnpm-lock.yaml`
5. ✅ Build the project (`pnpm run build`)
6. ✅ Deploy to Cloudflare Pages

---

## 🌐 Access Your Site

After deployment, your site will be available at:
- **Production**: `https://syrian-dev-platform.pages.dev`
- **Custom Domain**: Configure in Cloudflare Dashboard > Pages > Custom Domains

---

## 🔄 Manual Deployment

To deploy manually:

### Using GitHub Actions:
1. Go to repository **Actions** tab
2. Select **"Deploy to Cloudflare Pages"**
3. Click **"Run workflow"**
4. Choose branch: `main`
5. Click **"Run workflow"**

### Using CLI:
```bash
# Build locally
pnpm run build

# Deploy to Cloudflare
npx wrangler pages deploy build/client --project-name=syrian-dev-platform
```

---

## 🐛 Troubleshooting

### Build Fails
- Check **Actions** tab in GitHub for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (>= 18.18.0)

### Deployment Fails
- Verify `CLOUDFLARE_API_TOKEN` has correct permissions
- Ensure `CLOUDFLARE_ACCOUNT_ID` is correct
- Check Cloudflare Pages project name matches configuration

### Site Not Loading
- Wait 2-3 minutes for deployment to propagate
- Check build output directory: `build/client`
- Verify routes are correctly configured

---

## 📝 Configuration Files

### `wrangler.toml`
Cloudflare Pages configuration
```toml
name = "syrian-dev-platform"
compatibility_date = "2025-01-01"
pages_build_output_dir = "./build/client"
```

### `pages.json`
Build configuration
```json
{
  "build_command": "pnpm run build",
  "output_directory": "build/client",
  "install_command": "pnpm install --frozen-lockfile"
}
```

### `.github/workflows/deploy.yml`
GitHub Actions workflow for automatic deployment

---

## 🎯 Next Steps

After deployment is working:

1. **Custom Domain**: Add your own domain in Cloudflare Pages
2. **Environment Variables**: Add production env vars in Pages settings
3. **Analytics**: Enable Cloudflare Analytics
4. **Preview Control**: Configure preview deployments for branches

---

## 📚 Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

**Deployment Status**: Ready! 🔥
