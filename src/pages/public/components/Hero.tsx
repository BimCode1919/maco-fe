import { motion } from "motion/react";

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export const Hero = ({ setCurrentPage }: HeroProps) => {
  return (
    <section className="mesh-gradient min-h-screen pt-48 pb-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-indigo-100 text-indigo-600 text-sm font-bold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Hiện đã có Lộ trình học tập tích hợp AI
            </div>
            <h1 className="text-6xl xl:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95]">
              Thị trường Giáo dục <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-sky-500">
                Công nghệ Hàng đầu.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mb-12 font-medium leading-relaxed">
              Khám phá hàng ngàn khóa học từ các chuyên gia và tổ chức giáo dục uy tín nhất thế giới. Học mọi lúc, mọi nơi.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => setCurrentPage("courses")}
                className="w-full sm:w-auto bg-indigo-600 text-white h-16 px-10 rounded-full font-bold text-lg glow-btn"
              >
                Khám phá ngay
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-12 -left-12 glass rounded-32 p-6 shadow-2xl z-20 max-w-[240px] border border-white/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white" 
                      src={`https://picsum.photos/seed/developer${i}/100/100`}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-600">+12k</div>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-800">500k+ Học viên</p>
              <p className="text-xs text-slate-500">Được tin dùng bởi các lãnh đạo</p>
            </div>
            <div className="rounded-32 overflow-hidden soft-elevation relative group">
              <img 
                alt="Hero" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://nmgprod.s3.amazonaws.com/media/file/99/d9/3b3a95fdf420077619d01ebdfdff/cover_image__oEE6I0XU__AI_support.jpeg.960x540_q85_crop_upscale.jpg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
