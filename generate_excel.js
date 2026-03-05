const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const data = [
    {
        "id": 1,
        "title": "Quantum Computing in Modern Cryptography",
        "authors": "Dr. Smith, Prof. Johnson",
        "year": 2024,
        "category": "Computer Science",
        "citations": 120,
        "link": "https://scholar.google.com/search?q=Quantum+Computing+Cryptography",
        "description": "Exploration of quantum algorithms and their impact on current RSA encryption."
    },
    {
        "id": 2,
        "title": "Sustainable Energy: Solar and Beyond",
        "authors": "Alice Green, Bob Brown",
        "year": 2023,
        "category": "Environmental Science",
        "citations": 85,
        "link": "https://scholar.google.com/search?q=Sustainable+Energy+Solar",
        "description": "Analysis of solar panel efficiency in tropical climates."
    }
];

const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Research Data");

const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
const publicDataDir = path.join(process.cwd(), 'public', 'data');

if (!fs.existsSync(publicDataDir)) {
    fs.mkdirSync(publicDataDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDataDir, 'research_data.xlsx'), buffer);
console.log("Excel file generated successfully at public/data/research_data.xlsx");
