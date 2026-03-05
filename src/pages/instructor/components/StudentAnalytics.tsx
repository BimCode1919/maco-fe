import React from "react";
import { motion } from "framer-motion";
import { 
  Users, UserCheck, UserMinus, Star, 
  TrendingUp, Search, Filter, MoreHorizontal 
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend 
} from 'recharts';

// 1. Dữ liệu biểu đồ tăng trưởng học viên (Line Chart)
const growthData = [
  { month: 'Jan', students: 400, completed: 240 },
  { month: 'Feb', students: 600, completed: 350 },
  { month: 'Mar', students: 980, completed: 580 },
  { month: 'Apr', students: 1200, completed: 820 },
  { month: 'May', students: 1500, completed: 1100 },
  { month: 'Jun', students: 1830, completed: 1400 },
];

// 2. Dữ liệu biểu đồ tỷ lệ (Pie Chart)
const ratioData = [
  { name: 'Hoàn thành', value: 1400, color: '#4F46E5' }, // Indigo-600
  { name: 'Đang học', value: 330, color: '#10B981' },   // Emerald-500
  { name: 'Bỏ giữa chừng', value: 100, color: '#EF4444' }, // Red-500
];

export const StudentAnalytics = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* --- PHẦN 1: STATS CARD --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Tổng đăng ký", value: "1.830", icon: Users, color: "bg-indigo-600", trend: "+12%" },
          { label: "Đã hoàn thành", value: "1.400", icon: UserCheck, color: "bg-emerald-600", trend: "76%" },
          { label: "Bỏ giữa chừng", value: "100", icon: UserMinus, color: "bg-red-500", trend: "5.4%" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              </div>
            </div>
            <div className="text-right">
                <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${i === 2 ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {stat.trend}
                </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- PHẦN 2: BIỂU ĐỒ --- */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Biểu đồ tăng trưởng (Area Chart) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Tăng trưởng học viên</h3>
            <select className="text-xs font-bold bg-slate-50 border-none rounded-xl px-4 py-2 outline-none">
                <option>6 tháng gần nhất</option>
                <option>1 năm gần nhất</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#94A3B8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#94A3B8'}} />
                <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="students" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorStudents)" />
                <Area type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Biểu đồ tỷ lệ (Pie Chart) */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight self-start mb-4">Tỷ lệ hoàn thành</h3>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={ratioData}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={8}
                            dataKey="value"
                        >
                            {ratioData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontWeight: 'bold' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl w-full">
                <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">Tỷ lệ giữ chân</p>
                <p className="text-xl text-center font-black text-indigo-600">92.5%</p>
            </div>
        </div>
      </div>

      {/* --- PHẦN 3: ĐÁNH GIÁ & COMMENT --- */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Phản hồi gần đây</h3>
            <div className="flex gap-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Tìm học viên..." className="pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-xs outline-none focus:ring-2 ring-indigo-500/10" />
                </div>
                <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600"><Filter size={18}/></button>
            </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Học viên</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Khóa học</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Đánh giá</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nhận xét</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: "Nguyễn Minh Anh", avatar: "MA", course: "Mastering LLMs", rating: 5, comment: "Kiến thức thực tế, bài tập về RAG rất hay.", date: "2 giờ trước" },
                { name: "Trần Hoàng Nam", avatar: "HN", course: "AI in Marketing", rating: 4, comment: "Nội dung tốt nhưng tốc độ giảng hơi nhanh.", date: "5 giờ trước" },
                { name: "Phạm Thùy Chi", avatar: "TC", course: "UX Research", rating: 5, comment: "Giảng viên hỗ trợ cực kỳ nhiệt tình qua Discord.", date: "1 ngày trước" },
              ].map((rev, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xs">{rev.avatar}</div>
                        <span className="text-sm font-bold text-slate-900">{rev.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">{rev.course}</td>
                  <td className="px-8 py-5 text-center">
                    <div className="flex items-center justify-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, star) => (
                        <Star key={star} size={12} fill={star < rev.rating ? "currentColor" : "none"} className={star < rev.rating ? "" : "text-slate-200"} />
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm text-slate-600 line-clamp-1">{rev.comment}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{rev.date}</p>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-slate-300 hover:text-slate-600"><MoreHorizontal size={18}/></button>
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