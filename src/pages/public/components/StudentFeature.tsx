import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, Video, BrainCircuit, BarChart3 } from "lucide-react";
import { AIStudentFlow } from "./AIStudentFlow";
import { FeatureHeader } from "./FeatureHeader";

export const StudentFeature = () => {
    return (
        <section id="student-feature-section" className="w-full py-24 overflow-hidden">
            <FeatureHeader />

            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Cột hình ảnh minh họa (Giữ nguyên cấu trúc) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 max-w-2xl relative"
                    >
                        <div className="relative rounded-[32px] border-[6px] md:border-[8px] border-white shadow-2xl bg-[#0F172A] aspect-[4/3] md:aspect-video lg:aspect-square max-h-[500px] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A56DB_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="relative w-full h-full p-4 md:p-8 z-10 flex items-center justify-center">
                                <AIStudentFlow />
                            </div>
                        </div>

                        {/* Badge kết quả (Giữ nguyên) */}
                        <div className="absolute -bottom-4 -right-2 md:-right-6 bg-white p-3 md:p-4 rounded-[20px] shadow-xl border border-blue-100 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#1A56DB] flex items-center justify-center text-white">
                                    <BarChart3 size={16} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">Kết quả</p>
                                    <p className="text-xs md:text-sm font-black text-slate-900">Không bị “kẹt” khi học</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột nội dung văn bản (Giữ nguyên nội dung) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 max-w-xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-wider uppercase bg-[#1A56DB] px-4 py-2 rounded-full shadow-lg shadow-blue-500/20">
                            <MessageSquareText size={16} />
                            <span>Hỏi đáp trực tiếp</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900">Đối với Học viên</h3>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Đặt câu hỏi ngay tại bất kỳ thời điểm nào trong video và nhận giải thích tức thì từ AI. Mọi thắc mắc được xử lý ngay lập tức.
                        </p>
                        <div className="space-y-4 pt-2">
                            {[
                                { icon: <Video size={18} />, text: "Quản lý nội dung học tập rõ ràng, dễ theo dõi" },
                                { icon: <BrainCircuit size={18} />, text: "AI tự động tóm tắt và làm nổi bật kiến thức quan trọng" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 font-bold text-slate-800 hover:bg-white transition-colors cursor-default">
                                    <div className="text-[#1A56DB]">{item.icon}</div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 4. CLOSING STATEMENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <p className="text-[#1A56DB] font-bold text-xl md:text-2xl tracking-tight italic">
                        "Mọi thứ bạn cần để hiểu bài đều diễn ra ngay trong lúc học"
                    </p>
                    <div className="w-20 h-1 bg-blue-100 mx-auto mt-4 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};