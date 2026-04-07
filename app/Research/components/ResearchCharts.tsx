import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import { ResearchItem } from "../utils/dataUtils";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  TrendingUp,
  PieChart as PieIcon,
  Crosshair,
  Hexagon,
} from "lucide-react";

interface ResearchChartsProps {
  data: ResearchItem[];
}

export default function ResearchCharts({ data }: ResearchChartsProps) {
  const [chartMode, setChartMode] = useState<
    "category" | "trend" | "citations" | "correlation" | "radar"
  >("trend");

  const categoryData = useMemo(
    () =>
      data.reduce((acc: any[], item) => {
        const existing = acc.find((d) => d.name === item.category);
        if (existing) {
          existing.value += 1;
        } else {
          acc.push({ name: item.category, value: 1 });
        }
        return acc;
      }, []),
    [data],
  );

  const yearData = useMemo(
    () =>
      data
        .reduce((acc: any[], item) => {
          const year = Number(item.year);
          const existing = acc.find((d) => d.year === year);
          if (existing) {
            existing.count += 1;
            existing.citations += item.citations || 0;
          } else {
            acc.push({ year, count: 1, citations: item.citations || 0 });
          }
          return acc;
        }, [])
        .sort((a, b) => a.year - b.year),
    [data],
  );

  const scatterData = useMemo(
    () =>
      data.map((item) => ({
        x: Number(item.year),
        y: Number(item.citations),
        name: item.title,
      })),
    [data],
  );

  const radarData = useMemo(() => {
    const counts: Record<string, number> = {};
    data.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return Object.entries(counts).map(([subject, count]) => ({
      subject,
      A: count,
      fullMark: data.length / 2,
    }));
  }, [data]);

  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
    "#f43f5e",
    "#06b6d4",
  ];

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <div className="flex flex-col">
          <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <TrendingUp className="text-blue-600" />
            Strategic Intelligence
          </h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
            Institution Analytics Engine
          </p>
        </div>
        <div className="flex flex-wrap items-center bg-slate-100/50 p-1.5 rounded-[2rem] border border-slate-200/50 backdrop-blur-md">
          {[
            { id: "trend", icon: TrendingUp, label: "Trends" },
            { id: "category", icon: LayoutGrid, label: "Sectors" },
            { id: "radar", icon: Hexagon, label: "Radar" },
            { id: "citations", icon: PieIcon, label: "Impact" },
            { id: "correlation", icon: Crosshair, label: "Dials" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setChartMode(mode.id as any)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-[1.5rem] text-sm font-black transition-all ${
                chartMode === mode.id
                  ? "bg-white text-blue-600 shadow-xl shadow-blue-500/10 ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <mode.icon size={16} />
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={chartMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="group relative rounded-[3rem] border border-slate-200 bg-white/80 backdrop-blur-xl p-12 shadow-2xl shadow-slate-200/50"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />

          <div className="relative h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartMode === "trend" ? (
                <BarChart
                  data={yearData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f1f5f9"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="year"
                    stroke="#94a3b8"
                    fontSize={12}
                    fontStyle="bold"
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    fontStyle="bold"
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "20px",
                      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="count"
                    name="Publications"
                    radius={[10, 10, 0, 0]}
                    barSize={60}
                  >
                    {yearData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              ) : chartMode === "category" ? (
                <BarChart
                  data={categoryData}
                  layout="vertical"
                  margin={{ left: 20 }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="#94a3b8"
                    fontSize={12}
                    width={120}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    name="Papers"
                    radius={[0, 15, 15, 0]}
                    barSize={35}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              ) : chartMode === "radar" ? (
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={radarData}
                >
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    stroke="#64748b"
                    fontSize={11}
                  />
                  <PolarRadiusAxis hide />
                  <Radar
                    name="Institutions"
                    dataKey="A"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.5}
                  />
                  <Tooltip contentStyle={{ borderRadius: "20px" }} />
                </RadarChart>
              ) : chartMode === "citations" ? (
                <PieChart>
                  <Pie
                    data={yearData}
                    cx="50%"
                    cy="50%"
                    innerRadius={110}
                    outerRadius={150}
                    paddingAngle={10}
                    dataKey="citations"
                    nameKey="year"
                    label={({ payload }: any) =>
                      payload.citations > 0
                        ? `${payload.year}: ${payload.citations}`
                        : ""
                    }
                  >
                    {yearData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: "20px" }} />
                </PieChart>
              ) : (
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Year"
                    unit=""
                    stroke="#94a3b8"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                    domain={["dataMin - 1", "dataMax + 1"]}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Citations"
                    unit=""
                    stroke="#94a3b8"
                    fontSize={12}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ZAxis type="number" range={[100, 1000]} />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{ borderRadius: "20px" }}
                  />
                  <Scatter
                    name="Publications"
                    data={scatterData}
                    fill="#3b82f6"
                    shape="circle"
                  />
                </ScatterChart>
              )}
            </ResponsiveContainer>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
