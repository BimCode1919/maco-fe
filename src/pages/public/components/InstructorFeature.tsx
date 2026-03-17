import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, MessageSquareText, BarChart3 } from "lucide-react";
import { AIInstructorFlow } from "./AIInstructorFlow";
import { FeatureHeader } from "./FeatureHeader";

export const InstructorFeature = () => {
    return (
        <section className="w-full py-20 overflow-hidden bg-slate-50/30">
            <FeatureHeader />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
                    {/* Cột hình ảnh (Phải) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 max-w-2xl relative"
                    >
                        <div className="relative rounded-[32px] border-[8px] border-white shadow-2xl bg-[#0F172A] aspect-[4/3] md:aspect-video lg:aspect-square max-h-[500px] flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full p-4 md:p-8 z-10 flex items-center justify-center">
                                <AIInstructorFlow />
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-2 md:-left-6 bg-white p-3 md:p-4 rounded-[20px] shadow-xl border border-blue-100 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#1A56DB] flex items-center justify-center text-white">
                                    <BarChart3 size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">Kết quả</p>
                                    <p className="text-xs md:text-sm font-black text-slate-900">Giảm 70% thời gian soạn bài</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột nội dung (Trái) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 max-w-xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-wider uppercase bg-[#1A56DB] px-4 py-2 rounded-full">
                            <BrainCircuit size={16} />
                            <span>Tối ưu bài giảng</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900">Dành cho Giảng viên</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            AI phân tích video để tự động tạo transcript và bộ câu hỏi trắc nghiệm (Quiz) chỉ trong vài giây.
                        </p>
                        <div className="space-y-4 pt-2">
                            {[
                                { icon: <GraduationCap size={18} />, text: "Theo dõi tiến độ học tập chi tiết" },
                                { icon: <MessageSquareText size={18} />, text: "Phản hồi học viên theo ngữ cảnh" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800 shadow-sm">
                                    <div className="text-[#1A56DB]">{item.icon}</div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};