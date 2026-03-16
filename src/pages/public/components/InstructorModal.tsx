import { X, Briefcase, GraduationCap, Globe, Linkedin, Github, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const InstructorModal = ({ ins, onClose }: { ins: any; onClose: () => void }) => {
  if (!ins) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10">
            <X size={20} className="text-slate-500" />
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar Info */}
            <div className="md:w-1/3 bg-slate-50 p-8 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-lg mb-4 bg-white">
                <img src={ins.image} alt={ins.displayName} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-black text-slate-900 leading-tight">{ins.displayName}</h2>
              <p className="text-xs font-bold text-[#1A56DB] mt-2 px-3 py-1 bg-blue-50 rounded-full uppercase tracking-tighter">
                {ins.specialty}
              </p>

              <div className="flex gap-3 mt-6">
                <a href="#" className="p-2 bg-white rounded-xl shadow-sm hover:text-[#1A56DB] transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-white rounded-xl shadow-sm hover:text-slate-900 transition-colors"><Github size={18} /></a>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 p-8 flex flex-col">
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[2px] mb-3">
                    <GraduationCap size={14} /> Giới thiệu chuyên gia
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{ins.bio}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[2px] mb-3">
                    <Briefcase size={14} /> Kỹ năng chuyên môn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ins.skills?.map((skill: string) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-black">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button - 10% Highlight */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Đánh giá chung</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={18} className="text-amber-400" fill="currentColor" />
                    <span className="text-lg font-black">{ins.rating}</span>
                  </div>
                </div>
                <button
                  className="w-full md:w-auto px-10 py-4 bg-[#1A56DB] text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:shadow-blue-400/30 hover:-translate-y-1 transition-all uppercase tracking-widest text-sm"
                  onClick={() => {
                    alert("Chuyển hướng đến trang đăng ký khóa học của " + ins.displayName);
                  }}
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};