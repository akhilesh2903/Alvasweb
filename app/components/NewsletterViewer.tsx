"use client";

import { motion } from "framer-motion";
import { Bell, Newspaper, Sparkles } from "lucide-react";

export interface NewsletterSemester {
  name: string;
  id: string;
}

export interface NewsletterYear {
  year: string;
  semesters: NewsletterSemester[];
}

interface NewsletterViewerProps {
  data?: NewsletterYear[];
  backPath?: string;
  departmentName?: string;
}

export default function NewsletterViewer({
  data = [],
  departmentName = "Department",
}: NewsletterViewerProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gradient-to-br from-indigo-50/50 to-white rounded-[2.5rem] border border-indigo-100/50 shadow-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-indigo-100/30 rounded-full blur-3xl group-hover:bg-indigo-200/40 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl group-hover:bg-purple-200/40 transition-colors duration-700" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl shadow-indigo-100 flex items-center justify-center text-indigo-600 relative z-10">
              <Newspaper className="w-12 h-12" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-100 z-20"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-serif">
            Not Yet Uploaded
          </h2>

          <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium leading-relaxed">
            The E-Newsletter for {departmentName} has not been uploaded yet.
          </p>

          <div className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all cursor-default">
            <Bell className="w-5 h-5" />
            Stay Tuned
          </div>
        </motion.div>
      </div>
    );
  }

  // Minimal fallback for departments that later add data:
  // provide direct links to PDFs via the existing pdf-proxy route.
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6">
      <h2 className="text-xl font-black text-gray-900 mb-2 font-serif">
        E-Newsletter
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Select a year/semester to open the PDF.
      </p>

      <div className="space-y-4">
        {data.map((year) => (
          <div
            key={year.year}
            className="border border-gray-200 rounded-2xl p-4"
          >
            <div className="text-sm font-extrabold text-gray-900 mb-3">
              {year.year}
            </div>
            <div className="flex flex-wrap gap-2">
              {year.semesters.map((sem) => (
                <a
                  key={sem.id}
                  href={`/api/pdf-proxy?id=${encodeURIComponent(sem.id)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 transition"
                >
                  {sem.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
