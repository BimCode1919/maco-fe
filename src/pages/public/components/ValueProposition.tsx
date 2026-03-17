import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Play, Target, Sparkles } from 'lucide-react';

const values = [
    {
        icon: <MessageSquare size={30} />,
        title: "Hỏi ngay khi học, đáp tức thì",
        desc: "Mọi thắc mắc được giải đáp ngay trong lúc bạn xem video.",
        // Màu SẮC MỚI: Đơn sắc đậm
        bgColor: "bg-[#1A56DB]", // Blue
        glowColor: "rgba(26, 86, 219, 0.4)", // rgba of #1A56DB
        floatDelay: 0,
    },
    {
        icon: <Zap size={30} />,
        title: "Hiểu sâu kiến thức trong vài giây",
        desc: "AI tóm tắt và giải thích những khái niệm khó một cách bình dân.",
        bgColor: "bg-[#FBBF24]", // Amber
        glowColor: "rgba(251, 191, 36, 0.4)", // rgba of #FBBF24
        floatDelay: 0.2,
    },
    {
        icon: <Play size={30} />,
        title: "Học liên tục, không bị ngắt quãng",
        desc: "Tập trung hoàn toàn vào bài giảng, không lo bị kẹt lại giữa chừng.",
        bgColor: "bg-[#7C3AED]", // Violet
        glowColor: "rgba(124, 58, 237, 0.4)", // rgba of #7C3AED
        floatDelay: 0.1,
    },
    {
        icon: <Target size={30} />,
        title: "Gợi ý bài tập đúng chỗ hổng",
        desc: "Hệ thống tự nhận diện phần bạn chưa hiểu để củng cố thêm.",
        bgColor: "bg-[#10B981]", // Emerald
        glowColor: "rgba(16, 185, 129, 0.4)", // rgba of #10B981
        floatDelay: 0.3,
    }
];

export const ValueProposition = () => {
    return (
        <section className="py-28 bg-white relative overflow-hidden">
            {/* Background Decor giữ nguyên */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1A56DB] text-xs font-black uppercase tracking-[0.2em] mb-8"
                    >
                        Đặc quyền của bạn
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
                        Hỗ trợ tức thì  <br />
                        <span className="text-[#1A56DB]">trong từng khoảnh khắc học</span>
                    </h2>
                    <p className="text-slate-500 text-lg md:text-xl font-bold max-w-2xl mx-auto">
                        AI trả lời và giải thích ngay khi bạn cần, liền mạch, không gián đoạn
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                            viewport={{ once: true, amount: 0.2 }}
                            // 2. ĐỘNG: Hiệu ứng "Floating" (bay lơ lửng) tự động
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: value.floatDelay,
                                ease: "easeInOut"
                            }}
                            // 3. ĐỘNG: Hiệu ứng hover mạnh hơn với bóng đổ màu tương ứng
                            whileHover={{
                                y: -15,
                                transition: { duration: 0.3 },
                                boxShadow: `0 25px 60px -12px ${value.glowColor}`
                            }}
                            className="group relative bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-center text-center"
                        >
                            {/* Border Drawing Effect khi hover */}
                            <div className="absolute inset-0 rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 border-[3px] border-[#1A56DB]/50 rounded-[40px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                            </div>

                            {/* Icon Box - 1. Màu SẮC MỚI: Màu Solid Đậm Đà */}
                            <div className={`mb-10 w-20 h-20 rounded-[28px] ${value.bgColor} flex items-center justify-center text-white relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>

                                {/* 3. ĐỘNG: Pulse Effect - Hào quang Pulse lan tỏa từ Icon Box */}
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className={`absolute inset-0 rounded-[28px] -z-10`}
                                    // Inline style cho background Pulse Effect để glow đúng màu
                                    style={{ background: `linear-gradient(to right, ${value.glowColor}, ${value.glowColor})` }}
                                />

                                <div className="relative z-10 flex items-center justify-center text-white">
                                    {value.icon}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center flex-grow">
                                <h4 className="text-xl md:text-2xl font-black text-slate-950 mb-4 leading-tight group-hover:text-[#1A56DB] transition-colors">
                                    {value.title}
                                </h4>
                                <p className="text-slate-600 text-[15px] leading-relaxed font-semibold">
                                    {value.desc}
                                </p>
                            </div>

                            {/* Bottom line decor - Màu Solid của Box */}
                            <div className={`absolute bottom-6 w-16 h-1 ${value.bgColor}/10 group-hover:bg-[#1A56DB]/60 group-hover:w-24 transition-all duration-300 rounded-full`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};