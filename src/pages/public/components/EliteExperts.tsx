import { Award } from "lucide-react";
import { ALL_INSTRUCTORS } from "../../public/data/instructorsData";
import { InstructorCard } from "./InstructorCard";

interface EliteExpertsProps {
    onSelect: (ins: any) => void;
}

export const EliteExperts = ({ onSelect }: EliteExpertsProps) => {
    // Lấy top 3 giảng viên có rating cao nhất
    const topExperts = [...ALL_INSTRUCTORS]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
                    <div>
                        {/* Mobile: text-2xl | Desktop: text-4xl */}
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 md:mb-4 flex items-center gap-2 md:gap-3">
                            <Award className="text-amber-400" size={28} />
                            <span>Giảng viên Tiêu biểu</span>
                        </h2>
                        <p className="text-slate-500 font-bold text-sm md:text-lg">
                            Những gương mặt nhận được sự tin tưởng và đánh giá cao từ cộng đồng.
                        </p>
                    </div>
                </div>

                {/* Grid điều chỉnh gap nhỏ lại trên mobile để tiết kiệm diện tích */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {topExperts.map((ins) => (
                        <InstructorCard
                            ins={ins}
                            onClick={() => onSelect(ins)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};