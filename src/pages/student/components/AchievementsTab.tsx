import { motion } from "motion/react";
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
} from "recharts";
import { 
  Clock, 
  Star, 
  CheckCircle2, 
  TrendingUp,
  Zap,
  Calendar
} from "lucide-react";

interface AchievementsTabProps {
  learningData: any[];
  effortData: any[];
}

export const AchievementsTab = ({ learningData, effortData }: AchievementsTabProps) => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-slate-900">Thành tích học tập 📈</h1>
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
          <TrendingUp className="text-emerald-500" size={20} />
          <span className="text-sm font-black text-slate-900">Tăng trưởng 15% so với tuần trước</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Tổng giờ học", value: "128.5h", icon: Clock, color: "bg-indigo-500" },
          { label: "Chuỗi ngày học", value: "12 ngày", icon: Zap, color: "bg-amber-500" },
          { label: "Bài học hoàn thành", value: "84", icon: CheckCircle2, color: "bg-emerald-500" },
          { label: "Huy hiệu đạt được", value: "15", icon: Star, color: "bg-purple-500" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-32 border border-slate-100 shadow-sm"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
              <stat.icon size={20} />
            </div>
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-8 rounded-32 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <Calendar className="text-indigo-600" /> Phân tích giờ học theo ngày
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-black">Tuần này</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-400 text-xs font-black hover:bg-slate-50">Tuần trước</button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                />
                <Bar dataKey="hours" radius={[6, 6, 0, 0]}>
                  {learningData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.hours > 5 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-32 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <Zap className="text-amber-500" /> Mức độ cố gắng
          </h3>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={effortData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
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
          <div className="mt-8 space-y-4">
            {effortData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-bold text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-black text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-32 border border-slate-100 shadow-sm">
        <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
          <Star className="text-indigo-500" /> Huy hiệu đã đạt được
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: "Người mới", icon: "🌱", color: "bg-emerald-50 text-emerald-600", desc: "Gia nhập hệ thống" },
            { name: "Chăm chỉ", icon: "🔥", color: "bg-orange-50 text-orange-600", desc: "Học 7 ngày liên tiếp" },
            { name: "Giải mã", icon: "🧩", color: "bg-blue-50 text-blue-600", desc: "Hoàn thành 5 bài tập" },
            { name: "Sáng tạo", icon: "🎨", color: "bg-purple-50 text-purple-600", desc: "Thiết kế UI đầu tiên" },
            { name: "Tốc độ", icon: "⚡", color: "bg-amber-50 text-amber-600", desc: "Hoàn thành bài học < 10p" },
          ].map((badge, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-600 transition-all cursor-default"
            >
              <span className="text-4xl">{badge.icon}</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">{badge.name}</p>
                <p className="text-[10px] font-medium text-slate-400 leading-tight">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
