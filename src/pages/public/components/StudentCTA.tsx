import { motion } from "framer-motion"; // Chỉnh lại import đồng bộ với các file trước
import { Zap, CheckCircle, RefreshCw } from "lucide-react";

export const StudentCTA = () => {
    // Variants cho danh sách check-list (Hiệu ứng xuất hiện lần lượt)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }} // Tăng y để hiệu ứng trồi lên rõ hơn
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[48px] bg-[#F8FAFC] border border-slate-200 p-8 md:p-16 lg:p-20 overflow-hidden"
                >
                    {/* Background Decor với hiệu ứng Floating nhẹ */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                        {/* Cột trái: Nội dung với hiệu ứng trượt từ trái sang */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-8 text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-[11px] font-bold uppercase tracking-widest">
                                <Zap size={14} fill="currentColor" />
                                Dịch vụ hỗ trợ học tập
                            </div>

                            <h2 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">
                                Học tập tập trung. <br />
                                <span className="text-brand-primary">Hiêu sâu kiến thức.</span>
                            </h2>

                            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">
                                MACO loại bỏ sự phân tán bằng khả năng hỏi đáp tức thì cùng trợ lý AI.
                                Giữ vững mạch suy nghĩ để xây dựng nền tảng kiến thức vững chắc.
                            </p>

                            <div className="pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3 group"
                                >
                                    Trải nghiệm ngay
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Cột phải: Khối dịch vụ với hiệu ứng Floating và Stagger */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            // Transition này dành cho hiệu ứng xuất hiện ban đầu
                            transition={{ duration: 0.8, delay: 0.4 }}

                            // Hiệu ứng lơ lửng: Đưa transition vào TRONG animate để tránh trùng lặp
                            animate={{
                                y: [0, -10, 0],
                                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="bg-white p-10 md:p-12 rounded-[32px] border border-slate-100 shadow-2xl space-y-8 relative"
                        >
                            <h4 className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.25em] mb-6">
                                Giải pháp từ MACO
                            </h4>

                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {[
                                    "Hỏi đáp tức thì, tránh ngắt quãng tư duy",
                                    "Hệ thống hóa kiến thức trọng tâm",
                                    "Công cụ đánh giá mức độ thấu hiểu",
                                    "Cập nhật và tối ưu tính năng liên tục"
                                ].map((item, idx) => (
                                    <motion.li
                                        variants={itemVariants}
                                        key={idx}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                                            <CheckCircle size={14} className="text-brand-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-700 text-md font-bold">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="pt-8 border-t border-slate-100 flex items-center gap-5"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0">
                                    <RefreshCw className="text-slate-400 animate-[spin_4s_linear_infinite]" size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-black text-sm uppercase italic tracking-tight">Hành trình không ngừng nghỉ</p>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                        Chúng tôi liên tục làm mới hệ thống dựa trên trải nghiệm thực tế của bạn.
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