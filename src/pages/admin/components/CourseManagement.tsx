import { motion } from "framer-motion";
import {
  BookOpen, Star, Users, CheckCircle,
  XCircle, Clock, TrendingUp, MoreVertical, Search, Plus
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";

interface CourseManagementProps {
  isDarkMode: boolean;
  theme: any;
}

export const CourseManagement = ({ isDarkMode, theme }: CourseManagementProps) => {
  const growthData = [
    { month: 'T9', courses: 40, sales: 240 },
    { month: 'T10', courses: 55, sales: 380 },
    { month: 'T11', courses: 48, sales: 520 },
    { month: 'T12', courses: 70, sales: 690 },
    { month: 'T1', courses: 85, sales: 840 },
    { month: 'T2', courses: 110, sales: 1200 },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Thống kê tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={BookOpen} title="Tổng Khóa học" value="1,248" sub="32 khóa học mới tháng này" color="bg-blue-500" theme={theme} />
        <StatCard icon={CheckCircle} title="Đã phê duyệt" value="1,120" sub="Tỷ lệ: 89.7%" color="bg-emerald-500" theme={theme} />
        <StatCard icon={Clock} title="Đang chờ duyệt" value="42" sub="Cần xử lý gấp" color="bg-amber-500" theme={theme} />
        <StatCard icon={XCircle} title="Đã từ chối" value="86" sub="Vi phạm chính sách" color="bg-rose-500" theme={theme} />
      </div>

      {/* 2. Biểu đồ tăng trưởng */}
      <div className={`p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className={`text-xl font-black ${theme.text}`}>Biểu đồ tăng trưởng khóa học</h3>
            <p className={`text-xs font-medium ${theme.textMuted}`}>Thống kê số lượng khóa học và lượt đăng ký mới</p>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ borderRadius: '16px', border: 'none', backgroundColor: isDarkMode ? '#1e293b' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
              />
              <Area type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              <Area type="monotone" dataKey="courses" stroke="#10b981" strokeWidth={3} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Rating & Sales */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className={`p-6 rounded-[32px] border ${theme.card}`}>
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-yellow-500" fill="#eab308" size={20} />
            <h3 className={`text-lg font-black ${theme.text}`}>Rating cao nhất</h3>
          </div>
          <div className="space-y-4">
            <TopCourseRow title="React cho người mới bắt đầu" instructor="Sơn Đặng" metric="4.9/5.0" theme={theme} color="text-yellow-500" isDarkMode={isDarkMode} />
            <TopCourseRow title="UI/UX Pro Max 2024" instructor="Trần Minh Cường" metric="4.8/5.0" theme={theme} color="text-yellow-500" isDarkMode={isDarkMode} />
          </div>
        </div>

        <div className={`p-6 rounded-[32px] border ${theme.card}`}>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-indigo-500" size={20} />
            <h3 className={`text-lg font-black ${theme.text}`}>Bán chạy nhất</h3>
          </div>
          <div className="space-y-4">
            <TopCourseRow title="Lập trình Node.js thực chiến" instructor="Hoàng Nguyễn" metric="2.4k lượt mua" theme={theme} color="text-indigo-500" isDarkMode={isDarkMode} />
            <TopCourseRow title="Kỹ năng giao tiếp công sở" instructor="Lê Mỹ Linh" metric="1.8k lượt mua" theme={theme} color="text-indigo-500" isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* 4. Bảng chi tiết */}
      <div className={`rounded-[32px] border shadow-sm overflow-hidden ${theme.card}`}>
        <div className="p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h3 className={`text-xl font-black ${theme.text}`}>Quản lý phê duyệt khóa học</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.textMuted}`} size={16} />
              <input placeholder="Tìm khóa học..." className={`pl-10 pr-4 py-2 rounded-xl text-sm border outline-none ${theme.input} ${theme.text}`} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs">
              <Plus size={16} /> Thêm khóa học
            </button>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className={`border-b ${theme.tableHeader}`}>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Khóa học</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Giảng viên</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-center">Trạng thái</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody>
              <CourseRow title="Next.js 14 Masterclass" instructor="Vũ Hải Đăng" status="Chờ duyệt" theme={theme} />
              <CourseRow title="Java Spring Boot" instructor="Nguyễn Văn B" status="Đã duyệt" theme={theme} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- Các Component hỗ trợ ---
const TopCourseRow = ({ title, instructor, metric, theme, color, isDarkMode }: any) => (
  <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-slate-800/40' : 'bg-slate-50'} flex items-center justify-between group cursor-pointer hover:scale-[1.01] transition-all`}>
    <div>
      <p className={`text-sm font-bold ${theme.text}`}>{title}</p>
      <p className={`text-[10px] ${theme.textMuted}`}>{instructor}</p>
    </div>
    <div className={`text-sm font-black ${color}`}>{metric}</div>
  </div>
);

const CourseRow = ({ title, instructor, status, theme }: any) => (
  <tr className={`border-b ${theme.tableRow} transition-all hover:bg-slate-500/5`}>
    <td className="px-8 py-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-indigo-500/10 flex items-center justify-center text-[10px] font-black text-indigo-500 border border-indigo-500/10">
          IMG
        </div>
        <p className={`text-sm font-bold truncate max-w-[200px] ${theme.text}`}>{title}</p>
      </div>
    </td>
    <td className={`px-8 py-5 text-xs font-bold ${theme.textMuted} whitespace-nowrap`}>
      {instructor}
    </td>
    <td className="px-8 py-5">
      {/* whitespace-nowrap là chìa khóa để không bị vỡ chữ */}
      <span className={`inline-flex items-center justify-center whitespace-nowrap text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider border ${status === 'Chờ duyệt' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
        status === 'Đã duyệt' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
          'bg-rose-500/10 text-rose-500 border-rose-500/20'
        }`}>
        {status}
      </span>
    </td>
    <td className="px-8 py-5 text-right">
      <button className={`p-2 rounded-lg hover:bg-slate-500/10 transition-colors`}>
        <MoreVertical size={16} className={theme.textMuted} />
      </button>
    </td>
  </tr>
);

const StatCard = ({ icon: Icon, title, value, sub, color, theme }: any) => (
  <div className={`p-6 rounded-[32px] border ${theme.card}`}>
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white mb-4 shadow-lg`}>
      <Icon size={20} />
    </div>
    <p className={`text-[10px] font-black uppercase tracking-widest ${theme.textMuted}`}>{title}</p>
    <p className={`text-2xl font-black ${theme.text} mt-1`}>{value}</p>
    <p className="text-[10px] text-slate-500 mt-2 font-medium">{sub}</p>
  </div>
);