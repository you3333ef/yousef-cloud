/**
 * Clean script for Syrian Development Platform
 * Removes build artifacts and cache directories
 */

const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning build artifacts and cache...');

const dirsToClean = [
  'build',
  'dist',
  '.cache',
  'node_modules/.cache',
  'app/temp'
];

const filesToClean = [
  '.eslintcache',
  'tsconfig.tsbuildinfo'
];

// Remove directories
dirsToClean.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✅ Removed directory: ${dir}`);
  }
});

// Remove files
filesToClean.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(`✅ Removed file: ${file}`);
  }
});

console.log('');
console.log('✅ Clean complete!');
