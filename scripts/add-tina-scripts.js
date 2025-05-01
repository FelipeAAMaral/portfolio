
const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add TinaCMS related scripts
packageJson.scripts = {
  ...packageJson.scripts,
  "tina": "npx tinacms dev -c 'npm run dev'",
  "tina:build": "tinacms build && vite build"
};

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('TinaCMS scripts added to package.json');
