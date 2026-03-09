"use client";

import { useState } from "react";
import {
  FaUniversity,
  FaFileContract,
  FaAward,
  FaCheckCircle,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";
import { mandatoryDisclosureData } from "@/lib/mandatoryDisclosureData";
import { motion, AnimatePresence } from "framer-motion";

export default function MandatoryDisclosureViewer() {
  const [activeTab, setActiveTab] = useState("college-info");
  const data = mandatoryDisclosureData;

  const tabs = [
    { id: "college-info", label: "College Info", icon: <FaUniversity /> },
    { id: "aicte", label: "AICTE", icon: <FaFileContract /> },
    { id: "nba", label: "NBA", icon: <FaAward /> },
    { id: "naac", label: "NAAC", icon: <FaCheckCircle /> },
    { id: "autonomous", label: "Autonomous", icon: <FaShieldAlt /> },
    { id: "audit-reports", label: "Audit Reports", icon: <FaChartBar /> },
  ];

  return (
    <div className="space-y-6">
      {/* Sub-tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-2xl border border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all text-xs ${
              activeTab === tab.id
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "college-info" && (
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-3 lowercase first-letter:uppercase">
                    <FaUniversity className="text-indigo-600" /> Institution
                    Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                    {[
                      {
                        label: "Name",
                        value: data.collegeInfo.institution.name,
                      },
                      {
                        label: "Phone",
                        value: data.collegeInfo.institution.phone,
                      },
                      {
                        label: "Email",
                        value: data.collegeInfo.institution.email,
                      },
                      {
                        label: "Type",
                        value: data.collegeInfo.institution.type,
                      },
                    ].map((item, i) => (
                      <div key={i} className="border-b border-gray-50 pb-2">
                        <p className="text-[9px] uppercase font-black text-gray-400 tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-bold text-gray-700 text-sm">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="pt-6 border-t border-gray-50 space-y-4">
                  <h3 className="text-sm font-black text-gray-900 uppercase">
                    Facilities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                      <p className="text-[10px] font-black text-indigo-400 uppercase">
                        Classrooms
                      </p>
                      <p className="text-lg font-black text-indigo-900">
                        {data.collegeInfo.infrastructure.classRooms}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                      <p className="text-[10px] font-black text-blue-400 uppercase">
                        Labs
                      </p>
                      <p className="text-lg font-black text-blue-900">
                        {data.collegeInfo.infrastructure.laboratories}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "aicte" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1">
                    AICTE File No.
                  </p>
                  <p className="font-bold text-gray-800 text-sm">
                    {data.aicte.fileNo}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-indigo-600 border-b border-gray-100">
                        <th className="py-3 px-2 font-black uppercase text-[10px]">
                          Programme
                        </th>
                        <th className="py-3 px-2 font-black uppercase text-[10px]">
                          Intake
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {data.aicte.programmes.map((p, i) => (
                        <tr
                          key={i}
                          className="text-sm group hover:bg-gray-50/50"
                        >
                          <td className="py-3 px-2 font-bold text-gray-600">
                            {p.name}
                          </td>
                          <td className="py-3 px-2 font-black text-indigo-600">
                            {p.seats}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "nba" && (
              <div className="text-center py-12">
                <FaAward className="text-4xl text-orange-200 mx-auto mb-4" />
                <p className="font-bold text-gray-600">
                  {data.accreditation.nba}
                </p>
              </div>
            )}

            {activeTab === "naac" && (
              <div className="text-center py-12">
                <FaCheckCircle className="text-4xl text-green-200 mx-auto mb-4" />
                <p className="font-bold text-gray-600">
                  {data.accreditation.naac}
                </p>
              </div>
            )}

            {activeTab === "autonomous" && (
              <div className="text-center py-12">
                <FaShieldAlt className="text-4xl text-purple-200 mx-auto mb-4" />
                <p className="font-bold text-gray-600">
                  {data.accreditation.autonomous}
                </p>
              </div>
            )}

            {activeTab === "audit-reports" && (
              <div className="space-y-6">
                <p className="font-bold text-gray-700 leading-relaxed text-sm">
                  {data.auditReports.status}
                </p>
                <div className="flex flex-wrap gap-3">
                  {data.auditReports.years.map((year) => (
                    <div
                      key={year}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-black text-blue-900 shadow-sm"
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
