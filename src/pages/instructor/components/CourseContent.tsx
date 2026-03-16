import React, { useState } from "react";
import {
    PlayCircle, CheckCircle2, ChevronDown, ChevronUp,
    FileText, Download, ArrowLeft, Clock,
    MoreVertical, Share2, Users, Star, Layers, Edit3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoPlayerView } from "./VideoPlayerView";
import { AIQuizReview } from "./AIQuizReview";
import { AIProcessingModal } from "./AIProcessingModal";

interface Lesson {
    id: number;
    title: string;
    duration: string;
    description: string;
    type: "Video" | "Reading";
}

interface Section {
    title: string;
    lessons: Lesson[];
}

interface CourseContentProps {
    onBack: () => void;
    onEdit: () => void;
}

export const CourseContent = ({ onBack, onEdit }: CourseContentProps) => {
    const [openSections, setOpenSections] = useState<number[]>([0]);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [showQuizReview, setShowQuizReview] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [progress, setProgress] = useState(0);

    // Mock data được cấu trúc lại chuyên nghiệp hơn
    const sections: Section[] = [
        {
            title: "Chương 1: Giới thiệu về LLMs",
            lessons: [
                { id: 1, title: "Khái niệm cơ bản về Transformer", duration: "12:45", description: "Tìm hiểu về kiến trúc Encoder-Decoder và cơ chế Self-Attention mang tính cách mạng.", type: "Video" },
                { id: 2, title: "Lịch sử phát triển của GPT", duration: "08:20", description: "Điểm lại các cột mốc từ GPT-1 đến GPT-4.", type: "Video" },
            ]
        },
        {
            title: "Chương 2: Prompt Engineering",
            lessons: [
                { id: 3, title: "Kỹ thuật Zero-shot & Few-shot", duration: "15:30", description: "Cách tối ưu hóa kết quả đầu ra mà không cần fine-tune mô hình.", type: "Reading" },
                { id: 4, title: "Chain of Thought Prompting", duration: "22:10", description: "Kích thích khả năng suy luận logic của AI thông qua các bước giải quyết vấn đề.", type: "Video" },
            ]
        }
    ];

    const handleGenerateQuiz = (lesson: Lesson) => {
        setIsGenerating(true);
        setProgress(0);

        const duration = 2000;
        const intervalTime = 20;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(oldProgress + increment, 100);
            });
        }, intervalTime);

        setTimeout(() => {
            setIsGenerating(false);
            setShowQuizReview(true);
        }, duration + 400);
    };

    const toggleSection = (idx: number) => {
        setOpenSections(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    // Điều hướng: Nếu đang xem Quiz
    if (showQuizReview) return <AIQuizReview lesson={selectedLesson} onBack={() => setShowQuizReview(false)} />;

    // Điều hướng: Nếu đang xem Video bài giảng
    if (selectedLesson) {
        return (
            <VideoPlayerView
                lesson={selectedLesson}
                allSections={sections}
                onBack={() => setSelectedLesson(null)}
                setSelectedLesson={setSelectedLesson}
                onGenerateQuiz={() => handleGenerateQuiz(selectedLesson)}
                // TRUYỀN THÊM 2 DÒNG NÀY
                isGenerating={isGenerating}
                progress={progress}
            />
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 bg-white text-slate-900 min-h-screen z-[10]">
            <AnimatePresence>
                {isGenerating && <AIProcessingModal progress={Math.round(progress)} />}
            </AnimatePresence>

            {/* --- TOP NAVIGATION --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 z-[10]">
                <button
                    onClick={onBack}
                    className="flex items-center w-fit gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 font-bold hover:bg-slate-100 transition-all active:scale-95"
                >
                    <ArrowLeft size={18} /> Quay lại danh sách
                </button>
                <div className="flex gap-3">
                    <button
                        onClick={onEdit}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#1A56DB] text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#1546b5] transition-all active:scale-95"
                    >
                        <Edit3 size={18} /> Chỉnh sửa khóa học
                    </button>
                    <button className="p-2.5 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-[#1A56DB] transition-colors shadow-sm">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* --- COURSE HEADER SUMMARY --- */}
            <div className="relative rounded-[40px] overflow-hidden bg-slate-900 p-8 md:p-12 text-white shadow-2xl shadow-slate-200">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-[#1A56DB] to-transparent"></div>
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
                        className="w-full h-full object-cover grayscale opacity-60"
                        alt="AI background"
                    />
                </div>

                <div className="relative z-10 space-y-6 max-w-2xl">
                    <span className="px-4 py-1.5 rounded-full bg-[#1A56DB]/20 border border-[#1A56DB]/30 text-blue-300 text-[10px] font-black uppercase tracking-[0.2em]">
                        Artificial Intelligence
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">Mastering Large Language Models</h1>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <div className="flex items-center gap-2.5 text-slate-200">
                            <Users size={20} className="text-[#1A56DB]" />
                            <span className="text-sm font-bold">1,284 Học viên</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                            <Star size={20} className="text-amber-400" fill="currentColor" />
                            <span className="text-sm font-bold">4.9 (428 đánh giá)</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-200">
                            <Layers size={20} className="text-[#1A56DB]" />
                            <span className="text-sm font-bold">24 Bài giảng</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* --- LEFT SIDE: SYLLABUS --- */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Chi tiết nội dung</h2>
                        <button className="text-sm font-bold text-[#1A56DB] hover:text-[#1546b5] transition-colors">Mở tất cả chương</button>
                    </div>

                    <div className="space-y-4">
                        {sections.map((sec, sIdx) => (
                            <div key={sIdx} className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                                <button
                                    onClick={() => toggleSection(sIdx)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-slate-200 flex-shrink-0">
                                            {sIdx + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 text-lg leading-tight">{sec.title}</h3>
                                            <p className="text-xs font-bold text-slate-400 mt-1.5 uppercase tracking-wider">{sec.lessons.length} Bài giảng • 45 phút</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openSections.includes(sIdx) ? 'rotate-180 text-[#1A56DB]' : ''}`} size={20} />
                                </button>

                                <AnimatePresence>
                                    {openSections.includes(sIdx) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
                                        >
                                            <div className="p-4 space-y-3">
                                                {sec.lessons.map((lesson) => (
                                                    <div
                                                        key={lesson.id}
                                                        onClick={() => setSelectedLesson(lesson)}
                                                        className="p-5 bg-white rounded-2xl border border-slate-100 group cursor-pointer hover:border-blue-100 hover:shadow-sm transition-all"
                                                    >
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex items-start gap-4">
                                                                <div className="mt-1 w-10 h-10 rounded-xl bg-blue-50 text-[#1A56DB] flex items-center justify-center shrink-0 group-hover:bg-[#1A56DB] group-hover:text-white transition-colors duration-300">
                                                                    {lesson.type === "Video" ? <PlayCircle size={20} /> : <FileText size={20} />}
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-black text-slate-900 group-hover:text-[#1A56DB] transition-colors leading-snug">
                                                                        {lesson.title}
                                                                    </h4>
                                                                    <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                                                                        {lesson.description}
                                                                    </p>
                                                                    <div className="flex items-center gap-4 mt-3">
                                                                        <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                                            <Clock size={12} /> {lesson.duration}
                                                                        </span>
                                                                        <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black text-slate-500 uppercase group-hover:bg-blue-50 group-hover:text-[#1A56DB] transition-colors">
                                                                            {lesson.type}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="p-1.5 text-slate-300 hover:text-slate-600 transition-colors">
                                                                <MoreVertical size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT SIDE: SIDEBAR --- */}
                <div className="space-y-6">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm space-y-6 sticky top-24">
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Tài liệu đính kèm</h3>

                        <div className="space-y-3">
                            {[
                                { name: "Full_Syllabus_2026.pdf", size: "1.2 MB", type: "pdf" },
                                { name: "Lab_Environment_Setup.zip", size: "45 MB", type: "zip" }
                            ].map((doc, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-blue-50 hover:border-blue-100 transition-all">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`p-2.5 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform ${doc.type === 'pdf' ? 'text-red-500' : 'text-blue-500'}`}>
                                            <FileText size={18} />
                                        </div>
                                        <div className="truncate">
                                            <p className="text-xs font-bold text-slate-800 truncate">{doc.name}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">{doc.size}</p>
                                        </div>
                                    </div>
                                    <Download size={16} className="text-slate-300 group-hover:text-[#1A56DB] transition-colors flex-shrink-0 ml-2" />
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <h4 className="font-black text-slate-900 mb-4">Ghi chú nhanh</h4>
                            <textarea
                                placeholder="Viết ghi chú cá nhân cho khóa học này..."
                                className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl text-sm font-medium focus:bg-white focus:border-[#1A56DB]/20 focus:ring-4 focus:ring-[#1A56DB]/5 outline-none min-h-[120px] transition-all resize-none"
                            />
                        </div>

                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-[0.98]">
                            Xuất báo cáo tiến độ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};