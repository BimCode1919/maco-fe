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
  theme: any;
}

export const AchievementsTab = ({
  learningData = [
    { day: "T2", hours: 4 },
    { day: "T3", hours: 6 },
    { day: "T4", hours: 8 },
    { day: "T5", hours: 5 },
    { day: "T6", hours: 9 },
    { day: "T7", hours: 3 },
    { day: "CN", hours: 7 },
  ],
  effortData = [
    { name: "Video", value: 45, color: "#6366f1" },
    { name: "Bài tập", value: 30, color: "#f59e0b" },
    { name: "Dự án", value: 25, color: "#10b981" },
  ],
  theme
}: AchievementsTabProps) => {

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-slate-900">Thành tích học tập 📈</h1>
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
          <TrendingUp className="text-emerald-500" size={20} />
          <span className="text-sm font-black text-slate-900">Tăng trưởng 15% tuần này</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Tổng giờ học", value: "128.5h", icon: Clock, color: "bg-indigo-500" },
          { label: "Chuỗi ngày", value: "12 ngày", icon: Zap, color: "bg-amber-500" },
          { label: "Hoàn thành", value: "84", icon: CheckCircle2, color: "bg-emerald-500" },
          { label: "Huy hiệu", value: "15", icon: Star, color: "bg-purple-500" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-100`}>
              <stat.icon size={20} />
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm min-w-0">
          <h3 className="text-xl font-black flex items-center gap-3 mb-8 text-slate-900">
            <Calendar className="text-indigo-600" size={24} /> Giờ học theo ngày
          </h3>
          <div className="h-[300px] w-full" style={{ minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%" debounce={100}>
              <BarChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="hours" radius={[8, 8, 8, 8]} barSize={32}>
                  {learningData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.hours > 7 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm min-w-0">
          <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-slate-900">
            <Zap className="text-amber-500" size={24} /> Phân bổ nỗ lực
          </h3>
          <div className="h-[200px] w-full relative" style={{ minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%" debounce={100}>
              <PieChart>
                <Pie
                  data={effortData}
                  cx="50%" cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {effortData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-2xl font-black text-slate-900">85%</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tập trung</p>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {effortData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-bold text-slate-600">{item.name}</span>
                </div>
                <span className="text-xs font-black text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-slate-900">
          <Star className="text-indigo-500" size={24} /> Huy hiệu đạt được
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "Người mới", icon: "🌱", color: "bg-emerald-50 text-emerald-600", desc: "Gia nhập" },
            { name: "Chăm chỉ", icon: "🔥", color: "bg-orange-50 text-orange-600", desc: "7 ngày học" },
            { name: "Giải mã", icon: "🧩", color: "bg-blue-50 text-blue-600", desc: "5 bài tập" },
            { name: "Sáng tạo", icon: "🎨", color: "bg-purple-50 text-purple-600", desc: "Thiết kế đầu" },
            { name: "Tốc độ", icon: "⚡", color: "bg-amber-50 text-amber-600", desc: "Bài học nhanh" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-slate-50 bg-slate-50 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-1 bg-white shadow-sm">
                {badge.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-900">{badge.name}</p>
                <p className="text-[9px] font-bold leading-tight text-slate-400">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};