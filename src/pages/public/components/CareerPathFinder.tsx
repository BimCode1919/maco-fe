import { motion } from "framer-motion";
import { Users2, Lightbulb, ShieldCheck, Code2, Cpu, ArrowUpRight } from "lucide-react";
import { CAREER_PATHS } from "../../public/data/instructorsData";

const getMentorIcon = (label: string) => {
    const iconProps = { size: 24 }; // Giảm nhẹ size icon
    if (label.includes("Cyber")) return <ShieldCheck {...iconProps} />;
    if (label.includes("AI")) return <Lightbulb {...iconProps} />;
    if (label.includes("Frontend") || label.includes("Backend")) return <Code2 {...iconProps} />;
    if (label.includes("DevOps")) return <Cpu {...iconProps} />;
    return <Users2 {...iconProps} />;
};
interface CareerPathFinderProps {
  openAuth: (mode: "login" | "register-select") => void;
}

export const CareerPathFinder = ({ openAuth }: CareerPathFinderProps) => {
    return (
        <section className="py-12 md:py-24 bg-slate-50"> {/* Giảm padding dọc trên mobile */}
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Header */}
                <div className="mb-10 md:mb-16">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="h-px w-8 md:w-12 bg-[#1A56DB]" />
                        <span className="text-[#1A56DB] font-black text-[10px] md:text-xs uppercase tracking-[2px] md:tracking-[4px]">
                            Định hướng chuyên môn
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-8">
                        {/* Mobile: text-3xl | Desktop: text-5xl */}
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] md:leading-[1.1] max-w-3xl">
                            Từng bước tiến đều có <br/><span className="text-[#1A56DB]">định hướng </span>
                            rõ ràng
                        </h2>
                        <p className="text-slate-500 font-bold text-sm md:text-lg max-w-sm border-l-4 border-blue-100 pl-4 md:pl-6 py-1 md:py-2">
                            Mỗi giảng viên mang đến góc nhìn thực tế cho hành trình của bạn.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {CAREER_PATHS.map((path) => (
                        <motion.div
                            key={path.id}
                            whileHover={{ y: -5 }}
                            onClick={() => openAuth("register-select")}
                            className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[40px] border border-slate-100 hover:border-[#1A56DB]/30 transition-all cursor-pointer shadow-sm group relative"
                        >
                            <div className="relative z-10">
                                <div className="absolute top-0 right-0">
                                    <span className="bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-black px-2 py-1 md:px-3 md:py-1.5 rounded-full group-hover:bg-[#1A56DB] group-hover:text-white transition-colors">
                                        {path.count} GIẢNG VIÊN
                                    </span>
                                </div>

                                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 text-slate-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-blue-50 group-hover:text-[#1A56DB] transition-all duration-300">
                                    {getMentorIcon(path.label)}
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-4 group-hover:text-[#1A56DB] transition-colors leading-tight">
                                    Lộ trình phát triển <br />
                                    <span className="text-[#1A56DB]">{path.label}</span>
                                </h3>

                                <p className="text-slate-500 font-bold text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                                    {path.label}.
                                </p>

                                <div className="pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                                        Khám phá ngay
                                    </span>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#1A56DB] group-hover:text-white transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};