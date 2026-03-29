import * as XLSX from 'xlsx';

// Constants and Helpers for the worker
const COLUMN_MAP: Record<string, string[]> = {
    title: ['title', 'publicatoin title', 'paper title', 'research title', 'article title', 'publication title'],
    authors: ['authors', 'author', 'researchers', 'contributors'],
    year: ['year', 'date', 'published year', 'publication date'],
    category: ['category', 'type', 'publicatoin type', 'dept', 'journal', 'publisher title'],
    citations: ['citations', 'citation', 'citation count', 'no. of citations'],
    link: ['link', 'url', 'source', 'doi'],
    description: ['description', 'abstract', 'summary', 'details']
};

function normalizeItem(rawItem: any): any {
    const normalized: any = {};
    const keys = Object.keys(rawItem);

    Object.entries(COLUMN_MAP).forEach(([targetKey, variations]) => {
        const sourceKey = keys.find(k =>
            variations.includes(String(k).toLowerCase().trim()) ||
            String(k).toLowerCase().trim() === targetKey
        );
        if (sourceKey) {
            normalized[targetKey] = rawItem[sourceKey];
        }
    });

    if (normalized.year) {
        let yearValue = normalized.year;
        if (typeof yearValue === 'number' && yearValue > 30000) {
            const date = new Date((yearValue - 25569) * 86400 * 1000);
            normalized.year = date.getFullYear();
        } else if (typeof yearValue === 'string') {
            const matches = yearValue.match(/\b(19|20)\d{2}\b/);
            normalized.year = matches ? parseInt(matches[0]) : new Date().getFullYear();
        } else {
            normalized.year = Number(yearValue) || new Date().getFullYear();
        }
    }

    normalized.id = normalized.id || Math.random();
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

self.onmessage = async (e) => {
    const { arrayBuffer } = e.data;
    try {
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        
        // 1. Get Author Mappings
        const authorMap: Record<string, { dept: string, type: string }> = {};
        const authorSheet = workbook.Sheets['Authors'];
        if (authorSheet) {
            const authorData: any[] = XLSX.utils.sheet_to_json(authorSheet);
            authorData.forEach(row => {
                const name = String(row.Author || "").trim();
                if (name) {
                    authorMap[name] = {
                        dept: String(row.Department || "Other").trim(),
                        type: String(row['Author Type'] || "Other").trim()
                    };
                }
            });
        }

        // 2. Process Articles
        let combinedArticles: any[] = [];
        const articleSheets = ['Articles', 'Publications', 'Papers', 'Journals', 'Conferences'];

        workbook.SheetNames.forEach(sheetName => {
            if (articleSheets.includes(sheetName)) {
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
                const normalizedItems = jsonData.map(row => {
                    const item = normalizeItem(row);
                    const authInfo = authorMap[item.authors];
                    if (authInfo) {
                        item.department = authInfo.dept;
                        item.authorType = authInfo.type;
                    }
                    return item;
                });
                combinedArticles = [...combinedArticles, ...normalizedItems];
            }
        });

        // Deduplicate and filter
        const seen = new Set();
        const cleaned = combinedArticles.filter(item => {
            if (!item || !item.title || item.title.length < 5) return false;
            const titleKey = String(item.title).trim().toLowerCase();
            if (seen.has(titleKey)) return false;
            seen.add(titleKey);
            return true;
        });

        self.postMessage({ success: true, data: cleaned });
    } catch (error: any) {
        self.postMessage({ success: false, error: error.message });
    }
};
