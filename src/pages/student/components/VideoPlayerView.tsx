import React, { useState } from "react";
import {
    Play, ListVideo, Sparkles, ChevronLeft,
    CheckCircle2, FileText, Download, Edit3, X, LayoutGrid, SendHorizontal
} from "lucide-react";
import { AIChatAssistant } from "./AIChatAssistant";
import { motion, AnimatePresence } from "framer-motion";

export const VideoPlayerView = ({ onBack, lessonTitle }: { onBack: () => void, lessonTitle: string }) => {
    const [showPlaylist, setShowPlaylist] = useState(true);
    const [showAIChat, setShowAIChat] = useState(true);
    const [activeTab, setActiveTab] = useState("transcript");
    const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

    // Mock Data cho Tabs
    const transcriptData = [
        { time: "00:00", text: "Chào mừng các bạn đến với khóa học Python nâng cao." },
        { time: "01:24", text: "Giải thích về cách khai báo List Comprehension trong thực tế và tại sao nó tối ưu hơn vòng lặp for truyền thống." },
        { time: "04:45", text: "Sử dụng Filter và Map để xử lý dữ liệu quy mô lớn." },
        { time: "08:12", text: "Lưu ý về bộ nhớ khi làm việc với Generator Expressions." },
        { time: "12:30", text: "Bài tập thực hành: Chuyển đổi một Dictionary thành List các Tuple." }
    ];

    const filesData = [
        { name: "Slide_Bai_Hoc_02.pdf", size: "2.4 MB", type: "PDF" },
        { name: "Source_Code_Practice.zip", size: "15.8 MB", type: "ZIP" },
        { name: "Cheatsheet_Python_Structures.png", size: "850 KB", type: "IMAGE" }
    ];

    const lessons = [
        { id: 1, title: "Bắt đầu: Cài đặt & Hello World", duration: "05:20", completed: true },
        { id: 2, title: "Cấu trúc Python nâng cao", duration: "15:30", completed: false },
        { id: 3, title: "Xử lý bất đồng bộ (Asyncio)", duration: "22:15", completed: false },
        { id: 4, title: "Decorators & Generators", duration: "18:45", completed: false },
        { id: 5, title: "Quản lý bộ nhớ thực tế", duration: "12:10", completed: false },
    ];

    const tabs = [
        { id: "transcript", label: "Nội dung văn bản", icon: FileText },
        { id: "files", label: "Tài liệu đính kèm", icon: Download },
        { id: "notes", label: "Ghi chú cá nhân", icon: Edit3 },
    ];

    return (
        <div className="flex flex-col h-screen bg-white overflow-hidden font-sans relative">

            {/* 1. Header */}
            <header className="h-16 border-b border-slate-100 px-6 flex items-center justify-between bg-white shrink-0 relative z-[10]">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-xl transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </button>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Đang học</span>
                        <div className="flex items-center gap-3">
                            <h1 className="font-black text-slate-900 text-sm md:text-base tracking-tight truncate max-w-[150px] md:max-w-md">
                                {lessonTitle}
                            </h1>
                            <button
                                onClick={() => setIsLessonModalOpen(true)}
                                className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 rounded-lg transition-all"
                            >
                                <LayoutGrid size={14} />
                                <span className="text-[11px] font-bold uppercase tracking-tight">Đổi bài</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowAIChat(!showAIChat)}
                        className={`px-4 py-2 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${showAIChat ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400 hover:text-indigo-600"
                            }`}
                    >
                        <Sparkles size={16} fill={showAIChat ? "white" : "none"} />
                        <span className="hidden md:inline">Trợ lý AI</span>
                    </button>
                </div>
            </header>

            {/* 2. Popup Lesson (Vertical List) */}
            <AnimatePresence>
                {isLessonModalOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsLessonModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[70vh]"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                                <h3 className="text-xl font-black text-slate-900">Chương trình học</h3>
                                <button onClick={() => setIsLessonModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={24} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
                                {lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        onClick={() => setIsLessonModalOpen(false)}
                                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${lesson.title === lessonTitle ? "border-indigo-600 bg-indigo-50" : "border-slate-50 hover:border-indigo-100 bg-white"
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${lesson.title === lessonTitle ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                                            {lesson.completed ? <CheckCircle2 size={18} /> : <Play size={16} fill="currentColor" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-bold text-sm truncate ${lesson.title === lessonTitle ? "text-indigo-900" : "text-slate-700"}`}>{lesson.title}</h4>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{lesson.duration} • Video Bài {lesson.id}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="flex flex-1 overflow-hidden relative">
                {/* 4. Main Player Section */}
                <main className="flex-1 flex flex-col bg-white overflow-y-auto no-scrollbar scroll-smooth">
                    <div className={`w-full mx-auto transition-all duration-300 ${showAIChat && showPlaylist ? "px-6 py-6" : "px-0 lg:px-12 py-0 lg:py-8"}`}>
                        <div className="relative group transition-all duration-500 overflow-hidden shadow-2xl rounded-none lg:rounded-[32px] aspect-video bg-slate-900">
                            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1600" className="w-full h-full object-cover opacity-60" alt="Thumbnail" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"><Play size={32} fill="currentColor" className="ml-1" /></button>
                            </div>
                        </div>

                        <div className="mt-8 px-6 lg:px-0 pb-20">
                            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-8">{lessonTitle}</h2>

                            {/* Tabs Header */}
                            <div className="flex items-center gap-8 border-b border-slate-100 mb-8 overflow-x-auto no-scrollbar">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`pb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] transition-all relative shrink-0 ${activeTab === tab.id ? "text-indigo-600" : "text-slate-400"}`}
                                    >
                                        <tab.icon size={16} /> {tab.label}
                                        {activeTab === tab.id && <motion.div layoutId="tabActive" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full" />}
                                    </button>
                                ))}
                            </div>

                            {/* Tabs Content */}
                            <div className="bg-slate-50/50 rounded-[32px] p-8 min-h-[400px] border border-slate-100">
                                <AnimatePresence mode="wait">
                                    <motion.div key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                                        {activeTab === "transcript" && (
                                            <div className="space-y-6">
                                                {transcriptData.map((item, i) => (
                                                    <div key={i} className="flex gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white transition-all">
                                                        <span className="text-indigo-600 font-black text-xs shrink-0 mt-1 bg-indigo-50 px-2 py-1 rounded-lg">{item.time}</span>
                                                        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900">{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {activeTab === "files" && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {filesData.map((file, i) => (
                                                    <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-all">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center"><Download size={18} /></div>
                                                            <div><p className="text-sm font-bold text-slate-800 truncate max-w-[150px]">{file.name}</p><p className="text-[10px] text-slate-400 font-bold uppercase">{file.type} • {file.size}</p></div>
                                                        </div>
                                                        <button className="p-2 text-slate-400 hover:text-indigo-600"><Download size={16} /></button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {activeTab === "notes" && (
                                            <div className="space-y-6">
                                                <div className="relative">
                                                    <textarea placeholder="Viết ghi chú cá nhân tại đây..." className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none min-h-[100px]" />
                                                    <button className="absolute bottom-3 right-3 bg-indigo-600 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest">Lưu</button>
                                                </div>
                                                <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl relative group">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-[10px] font-black text-amber-600 bg-white px-2 py-0.5 rounded-md shadow-sm">05:20</span>
                                                        <span className="text-[10px] font-bold text-slate-400 italic">Hôm qua</span>
                                                    </div>
                                                    <p className="text-sm text-slate-700 leading-relaxed">Cần xem kỹ lại phần khai báo class, đoạn này hay bị nhầm với Java.</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </main>

                {/* 5. AI Assistant Sidebar */}
                <AnimatePresence>
                    {showAIChat && (
                        <AIChatAssistant
                            lessonTitle={lessonTitle}
                            isOpen={showAIChat}
                            onClose={() => setShowAIChat(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};