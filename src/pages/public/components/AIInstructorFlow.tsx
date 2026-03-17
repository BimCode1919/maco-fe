import { motion } from "motion/react";
import { ListChecks, Zap, PlayCircle, FileText, ClipboardCheck } from "lucide-react";

export const AIInstructorFlow = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 relative z-10" // Thêm relative z-10
        >
            {/* Header - Brand Blue shadow */}
            <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#1A56DB] flex items-center justify-center text-white shadow-xl shadow-blue-900/50">
                    <ListChecks size={28} className="font-black" />
                </div>
                <div>
                    <h4 className="text-white font-black text-base uppercase tracking-wider">Quiz Synthesis</h4>
                    <p className="text-blue-400 text-sm font-mono font-bold tracking-widest">AUTO-ASSESSMENT</p>
                </div>
            </div>

            <div className="space-y-5">
                {/* Input Flow - Slate & White */}
                <div className="flex gap-3">
                    <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-blue-50 text-center shadow-lg">
                        <PlayCircle size={24} className="text-[#0F172A] mx-auto mb-2 font-black" />
                        <p className="text-[10px] text-[#475569] font-black uppercase tracking-wide">Video Input</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <Zap size={24} className="text-[#1A56DB]" />
                        </motion.div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-blue-50 text-center shadow-lg">
                        <FileText size={24} className="text-[#0F172A] mx-auto mb-2 font-black" />
                        <p className="text-[10px] text-[#475569] font-black uppercase tracking-wide">Transcript</p>
                    </div>
                </div>

                {/* Processing Result - Card trắng cao cấp nổi trên nền tối */}
                <div className="bg-white p-6 rounded-[32px] border-b-4 border-blue-600 shadow-2xl relative overflow-hidden">
                    {/* Thanh tiến trình màu Brand Blue */}
                    <motion.div
                        className="absolute top-0 left-0 h-1 bg-[#1A56DB]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    <div className="flex items-center gap-3 mb-4 mt-2">
                        <ClipboardCheck size={20} className="text-[#1A56DB] font-black" />
                        <span className="text-xs text-[#1A56DB] font-black uppercase tracking-widest">Kết quả Quiz:</span>
                    </div>

                    <p className="text-[#0F172A] text-base font-black leading-tight mb-4">
                        "Câu 1: Tại phút 05:20, Logic được dùng để làm gì?"
                    </p>

                    <div className="space-y-3">
                        {/* Đáp án đúng dùng màu xanh Brand nhạt */}
                        <div className="text-sm p-3 bg-blue-50 rounded-2xl text-[#1A56DB] font-black border-2 border-blue-100 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#1A56DB] text-white flex items-center justify-center text-[10px]">✓</span>
                            A. Định nghĩa luồng xử lý
                        </div>
                        <div className="text-sm p-3 bg-[#F8FAFC] rounded-2xl text-[#475569] font-bold border-2 border-slate-100 opacity-60">
                            B. Tự đoán ngẫu nhiên
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};