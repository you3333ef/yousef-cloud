#!/bin/bash

# Deployment Script for Syrian Development Platform
# Supports: Vercel, Netlify, GitHub Pages

set -e

PLATFORM=$1
BRANCH=${2:-main}

if [ -z "$PLATFORM" ]; then
    echo "Usage: ./scripts/deploy.sh <platform> [branch]"
    echo "Platforms: vercel, netlify, github-pages"
    exit 1
fi

echo "🦅 Deploying to $PLATFORM..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy based on platform
case $PLATFORM in
    vercel)
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        echo "Deploying to Vercel..."
        vercel --prod
        ;;
    netlify)
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        echo "Deploying to Netlify..."
        netlify deploy --prod --dir=dist
        ;;
    github-pages)
        if [ ! -d "dist" ]; then
            echo "❌ dist directory not found. Run 'npm run build' first."
            exit 1
        fi
        echo "Deploying to GitHub Pages..."
        npx gh-pages -d dist -r https://github.com/you3333ef/yousef-cloud.git
        ;;
    *)
        echo "❌ Unknown platform: $PLATFORM"
        echo "Supported platforms: vercel, netlify, github-pages"
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your app is now live!"
echo ""
echo "❤️ Built with ❤️ for Syria"
