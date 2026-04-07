export interface ResearchItem {
  id: number;
  title: string;
  authors: string;
  year: number;
  category: string;
  citations: number;
  link: string;
  description: string;
  department: string;
  authorType: string;
}

const COLUMN_MAP: Record<string, string[]> = {
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

function normalizeItem(rawItem: any): ResearchItem {
  const normalized: any = {};
  const keys = Object.keys(rawItem);

  // Map fields based on variations
  Object.entries(COLUMN_MAP).forEach(([targetKey, variations]) => {
    const sourceKey = keys.find(
      (k) =>
        variations.includes(k.toLowerCase().trim()) ||
        k.toLowerCase().trim() === targetKey,
    );
    if (sourceKey) {
      normalized[targetKey] = rawItem[sourceKey];
    }
  });

  // Handle Year (Excel serial or string)
  if (normalized.year) {
    let yearValue = normalized.year;
    if (typeof yearValue === "number" && yearValue > 30000) {
      const date = new Date((yearValue - 25569) * 86400 * 1000);
      normalized.year = date.getFullYear();
    } else if (typeof yearValue === "string") {
      const matches = yearValue.match(/\b(19|20)\d{2}\b/);
      normalized.year = matches
        ? parseInt(matches[0])
        : new Date().getFullYear();
    } else {
      normalized.year = Number(yearValue) || new Date().getFullYear();
    }
  }

  // Default values and cleanup
  normalized.id = normalized.id || Math.random();
  normalized.title = String(normalized.title || "").trim();
  normalized.authors = String(normalized.authors || "").trim();
  normalized.category = String(normalized.category || "Research").trim();
  normalized.description = String(normalized.description || "").trim();
  normalized.citations = Number(normalized.citations) || 0;
  normalized.link = String(normalized.link || "").trim();
  normalized.department = "Other";
  normalized.authorType = "Other";

  return normalized as ResearchItem;
}

export async function fetchResearchData(): Promise<ResearchItem[]> {
  try {
    // Fast path: pre-generated JSON (avoids XLSX download + parsing)
    try {
      const jsonResponse = await fetch("/data/research.json", {
        cache: "force-cache",
      });
      if (jsonResponse.ok) {
        const json = (await jsonResponse.json()) as ResearchItem[];
        return Array.isArray(json) ? json : [];
      }
    } catch {
      // ignore and fall back to XLSX
    }

    const fileName = "Database_Publications.xlsx";
    const response = await fetch(`/data/${fileName}`);
    if (!response.ok) return [];

    const arrayBuffer = await response.arrayBuffer();

    // Use Web Worker for parsing to keep UI responsive
    return new Promise((resolve, reject) => {
      try {
        // Using a URL to point to the worker file for Next.js compatibility
        const worker = new Worker(
          new URL("./research.worker.ts", import.meta.url),
        );

        worker.onmessage = (e) => {
          const { success, data, error } = e.data;
          if (success) {
            resolve(data);
          } else {
            console.error("Worker parsing error:", error);
            resolve([]);
          }
          worker.terminate();
        };

        worker.onerror = (err) => {
          console.error("Worker system error:", err);
          worker.terminate();
          resolve([]); // Fallback
        };

        worker.postMessage({ arrayBuffer });
      } catch (err) {
        console.error("Failed to initialize worker:", err);
        resolve([]);
      }
    });
  } catch (error) {
    console.error("Critical error in fetchResearchData:", error);
    return [];
  }
}

export function parseExcelFile(file: File): Promise<ResearchItem[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = e.target?.result;
        const XLSX = await import("xlsx");
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet) as ResearchItem[];
        resolve(jsonData);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsBinaryString(file);
  });
}
