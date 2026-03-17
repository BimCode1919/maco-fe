import { motion } from "framer-motion";
import { Zap, CheckCircle, RefreshCw, ArrowRight } from "lucide-react";

export const StudentCTA = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Thu nhỏ max-w lại thành chuẩn 1280px để cân đối trên Desktop */}
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    // Giảm padding từ p-24 xuống p-16 để block gọn gàng hơn
                    className="relative rounded-[48px] bg-gradient-to-br from-[#1A56DB] via-[#1e40af] to-[#1e3a8a] p-10 md:p-16 overflow-hidden shadow-[0_30px_80px_-15px_rgba(26,86,219,0.25)]"
                >
                    {/* Background Decor giữ nguyên tỉ lệ nhưng giảm độ mờ */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[100px] -mr-40 -mt-40" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-[80px] -ml-24 -mb-24" />

                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Cột trái: Nội dung - text-5xl là vừa đẹp cho Desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:col-span-7 space-y-8 text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-[11px] font-black uppercase tracking-[0.15em]">
                                <Zap size={14} className="fill-blue-300 text-blue-300" />
                                Dịch vụ hỗ trợ học tập
                            </div>

                            <h2 className="text-white text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.15] tracking-tight">
                                Hiểu bài ngay khi học <br className="hidden md:block" />
                                <span className="text-blue-300/90">Mạch học không gián đoạn</span>
                            </h2>

                            <p className="text-blue-100/70 text-lg font-medium leading-relaxed max-w-xl">
                                Trợ lý AI đồng hành 24/7, gỡ rối mọi thắc mắc ngay lập tức
                                giúp bạn duy trì sự tập trung tối đa.
                            </p>

                            <div className="pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-10 py-4 bg-white text-[#1A56DB] font-bold rounded-xl shadow-xl flex items-center justify-center gap-2.5 group transition-all text-[16px]"
                                >
                                    Học thử với AI ngay
                                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Cột phải: Khối dịch vụ - Tinh chỉnh lại Spacing nội bộ */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, -10, 0],
                                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="lg:col-span-5 bg-white/95 backdrop-blur-xl p-8 lg:p-10 rounded-[32px] shadow-2xl border border-white/20 space-y-8"
                        >
                            <h4 className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.2em]">
                                Giải pháp từ MACO
                            </h4>

                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                className="space-y-5"
                            >
                                {[
                                    "Hỏi đáp tức thì, không gián đoạn",
                                    "Nắm ý chính nhanh hơn",
                                    "Theo dõi mức độ hiểu bài",
                                    "Cải thiện liên tục theo quá trình"
                                ].map((item, idx) => (
                                    <motion.li
                                        variants={itemVariants}
                                        key={idx}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#1A56DB] transition-all">
                                            <CheckCircle size={16} className="text-[#1A56DB] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-700 text-[16px] font-bold tracking-tight">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div className="pt-8 border-t border-slate-100 flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0 relative">
                                    <RefreshCw className="text-[#1A56DB] animate-[spin_8s_linear_infinite]" size={22} />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-black text-[12px] uppercase italic tracking-tight">Cập nhật liên tục</p>
                                    <p className="text-slate-500 text-[12px] font-medium leading-tight">
                                        Hệ thống tối ưu hóa dựa trên phản hồi của bạn.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};