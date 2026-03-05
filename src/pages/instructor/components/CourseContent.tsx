import React, { useState } from "react";
import {
    PlayCircle, CheckCircle2, ChevronDown, ChevronUp,
    FileText, Download, ArrowLeft, Clock,
    MoreVertical, Share2, Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CourseContent = ({ onBack }: { onBack: () => void }) => {
    const [activeLesson, setActiveLesson] = useState(1);
    const [openSections, setOpenSections] = useState<number[]>([0]); // Mở mặc định chương 1

    const toggleSection = (idx: number) => {
        setOpenSections(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    const sections = [
        {
            title: "Chương 1: Giới thiệu về LLMs",
            lessons: [
                { id: 1, title: "Khái niệm cơ bản về Transformer", duration: "12:45", completed: true },
                { id: 2, title: "Lịch sử phát triển của GPT", duration: "08:20", completed: true },
            ]
        },
        {
            title: "Chương 2: Prompt Engineering",
            lessons: [
                { id: 3, title: "Kỹ thuật Zero-shot & Few-shot", duration: "15:30", completed: false },
                { id: 4, title: "Chain of Thought Prompting", duration: "22:10", completed: false },
            ]
        }
    ];

    return (
        <div className="p-4 md:p-8 max-w-[1500px] mx-auto space-y-6">
            {/* Top Navigation */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-600 font-bold border border-slate-100 hover:bg-slate-50 transition-all shadow-sm"
                >
                    <ArrowLeft size={18} /> Quay lại
                </button>
                <div className="flex gap-3">
                    <button className="p-2.5 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-indigo-600 transition-all"><Share2 size={18} /></button>
                    <button className="p-2.5 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-indigo-600 transition-all"><MoreVertical size={18} /></button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cột Trái: Player & Nội dung chi tiết */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Video Player Area */}
                    <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl relative aspect-video group">
                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                            alt="Course Thumbnail"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <button className="w-24 h-24 bg-indigo-600/90 text-white rounded-full flex items-center justify-center shadow-3xl hover:scale-110 transition-transform backdrop-blur-sm">
                                <PlayCircle size={56} fill="currentColor" className="text-white/20" />
                                <PlayCircle size={56} className="absolute" />
                            </button>
                        </div>
                        {/* Fake Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="h-1.5 w-full bg-white/20 rounded-full mb-4 overflow-hidden">
                                <div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-center text-white text-xs font-bold">
                                <span className="bg-black/40 px-3 py-1 rounded-lg">04:20 / 12:45</span>
                                <span className="uppercase tracking-widest opacity-70">1080p Full HD</span>
                            </div>
                        </div>
                    </div>

                    {/* Tab Information */}
                    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
                        <div className="flex gap-8 border-b border-slate-100 mb-8">
                            {['Mô tả', 'Tài liệu học tập', 'Thảo luận'].map((tab, i) => (
                                <button
                                    key={tab}
                                    className={`pb-4 text-sm font-black transition-all ${i === 1 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-black text-slate-900">Tài nguyên bài học</h3>
                                <button className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-wider">
                                    <Calendar size={14} /> Thêm vào lịch học
                                </button>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { name: "Slide_Giang_Day_LLM.pdf", size: "4.2 MB" },
                                    { name: "CheatSheet_Prompting.pdf", size: "1.8 MB" }
                                ].map((doc, i) => (
                                    <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-indigo-200 hover:bg-indigo-50/30 transition-all cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-sm"><FileText size={24} /></div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                                <p className="text-[10px] text-slate-400 font-bold">{doc.size}</p>
                                            </div>
                                        </div>
                                        <Download size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-slate-50">
                                <h4 className="font-black text-slate-900 mb-3">Về bài học này</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    Trong bài học này, chúng ta sẽ tìm hiểu sâu về kiến trúc Transformer - trái tim của các mô hình ngôn ngữ lớn hiện nay. Bạn sẽ nắm được cách thức Attention Mechanism hoạt động và tại sao nó lại tạo ra bước ngoặt cho AI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cột Phải: Danh sách bài học (Playlist) */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm sticky top-24">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Nội dung khóa học</h3>
                            <span className="text-[10px] font-black bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full uppercase">45% Hoàn thành</span>
                        </div>

                        <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto no-scrollbar pr-1">
                            {sections.map((sec, sIdx) => (
                                <div key={sIdx} className="border border-slate-50 rounded-2xl overflow-hidden bg-white shadow-sm">
                                    <button
                                        onClick={() => toggleSection(sIdx)}
                                        className={`w-full p-4 flex items-center justify-between transition-all ${openSections.includes(sIdx) ? 'bg-slate-50' : 'bg-white'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xs">
                                                {sIdx + 1}
                                            </div>
                                            <span className="text-sm font-black text-slate-800 text-left line-clamp-1">{sec.title}</span>
                                        </div>
                                        {openSections.includes(sIdx) ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                                    </button>

                                    <AnimatePresence>
                                        {openSections.includes(sIdx) && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden bg-white"
                                            >
                                                <div className="p-2 space-y-1">
                                                    {sec.lessons.map((lesson) => (
                                                        <div
                                                            key={lesson.id}
                                                            className={`p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all group ${activeLesson === lesson.id ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'hover:bg-slate-50'}`}
                                                            onClick={() => setActiveLesson(lesson.id)}
                                                        >
                                                            <div className="relative">
                                                                {lesson.completed ? (
                                                                    <CheckCircle2 size={18} className={activeLesson === lesson.id ? 'text-white' : 'text-emerald-500'} />
                                                                ) : (
                                                                    <div className={`w-[18px] h-[18px] rounded-full border-2 ${activeLesson === lesson.id ? 'border-white/50' : 'border-slate-200'}`} />
                                                                )}
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className={`text-xs font-black ${activeLesson === lesson.id ? 'text-white' : 'text-slate-700 group-hover:text-indigo-600'}`}>
                                                                    {lesson.title}
                                                                </p>
                                                                <div className={`flex items-center gap-2 mt-1 text-[10px] font-bold ${activeLesson === lesson.id ? 'text-white/70' : 'text-slate-400'}`}>
                                                                    <Clock size={12} /> {lesson.duration}
                                                                </div>
                                                            </div>
                                                            {activeLesson === lesson.id && (
                                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-4 bg-slate-50 rounded-2xl text-slate-400 font-black text-xs flex items-center justify-center gap-3 border border-slate-100 hover:bg-slate-100 transition-all cursor-not-allowed uppercase tracking-widest">
                            <Download size={18} /> Nhận Chứng chỉ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};