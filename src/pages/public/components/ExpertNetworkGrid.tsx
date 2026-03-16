import { useState, useMemo } from "react";
import { Filter, Users } from "lucide-react";
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
        <section className="py-10 md:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8"> {/* Giảm px mobile xuống 4 */}

                <div className="mb-8">
                    {/* Header: Chứa Tiêu đề + Số lượng trên cùng 1 hàng */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-[10px] md:text-xs font-black text-[#1A56DB] uppercase tracking-[2px] flex items-center gap-2">
                                <Filter size={14} /> Bộ lọc
                            </h3>
                            <p className="text-slate-500 text-[11px] md:text-sm font-medium">Lĩnh vực chuyên môn</p>
                        </div>

                        {/* Badge số lượng gọn nhẹ */}
                        <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                            <Users size={14} className="text-slate-400" />
                            <span className="text-slate-900 font-bold text-[11px]">{filtered.length}</span>
                        </div>
                    </div>

                    {/* Filter Buttons: Thêm padding-left để nút không dính lề khi scroll */}
                    <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full font-bold text-[11px] md:text-sm transition-all whitespace-nowrap border ${filter === cat
                                        ? "bg-[#1A56DB] text-white border-[#1A56DB] shadow-md shadow-blue-100"
                                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Giảng viên */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filtered.map(ins => (
                        <InstructorCard ins={ins} onClick={() => onSelect(ins)} />
                    ))}
                </div>
            </div>
        </section>
    );
};