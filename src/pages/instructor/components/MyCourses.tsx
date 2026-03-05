import React from "react";
import { motion } from "framer-motion";
import { Edit3, Trash2, Eye, Search, Filter, PlayCircle } from "lucide-react";

// Seed data: 5 khóa học với thông tin khớp với format hình ảnh
const courseData = [
    {
        id: 1,
        name: "Mastering Large Language Models",
        level: "Advanced",
        date: "11 March 2024",
        category: "Artificial Intelligence",
        color: "bg-indigo-50 text-indigo-600",
        icon: "LLM"
    },
    {
        id: 2,
        name: "AI trong Digital Marketing",
        level: "Intermediate",
        date: "15 April 2024",
        category: "Marketing",
        color: "bg-blue-50 text-blue-600",
        icon: "DM"
    },
    {
        id: 3,
        name: "Usability-Testing Essentials",
        level: "Beginners",
        date: "30 June 2024",
        category: "Product Design",
        color: "bg-orange-50 text-orange-600",
        icon: "UT"
    },
    {
        id: 4,
        name: "Fullstack Web Development",
        level: "Beginners",
        date: "12 July 2024",
        category: "Programming",
        color: "bg-purple-50 text-purple-600",
        icon: "WD"
    },
    {
        id: 5,
        name: "UX Research Fundamentals",
        level: "Intermediate",
        date: "05 August 2024",
        category: "UIUX Design",
        color: "bg-emerald-50 text-emerald-600",
        icon: "UX"
    },
];

export const MyCourses = ({ onViewDetails }: { onViewDetails: (id: number) => void }) => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 mb-2">Khóa học của tôi</h1>
                    <p className="text-slate-500 font-medium italic">"Hoàn thành các bài giảng để nâng cao chất lượng học thuật"</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Tìm tên khóa học..."
                            className="pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl outline-none focus:border-indigo-600 w-full md:w-72 transition-all shadow-sm"
                        />
                    </div>
                    <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* Course Table */}
            <div className="bg-white rounded-32 shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-50 bg-slate-50/30">
                                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Khóa học</th>
                                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Ngày tạo</th>
                                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Danh mục</th>
                                <th className="px-8 py-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {courseData.map((course, idx) => (
                                <motion.tr
                                    key={course.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group hover:bg-slate-50/80 transition-all cursor-default"
                                >
                                    {/* Cột Tên Khóa Học */}
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-5">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm border border-white transition-transform group-hover:scale-110 ${course.color.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20`}>
                                                <span className={course.color.split(' ')[1]}>{course.icon}</span>
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-0.5">
                                                    {course.name}
                                                </p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                                    {course.level}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Cột Ngày Tạo */}
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-sm font-bold text-slate-600">{course.date}</span>
                                    </td>

                                    {/* Cột Danh Mục */}
                                    <td className="px-8 py-6 text-center">
                                        <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest inline-block ${course.color}`}>
                                            {course.category}
                                        </span>
                                    </td>

                                    {/* Cột Hành Động */}
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-end gap-3">
                                            <button
                                                onClick={() => onViewDetails(course.id)}
                                                className="group/btn p-2.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                                                title="Xem nội dung"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button
                                                className="group/btn p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100"
                                                title="Chỉnh sửa"
                                            >
                                                <Edit3 size={18} />
                                            </button>
                                            <button
                                                className="group/btn p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all border border-transparent hover:border-red-100"
                                                title="Xóa khóa học"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer của Table (Optional) */}
                <div className="p-6 bg-slate-50/30 border-t border-slate-50 text-center">
                    <button className="text-sm font-black text-indigo-600 hover:underline">
                        Tải thêm khóa học
                    </button>
                </div>
            </div>
        </div>
    );
};