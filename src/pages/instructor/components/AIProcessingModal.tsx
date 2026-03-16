import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AIProcessingModal = ({ progress }: { progress: number }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[32px] p-8 max-w-sm w-full shadow-2xl text-center space-y-6 border border-slate-100"
            >
                <div className="relative w-24 h-24 mx-auto">
                    {/* Vòng track */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="48" cy="48" r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-slate-100"
                        />
                        <motion.circle
                            cx="48" cy="48" r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            animate={{ strokeDashoffset: 251.2 - (251.2 * progress) / 100 }}
                            className="text-blue-600"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                        <Sparkles size={32} className="animate-pulse" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900 leading-tight">AI đang phân tích bài học</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Chúng tôi đang tạo bộ câu hỏi trắc nghiệm dựa trên nội dung video...
                    </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Tiến độ</span>
                    <span className="text-lg font-black text-blue-600">{progress}%</span>
                </div>
            </motion.div>
        </div>
    );
};