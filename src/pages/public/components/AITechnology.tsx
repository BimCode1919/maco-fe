import { motion } from "motion/react";
import { MessageSquare, PlayCircle, Zap, Cpu, ClipboardCheck, ListChecks, FileText, ArrowDown } from "lucide-react";

export const AITechnology = () => {
    return (
        <section className="bg-white py-32 relative overflow-hidden">
            {/* 60% Nền: Sạch sẽ, thoáng đãng */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-brand-slate-900 text-4xl md:text-5xl font-black tracking-tight leading-tight">
                        Kiến trúc <span className="text-brand-primary">AI Core</span> đa nhiệm
                    </h2>
                    <p className="text-brand-slate-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Hệ thống xử lý ngôn ngữ tự nhiên được tối ưu để tự động hóa
                        mọi công đoạn chuẩn bị và hỗ trợ học tập.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* LUỒNG 1: AI HỎI ĐÁP (RAG) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-[40px] p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h3 className="text-brand-slate-900 font-bold text-xl uppercase tracking-wider">Contextual Retrieval</h3>
                                <p className="text-brand-primary text-xs font-mono font-bold tracking-widest">REAL-TIME Q&A FLOW</p>
                            </div>
                        </div>

                        <div className="space-y-6 flex-grow">
                            {/* Student Prompt */}
                            <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-slate-200 shadow-sm max-w-[90%]">
                                <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-widest">Học viên hỏi:</p>
                                <p className="text-brand-slate-700 text-sm font-medium italic">"Giải thích giúp tôi phần RAG ở phút 05:20?"</p>
                            </div>

                            <div className="flex justify-center py-2">
                                <ArrowDown size={20} className="text-brand-primary/30 animate-bounce" />
                            </div>

                            {/* AI Response */}
                            <div className="bg-brand-primary/5 p-6 rounded-3xl rounded-tl-none border border-brand-primary/20 relative">
                                <div className="flex items-center gap-2 mb-2">
                                    <Cpu size={16} className="text-brand-primary" />
                                    <span className="text-[11px] text-brand-primary font-black uppercase tracking-widest">MACO AI Phản hồi:</span>
                                </div>
                                <p className="text-brand-slate-800 text-sm leading-relaxed font-medium">
                                    "Tại phút <span className="text-brand-primary font-extrabold underline decoration-brand-primary/30 underline-offset-4">05:20</span>, bài giảng định nghĩa RAG là công nghệ giúp tôi đối soát đúng video này để trả lời bạn."
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 font-bold">
                                    <PlayCircle size={14} className="text-brand-primary" /> Nguồn: Video_Lesson_01.mp4
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* LUỒNG 2: AI TẠO QUIZ - Chuyển sang tông Sky/Cyan chuyên nghiệp */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-sky-50/50 rounded-[40px] p-10 border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            {/* Sử dụng màu Sky-600 để đậm hơn nền nhưng vẫn thuộc dải xanh */}
                            <div className="w-12 h-12 rounded-2xl bg-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-600/20">
                                <ListChecks size={24} />
                            </div>
                            <div>
                                <h3 className="text-brand-slate-900 font-bold text-xl uppercase tracking-wider">Quiz Synthesis</h3>
                                <p className="text-sky-600 text-xs font-mono font-bold tracking-widest">AUTO-ASSESSMENT FLOW</p>
                            </div>
                        </div>

                        <div className="space-y-6 flex-grow">
                            <div className="flex gap-4">
                                <div className="flex-1 bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
                                    <PlayCircle size={18} className="text-sky-300 mx-auto mb-2" />
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Video Input</p>
                                </div>
                                <div className="flex items-center">
                                    <Zap size={16} className="text-sky-400 animate-pulse" />
                                </div>
                                <div className="flex-1 bg-white p-4 rounded-2xl border border-sky-100 text-center shadow-sm">
                                    <FileText size={18} className="text-sky-400 mx-auto mb-2" />
                                    <p className="text-[10px] text-sky-600 font-bold uppercase">Transcript</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sky-100">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        className="h-full bg-sky-500" // Thanh loading màu xanh sáng
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-4 mt-2">
                                    <ClipboardCheck size={16} className="text-sky-500" />
                                    <span className="text-[11px] text-sky-600 font-black uppercase tracking-widest">Kết quả khởi tạo:</span>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-brand-slate-800 text-sm font-bold leading-tight">"Câu 1: Tại phút 05:20, Logic nghiệp vụ được dùng để làm gì?"</p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {/* Đáp án đúng dùng tông xanh cyan sáng */}
                                        <div className="text-[12px] p-2 bg-sky-50 rounded-lg text-sky-700 font-bold border border-sky-100 italic">
                                            A. Định nghĩa luồng xử lý dữ liệu (Đúng)
                                        </div>
                                        <div className="text-[12px] p-2 bg-slate-50 rounded-lg text-slate-400">
                                            B. Tự đoán câu trả lời ngẫu nhiên
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <p className="text-center mt-16 text-slate-400 text-sm font-bold italic">
                    * Mọi quá trình xử lý diễn ra hoàn toàn <span className="text-brand-primary">tự động</span>.
                </p>
            </div>
        </section>
    );
};