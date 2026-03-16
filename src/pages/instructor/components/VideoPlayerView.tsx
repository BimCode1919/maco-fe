import React from "react";
import { ArrowLeft, Play, Clock, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AIProcessingModal } from "./AIProcessingModal";

export const VideoPlayerView = ({
    lesson,
    allSections,
    onBack,
    setSelectedLesson,
    onGenerateQuiz,
    isGenerating = false,
    progress = 0
}: {
    lesson: any,
    allSections: any[],
    onBack: () => void,
    setSelectedLesson: (l: any) => void,
    onGenerateQuiz: (lesson: any) => void,
    isGenerating?: boolean,
    progress?: number
}) => {
    return (
        <div className="min-h-screen bg-white relative flex flex-col z-[10]">

            <AnimatePresence>
                {isGenerating && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
                    >
                        <AIProcessingModal progress={Math.round(progress)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* TOP NAV */}
            <div className="border-b border-slate-100 sticky top-0 bg-white z-[60] h-14 md:h-16 ">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-full flex items-center justify-between gap-4">
                    <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-[#1A56DB] transition-colors shrink-0">
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline text-sm">Quay lại</span>
                    </button>

                    <div className="flex-1 flex flex-col items-center overflow-hidden">
                        <h2 className="font-black text-slate-900 truncate w-full text-center text-xs md:text-sm tracking-tight px-2">
                            {lesson.title}
                        </h2>
                    </div>

                    <div className="hidden md:flex items-center gap-3 shrink-0">
                        <button
                            onClick={() => onGenerateQuiz(lesson)}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#1A56DB] text-white rounded-xl font-black text-[10px] uppercase tracking-wider"
                        >
                            <Sparkles size={14} />
                            Tạo Quiz AI
                        </button>
                    </div>
                    <div className="md:hidden w-10"></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                {/* MAIN CONTENT AREA */}
                <div className="flex-1 bg-white overflow-y-auto no-scrollbar pb-40 md:pb-0">

                    {/* Video Area */}
                    <div className="aspect-video w-full relative overflow-hidden bg-slate-950 group cursor-pointer">
                        {/* Overlay Gradient với hiệu ứng Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A56DB]/30 to-slate-950/90 z-10 transition-opacity duration-500 group-hover:opacity-80"></div>

                        {/* Background Image/Pattern (Tùy chọn) */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0"></div>

                        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
                            {/* Play Button Container với hiệu ứng Sóng & Hover */}
                            <div className="relative mb-6">
                                {/* Vòng sóng tỏa ra (Ripple Effect) */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 2],
                                        opacity: [0.5, 0.3, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0 rounded-full bg-white/20"
                                />

                                {/* Nút Play chính */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-2xl border border-white/30 shadow-2xl relative z-10 transition-colors group-hover:bg-[#1A56DB]/20 group-hover:border-[#1A56DB]/50"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner group-hover:bg-[#1A56DB] transition-colors duration-300">
                                        <Play
                                            fill="currentColor"
                                            className="text-[#1A56DB] group-hover:text-white ml-1 transition-colors duration-300"
                                            size={32}
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Text Animation */}
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    Click để bắt đầu học
                                </p>
                                <h3 className="text-white font-black text-xl md:text-3xl tracking-tighter line-clamp-2 max-w-2xl drop-shadow-2xl">
                                    {lesson.title}
                                </h3>
                            </motion.div>
                        </div>

                        {/* Hiệu ứng viền sáng khi hover (Glow effect) */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1A56DB]/30 transition-all duration-500 z-30 pointer-events-none"></div>
                    </div>

                    {/* Lesson Info */}
                    <div className="p-6 md:p-12 max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">{lesson.title}</h1>
                        <div className="flex flex-wrap gap-4 text-slate-400 font-black text-[10px] uppercase tracking-widest mb-6">
                            <span className="flex items-center gap-1.5"><Clock size={14} /> {lesson.duration}</span>
                            <span className="flex items-center gap-1.5 text-green-500"><CheckCircle2 size={14} /> Sẵn sàng cho AI</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-base md:text-xl font-medium border-l-4 border-slate-100 pl-4">
                            {lesson.description || "Nội dung bài học đang được cập nhật."}
                        </p>
                    </div>

                    {/* LESSON LIST FOR MOBILE (Hiện ra khi thu bé màn hình) */}
                    <div className="lg:hidden p-6 border-t border-slate-100 bg-slate-50/50">
                        <h3 className="font-black text-slate-900 text-sm tracking-widest uppercase mb-6">Danh sách bài giảng</h3>
                        <div className="space-y-6">
                            {allSections.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{section.title}</h4>
                                    <div className="grid gap-2">
                                        {section.lessons.map((l: any) => {
                                            const isActive = l.id === lesson.id;
                                            return (
                                                <button
                                                    key={l.id}
                                                    onClick={() => {
                                                        setSelectedLesson(l);
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all border ${isActive ? 'bg-white shadow-md border-blue-200' : 'bg-transparent border-transparent'}`}
                                                >
                                                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#1A56DB] text-white' : 'bg-slate-200 text-slate-400'}`}>
                                                        <Play size={12} fill={isActive ? "currentColor" : "none"} />
                                                    </div>
                                                    <span className={`text-xs font-bold ${isActive ? 'text-[#1A56DB]' : 'text-slate-600'}`}>{l.title}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIDEBAR FOR DESKTOP */}
                <div className="hidden lg:block w-[400px] border-l border-slate-100 bg-slate-50/50 overflow-y-auto no-scrollbar">
                    <div className="p-8">
                        <h3 className="font-black text-slate-900 text-base tracking-widest uppercase mb-6">Nội dung khóa học</h3>
                        <div className="space-y-8">
                            {allSections.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-3">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">{section.title}</h4>
                                    <div className="space-y-1.5">
                                        {section.lessons.map((l: any) => (
                                            <button
                                                key={l.id}
                                                onClick={() => setSelectedLesson(l)}
                                                className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all border ${l.id === lesson.id ? 'bg-white shadow-md border-blue-100 text-[#1A56DB]' : 'hover:bg-white/50 border-transparent text-slate-600'}`}
                                            >
                                                <Play size={12} />
                                                <span className="text-xs font-bold truncate">{l.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE AI BANNER */}
            <div className="lg:hidden fixed bottom-6 left-0 right-0 px-4 z-[70] pointer-events-none">
                <AnimatePresence>
                    {!isGenerating && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto border border-white/10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                    <Sparkles size={20} className="text-white animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-blue-400">AI Assistant</p>
                                    <p className="text-[11px] font-bold">Tạo câu hỏi tự động ngay?</p>
                                </div>
                            </div>
                            <button onClick={() => onGenerateQuiz(lesson)} className="bg-white text-slate-900 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase">
                                Thử ngay
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};