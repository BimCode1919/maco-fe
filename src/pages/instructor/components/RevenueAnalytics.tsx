import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign, CreditCard, Download,
  Calendar, Wallet, ArrowUpRight
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';

// Dữ liệu biểu đồ khớp với thực tế doanh thu các khóa học trên Dashboard
const revenueData = [
  { month: 'T1', revenue: 12500000 },
  { month: 'T2', revenue: 18200000 },
  { month: 'T3', revenue: 15800000 },
  { month: 'T4', revenue: 19400000 },
  { month: 'T5', revenue: 16200000 },
  { month: 'T6', revenue: 21400000 }, // Khớp với 21.4M của tháng hiện tại
];

export const RevenueAnalytics = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 bg-white text-slate-900 font-sans">

      {/* --- SECTION 1: STATS OVERVIEW (Khớp hoàn toàn với Dashboard) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            label: "Tổng doanh thu",
            value: "183.000.000đ",
            icon: Wallet,
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            trend: "+12.4%", // Khớp với Dashboard (+12.4%)
            trendColor: "bg-emerald-50 text-emerald-600"
          },
          {
            label: "Doanh thu tháng này",
            value: "21.400.000đ", // Khớp với 21.4M trên Dashboard
            icon: DollarSign,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            trend: "Tháng 6",
            trendColor: "bg-slate-50 text-slate-500"
          },
          {
            label: "Số dư khả dụng",
            value: "42.500.000đ",
            icon: CreditCard,
            color: "text-amber-600",
            bg: "bg-amber-50",
            trend: "Rút tiền",
            trendColor: "bg-amber-100 text-amber-700"
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="p-7 rounded-[32px] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-indigo-50/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-11 h-11 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${stat.trendColor}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-xl font-black tracking-tight text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* --- SECTION 2: CHART (Màu sắc 60-30-10) --- */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl font-black tracking-tight mb-1 uppercase">Phân tích dòng tiền</h3>
            <p className="text-[13px] text-slate-400 font-medium">Thống kê tăng trưởng doanh thu hệ thống</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-slate-100 transition-all">
              <Calendar size={14} /> 2026
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-wider shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
              <Download size={14} /> Xuất báo cáo
            </button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F8FAFC" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fontWeight: 700, fill: '#94A3B8' }}
                dy={15}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fontWeight: 700, fill: '#94A3B8' }}
                tickFormatter={(value) => `${value / 1000000}M`}
              />
              <Tooltip
                cursor={{ fill: '#F8FAFC' }}
                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', fontWeight: 'bold' }}
                formatter={(value: any) => [`${value.toLocaleString()}đ`, 'Doanh thu']}
              />
              <Bar dataKey="revenue" radius={[10, 10, 0, 0]} barSize={32}>
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === revenueData.length - 1 ? '#4F46E5' : '#E2E8F0'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- SECTION 3: TRANSACTION TABLE (Khớp với khóa học trên Dashboard) --- */}
      <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
        <div className="p-10 border-b border-slate-50 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 uppercase">Doanh thu theo khóa học</h3>
            <p className="text-[13px] text-slate-400 font-medium mt-1">Chi tiết phân bổ thu nhập</p>
          </div>
          <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest cursor-pointer hover:underline">Xem báo cáo chi tiết</span>
        </div>
        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Khóa học</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Học viên</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Đánh giá</th>
                <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Doanh thu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: "Mastering Large Language Models", students: 45, rating: 4.8, revenue: "9.000.000đ" },
                { name: "AI trong Digital Marketing", students: 32, rating: 4.9, revenue: "6.400.000đ" },
                { name: "Usability-Testing Essentials", students: 18, rating: 4.7, revenue: "3.600.000đ" },
                { name: "Khóa học nền tảng Python", students: 12, rating: 4.5, revenue: "2.400.000đ" },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-6 py-6 text-sm font-black text-slate-900 max-w-[300px] truncate">{item.name}</td>
                  <td className="px-6 py-6 text-center text-[13px] font-bold text-slate-500">{item.students}</td>
                  <td className="px-6 py-6 text-center">
                    <span className="inline-flex items-center gap-1 text-[12px] font-black text-amber-500">
                      ★ {item.rating}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <span className="text-sm font-black text-emerald-600 tracking-tight">{item.revenue}</span>
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