import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, Users, Laptop, 
  ArrowUpRight, ArrowDownRight, Download, PieChart as PieChartIcon,
  Layers, Code2, BrainCircuit, Database
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";

interface FinanceManagementProps {
  isDarkMode: boolean;
  theme: any;
}

export const FinanceManagement = ({ isDarkMode, theme }: FinanceManagementProps) => {
  // 1. Dữ liệu doanh thu tách biệt: Từ Học viên (Student) & Từ Giảng viên (Instructor - Commission)
  const revenueSplitData = [
    { month: 'T10', students: 800, instructors: 200 },
    { month: 'T11', students: 950, instructors: 250 },
    { month: 'T12', students: 1200, instructors: 400 },
    { month: 'T1', students: 1100, instructors: 350 },
    { month: 'T2', students: 1600, instructors: 500 },
  ];

  // 2. Phân bổ nguồn thu theo ngách công nghệ IT
  const itCategoriesData = [
    { name: 'Frontend (React/Next)', value: 40, color: '#6366f1' },
    { name: 'Backend (Node/Java)', value: 30, color: '#10b981' },
    { name: 'AI & Data Science', value: 20, color: '#f59e0b' },
    { name: 'Mobile (Flutter/RN)', value: 10, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-8 pb-10">
      
      {/* --- PHẦN 1: THỐNG KÊ CHI TIẾT NGUỒN THU --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FinanceStatCard 
          title="Doanh thu Học viên" value="1.600B ₫" 
          sub="Từ việc bán khóa học" icon={Users} color="bg-blue-500" theme={theme} 
        />
        <FinanceStatCard 
          title="Doanh thu Giảng viên" value="500M ₫" 
          sub="Hoa hồng & Phí dịch vụ" icon={BrainCircuit} color="bg-purple-500" theme={theme} 
        />
        <FinanceStatCard 
          title="Lợi nhuận ròng" value="1.850B ₫" 
          sub="Sau khi trừ chi phí vận hành" icon={TrendingUp} color="bg-emerald-500" theme={theme} 
        />
        <FinanceStatCard 
          title="Dự kiến tháng tới" value="2.100B ₫" 
          sub="Dựa trên tốc độ tăng trưởng" icon={DollarSign} color="bg-amber-500" theme={theme} 
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* --- BIỂU ĐỒ TỔNG HỢP NGUỒN THU (STACKED AREA CHART) --- */}
        <div className={`lg:col-span-2 p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
          <div className="mb-8">
            <h3 className={`text-xl font-black ${theme.text}`}>Phân tích dòng tiền IT Platform</h3>
            <p className={theme.textMuted}>So sánh nguồn thu giữa Học viên và Giảng viên</p>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSplitData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInstructors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '20px', border: 'none', backgroundColor: isDarkMode ? '#0f172a' : '#fff', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontWeight: 'bold' }} />
                <Area name="Từ Học viên" type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={4} fill="url(#colorStudents)" />
                <Area name="Từ Giảng viên" type="monotone" dataKey="instructors" stroke="#a855f7" strokeWidth={4} fill="url(#colorInstructors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- BIỂU ĐỒ PHÂN LOẠI NGÀNH IT (DONUT CHART) --- */}
        <div className={`p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
          <h3 className={`text-xl font-black mb-8 ${theme.text}`}>Ngách IT tiềm năng</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={itCategoriesData}
                  innerRadius={70}
                  outerRadius={95}
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
          <div className="mt-8 space-y-4">
            {itCategoriesData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" style={{ backgroundColor: item.color }} />
                  <span className={`text-xs font-bold ${theme.textMuted} group-hover:text-indigo-500 transition-colors`}>{item.name}</span>
                </div>
                <span className={`text-xs font-black ${theme.text}`}>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PHẦN 3: BẢNG CHI PHÍ VẬN HÀNH HỆ THỐNG --- */}
      <div className={`p-8 rounded-[32px] border ${theme.card}`}>
        <div className="flex items-center justify-between mb-8">
            <h3 className={`text-xl font-black ${theme.text}`}>Ước tính chi phí vận hành (Server/API)</h3>
            <button className="text-xs font-bold text-indigo-500 hover:underline">Xem chi tiết hóa đơn Cloud</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CostItem label="AWS / Google Cloud" amount="45.000.000 ₫" percent={60} color="bg-blue-500" theme={theme} />
            <CostItem label="CDN / Video Streaming" amount="20.000.000 ₫" percent={25} color="bg-purple-500" theme={theme} />
            <CostItem label="Marketing / Ads" amount="12.000.000 ₫" percent={15} color="bg-emerald-500" theme={theme} />
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT CON: THẺ THỐNG KÊ ---
const FinanceStatCard = ({ title, value, sub, icon: Icon, color, theme }: any) => (
  <div className={`p-6 rounded-[32px] border shadow-sm ${theme.card} hover:shadow-md transition-all`}>
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-white mb-4 shadow-lg`}>
      <Icon size={24} />
    </div>
    <p className={`text-[10px] font-black uppercase tracking-widest ${theme.textMuted}`}>{title}</p>
    <p className={`text-2xl font-black ${theme.text} mt-1`}>{value}</p>
    <p className={`text-[10px] font-medium text-slate-500 mt-2`}>{sub}</p>
  </div>
);

// --- COMPONENT CON: CHI PHÍ ---
const CostItem = ({ label, amount, percent, color, theme }: any) => (
    <div className="space-y-3">
        <div className="flex justify-between items-end">
            <span className={`text-xs font-bold ${theme.text}`}>{label}</span>
            <span className={`text-xs font-black ${theme.text}`}>{amount}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
        </div>
    </div>
);