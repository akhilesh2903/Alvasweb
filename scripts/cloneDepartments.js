/*
  cloneDepartments.js

  Copies the structure and content of the "ece" department into
  other department folders within `app/academics`.
  Each generated file contains lightweight replacements so that
  you can later update content locally per department without
  touching a central data store.

  Usage:
    node scripts/cloneDepartments.js

  - Existing folders are left untouched; delete them first if you
    want the template reapplied.
  - Unwanted departments can be removed by simply deleting the
    corresponding directory under `app/academics`.
*/

const fs = require("fs");
const path = require("path");

// Path to the academics folder inside the Next.js app
const academicsDir = path.join(__dirname, "..", "app", "academics");
// department whose page we use as the template
const templateDept = "ece";

// utility functions -------------------------------------------------------
function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function replaceDeptTokens(text, srcId, destId) {
  // lower case id
  text = text.replace(new RegExp(srcId, "g"), destId);
  // upper case id
  text = text.replace(
    new RegExp(srcId.toUpperCase(), "g"),
    destId.toUpperCase(),
  );
  // capitalized id (used in component names)
  text = text.replace(new RegExp(capitalize(srcId), "g"), capitalize(destId));

  // some hard‑coded strings that refer to ECE specifics
  text = text.replace(
    /Electronics & Communication/g,
    `Department of ${capitalize(destId)}`,
  );
  text = text.replace(
    /Electronics and Communication/g,
    `Department of ${capitalize(destId)}`,
  );
  text = text.replace(/ECE/g, destId.toUpperCase());
  text = text.replace(/eceData/g, `${destId}Data`);

  return text;
}

function copyFolderRecursiveSync(src, dest, srcId, destId) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    let destName = item.replace(new RegExp(srcId, "gi"), destId);
    const destPath = path.join(dest, destName);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderRecursiveSync(srcPath, destPath, srcId, destId);
    } else {
      copyFileWithReplacements(srcPath, destPath, srcId, destId);
    }
  });
}

function copyFileWithReplacements(srcFile, destFile, srcId, destId) {
  let content = fs.readFileSync(srcFile, "utf8");
  content = replaceDeptTokens(content, srcId, destId);
  fs.writeFileSync(destFile, content, "utf8");
}

// main logic --------------------------------------------------------------
const departments = fs.readdirSync(academicsDir).filter((name) => {
  const full = path.join(academicsDir, name);
  return fs.lstatSync(full).isDirectory();
});

const force = process.argv.includes("--force");

departments.forEach((dept) => {
  if (dept === templateDept) return;
  const targetPath = path.join(academicsDir, dept);
  if (fs.existsSync(targetPath)) {
    if (!force) {
      console.log(
        `⏭  Skipping existing department folder: ${dept} (use --force to overwrite)`,
      );
      return;
    }
    console.log(`🔁 Overwriting existing folder for department ${dept}`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
  console.log(`📁 Creating department folder from template: ${dept}`);
  const srcPath = path.join(academicsDir, templateDept);
  copyFolderRecursiveSync(srcPath, targetPath, templateDept, dept);
});

console.log("✅ Department scaffolding complete.");
console.log("You may want to open each new folder and adjust the dummy text.");
console.log(
  "To delete unwanted departments simply remove their corresponding folder.",
);
