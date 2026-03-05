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
        students: 850,
        rating: 4.8,
        revenue: "425.000.000đ",
        status: "Đang bán",
        category: "Artificial Intelligence",
        color: "bg-indigo-50 text-indigo-600",
        icon: "LLM",
        image: "https://media.licdn.com/dms/image/v2/D5612AQELiz9P4VMUIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723273771853?e=2147483647&v=beta&t=p9f3bFiAzTToh3wDqgz0vcjICaMxXxuutMNLCfqha7o"
    },
    {
        id: 2,
        name: "AI trong Digital Marketing",
        students: 980,
        rating: 4.9,
        revenue: "294.000.000đ",
        status: "Đang bán",
        category: "Marketing",
        color: "bg-blue-50 text-blue-600",
        icon: "DM",
        image: "https://caodang.fpt.edu.vn/wp-content/uploads/2023/12/FPT-Polytechnic_AI_Marketing-5.webp"
    },
    {
        id: 3,
        name: "Usability-Testing Essentials",
        students: 420,
        rating: 4.7,
        revenue: "126.000.000đ",
        status: "Đang bán",
        category: "Product Design",
        color: "bg-orange-50 text-orange-600",
        icon: "UT",
        image: "https://blog.pwskills.com/wp-content/uploads/2025/04/usability-testing.jpg"
    },
    {
        id: 4,
        name: "UX Research Fundamentals",
        students: 310,
        rating: 4.9,
        revenue: "93.000.000đ",
        status: "Đang bán",
        category: "UIUX Design",
        color: "bg-emerald-50 text-emerald-600",
        icon: "UX",
        image: "https://graphicdesignjunction.com/wp-content/uploads/2023/05/uxresearch_guide_social.jpg"
    },
];

export const InstructorOverview = () => {
    // Tính toán thống kê tổng hợp từ courseData
    const totalStudents = courseData.reduce((acc, curr) => acc + curr.students, 0);
    const avgRating = (courseData.reduce((acc, curr) => acc + curr.rating, 0) / courseData.length).toFixed(1);
    const totalRevenue = "1.538.000.000đ"; // Tổng giả lập

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
                <div>
                    <h1 className="text-3xl font-black text-slate-900 mb-2">Xin chào, Trần! 👋</h1>
                    <p className="text-slate-500 font-medium italic">Hôm nay là một ngày tuyệt vời để cập nhật kiến thức mới.</p>
                </div>
                <div className="bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                        <TrendingUp size={18} />
                    </div>
                    <span className="text-sm font-black text-emerald-700">+12.4% <span className="text-slate-400 font-bold ml-1 text-xs">so với tháng trước</span></span>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Tổng học viên", value: totalStudents.toLocaleString(), icon: Users, color: "bg-blue-600", shadow: "shadow-blue-100" },
                    { label: "Khóa học", value: courseData.length.toString().padStart(2, '0'), icon: BookOpen, color: "bg-indigo-600", shadow: "shadow-indigo-100" },
                    { label: "Đánh giá TB", value: avgRating, icon: Star, color: "bg-amber-500", shadow: "shadow-amber-100" },
                    { label: "Doanh thu", value: totalRevenue, icon: DollarSign, color: "bg-emerald-600", shadow: "shadow-emerald-100" },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                    >
                        <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform`}>
                            <stat.icon size={22} />
                        </div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* My Courses List - Dạng Horizontal Card */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Quản lý khóa học</h3>
                        <button className="flex items-center gap-1 text-indigo-600 font-black text-xs uppercase hover:underline">
                            Xem tất cả <ArrowUpRight size={14} />
                        </button>
                    </div>

                    <div className="grid gap-4">
                        {courseData.slice(0, 4).map((course, idx) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-4 rounded-[28px] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6 group hover:border-indigo-600/30 transition-all"
                            >
                                <div className="w-full md:w-36 h-24 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
                                    <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>

                                <div className="flex-1 w-full space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{course.name}</h4>
                                            <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${course.color}`}>{course.category}</span>
                                        </div>
                                        <span className={`px-3 py-1 ${course.status === 'Đang bán' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'} text-[9px] font-black rounded-full uppercase`}>
                                            {course.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase">Học viên</p>
                                            <p className="text-sm font-black text-slate-800">{course.students.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase">Đánh giá</p>
                                            <p className="text-sm font-black text-slate-800 flex items-center gap-1">
                                                {course.rating} <Star size={12} className="text-amber-500 fill-amber-500" />
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-slate-400 uppercase">Doanh thu</p>
                                            <p className="text-sm font-black text-emerald-600">{course.revenue}</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all hidden md:block">
                                    <MoreVertical size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sidebar: Reviews */}
                <div className="space-y-8">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12"></div>
                        <h3 className="text-lg font-black text-slate-900 mb-6 relative z-10">Đánh giá gần đây</h3>
                        <div className="space-y-6 relative z-10">
                            {[
                                { user: "Hoàng Anh", text: "Bài giảng LLM thực sự rất chuyên sâu.", rating: 5, time: "2 phút trước" },
                                { user: "Minh Thu", text: "Cách giải thích về Transformer rất dễ hiểu.", rating: 5, time: "45 phút trước" },
                                { user: "Quốc Bảo", text: "Cần thêm bài tập thực hành phần Prompt.", rating: 4, time: "2 giờ trước" },
                            ].map((review, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{review.user}</p>
                                        <div className="flex text-amber-400"><Star size={10} fill="currentColor" /></div>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium line-clamp-2 italic">"{review.text}"</p>
                                    <p className="text-[10px] text-slate-300 font-bold mt-1 uppercase tracking-tighter">{review.time}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all">
                            Xem tất cả báo cáo
                        </button>
                    </div>

                    {/* Support Card */}
                    <div className="bg-indigo-600 rounded-[32px] p-8 text-white relative shadow-xl shadow-indigo-100 overflow-hidden group">
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                        <h3 className="text-xl font-black mb-2 tracking-tight">Cần hỗ trợ kỹ thuật?</h3>
                        <p className="text-indigo-100 text-xs font-medium mb-6 leading-relaxed">Đội ngũ kỹ thuật luôn sẵn sàng giúp bạn tối ưu hóa video và tài liệu học tập.</p>
                        <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-indigo-50 transition-all">
                            Chat với chúng tôi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};