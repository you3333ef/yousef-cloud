#!/bin/bash

# Syrian Development Platform Setup Script
# This script sets up the development environment

set -e

echo "🦅 Setting up Syrian Development Platform..."

# Check Node.js version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment files
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env file and add your API keys"
else
    echo "✅ .env file already exists"
fi

# Type check
echo "🔍 Running TypeScript type check..."
npm run type-check

# Lint check
echo "🧹 Running linter..."
npm run lint

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the development server:"
echo "   npm run dev"
echo ""
echo "🌐 To build for production:"
echo "   npm run build"
echo ""
echo "🔍 To preview production build:"
echo "   npm run preview"
echo ""
echo "📚 Documentation:"
echo "   - README.md"
echo "   - DESIGN_SYSTEM.md"
echo "   - GETTING_STARTED.md"
echo ""
echo "❤️ Built with ❤️ for Syria"
