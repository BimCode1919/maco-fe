import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {
    Star, Clock, CheckCircle, PlayCircle, ChevronDown,
    User, ArrowLeft, MessageSquare, Lock, BookOpen,
    Target, Lightbulb, ShieldCheck, TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";

export const CourseDetailPage = ({ course, setCurrentPage, openAuth }: any) => {
    const [openChapter, setOpenChapter] = useState<number | null>(0);

    useEffect(() => window.scrollTo(0, 0), [course]);

    const dummySyllabus = [
        { title: "Chương 1: Tổng quan và Cài đặt", lessons: ["Giới thiệu về lộ trình", "Chuẩn bị môi trường thực hành", "Bài tập khởi động"] },
        { title: "Chương 2: Kiến thức nền tảng", lessons: ["Các khái niệm cốt lõi", "Tư duy giải quyết vấn đề", "Thực hành Case Study 1"] },
        { title: "Chương 3: Kỹ thuật nâng cao", lessons: ["Tối ưu hóa hiệu năng", "Xử lý lỗi thường gặp", "Project thực tế"] }
    ];

    const courseDetails = {
        description: "Khóa học này được thiết kế để cung cấp cho bạn cái nhìn toàn diện và thực tế nhất về công nghệ hiện đại. Không chỉ dừng lại ở lý thuyết, bạn sẽ được tham gia trực tiếp vào việc xây dựng các hệ thống thực tế từ con số 0.",
        requirements: ["Đã có kiến thức cơ bản về lập trình", "Sử dụng máy tính thành thạo", "Tinh thần tự học cao"],
        targetAudience: "Sinh viên CNTT, Lập trình viên muốn nâng cấp kỹ năng, hoặc người làm kỹ thuật muốn chuyển đổi công nghệ.",
        reviews: [
            { name: "Học viên ẩn danh", rating: 5, comment: "Nội dung rất thực tế, giảng viên nhiệt tình!", date: "2 ngày trước" },
            { name: "Học viên ẩn danh", rating: 4, comment: "Khóa học hay, nhưng phần bài tập hơi khó một chút.", date: "1 tuần trước" }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Nav setCurrentPage={setCurrentPage} currentPage="courses" openAuth={openAuth} />

            {/* --- HERO SECTION (30% - Secondary Color Area) --- */}
            <section className="bg-slate-900 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <button
                        onClick={() => setCurrentPage("courses")}
                        className="group flex items-center gap-2 text-slate-400 hover:text-brand-primary mb-12 font-black transition-all uppercase text-[10px] tracking-widest"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Trở lại danh sách
                    </button>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6">
                                <TrendingUp size={14} /> Khóa học được đề xuất
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                                {course.title}
                            </h1>
                            <p className="text-slate-400 text-lg mb-8 max-w-2xl font-medium leading-relaxed">
                                {courseDetails.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />)}
                                    </div>
                                    <span className="font-black text-xl">{course.rating}</span>
                                    <span className="text-slate-500 text-sm font-medium">({course.reviews} đánh giá)</span>
                                </div>
                                <div className="h-6 w-[1px] bg-slate-800 hidden md:block" />
                                <div className="flex items-center gap-3 font-bold text-slate-300">
                                    <img src="https://ui-avatars.com/api/?name=Instructor&background=random" className="w-10 h-10 rounded-full border-2 border-slate-700" alt="instructor" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-500 uppercase">Giảng viên</span>
                                        <span className="text-sm">{course.instructor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT (60% - Primary White Area) --- */}
            <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">

                    {/* Giới thiệu chi tiết */}
                    <section>
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <BookOpen className="text-brand-primary" /> Chi tiết khóa học
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            {courseDetails.description} Qua khóa học này, bạn sẽ không chỉ học cú pháp mà còn học cách tư duy hệ thống, cách giải quyết các bài toán hóc búa trong thực tế sản phẩm.
                        </p>
                    </section>

                    {/* Lợi ích & Đối tượng */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-slate-50 p-8 rounded-[32px]">
                            <h4 className="font-black mb-4 flex items-center gap-2 text-slate-900">
                                <Target size={20} className="text-brand-primary" /> Đối tượng học
                            </h4>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{courseDetails.targetAudience}</p>
                        </section>
                        <section className="bg-slate-50 p-8 rounded-[32px]">
                            <h4 className="font-black mb-4 flex items-center gap-2 text-slate-900">
                                <Lightbulb size={20} className="text-brand-primary" /> Yêu cầu đầu vào
                            </h4>
                            <ul className="space-y-2">
                                {courseDetails.requirements.map((req, i) => (
                                    <li key={i} className="text-sm text-slate-600 font-medium flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" /> {req}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Syllabus */}
                    <section>
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <div className="w-2 h-8 bg-brand-primary rounded-full" />
                            Lộ trình học bài bản
                        </h3>
                        <div className="space-y-4">
                            {dummySyllabus.map((chapter, idx) => (
                                <div key={idx} className="border border-slate-100 rounded-[24px] overflow-hidden transition-all hover:border-slate-200">
                                    <button
                                        onClick={() => setOpenChapter(openChapter === idx ? null : idx)}
                                        className={`w-full flex items-center justify-between p-6 transition-colors ${openChapter === idx ? "bg-slate-50" : "bg-white"}`}
                                    >
                                        <div className="text-left">
                                            <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-1">PHẦN {idx + 1}</span>
                                            <span className="font-black text-slate-900 text-lg">{chapter.title}</span>
                                        </div>
                                        <div className={`p-2 rounded-full bg-white border border-slate-100 shadow-sm transition-transform duration-300 ${openChapter === idx ? "rotate-180" : ""}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    {openChapter === idx && (
                                        <div className="px-6 pb-6 pt-2 space-y-3 bg-slate-50">
                                            {chapter.lessons.map((lesson, lIdx) => (
                                                <div key={lIdx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 group cursor-pointer hover:border-brand-primary/30 transition-all">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                                                            <PlayCircle size={18} />
                                                        </div>
                                                        <span className="text-[15px] font-bold text-slate-700">{lesson}</span>
                                                    </div>
                                                    <Lock size={16} className="text-slate-300" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Đánh giá */}
                    <section>
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <MessageSquare className="text-brand-primary" /> Phản hồi từ học viên
                        </h3>
                        <div className="space-y-6">
                            {courseDetails.reviews.map((rev, i) => (
                                <div key={i} className="p-6 border border-slate-100 rounded-[28px]">
                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                                            <div>
                                                <div className="font-black text-sm">{rev.name}</div>
                                                <div className="text-[10px] text-slate-400 uppercase font-bold">{rev.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex text-amber-400 h-fit">
                                            {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{rev.comment}"</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* --- SIDEBAR (10% - Accent Focus) --- */}
                <aside className="relative">
                    <div className="sticky top-28">
                        <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-2xl shadow-slate-200/50">
                            <div className="relative aspect-video mb-8 rounded-3xl overflow-hidden group">
                                <img src={course.image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all">
                                </div>
                            </div>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl font-black text-slate-900">{course.price}</span>
                                {course.price !== "Miễn phí" && (
                                    <span className="text-slate-400 font-bold line-through text-sm">3.000.000đ</span>
                                )}
                            </div>

                            {/* Accent Button (10%) */}
                            <button
                                onClick={() => openAuth("register-student")}
                                className="w-full bg-brand-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-brand-primary/25 hover:bg-blue-700 hover:translate-y-[-2px] active:translate-y-0 transition-all mb-8 text-lg"
                            >
                                Đăng ký ngay
                            </button>

                            <div className="space-y-4 bg-slate-50 p-6 rounded-3xl">
                                <div className="flex justify-between text-xs py-2">
                                    <span className="text-slate-400 font-bold flex items-center gap-2"><Clock size={16} /> Thời lượng</span>
                                    <span className="font-black text-slate-900">{course.duration}</span>
                                </div>
                                <div className="flex justify-between text-xs py-2">
                                    <span className="text-slate-400 font-bold flex items-center gap-2"><MessageSquare size={16} /> Hỗ trợ AI</span>
                                    <span className="font-black text-slate-900">24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>

            <Footer />
        </div>
    );
};