import React from "react";
import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, CreditCard, 
  ArrowUpRight, Download, Calendar, 
  Wallet, PieChart as PieIcon 
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, LineChart, Line 
} from 'recharts';

// Dữ liệu doanh thu giả lập theo tháng
const revenueData = [
  { month: 'T1', revenue: 85000000, students: 120 },
  { month: 'T2', revenue: 92000000, students: 145 },
  { month: 'T3', revenue: 115000000, students: 180 },
  { month: 'T4', revenue: 108000000, students: 165 },
  { month: 'T5', revenue: 125000000, students: 210 },
  { month: 'T6', revenue: 153000000, students: 250 },
];

export const RevenueAnalytics = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* --- PHẦN 1: TỔNG QUAN CON SỐ --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Tổng doanh thu", value: "1.538.000.000đ", icon: Wallet, color: "bg-indigo-600", trend: "+15.2%" },
          { label: "Thu nhập tháng này", value: "153.000.000đ", icon: DollarSign, color: "bg-emerald-600", trend: "+8.4%" },
          { label: "Số dư khả dụng", value: "42.500.000đ", icon: CreditCard, color: "bg-amber-500", trend: "Rút tiền" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <stat.icon size={22} />
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${i === 2 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* --- PHẦN 2: BIỂU ĐỒ DOANH THU --- */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Phân tích doanh thu</h3>
            <p className="text-xs text-slate-400 font-bold">Thống kê thu nhập trong 6 tháng gần nhất</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">
              <Calendar size={14}/> 2025
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 transition-all">
              <Download size={14}/> Xuất báo cáo
            </button>
          </div>
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 12, fontWeight: 700, fill: '#94A3B8'}} 
                dy={10} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 12, fontWeight: 700, fill: '#94A3B8'}} 
                tickFormatter={(value) => `${value / 1000000}M`}
              />
              <Tooltip 
                cursor={{fill: '#F8FAFC'}}
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                formatter={(value: any) => [`${value.toLocaleString()}đ`, 'Doanh thu']}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]} barSize={40}>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#4F46E5' : '#E2E8F0'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- PHẦN 3: CHI TIẾT GIAO DỊCH --- */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Lịch sử thu nhập</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50 text-left">
              <tr>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mã GD</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Học viên</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Khóa học</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Ngày</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Số tiền</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: "#TRX-8821", name: "Nguyễn Văn A", course: "Mastering LLMs", date: "11/03/2024", amount: "+500.000đ" },
                { id: "#TRX-8822", name: "Lê Thị B", course: "AI Marketing", date: "10/03/2024", amount: "+300.000đ" },
                { id: "#TRX-8823", name: "Trần Văn C", course: "UX Research", date: "09/03/2024", amount: "+450.000đ" },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">{item.id}</td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-900">{item.name}</td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">{item.course}</td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-400">{item.date}</td>
                  <td className="px-8 py-5 text-right">
                    <span className="text-sm font-black text-emerald-600">{item.amount}</span>
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