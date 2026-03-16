import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Edit3, Trash2, Eye, Search, Filter,
    Plus, MoreVertical, LayoutGrid, List
} from "lucide-react";

const courseData = [
    { id: 1, name: "Mastering Large Language Models", level: "Advanced", date: "11 March 2024", category: "Artificial Intelligence", color: "text-indigo-600", icon: "LLM" },
    { id: 2, name: "AI trong Digital Marketing", level: "Intermediate", date: "15 April 2024", category: "Marketing", color: "text-blue-600", icon: "DM" },
    { id: 3, name: "Usability-Testing Essentials", level: "Beginners", date: "30 June 2024", category: "Product Design", color: "text-orange-600", icon: "UT" },
    { id: 4, name: "Fullstack Web Development", level: "Beginners", date: "12 July 2024", category: "Programming", color: "text-purple-600", icon: "WD" },
    { id: 5, name: "UX Research Fundamentals", level: "Intermediate", date: "05 August 2024", category: "UIUX Design", color: "text-emerald-600", icon: "UX" },
];

export const MyCourses = ({ setActiveTab, onViewDetails, onEditCourse }: any) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen">
            {/* --- HEADER SECTION --- */}
            <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                            Khóa học <span className="text-indigo-600">của tôi</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-sm mt-1">
                            Quản lý và tối ưu hóa nội dung giảng dạy của bạn.
                        </p>
                    </div>

                    {/* Nút Tạo mới - Rule 10% Accent (Indigo/Shadow) */}
                    <button
                        onClick={() => setActiveTab("create-course")}
                        className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95 w-full md:w-auto"
                    >
                        <Plus size={18} strokeWidth={3} />
                        Tạo khóa học mới
                    </button>
                </div>

                {/* --- FILTER & SEARCH BAR (Rule 30%) --- */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm khóa học..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-600 transition-all shadow-sm font-medium"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-slate-600 font-bold text-xs uppercase hover:bg-slate-50 transition-all shadow-sm">
                            <Filter size={18} />
                            Bộ lọc
                        </button>
                    </div>
                </div>
            </div>

            {/* --- COURSE TABLE / LIST --- */}
            <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Thông tin khóa học</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Ngày tạo</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Danh mục</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Quản lý</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {courseData.map((course, idx) => (
                                <motion.tr
                                    key={course.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group hover:bg-indigo-50/30 transition-all duration-300"
                                >
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs shadow-sm border border-white transition-transform group-hover:scale-110 bg-white ${course.color}`}>
                                                {course.icon}
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                    {course.name}
                                                </p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    {course.level}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-8 py-5 text-center">
                                        <span className="text-xs font-bold text-slate-500">{course.date}</span>
                                    </td>

                                    <td className="px-8 py-5 text-center">
                                        <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${course.color} bg-slate-50 group-hover:bg-white transition-colors`}>
                                            {course.category}
                                        </span>
                                    </td>

                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-x-2 md:group-hover:translate-x-0">
                                            <button
                                                onClick={() => onViewDetails(course.id)}
                                                className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-indigo-600 hover:shadow-md transition-all border border-slate-100"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => onEditCourse(course.id)} className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-emerald-600 hover:shadow-md transition-all border border-slate-100">
                                                <Edit3 size={16} />
                                            </button>
                                            <button className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-red-600 hover:shadow-md transition-all border border-slate-100">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        {/* Mobile context menu indicator */}
                                        <div className="md:hidden">
                                            <MoreVertical size={16} className="text-slate-400 inline-block" />
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- TABLE FOOTER --- */}
                <div className="p-6 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Hiển thị {courseData.length} khóa học chuyên nghiệp
                    </p>
                    <div className="flex gap-2">
                        {[1, 2, 3].map(page => (
                            <button key={page} className={`w-8 h-8 rounded-lg text-xs font-black transition-all ${page === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-slate-400 hover:bg-slate-100'}`}>
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};