import * as XLSX from 'xlsx';

export interface ResearchItem {
    id: number;
    title: string;
    authors: string;
    year: number;
    category: string;
    citations: number;
    link: string;
    description: string;
}

const COLUMN_MAP: Record<string, string[]> = {
    title: ['title', 'publicatoin title', 'paper title', 'research title', 'article title', 'publication title'],
    authors: ['authors', 'author', 'researchers', 'contributors'],
    year: ['year', 'date', 'published year', 'publication date'],
    category: ['category', 'type', 'publicatoin type', 'dept', 'journal', 'publisher title'],
    citations: ['citations', 'citation', 'citation count', 'no. of citations'],
    link: ['link', 'url', 'source', 'doi'],
    description: ['description', 'abstract', 'summary', 'details']
};

function normalizeItem(rawItem: any): ResearchItem {
    const normalized: any = {};
    const keys = Object.keys(rawItem);

    // Map fields based on variations
    Object.entries(COLUMN_MAP).forEach(([targetKey, variations]) => {
        const sourceKey = keys.find(k =>
            variations.includes(k.toLowerCase().trim()) ||
            k.toLowerCase().trim() === targetKey
        );
        if (sourceKey) {
            normalized[targetKey] = rawItem[sourceKey];
        }
    });

    // Handle Year (Excel serial or string)
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

    // Default values and cleanup
    normalized.id = normalized.id || Math.random();
    normalized.title = String(normalized.title || rawItem['Publicatoin Title'] || "").trim();
    normalized.authors = String(normalized.authors || rawItem.Author || "").trim();
    normalized.category = String(normalized.category || "Research").trim();
    normalized.description = String(normalized.description || rawItem.Abstract || "").trim();
    normalized.citations = Number(normalized.citations) || 0;
    normalized.link = String(normalized.link || "").trim();

    return normalized as ResearchItem;
}

export async function fetchResearchData(): Promise<ResearchItem[]> {
    try {
        console.log('Fetching research file list...');
        const fileListResponse = await fetch('/api/research-files');
        if (!fileListResponse.ok) throw new Error('Failed to fetch file list');

        const files: string[] = await fileListResponse.json();
        console.log('Files found:', files);

        if (files.length === 0) return [];

        const allDataPromises = files.map(async (fileName) => {
            try {
                console.log(`Loading file: ${fileName}`);
                const response = await fetch(`/data/${fileName}`);
                if (!response.ok) return [];

                if (fileName.endsWith('.json')) {
                    const jsonData = await response.json();
                    return Array.isArray(jsonData) ? jsonData.map(normalizeItem) : [];
                }

                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });

                let combinedSheetData: ResearchItem[] = [];

                workbook.SheetNames.forEach(sheetName => {
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
                    if (Array.isArray(jsonData) && jsonData.length > 0) {
                        console.log(`Loaded ${jsonData.length} items from sheet: ${sheetName}`);
                        const normalized = jsonData.map(normalizeItem);
                        combinedSheetData = [...combinedSheetData, ...normalized];
                    }
                });

                return combinedSheetData;
            } catch (err) {
                console.error(`Error parsing file ${fileName}:`, err);
                return [];
            }
        });

        const results = await Promise.all(allDataPromises);
        const combined = results.flat();

        console.log(`Total items raw: ${combined.length}`);

        // Deduplicate and filter out invalid items
        const seen = new Set();
        const cleaned = combined.filter(item => {
            if (!item || !item.title) return false;
            const titleKey = String(item.title).trim().toLowerCase();
            if (seen.has(titleKey)) return false;
            seen.add(titleKey);
            return true;
        });

        console.log(`Total items after cleaning: ${cleaned.length}`);
        return cleaned;
    } catch (error) {
        console.error('Critical error in fetchResearchData:', error);
        return [];
    }
}

export function parseExcelFile(file: File): Promise<ResearchItem[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: 'binary' });
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
