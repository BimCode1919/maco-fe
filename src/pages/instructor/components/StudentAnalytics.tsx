import React from "react";
import { motion } from "framer-motion";
import {
  Users, UserCheck, UserMinus, Star,
  Search, Filter, MoreHorizontal, ArrowUpRight
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

const growthData = [
  { month: 'Jan', students: 400, completed: 240 },
  { month: 'Feb', students: 600, completed: 350 },
  { month: 'Mar', students: 980, completed: 580 },
  { month: 'Apr', students: 1200, completed: 820 },
  { month: 'May', students: 1500, completed: 1100 },
  { month: 'Jun', students: 1830, completed: 1400 },
];

const ratioData = [
  { name: 'Hoàn thành', value: 1400, color: '#4F46E5' },
  { name: 'Đang học', value: 330, color: '#6366F1' }, // Indigo nhạt hơn
  { name: 'Bỏ giữa chừng', value: 100, color: '#CBD5E1' }, // Slate trung tính
];

export const StudentAnalytics = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 bg-white text-slate-900 font-sans">

      {/* --- SECTION 1: STATS CARDS (Rule 10% Accents) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Tổng đăng ký", value: "1.830", icon: Users, accent: "text-indigo-600", bg: "bg-indigo-50", trend: "+12%" },
          { label: "Đã hoàn thành", value: "1.400", icon: UserCheck, accent: "text-emerald-600", bg: "bg-emerald-50", trend: "76%" },
          { label: "Bỏ giữa chừng", value: "100", icon: UserMinus, accent: "text-slate-400", bg: "bg-slate-100", trend: "5.4%" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="group p-7 rounded-[32px] border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.accent} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                <stat.icon size={22} />
              </div>
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${i === 2 ? 'bg-slate-50 text-slate-500' : 'bg-emerald-50 text-emerald-600'}`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-[12px] font-medium tracking-tight mb-1">{stat.label}</p>
              <p className="text-3xl font-black tracking-tighter text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- SECTION 2: CHARTS (Rule 60/30/10) --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Area Chart - 60% Space Usage */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-black tracking-tight mb-1">Tăng trưởng học viên</h3>
              <p className="text-sm text-slate-400 font-medium">Phân tích số lượng đăng ký theo tháng</p>
            </div>
            <select className="text-xs font-bold bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
              <option>6 tháng gần nhất</option>
              <option>1 năm gần nhất</option>
            </select>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F8FAFC" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#94A3B8' }} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#94A3B8' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', padding: '12px' }}
                />
                <Area type="monotone" dataKey="students" stroke="#4F46E5" strokeWidth={4} fillOpacity={1} fill="url(#colorStudents)" />
                <Area type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={4} fill="transparent" strokeDasharray="8 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart - 10% Focus */}
        <div className="bg-slate-50 p-8 rounded-[32px] border border-transparent flex flex-col">
          <h3 className="text-xl font-black tracking-tight mb-1">Tỷ lệ hoàn thành</h3>
          <p className="text-sm text-slate-400 font-medium mb-8">Dựa trên 1.830 học viên</p>

          <div className="h-[240px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={ratioData} innerRadius={70} outerRadius={90} paddingAngle={10} dataKey="value">
                  {ratioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-2xl font-black text-slate-900 leading-none">92.5%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Retention</p>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            {ratioData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[11px] font-bold text-slate-600 uppercase">{item.name}</span>
                </div>
                <span className="text-xs font-black text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 3: TABLE (Clear Hierarchy) --- */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-1">Phản hồi gần đây</h3>
            <p className="text-sm text-slate-400 font-medium">Lắng nghe ý kiến từ cộng đồng học viên</p>
          </div>
          <div className="flex gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
              <input type="text" placeholder="Tìm tên học viên..." className="pl-12 pr-6 py-3 bg-slate-50 rounded-2xl text-xs font-bold outline-none focus:ring-2 ring-indigo-500/10 w-64 transition-all" />
            </div>
            <button className="p-3 bg-slate-50 rounded-2xl text-slate-500 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm shadow-slate-200">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Thông tin học viên</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Khóa học học viên</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Xếp hạng</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Nội dung nhận xét</th>
                <th className="px-6 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: "Học viên IT", avatar: "MA", course: "Mastering LLMs", rating: 5, comment: "Kiến thức thực tế, bài tập về RAG rất hay.", date: "2 giờ trước" },
                { name: "Học viên AI", avatar: "HN", course: "AI in Marketing", rating: 4, comment: "Nội dung tốt nhưng tốc độ giảng hơi nhanh.", date: "5 giờ trước" },
                { name: "Học viên UI/UX", avatar: "TC", course: "UX Research", rating: 5, comment: "Giảng viên hỗ trợ cực kỳ nhiệt tình qua Discord.", date: "1 ngày trước" },
              ].map((rev, i) => (
                <tr key={i} className="hover:bg-indigo-50/30 transition-all duration-200 group">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-lg shadow-slate-200">{rev.avatar}</div>
                      <span className="text-sm font-black text-slate-900">{rev.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-bold">
                    <span className="text-[11px] px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg">{rev.course}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center justify-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, star) => (
                        <Star key={star} size={13} fill={star < rev.rating ? "currentColor" : "none"} strokeWidth={2.5} className={star < rev.rating ? "" : "text-slate-200"} />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-6 max-w-xs">
                    <p className="text-[13px] text-slate-700 font-medium leading-relaxed mb-1 italic">"{rev.comment}"</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">{rev.date}</p>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="p-2.5 text-slate-300 hover:text-indigo-600 hover:bg-white rounded-xl transition-all shadow-sm">
                      <ArrowUpRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};