import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign, TrendingUp, Users,
  BrainCircuit, ArrowUpRight, ArrowDownRight,
  Download, PieChart as PieChartIcon
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

interface FinanceManagementProps {
  isDarkMode: boolean;
  theme: any;
}

export const FinanceManagement = ({ isDarkMode, theme }: FinanceManagementProps) => {
  // 1. Dữ liệu doanh thu (Căn chỉnh theo mức tổng ~84.5M VNĐ)
  // Đơn vị trong data: 1.000 VNĐ
  const revenueSplitData = [
    { month: 'T10', students: 48000, instructors: 14000 },
    { month: 'T11', students: 55000, instructors: 16500 },
    { month: 'T12', students: 62000, instructors: 19000 },
    { month: 'T1', students: 59000, instructors: 17500 },
    { month: 'T2', students: 65000, instructors: 19500 }, // Tổng = 84,500k
  ];

  // 2. Phân bổ theo ngách IT (Dựa trên dự án thực tế của bạn)
  const itCategoriesData = [
    { name: 'Backend (Java/Spring)', value: 45, color: '#6366f1' },
    { name: 'Frontend (React/Next)', value: 25, color: '#10b981' },
    { name: 'AI Integration', value: 20, color: '#f59e0b' },
    { name: 'Mobile/Database', value: 10, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 pb-10 px-2 md:px-0">

      {/* --- HEADER ACTIONS --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className={`text-2xl md:text-3xl font-black ${theme.text}`}>Quản lý Tài chính</h2>
          <p className={theme.textMuted}>Báo cáo doanh thu hệ thống cập nhật thời gian thực</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/20">
          <Download size={18} /> Xuất báo cáo PDF
        </button>
      </div>

      {/* --- PHẦN 1: THỐNG KÊ (GRID 1-2-4 COLUMNS) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <FinanceStatCard
          title="Tổng Doanh Thu" value="84,500,000 ₫"
          trend="+10.1%" isPositive={true}
          sub="Tháng này (T2/2026)" icon={DollarSign} color="bg-emerald-500" theme={theme}
        />
        <FinanceStatCard
          title="Doanh thu Học viên" value="65,000,000 ₫"
          sub="Giao dịch trực tiếp" icon={Users} color="bg-blue-500" theme={theme}
        />
        <FinanceStatCard
          title="Phí Giảng viên" value="19,500,000 ₫"
          sub="Hoa hồng sàn 20-30%" icon={BrainCircuit} color="bg-purple-500" theme={theme}
        />
        <FinanceStatCard
          title="Lợi nhuận ròng" value="47,200,000 ₫"
          sub="Sau khi trừ Server/Ads" icon={TrendingUp} color="bg-indigo-500" theme={theme}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* --- BIỂU ĐỒ DÒNG TIỀN (CHỮ TRÊN MOBILE NHỎ LẠI) --- */}
        <div className={`lg:col-span-2 p-5 md:p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
          <div className="mb-6 md:mb-8 flex justify-between items-start">
            <div>
              <h3 className={`text-lg md:text-xl font-black ${theme.text}`}>Phân tích tăng trưởng</h3>
              <p className={`text-xs md:text-sm ${theme.textMuted}`}>So sánh nguồn thu chính (Đơn vị: 1.000đ)</p>
            </div>
          </div>

          <div className="h-[250px] md:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSplitData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorInstructors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: isDarkMode ? '#0f172a' : '#fff',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    fontSize: '12px'
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }} />
                <Area name="Học viên" type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={3} fill="url(#colorStudents)" />
                <Area name="Giảng viên" type="monotone" dataKey="instructors" stroke="#a855f7" strokeWidth={3} fill="url(#colorInstructors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- BIỂU ĐỒ TRÒN (LAYOUT DỌC TRÊN MOBILE) --- */}
        <div className={`p-5 md:p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
          <h3 className={`text-lg md:text-xl font-black mb-6 md:mb-8 ${theme.text}`}>Tỉ trọng khóa học</h3>
          <div className="h-[200px] md:h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={itCategoriesData}
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {itCategoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
            {itCategoriesData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className={`text-[11px] md:text-xs font-bold ${theme.textMuted}`}>{item.name}</span>
                </div>
                <span className={`text-xs font-black ${theme.text}`}>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PHẦN 3: CHI PHÍ VẬN HÀNH (PROGRESS BARS) --- */}
      <div className={`p-5 md:p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-2">
          <h3 className={`text-lg md:text-xl font-black ${theme.text}`}>Ước tính phí vận hành</h3>
          <div className="text-[10px] md:text-xs font-black px-3 py-1 bg-rose-500/10 text-rose-500 rounded-lg uppercase">
            Tổng chi: ~37.5M ₫ / Tháng
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <CostItem label="Cloud Infrastructure" amount="22.500k ₫" percent={60} color="bg-blue-500" theme={theme} />
          <CostItem label="AI API (Gemini/GPT)" amount="10.000k ₫" percent={25} color="bg-purple-500" theme={theme} />
          <CostItem label="Marketing & Sale" amount="5.000k ₫" percent={15} color="bg-emerald-500" theme={theme} />
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT CON: THẺ THỐNG KÊ ---
const FinanceStatCard = ({ title, value, sub, icon: Icon, color, trend, isPositive, theme }: any) => (
  <div className={`p-5 md:p-6 rounded-[32px] border shadow-sm ${theme.card} hover:scale-[1.02] transition-all`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
        <Icon size={20} className="md:w-6 md:h-6" />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trend}
        </div>
      )}
    </div>
    <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${theme.textMuted}`}>{title}</p>
    <p className={`text-xl md:text-2xl font-black ${theme.text} mt-1`}>{value}</p>
    <p className={`text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-2 italic`}>{sub}</p>
  </div>
);

// --- COMPONENT CON: CHI PHÍ ---
const CostItem = ({ label, amount, percent, color, theme }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className={`text-[11px] md:text-xs font-bold ${theme.text}`}>{label}</span>
      <span className={`text-[11px] md:text-xs font-black ${theme.text}`}>{amount}</span>
    </div>
    <div className="h-1.5 md:h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);