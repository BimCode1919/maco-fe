import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, BatteryLow, AlertCircle, Sparkles, Zap, MousePointer2 } from 'lucide-react';

interface ProblemCardProps {
    icon: React.ElementType;
    title: string;
    delay: number;
}

const ProblemCard = ({ icon: Icon, title, delay }: ProblemCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -8 }}
        // Thu nhỏ padding từ p-10 xuống p-7, bo góc từ 40px xuống 32px
        className="group relative bg-white p-7 md:p-8 rounded-[32px] border-2 border-slate-100 hover:border-[#1A56DB] shadow-sm hover:shadow-[0_15px_40px_rgba(26,86,219,0.12)] transition-all duration-500 flex flex-col items-center text-center"
    >
        {/* Icon thu nhỏ từ w-20 xuống w-16 */}
        <div className="relative w-16 h-16 rounded-2xl bg-[#1A56DB] flex items-center justify-center mb-6 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
            <Icon className="text-white" size={28} strokeWidth={2.5} />

            <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-white p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap size={10} fill="currentColor" />
            </div>
        </div>

        {/* Font size giảm nhẹ từ xl xuống lg/base */}
        <p className="text-[#0F172A] font-black text-base md:text-lg leading-tight">
            {title}
        </p>

        <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#1A56DB]"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
        />
    </motion.div>
);

export const ProblemSection = () => {
    const problems = [
        { icon: Compass, title: "Học online nhưng không biết bắt đầu từ đâu" },
        { icon: Search, title: "Xem video nhưng không hiểu, phải tự tìm câu trả lời" },
        { icon: BatteryLow, title: "Dễ mất động lực và bỏ dở giữa chừng" },
    ];

    return (
        <section className="relative pt-20 pb-28 px-6 overflow-hidden bg-white">
            {/* Nền gradient mượt mà */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F8FAFC]" />

            <div className="max-w-5xl mx-auto relative z-10"> {/* Thu hẹp max-w từ 6xl xuống 5xl */}
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-[#1A56DB]/20 mb-6"
                    >
                        <AlertCircle size={14} className="text-[#1A56DB]" />
                        <span className="text-[#1A56DB] text-[10px] font-black uppercase tracking-widest">Thách thức</span>
                    </motion.div>

                    <h2 className="text-[#0F172A] text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        Bạn đã từng gặp vấn đề này?
                    </h2>
                    <div className="w-16 h-1.5 bg-[#1A56DB] mx-auto rounded-full" />
                </div>

                {/* Grid Card - Thu nhỏ khoảng cách gap từ 10 xuống 6 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {problems.map((p, i) => (
                        <ProblemCard icon={p.icon} title={p.title} delay={i * 0.1} />
                    ))}
                </div>

                {/* Highlight Statement - Gọn gàng hơn */}
                <motion.div className="max-w-3xl mx-auto text-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#1A56DB]/5 blur-2xl rounded-full"></div>

                        <div className="relative bg-white border-2 border-[#1A56DB] px-8 py-10 rounded-[40px] shadow-xl shadow-blue-500/5">
                            <h3 className="text-xl md:text-3xl font-black leading-tight italic">
                                <span className="text-[#475569]">"Biết bắt đầu, hiểu ngay, và luôn tiếp tục< br/></span>
                                <span className="text-[#1A56DB] block md:inline mt-2 md:mt-0 underline decoration-[#1A56DB]/30 underline-offset-4">
                                    với MACO AI
                                </span>
                                <span className="text-[#475569]">"</span>
                            </h3>

                            <div className="mt-8 flex items-center justify-center gap-2 text-[#1A56DB] font-black uppercase tracking-widest text-xs">
                                <span>Giải pháp từ MACO</span>
                                <Sparkles size={14} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};