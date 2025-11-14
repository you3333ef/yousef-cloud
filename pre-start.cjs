/**
 * Pre-start script for Syrian Development Platform
 * This script runs before the dev server starts
 */

const fs = require('fs');
const path = require('path');

console.log('🦅 Syrian Development Platform - Pre-start checks...');

// Create necessary directories
const dirs = [
  'app/temp',
  'build/client',
  'public/build',
  '.cache'
];

dirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Check for .env file
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.log('⚠️  Warning: .env file not found. Copying from .env.example...');
  const exampleEnvPath = path.join(process.cwd(), '.env.example');
  if (fs.existsSync(exampleEnvPath)) {
    fs.copyFileSync(exampleEnvPath, envPath);
    console.log('✅ .env file created from .env.example');
    console.log('⚠️  Please edit .env file and add your API keys');
  }
}

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);

if (majorVersion < 18) {
  console.error('❌ Node.js version 18 or higher is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log(`✅ Node.js version: ${nodeVersion}`);

console.log('✅ Pre-start checks complete!');
console.log('');
