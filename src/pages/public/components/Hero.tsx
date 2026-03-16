import { motion } from "motion/react";
import { Play, Sparkles, MessageSquare, BrainCircuit } from "lucide-react";

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export const Hero = ({ setCurrentPage }: HeroProps) => {
  return (
    <section className="mesh-gradient min-h-screen pt-40 pb-20 px-6 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Cột trái: Nội dung */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-slate-50 text-brand-primary text-[13px] font-bold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
              MACO AI: Biến video thành trải nghiệm tương tác
            </div>

            <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-black tracking-tight text-brand-slate-900 mb-8 leading-[1.1]">
              Hệ sinh thái học tập <br />
              <span className="text-brand-primary">Tích hợp Trợ lý AI.</span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-brand-slate-600 max-w-xl mb-12 font-medium leading-[1.6]">
              Giải pháp tối ưu cho giảng viên quản lý khóa học video và tự động hóa bộ câu hỏi Quiz bằng AI. Giúp học viên nắm vững kiến thức nhờ khả năng hỏi đáp trực tiếp với nội dung video.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setCurrentPage("courses")}
                className="w-full sm:w-auto bg-brand-primary text-white h-14 px-10 rounded-2xl font-bold text-[16px] 
                           shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
              >
                Khám phá tính năng AI
              </button>
            </div>
          </motion.div>

          {/* Cột phải: Giao diện AI tương tác (Đặc biệt) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative hidden lg:block"
          >
            <div className="relative p-4 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-2xl">

              {/* Mô phỏng Video Player */}
              <div className="relative aspect-video rounded-[24px] overflow-hidden bg-slate-900 shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  alt="Video content"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>

                {/* Thanh tiến trình Video có các điểm nút AI Quiz */}
                <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-brand-primary rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                  </div>
                  {/* Các điểm Quiz đánh dấu trên thanh video */}
                  <div className="absolute left-[20%] top-0 w-1.5 h-full bg-yellow-400" />
                  <div className="absolute left-[45%] top-0 w-1.5 h-full bg-yellow-400" />
                  <div className="absolute left-[85%] top-0 w-1.5 h-full bg-yellow-400 opacity-50" />
                </div>
              </div>

              {/* Card nổi 1: AI Chat tương tác */}
              {/* Card nổi 1: AI Chat tương tác - Cập nhật nội dung thực tế hơn */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-[220px] z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-[12px] font-black text-slate-800 tracking-tight">Trợ lý MACO</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    "Tại phút <span className="text-brand-primary font-bold">05:20</span>, giảng viên đang phân tích về <span className="font-bold text-slate-900">Logic nghiệp vụ</span>."
                  </p>
                  <div className="pt-1 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 italic">
                      Bạn có muốn tóm tắt đoạn này không?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card nổi 2: Tự động hóa Quiz */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-12 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <span className="block text-[13px] font-bold text-slate-800">Auto-Generate Quiz</span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase">AI Processing...</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-emerald-400"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>Đang trích xuất</span>
                    <span>85%</span>
                  </div>
                </div>
              </motion.div>

              {/* Hiệu ứng trang trí Sparkles */}
              <div className="absolute -top-4 -right-4 text-brand-primary animate-bounce">
                <Sparkles size={32} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};