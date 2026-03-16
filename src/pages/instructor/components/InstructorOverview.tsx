import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    BookOpen,
    DollarSign,
    Star,
    TrendingUp,
    MoreVertical,
    ArrowUpRight
} from "lucide-react";

// Dữ liệu đồng bộ từ file MyCourses của bạn
const courseData = [
    {
        id: 1,
        name: "Mastering Large Language Models",
        students: 45, // Giảm xuống mức MVP
        rating: 4.8,
        revenue: "9.000.000đ", // Giá thực tế cho giai đoạn đầu
        status: "Đang bán",
        category: "Artificial Intelligence",
        color: "bg-indigo-50 text-indigo-600",
        image: "https://media.licdn.com/dms/image/v2/D5612AQELiz9P4VMUIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723273771853?e=2147483647&v=beta&t=p9f3bFiAzTToh3wDqgz0vcjICaMxXxuutMNLCfqha7o"
    },
    {
        id: 2,
        name: "AI trong Digital Marketing",
        students: 32,
        rating: 4.9,
        revenue: "6.400.000đ",
        status: "Đang bán",
        category: "Marketing",
        color: "bg-blue-50 text-blue-600",
        image: "https://caodang.fpt.edu.vn/wp-content/uploads/2023/12/FPT-Polytechnic_AI_Marketing-5.webp"
    },
    {
        id: 3,
        name: "Usability-Testing Essentials",
        students: 18,
        rating: 4.7,
        revenue: "3.600.000đ",
        status: "Đang bán",
        category: "Product Design",
        color: "bg-orange-50 text-orange-600",
        image: "https://blog.pwskills.com/wp-content/uploads/2025/04/usability-testing.jpg"
    },
    {
        id: 4,
        name: "UX Research Fundamentals",
        students: 12,
        rating: 4.5,
        revenue: "2.400.000đ",
        status: "Nháp", // Thay đổi trạng thái cho đa dạng
        category: "UIUX Design",
        color: "bg-emerald-50 text-emerald-600",
        image: "https://graphicdesignjunction.com/wp-content/uploads/2023/05/uxresearch_guide_social.jpg"
    },
];

const formatCurrency = (value) => {
    const num = parseInt(value.replace(/\D/g, ""));
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    return num.toLocaleString() + "đ";
};

export const InstructorOverview = () => {
    const totalStudents = courseData.reduce((acc, curr) => acc + curr.students, 0);
    const avgRating = (courseData.reduce((acc, curr) => acc + curr.rating, 0) / courseData.length).toFixed(1);
    const rawRevenue = "21400000"; // Để dạng số để dễ tính toán

    return (
        <div className="p-4 lg:p-8 max-w-[1600px] mx-auto space-y-8">
            {/* 1. Welcome Section - Làm gọn và sang hơn */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                        Xin chào, Trần! 👋
                    </h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                        Hệ thống của bạn đang tăng trưởng tốt trong 30 ngày qua.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100/50">
                    <TrendingUp size={16} className="text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700">
                        +12.4% <span className="text-emerald-600/60 font-medium ml-1">tăng trưởng</span>
                    </span>
                </div>
            </div>

            {/* Stats Grid - Hiển thị các con số mới */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                    { label: "Tổng học viên", value: totalStudents.toLocaleString(), icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Khóa học", value: courseData.length.toString().padStart(2, '0'), icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
                    { label: "Đánh giá TB", value: avgRating, icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
                    { label: "Doanh thu", value: formatCurrency(rawRevenue), icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="bg-white p-5 lg:p-6 rounded-[24px] border border-slate-100 shadow-sm flex flex-col justify-between min-h-[140px]"
                    >
                        <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                            <stat.icon size={20} />
                        </div>
                        <div>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-xl lg:text-2xl font-black text-slate-900">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* 3. Main Content: Course Management */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Quản lý khóa học</h3>
                        <button className="text-indigo-600 font-bold text-xs hover:text-indigo-700 transition-colors">
                            Xem tất cả báo cáo
                        </button>
                    </div>

                    <div className="space-y-3">
                        {courseData.map((course) => (
                            <div
                                key={course.id}
                                className="group bg-white p-3 rounded-[20px] border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all flex items-center gap-4"
                            >
                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden shrink-0">
                                    <img src={course.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-slate-900 text-sm lg:text-base truncate mb-1">
                                        {course.name}
                                    </h4>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Users size={12} className="text-slate-400" />
                                            <span className="text-[11px] font-bold text-slate-500">{course.students}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star size={12} className="text-amber-400 fill-amber-400" />
                                            <span className="text-[11px] font-bold text-slate-500">{course.rating}</span>
                                        </div>
                                        <div className="px-2 py-0.5 bg-slate-50 rounded-md text-[9px] font-bold text-slate-400 uppercase">
                                            {course.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right shrink-0 hidden sm:block px-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Doanh thu</p>
                                    <p className="text-sm font-black text-emerald-600">{course.revenue}</p>
                                </div>

                                <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Sidebar: Recent Reviews & Support */}
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-[28px] p-6 text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Đánh giá mới</h3>
                            <div className="space-y-5">
                                {[
                                    { user: "Học viên AI", text: "Bài giảng thực sự rất chuyên sâu.", rating: 5 },
                                    { user: "Học viên UX", text: "Cách giải thích Transformer rất hay.", rating: 5 },
                                ].map((rev, i) => (
                                    <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs font-bold">{rev.user}</span>
                                            <div className="flex gap-0.5 text-amber-400">
                                                {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                                            </div>
                                        </div>
                                        <p className="text-[11px] text-slate-400 italic">"{rev.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="bg-slate-900 rounded-[28px] p-6 text-white shadow-xl shadow-slate-200 border border-slate-800 relative overflow-hidden group">
                        {/* Hiệu ứng gradient mờ ở góc để làm card trông sâu hơn */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20 transition-transform group-hover:rotate-12">
                                <BookOpen size={20} className="text-white" />
                            </div>

                            <h4 className="text-lg font-black mb-1 tracking-tight">Quy trình vận hành</h4>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Dành cho Instructor</p>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-3">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-200">Xây dựng nội dung</p>
                                        <p className="text-[10px] text-slate-500 leading-snug">Tải tài liệu hoặc dùng AI tạo Quiz từ link YouTube nhanh chóng.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-200">Sử dụng tính năng AI</p>
                                        <p className="text-[10px] text-slate-500 leading-snug">Tự động hóa việc tạo câu hỏi Quiz từ tài liệu bài giảng.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn">
                                Trung tâm trợ giúp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};