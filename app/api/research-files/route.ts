import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const dataDir = path.join(process.cwd(), 'public', 'data');

        // Create directory if it doesn't exist
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
            return NextResponse.json([]);
        }

        const files = fs.readdirSync(dataDir);
        const researchFiles = files.filter(file =>
            file.endsWith('.xlsx') ||
            file.endsWith('.xls') ||
            file.endsWith('.csv') ||
            file.endsWith('.json')
        );

        // Filter out research_data.json if we prefer Excel, or return all
        // For now, return all relevant data files
        return NextResponse.json(researchFiles);
    } catch (error) {
        console.error('Error scanning data directory:', error);
        return NextResponse.json({ error: 'Failed to scan files' }, { status: 500 });
    }
}
