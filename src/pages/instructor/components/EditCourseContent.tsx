import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus, GripVertical, Trash2, Edit2, Video,
    FileText, Save, ArrowLeft, ChevronDown,
    Layout, Sparkles
} from "lucide-react";
import { AIQuizReview } from "./AIQuizReview";

export const EditCourseContent = ({ courseTitle, onBack }: { courseTitle: string, onBack: () => void }) => {
    const [isReviewingQuiz, setIsReviewingQuiz] = useState(false);
    const [selectedLessonForQuiz, setSelectedLessonForQuiz] = useState<any>(null);
    const [sections, setSections] = useState([
        {
            id: "sec-1",
            title: "Chương 1: Giới thiệu về LLMs",
            lessons: [
                { id: "les-1", title: "Khái niệm cơ bản về Transformer", type: "Video" },
            ]
        }
    ]);

    const handleGoToAIQuiz = (lessonId: string) => {
        const lesson = sections.flatMap(s => s.lessons).find(l => l.id === lessonId);
        setSelectedLessonForQuiz(lesson);
        setIsReviewingQuiz(true);
    };

    const addSection = () => {
        setSections([...sections, {
            id: `sec-${Date.now()}`,
            title: "Chương mới chưa đặt tên",
            lessons: []
        }]);
    };

    const addLesson = (sectionId: string, type: "Video" | "Reading") => {
        setSections(sections.map(sec => {
            if (sec.id === sectionId) {
                return {
                    ...sec,
                    lessons: [...sec.lessons, {
                        id: `les-${Date.now()}`,
                        title: "Bài học mới",
                        type
                    }]
                };
            }
            return sec;
        }));
    };

    if (isReviewingQuiz) {
        return (
            <AIQuizReview
                lessonTitle={selectedLessonForQuiz?.title || "Bài học"}
                onBack={() => setIsReviewingQuiz(false)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header: Tối ưu cho cả Mobile và Desktop */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-5xl mx-auto p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 min-w-0">
                        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-indigo-600 transition-colors">
                            <ArrowLeft size={14} /> QUAY LẠI
                        </button>
                        <h1 className="text-lg md:text-2xl font-black text-slate-900 truncate">
                            Nội dung <span className="text-indigo-600">|</span> {courseTitle}
                        </h1>
                    </div>

                    <div className="flex gap-2 shrink-0">
                        <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wider text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all">
                            Xem trước
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                            <Save size={14} /> Lưu
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
                {sections.map((section, sIdx) => (
                    <div key={section.id} className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm overflow-hidden transition-all">
                        {/* Section Header */}
                        <div className="p-4 md:p-6 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                                <GripVertical className="text-slate-300 cursor-grab shrink-0" size={20} />
                                <input
                                    value={section.title}
                                    onChange={(e) => {
                                        const newSecs = [...sections];
                                        newSecs[sIdx].title = e.target.value;
                                        setSections(newSecs);
                                    }}
                                    className="bg-transparent border-none font-black text-sm md:text-lg text-slate-900 focus:ring-0 w-full p-0 truncate"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                                <ChevronDown size={20} className="text-slate-300" />
                            </div>
                        </div>

                        {/* Lessons List */}
                        <div className="p-3 md:p-6 space-y-2 md:space-y-3">
                            <AnimatePresence mode="popLayout">
                                {section.lessons.map((lesson, lIdx) => (
                                    <motion.div
                                        key={lesson.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-50 bg-white hover:border-indigo-100 hover:shadow-sm transition-all group"
                                    >
                                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                            <GripVertical size={16} className="text-slate-200 shrink-0 md:block hidden" />
                                            <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${lesson.type === 'Video' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                                {lesson.type === 'Video' ? <Video size={16} /> : <FileText size={16} />}
                                            </div>
                                            <input
                                                value={lesson.title}
                                                onChange={(e) => {
                                                    const newSecs = [...sections];
                                                    newSecs[sIdx].lessons[lIdx].title = e.target.value;
                                                    setSections(newSecs);
                                                }}
                                                className="text-xs md:text-sm font-bold text-slate-700 border-none focus:ring-0 focus:text-indigo-600 transition-colors bg-transparent p-0 w-full truncate"
                                            />
                                        </div>

                                        {/* Actions: Hiện icon trên mobile để dễ bấm */}
                                        <div className="flex items-center gap-1 ml-2">
                                            <button
                                                onClick={() => handleGoToAIQuiz(lesson.id)}
                                                className="p-2 rounded-lg bg-indigo-500 text-white shadow-sm hover:scale-105 transition-all relative group/btn"
                                            >
                                                <Sparkles size={14} className="md:w-4 md:h-4" />
                                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/btn:md:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                                                    Tạo Quiz AI
                                                </span>
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-indigo-600 hidden md:block">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Add Lesson Actions */}
                            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
                                <button
                                    onClick={() => addLesson(section.id, "Video")}
                                    className="flex items-center justify-center gap-2 py-3 border border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all font-black text-[9px] md:text-xs uppercase tracking-widest"
                                >
                                    <Plus size={14} /> Video
                                </button>
                                <button
                                    onClick={() => addLesson(section.id, "Reading")}
                                    className="flex items-center justify-center gap-2 py-3 border border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all font-black text-[9px] md:text-xs uppercase tracking-widest"
                                >
                                    <Plus size={14} /> Tài liệu
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Section Button */}
                <button
                    onClick={addSection}
                    className="w-full py-6 rounded-[24px] md:rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-indigo-400 hover:text-indigo-600 transition-all group"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:scale-110 transition-all">
                        <Layout size={18} />
                    </div>
                    <span className="font-black text-[10px] uppercase tracking-[0.2em]">Thêm chương mới</span>
                </button>
            </div>
        </div>
    );
};