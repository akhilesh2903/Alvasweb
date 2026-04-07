import fs from "fs";
import path from "path";
import * as XLSXNS from "xlsx";

const XLSX = XLSXNS.default ?? XLSXNS;

const ROOT = process.cwd();
const INPUT_XLSX = path.join(
  ROOT,
  "public",
  "data",
  "Database_Publications.xlsx",
);
const OUTPUT_JSON = path.join(ROOT, "public", "data", "research.json");

const COLUMN_MAP = {
  title: [
    "title",
    "publicatoin title",
    "paper title",
    "research title",
    "article title",
    "publication title",
  ],
  authors: ["authors", "author", "researchers", "contributors"],
  year: ["year", "date", "published year", "publication date"],
  category: [
    "category",
    "type",
    "publicatoin type",
    "dept",
    "journal",
    "publisher title",
  ],
  citations: ["citations", "citation", "citation count", "no. of citations"],
  link: ["link", "url", "source", "doi"],
  description: ["description", "abstract", "summary", "details"],
};

function normalizeItem(rawItem) {
  const normalized = {};
  const keys = Object.keys(rawItem);

  for (const [targetKey, variations] of Object.entries(COLUMN_MAP)) {
    const sourceKey = keys.find((k) => {
      const kk = String(k).toLowerCase().trim();
      return variations.includes(kk) || kk === targetKey;
    });

    if (sourceKey) normalized[targetKey] = rawItem[sourceKey];
  }

  if (normalized.year) {
    const yearValue = normalized.year;
    if (typeof yearValue === "number" && yearValue > 30000) {
      const date = new Date((yearValue - 25569) * 86400 * 1000);
      normalized.year = date.getFullYear();
    } else if (typeof yearValue === "string") {
      const matches = yearValue.match(/\b(19|20)\d{2}\b/);
      normalized.year = matches
        ? parseInt(matches[0], 10)
        : new Date().getFullYear();
    } else {
      normalized.year = Number(yearValue) || new Date().getFullYear();
    }
  }

  normalized.title = String(normalized.title || "").trim();
  normalized.authors = String(normalized.authors || "").trim();
  normalized.category = String(normalized.category || "Research").trim();
  normalized.description = String(normalized.description || "").trim();
  normalized.citations = Number(normalized.citations) || 0;
  normalized.link = String(normalized.link || "").trim();

  normalized.department = "Other";
  normalized.authorType = "Other";

  return normalized;
}

function main() {
  if (!fs.existsSync(INPUT_XLSX)) {
    console.error(`Input not found: ${INPUT_XLSX}`);
    process.exitCode = 1;
    return;
  }

  const workbook = XLSX.readFile(INPUT_XLSX);

  // 1) Author mappings (optional)
  const authorMap = {};
  const authorSheet = workbook.Sheets["Authors"];
  if (authorSheet) {
    const authorData = XLSX.utils.sheet_to_json(authorSheet);
    for (const row of authorData) {
      const name = String(row.Author || "").trim();
      if (!name) continue;
      authorMap[name] = {
        dept: String(row.Department || "Other").trim(),
        type: String(row["Author Type"] || "Other").trim(),
      };
    }
  }

  // 2) Combine publications from known sheet names
  const articleSheets = new Set([
    "Articles",
    "Publications",
    "Papers",
    "Journals",
    "Conferences",
  ]);

  let combined = [];
  for (const sheetName of workbook.SheetNames) {
    if (!articleSheets.has(sheetName)) continue;

    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

    for (const row of jsonData) {
      const item = normalizeItem(row);
      const authInfo = authorMap[item.authors];
      if (authInfo) {
        item.department = authInfo.dept;
        item.authorType = authInfo.type;
      }
      combined.push(item);
    }
  }

  // 3) Deduplicate
  const seen = new Set();
  combined = combined.filter((item) => {
    if (!item || !item.title || item.title.length < 5) return false;
    const key = item.title.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // 4) Stable IDs
  const output = combined.map((item, idx) => ({ id: idx + 1, ...item }));

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(output, null, 2), "utf-8");
  console.log(
    `Wrote ${output.length} records -> ${path.relative(ROOT, OUTPUT_JSON)}`,
  );
}

main();
