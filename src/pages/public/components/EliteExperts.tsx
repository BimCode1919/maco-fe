import { motion } from "framer-motion";
import { Award, Sparkles, TrendingUp, Users } from "lucide-react";
import { ALL_INSTRUCTORS } from "../../public/data/instructorsData";
import { InstructorCard } from "./InstructorCard";

interface EliteExpertsProps {
    onSelect: (ins: any) => void;
}

export const EliteExperts = ({ onSelect }: EliteExpertsProps) => {
    const topExperts = [...ALL_INSTRUCTORS]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="relative py-24 md:py-36 overflow-hidden">
            {/* 1. LAYER NỀN: Chuyển sắc từ mesh sang trắng tinh */}
            <div className="absolute inset-0 z-0">
                {/* Lớp màu nền chính: Nhạt dần từ trên xuống dưới */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-[#ffffff] to-white" />

                {/* Các đốm màu (Glow Orbs) chỉ tập trung ở phần trên */}
                <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] opacity-70" />
                <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">

                {/* 2. HEADER: Giữ nguyên style rực rỡ */}
                <div className="text-center mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm text-blue-600 text-xs md:text-sm font-black uppercase tracking-widest mb-6 border border-blue-50"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Đội ngũ dẫn đầu</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Giảng viên <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">được đánh giá cao</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Được công nhận bởi cộng đồng học viên
                    </motion.p>
                </div>

                {/* 3. GRID CARDS: Giữ hiệu ứng nổi bật */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {topExperts.map((ins, index) => (
                        <motion.div
                            key={ins.id || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur opacity-0 group-hover:opacity-15 transition duration-500" />

                            <div className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
                                <div className="p-2">
                                    <InstructorCard ins={ins} onClick={() => onSelect(ins)} />
                                </div>
                                <div className="absolute top-6 right-6 p-2 bg-amber-50 rounded-xl text-amber-500 border border-amber-100 shadow-sm group-hover:rotate-12 transition-transform">
                                    <Award size={18} fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};