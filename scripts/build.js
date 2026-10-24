const fs = require('fs');
const path = require('path');

console.log('=======================================================');
console.log('  BMW M-Series 3D Simulator - Production Build');
console.log('=======================================================');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const filesToSync = ['index.html', 'index.css', 'index.js'];
filesToSync.forEach((file) => {
  const src = path.join(rootDir, file);
  const dest = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[SYNC] ${file} -> public/${file}`);
  }
});

console.log('[PASS] Output directory "public" populated with static assets.');
console.log('>>> BUILD COMPLETE: Ready for Vercel Deployment! <<<');
