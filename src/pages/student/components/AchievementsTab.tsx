import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, PieChart, Pie
} from "recharts";
import {
  Clock, Star, CheckCircle2, TrendingUp, Zap, Calendar
} from "lucide-react";

interface AchievementsTabProps {
  learningData?: any[];
  effortData?: any[];
  theme?: {
    bg: string;
    card: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

export const AchievementsTab = ({
  learningData = [
    { day: "T2", hours: 4 }, { day: "T3", hours: 6 }, { day: "T4", hours: 8 },
    { day: "T5", hours: 5 }, { day: "T6", hours: 9 }, { day: "T7", hours: 3 }, { day: "CN", hours: 7 },
  ],
  effortData = [
    { name: "Video", value: 45, color: "#6366f1" },
    { name: "Bài tập", value: 30, color: "#f59e0b" },
    { name: "Dự án", value: 25, color: "#10b981" },
  ],
  theme
}: AchievementsTabProps) => {

  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Thành tích học tập 📈
          </h1>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
            Dữ liệu cập nhật theo thời gian thực
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl self-start md:self-auto">
          <TrendingUp className="text-emerald-500" size={16} />
          <span className="text-[11px] md:text-xs font-black text-emerald-700">+15% tuần này</span>
        </div>
      </div>

      {/* 2. Stats Grid - 2 cột trên Mobile, 4 cột trên Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {[
          { label: "Tổng giờ học", value: "128.5h", icon: Clock, color: "bg-indigo-500" },
          { label: "Chuỗi ngày", value: "12 ngày", icon: Zap, color: "bg-amber-500" },
          { label: "Hoàn thành", value: "84", icon: CheckCircle2, color: "bg-emerald-500" },
          { label: "Huy hiệu", value: "15", icon: Star, color: "bg-purple-500" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-4 md:p-6 rounded-[24px] border border-slate-100 shadow-sm"
          >
            <div className={`w-9 h-9 md:w-11 md:h-11 ${stat.color} rounded-xl flex items-center justify-center text-white mb-3 shadow-md`}>
              <stat.icon size={18} />
            </div>
            <p className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-0.5">{stat.label}</p>
            <p className="text-lg md:text-xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* 3. Charts Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Bar Chart - Thu gọn padding cho Mobile */}
        <div className="lg:col-span-2 bg-white p-5 md:p-8 rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          <h3 className="text-sm md:text-base font-black flex items-center gap-2 mb-6 text-slate-900">
            <Calendar size={18} className="text-indigo-600" /> Giờ học theo ngày
          </h3>
          <div className="h-[220px] md:h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                />
                <Bar dataKey="hours" radius={[4, 4, 4, 4]} barSize={window.innerWidth < 768 ? 16 : 24}>
                  {learningData.map((entry, index) => (
                    <Cell key={index} fill={entry.hours > 7 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart - Phân bổ nỗ lực */}
        <div className="bg-white p-5 md:p-8 rounded-[24px] border border-slate-100 shadow-sm">
          <h3 className="text-sm md:text-base font-black flex items-center gap-2 mb-6 text-slate-900">
            <Zap size={18} className="text-amber-500" /> Phân bổ nỗ lực
          </h3>
          <div className="h-[180px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={effortData}
                  cx="50%" cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={6}
                  dataKey="value"
                  stroke="none"
                >
                  {effortData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-xl font-black text-slate-900 leading-none">85%</p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Tập trung</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {effortData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[11px] font-bold text-slate-600">{item.name}</span>
                </div>
                <span className="text-[11px] font-black text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Badges Section - Grid tối ưu */}
      <div className="bg-white p-5 md:p-8 rounded-[24px] border border-slate-100 shadow-sm">
        <h3 className="text-sm md:text-base font-black mb-6 flex items-center gap-2 text-slate-900">
          <Star size={18} className="text-indigo-500" /> Huy hiệu đạt được
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {[
            { name: "Người mới", icon: "🌱", desc: "Gia nhập" },
            { name: "Chăm chỉ", icon: "🔥", desc: "7 ngày học" },
            { name: "Giải mã", icon: "🧩", desc: "5 bài tập" },
            { name: "Sáng tạo", icon: "🎨", desc: "Thiết kế đầu" },
            { name: "Tốc độ", icon: "⚡", desc: "Học cực nhanh" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center gap-2 p-3 md:p-5 rounded-[20px] bg-slate-50 border border-transparent hover:border-indigo-100 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl bg-white shadow-sm mb-1">
                {badge.icon}
              </div>
              <div className="hidden sm:block">
                <p className="text-[9px] font-black uppercase text-slate-900 tracking-tight">{badge.name}</p>
                <p className="text-[8px] font-bold text-slate-400 leading-tight">{badge.desc}</p>
              </div>
              {/* Mobile text (thu nhỏ tối đa) */}
              <p className="sm:hidden text-[9px] font-black text-slate-900">{badge.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};