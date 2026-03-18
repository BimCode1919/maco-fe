import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star, Users, Sparkles, Award } from "lucide-react";

interface InstructorHeroProps {
    onExplore: () => void;
}

export const InstructorHero = ({ onExplore }: InstructorHeroProps) => {
    return (
        <section className="mesh-gradient min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden flex items-center">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* CỘT TRÁI: NỘI DUNG */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6"
                    >
                        <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-black tracking-tight text-slate-950 mb-8 leading-[1.1]">
                            Học trực tiếp từ  <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A56DB] to-blue-700">
                                những người đang làm nghề
                            </span>
                        </h1>

                        <p className="text-[17px] md:text-[19px] text-slate-700 max-w-xl mb-12 font-medium leading-[1.6]">
                            Giảng viên là các kỹ sư đang làm việc thực tế, giúp bạn học đúng thứ doanh nghiệp cần
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={onExplore}
                                className="w-full sm:w-auto bg-[#1A56DB] text-white h-14 px-10 rounded-2xl font-bold text-[16px] shadow-xl shadow-blue-400/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                <Users size={20} />
                                Bắt đầu học với mentor
                            </button>
                        </div>
                    </motion.div>

                    {/* CỘT PHẢI: XỬ LÝ ĐÈ CARD BẰNG CÁCH TẠO KHUNG WRAPPER RỘNG HƠN */}
                    <div className="lg:col-span-6 relative flex justify-center items-center min-h-[450px]">

                        {/* Card chính - Đặt ở trung tâm, làm mốc cho các card khác */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full max-w-[420px] p-8 bg-white/60 backdrop-blur-2xl rounded-[40px] border border-white shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white shadow-inner">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900">Senior Java Developer</h3>
                                    <div className="flex items-center gap-1 text-yellow-500 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        <span className="text-slate-400 text-xs font-bold ml-1">(5.0)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <span>Độ hài lòng</span>
                                    <span className="text-blue-600">95%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "95%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-blue-600"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card phụ 1: Top-Right - Điều chỉnh position tránh đè header */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 max-w-[180px] z-30"
                        >
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
                                <Briefcase size={20} />
                            </div>
                            <h4 className="text-[13px] font-black text-slate-900 mb-0.5">Kỹ năng thực tế</h4>
                            <p className="text-[10px] text-slate-500 font-medium leading-tight">Lộ trình sát nhu cầu doanh nghiệp.</p>
                        </motion.div>

                        {/* Card phụ 2: Bottom-Left - Đẩy xuống thấp hơn để thoát khỏi card chính */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-4 md:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 max-w-[180px] z-30"
                        >
                            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                                <GraduationCap size={20} />
                            </div>
                            <h4 className="text-[13px] font-black text-slate-900 mb-0.5">Chuẩn sư phạm</h4>
                            <p className="text-[10px] text-slate-500 font-medium leading-tight">Kiến thức hệ thống bài bản.</p>
                        </motion.div>

                        {/* Sparkle trang trí - Z-index thấp nhất trong cụm bên phải */}
                        <div className="absolute top-0 left-0 text-blue-200 z-10">
                            <Sparkles size={60} className="animate-pulse" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};