import { motion } from "framer-motion";
import { Star, Users, Award, CheckCircle2 } from "lucide-react";

// Định nghĩa Interface rõ ràng để tránh lỗi 'any' và 'key'
interface InstructorCardProps {
    ins: any;
    onClick: () => void;
}

export const InstructorCard = ({ ins, onClick }: InstructorCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="bg-white rounded-[32px] border border-slate-100 p-6 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer group h-full"
        >
            <div className="flex gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-slate-50 relative bg-slate-100">
                    <img
                        src={ins.image}
                        alt={ins.displayName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="flex-1">
                    <span className="px-2 py-1 bg-blue-50 text-[#1A56DB] rounded text-[10px] font-black uppercase tracking-wider">
                        {ins.specialty}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2 group-hover:text-[#1A56DB] transition-colors">
                        {ins.displayName}
                    </h3>
                    <p className="text-sm font-bold text-slate-500 italic line-clamp-1">{ins.professionalTitle}</p>
                </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-2 text-sm font-bold text-slate-600 bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">
                    <Award size={16} className="text-[#1A56DB] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2 italic">"{ins.achievement}"</span>
                </div>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-400" fill="currentColor" />
                        <span className="text-xs font-black">{ins.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                        <Users size={14} />
                        <span className="text-xs font-bold">{ins.students?.toLocaleString()}</span>
                    </div>
                </div>
                <span className="text-[#1A56DB] font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    Tìm hiểu thêm
                </span>
            </div>
        </motion.div>
    );
};