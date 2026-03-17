import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, MessageSquare, BrainCircuit, Sparkles, ChevronRight, Zap } from 'lucide-react';

// Định nghĩa interface cho props (nếu bạn dùng TypeScript)
interface SolutionSectionProps {
    openAuth: (mode: "login" | "register-select") => void;
}

const StepItem = ({ number, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group relative flex gap-6 pb-12 last:pb-0"
    >
        <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-slate-100 group-last:hidden" />

        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center group-hover:border-[#1A56DB] group-hover:shadow-[0_0_15px_rgba(26,86,219,0.3)] transition-all duration-300">
            <span className="text-[#475569] font-black text-sm group-hover:text-[#1A56DB]">{number}</span>
        </div>

        <div className="flex-grow pt-1">
            <h4 className="text-[#0F172A] font-black text-xl mb-2 group-hover:text-[#1A56DB] transition-colors duration-300">
                {title}
            </h4>
            <p className="text-[#64748B] leading-relaxed font-medium tracking-tight group-hover:text-[#475569]">
                {desc}
            </p>
        </div>
    </motion.div>
);

export const SolutionSection = ({ openAuth }: SolutionSectionProps) => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            {/* Các đốm màu chạy ngầm */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1A56DB] text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <Zap size={12} fill="currentColor" />
                        GIẢI PHÁP TỐI ƯU
                    </motion.div>

                    <h2 className="text-[#0F172A] text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-4xl leading-[1.05]">
                        Một cách học <span className="text-[#1A56DB]">liền mạch</span> và được <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#1A56DB] to-indigo-500 bg-clip-text text-transparent">
                            hỗ trợ ngay
                        </span> trong lúc bạn cần
                    </h2>

                    <p className="text-[#475569] text-lg md:text-xl font-medium max-w-2xl leading-relaxed border-l-4 border-blue-100 pl-6">
                        Nền tảng học tập <span className="text-[#0F172A] font-bold">tích hợp AI</span> giúp bạn hiểu bài, đặt câu hỏi và <span className="text-[#1A56DB] font-bold">tiến bộ ngay</span> — không gián đoạn, không mơ hồ
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT: Step Flow */}
                    <div className="bg-slate-50/50 p-8 md:p-12 rounded-[40px] border border-slate-100">
                        <StepItem
                            number="01"
                            title="Bắt đầu đúng hướng"
                            desc="Lộ trình học được định hình rõ ràng theo mục tiêu của bạn"
                            delay={0.1}
                        />
                        <StepItem
                            number="02"
                            title="Hiểu ngay trong lúc học"
                            desc="Đặt câu hỏi trực tiếp khi đang xem video và nhận giải thích tức thì"
                            delay={0.2}
                        />
                        <StepItem
                            number="03"
                            title="Củng cố liên tục"
                            desc="Hệ thống tự động tạo câu hỏi để bạn ghi nhớ sâu hơn sau mỗi bài"
                            delay={0.3}
                        />
                    </div>

                    {/* RIGHT: Visual Mockup */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#1A56DB] to-cyan-400 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition" />

                        <div className="relative bg-[#0F172A] rounded-[38px] border-[6px] border-[#1E293B] shadow-2xl overflow-hidden aspect-video">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1000"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                                alt="Video mockup"
                            />

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="absolute top-8 right-8 w-72 bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-t-4 border-[#1A56DB]"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Sparkles size={12} className="text-[#1A56DB]" />
                                    </div>
                                    <span className="text-[10px] font-black text-[#1A56DB] uppercase">Maco AI trợ giúp</span>
                                </div>
                                <p className="text-xs text-[#0F172A] font-bold leading-relaxed">
                                    "Phần này có nghĩa là <span className="text-[#1A56DB]">Cấu trúc dữ liệu</span> giúp tối ưu bộ nhớ..."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="mt-24 text-center">
                    <h3 className="text-3xl md:text-5xl font-black mb-12 italic tracking-tighter">
                        <span className="text-[#475569]">Hiểu ngay khi học. </span>
                        <span className="bg-gradient-to-r from-[#1A56DB] to-blue-400 bg-clip-text text-transparent">
                            Tiến bộ không gián đoạn
                        </span>
                    </h3>

                    {/* Logic onClick được thêm ở đây */}
                    <button
                        onClick={() => openAuth("register-select")}
                        className="relative overflow-hidden group bg-[#1A56DB] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(26,86,219,0.4)] transition-all hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative flex items-center gap-3">
                            Bắt đầu trải nghiệm ngay
                            <ChevronRight />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};