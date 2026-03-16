import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star, Users } from "lucide-react";

interface InstructorHeroProps {
    onExplore: () => void;
}

export const InstructorHero = ({ onExplore }: InstructorHeroProps) => {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* KHỐI NỘI DUNG (BÊN TRÁI) - Giữ nguyên */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
                        >
                            <GraduationCap size={14} className="text-[#1A56DB]" /> 
                            <span>Đội ngũ giảng viên CNTT</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
                        >
                            Học cùng giảng viên <br />
                            <span className="text-[#1A56DB]">Giàu kinh nghiệm</span>
                        </motion.h1>

                        <p className="text-base md:text-lg text-slate-500 font-medium mb-10 leading-relaxed max-w-xl">
                            Trao đổi và học hỏi trực tiếp cùng đội ngũ giảng viên chuyên ngành. 
                            Chúng tôi tập trung vào kiến thức nền tảng và kỹ năng thực hành sát với thực tế.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onExplore}
                                className="px-8 py-4 bg-[#1A56DB] text-white rounded-2xl font-bold text-base shadow-md hover:bg-[#1547b8] transition-all flex items-center justify-center"
                            >
                                Xem danh sách giảng viên
                            </button>

                            <button
                                className="px-8 py-4 bg-transparent text-slate-600 border border-slate-300 rounded-2xl font-bold text-base hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center"
                            >
                                Tìm hiểu lộ trình
                            </button>
                        </div>
                    </div>

                    {/* KHỐI CARD THỊ GIÁC (BÊN PHẢI) - MỚI THÊM */}
                    <div className="flex-1 w-full max-w-md relative mt-12 md:mt-0">
                        {/* Card 1: Chuyên gia Học thuật */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                            className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100 flex items-start gap-4 mb-6 relative z-10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-[#1A56DB]">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 mb-1">Nền tảng vững chắc</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    Giảng viên từ các khoa CNTT uy tín, cam kết kiến thức chuẩn sư phạm.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2: Kinh nghiệm Thực chiến (Nằm lệch một chút) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100 flex items-start gap-4 md:ml-12 relative z-20"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                                <Briefcase size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 mb-1">Kỹ năng thực tế</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    Các Senior Engineer chia sẻ kinh nghiệm xử lý dự án thực tế tại doanh nghiệp.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};