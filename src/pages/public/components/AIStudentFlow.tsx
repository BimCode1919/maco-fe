import { motion } from "motion/react";
import { MessageSquare, Cpu, PlayCircle, ArrowDown, ListChecks, Zap, FileText, ClipboardCheck } from "lucide-react";

// --- Component 1: AIStudentFlow (Phối màu Brand Blue & Deep Slate) ---
export const AIStudentFlow = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-5 w-full relative z-10" // Thêm relative z-10
        >
            {/* Header - Sử dụng màu Brand 600 */}
            <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-7">
                <div className="w-10 md:w-14 h-10 md:h-14 rounded-lg md:rounded-2xl bg-[#1A56DB] flex items-center justify-center text-white shadow-lg shadow-blue-900/50 flex-shrink-0">
                    <MessageSquare size={16} className="md:size-7 font-black" />
                </div>
                <div className="min-w-0">
                    <h4 className="text-white font-black text-xs md:text-base uppercase tracking-wider truncate">Contextual Q&A</h4>
                    <p className="text-blue-400 text-[10px] md:text-sm font-mono font-bold tracking-widest truncate">REAL-TIME FLOW</p>
                </div>
            </div>

            <div className="space-y-3 md:space-y-5">
                {/* Student Question - Nền trắng sạch sẽ, viền xanh Brand */}
                <div className="bg-white p-3 md:p-5 rounded-2xl md:rounded-3xl rounded-tl-none border-2 border-blue-100 shadow-xl shadow-black/20 w-[95%]">
                    <p className="text-[8px] md:text-xs text-[#475569] font-black mb-1 md:mb-2 uppercase tracking-widest">Học viên hỏi:</p>
                    <p className="text-[#0F172A] text-xs md:text-base font-black italic leading-relaxed break-words">
                        "Giải thích phần này ở phút 05:20?"
                    </p>
                </div>

                <div className="flex justify-center py-1 md:py-2 relative">
                    {/* Hiệu ứng tia sét nhỏ dọc theo mũi tên để tăng độ "chất" */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#1A56DB] via-transparent to-[#1A56DB] opacity-30"></div>
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowDown size={16} className="md:size-6 text-[#1A56DB]" />
                    </motion.div>
                </div>

                {/* AI Response - Nền xanh đậm, hiệu ứng Glassmorphism */}
                <div className="bg-[#1A56DB]/10 backdrop-blur-md p-3 md:p-5 rounded-2xl md:rounded-3xl rounded-tl-none border-2 border-[#1A56DB]/30 shadow-2xl shadow-blue-900/40 w-full relative overflow-hidden">
                    {/* Một dải màu chạy dọc tạo điểm nhấn */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A56DB]"></div>

                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3 min-w-0">
                        <Cpu size={14} className="md:size-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[8px] md:text-sm text-blue-400 font-black uppercase tracking-widest truncate">MACO Phản hồi:</span>
                    </div>
                    <p className="text-white text-xs md:text-base leading-relaxed font-bold break-words">
                        "Tại phút <span className="text-blue-400 font-black underline">05:20</span>, bài giảng định nghĩa..."
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 md:gap-2 text-[7px] md:text-xs text-blue-300 font-bold overflow-hidden">
                        <PlayCircle size={12} className="md:size-4 text-blue-400 flex-shrink-0" />
                        <span className="truncate opacity-80">Video_Lesson_01.mp4</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};