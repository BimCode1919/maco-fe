import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, MessageSquareText, BarChart3, BookOpen, Sparkles, Zap } from "lucide-react";
import { AIInstructorFlow } from "./AIInstructorFlow";

export const InstructorFeature = () => {
    return (
        <section className="w-full py-20 overflow-hidden bg-slate-50/30">
            <div className="text-center max-w-3xl mx-auto mb-20 relative px-4">
                {/* Animated Background Icons */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -left-12 opacity-50 hidden md:block"
                >
                    <Sparkles className="text-[#1A56DB]" size={40} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-10 -right-12 opacity-50 hidden md:block"
                >
                    <Zap className="text-amber-500" size={36} />
                </motion.div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-16 left-1/4 opacity-40 hidden md:block"
                >
                    <BookOpen className="text-blue-500" size={32} />
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tight leading-[1.1]">
                    Giải pháp cho Giảng viên<br />
                    <span className="text-[#1A56DB]">tạo câu hỏi từ video với AI</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg lg:text-[20px] font-medium leading-relaxed">
                    Tạo câu hỏi và xây dựng nội dung từ video vẫn còn nhiều thao tác thủ công
                    MACO giúp bạn đơn giản hóa quá trình này và tổ chức bài giảng rõ ràng hơn
                </p>
            </div>

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
                                    <p className="text-xs md:text-sm font-black text-slate-900">Tạo quiz dễ dàng hơn</p>
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
                            <span>Đơn giản hóa việc xây dựng câu hỏi</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900">Đối với Giảng viên</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Từ video bài giảng, AI giúp bạn tạo câu hỏi phù hợp và hỗ trợ tổ chức nội dung một cách rõ ràng, dễ sử dụng
                        </p>
                        <div className="space-y-4 pt-2">
                            {[
                                { icon: <GraduationCap size={18} />, text: "Tạo quiz trực tiếp từ video bài giảng" },
                                { icon: <MessageSquareText size={18} />, text: "Tổ chức và sử dụng lại nội dung câu hỏi dễ dàng" }
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