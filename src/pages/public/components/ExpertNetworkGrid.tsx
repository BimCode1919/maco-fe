import { useState, useMemo } from "react";
import { Filter, Users, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Thêm animation cho mượt
import { ALL_INSTRUCTORS } from "../../public/data/instructorsData";
import { InstructorCard } from "./InstructorCard";

interface ExpertNetworkGridProps {
    onSelect: (ins: any) => void;
}

export const ExpertNetworkGrid = ({ onSelect }: ExpertNetworkGridProps) => {
    const [filter, setFilter] = useState("Tất cả");
    const categories = ["Tất cả", "Cybersecurity", "AI & Data Science", "DevOps", "Frontend", "Backend"];

    const filtered = useMemo(() =>
        filter === "Tất cả" ? ALL_INSTRUCTORS : ALL_INSTRUCTORS.filter(i => i.specialty === filter)
        , [filter]);

    return (
        <section className="py-16 md:py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="mb-12">
                    {/* Header: Nâng cấp Badge số lượng rực rỡ hơn */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[2px] flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-blue-100 rounded-lg">
                                    <Filter size={14} />
                                </div>
                                Hệ thống lọc
                            </h3>
                            <p className="text-slate-500 text-[11px] md:text-sm font-bold">Tìm kiếm theo lĩnh vực chuyên môn</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg shadow-blue-200">
                            <Users size={16} className="text-blue-100" />
                            <span className="text-white font-black text-sm">{filtered.length} Chuyên gia</span>
                        </div>
                    </div>

                    {/* Filter Buttons: Làm nổi bật trạng thái Active */}
                    {/* Filter Buttons Section */}
                    <div className="relative mb-12">
                        <div className="flex overflow-x no-scrollbar gap-4 pb-4 pt-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap -my-4">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`
                    px-6 py-2.5 rounded-xl font-black text-[12px] md:text-[13px] 
                    transition-all duration-300 whitespace-nowrap border-2 
                    relative z-10
                    ${filter === cat
                                            ? "bg-white text-blue-600 border-blue-600 shadow-[0_10px_20px_-5px_rgba(26,86,219,0.3)] scale-105 transform-gpu"
                                            : "bg-white/50 text-slate-400 border-transparent hover:border-slate-200 hover:text-slate-600"
                                        }
                `}
                                >
                                    {cat}
                                </button>
                                
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid Giảng viên: Thêm hiệu ứng bọc Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((ins) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={ins.id || ins.name}
                                className="group relative"
                            >
                                {/* Hiệu ứng viền sáng chạy quanh card khi hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition duration-500 shadow-xl" />

                                <div className="relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                    <InstructorCard ins={ins} onClick={() => onSelect(ins)} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};