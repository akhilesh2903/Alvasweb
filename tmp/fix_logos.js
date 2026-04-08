const fs = require('fs');
const path = require('path');

const academicsDir = path.join(__dirname, '..', 'app', 'academics');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(academicsDir, (filePath) => {
  if (filePath.endsWith('Data.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('"/logos/')) {
      console.log(`Fixing: ${filePath}`);
      const newContent = content.replace(/"\/logos\//g, '"/');
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
  }
});
