const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const data = [
    {
        "id": 101,
        "title": "Artificial Intelligence in Modern Agriculture",
        "authors": "Prof. Green, Dr. Earth",
        "year": 2025,
        "category": "Agriculture",
        "citations": 50,
        "link": "https://scholar.google.com",
        "description": "Smart farming techniques using AI and IoT."
    }
];

const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
const publicDataDir = path.join(process.cwd(), 'public', 'data');
fs.writeFileSync(path.join(publicDataDir, 'test_agri_research.xlsx'), buffer);
console.log("Test Excel file generated.");
