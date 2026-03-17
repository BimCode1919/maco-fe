import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, PlayCircle, FileText,
  CheckCircle2, Clock, ChevronDown, TrendingUp, BookOpen
} from "lucide-react";
// Giả định VideoPlayerView đã được import đúng
import { VideoPlayerView } from "./VideoPlayerView";

interface LessonDetailProps {
  onBack: () => void;
}

const chapters = [
  {
    id: 1,
    title: "Bắt đầu: Cài đặt & Hello World",
    duration: "3 giờ",
    description: "Cài đặt Python và trình soạn thảo mã nguồn. Đây là bước bắt buộc để bạn có thể thực hành lập trình thực tế ngay lập tức.",
    content: { videos: 6, readings: 5 },
    isCompleted: true
  },
  {
    id: 2,
    title: "Variables, Expressions & Statements",
    duration: "2 giờ",
    description: "Học cách lưu trữ dữ liệu vào biến, thực hiện các phép toán cơ bản và hiểu về các kiểu dữ liệu trong Python.",
    content: { videos: 4, readings: 3 },
    isCompleted: true
  },
  {
    id: 3,
    title: "Cấu trúc điều kiện (If/Else)",
    duration: "2 giờ",
    description: "Hướng dẫn chương trình cách ra quyết định logic, giúp ứng dụng của bạn trở nên thông minh hơn.",
    content: { videos: 5, readings: 2 },
    isCompleted: true
  },
  {
    id: 4,
    title: "Functions & Tái sử dụng mã nguồn",
    duration: "3 giờ",
    description: "Học cách đóng gói mã nguồn vào các hàm (functions) để tối ưu hóa hiệu suất và dễ dàng bảo trì.",
    content: { videos: 7, readings: 4 },
    isCompleted: false
  }
];

export const LessonDetail = ({ onBack, isDarkMode }: any) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  if (selectedVideo) {
    return <VideoPlayerView onBack={() => setSelectedVideo(null)} lessonTitle={selectedVideo.title} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen pb-20 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
    >
      {/* --- HERO SECTION --- */}
      <section className={`py-14 md:py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-8 md:mb-12 font-black transition-all uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Quay lại
          </motion.button>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-6">
              <TrendingUp size={14} /> Lộ trình được đề xuất
            </div>
            <h1 className="text-2xl md:text-3xl font-black mb-4 leading-tight tracking-tight">
              Lập trình Python
            </h1>
            <p className="text-slate-400 text-sm md:text-base mb-6 max-w-2xl font-medium leading-relaxed">
              Từ những dòng code đầu tiên đến ứng dụng AI. Lộ trình bài bản giúp bạn làm chủ ngôn ngữ phổ biến nhất thế giới.
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-indigo-400" />
                <span className="font-black">12 Học phần</span>
              </div>
              <div className="h-6 w-[1px] bg-slate-800 hidden md:block" />
              <div className="flex items-center gap-3 font-bold text-slate-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-black">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase">Lộ trình</span>
                  <span className="text-sm">Python Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-3 gap-12 md:gap-16">
        <div className="lg:col-span-2 space-y-12 md:space-y-16">
          {/* Course Description */}
          <section>
            <h3 className={`text-lg md:text-xl font-black mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <BookOpen className="text-indigo-500" size={20} /> Chi tiết lộ trình học
            </h3>
            <p className={`leading-relaxed font-medium text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Lộ trình Python Pro được thiết kế toàn diện từ cơ bản đến nâng cao, giúp bạn xây dựng nền tảng vững chắc. Mỗi chương đều kết hợp lý thuyết và thực hành với các dự án thực tế, đảm bảo bạn không chỉ học mà còn có thể ứng dụng ngay vào công việc.
            </p>
          </section>

          {/* Syllabus / Chapters */}
          <section>
            <h3 className={`text-lg md:text-xl font-black mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <div className="w-2 h-6 bg-indigo-500 rounded-full" />
              Lộ trình học chi tiết
            </h3>
            <div className="space-y-4">
              {chapters.map((chapter, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  className={`border transition-all rounded-[24px] overflow-hidden ${
                    isDarkMode
                      ? 'border-slate-800 hover:border-slate-700'
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenChapter(openChapter === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 md:p-6 transition-colors ${
                      openChapter === idx
                        ? isDarkMode
                          ? 'bg-slate-800/50'
                          : 'bg-slate-50'
                        : isDarkMode
                        ? 'bg-slate-900/50 hover:bg-slate-800/30'
                        : 'bg-white hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="text-left">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">
                        PHẦN {idx + 1} {chapter.isCompleted && '✓ HOÀN THÀNH'}
                      </span>
                      <span className={`font-black text-base md:text-lg ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        {chapter.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openChapter === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full flex-shrink-0 ${
                        isDarkMode
                          ? 'bg-slate-800/50 border border-slate-700'
                          : 'bg-white border border-slate-100 shadow-sm'
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  {openChapter === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`px-5 md:px-6 pb-6 pt-2 space-y-3 ${
                        isDarkMode ? 'bg-slate-800/30 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-100'
                      }`}
                    >
                      <p className={`text-sm md:text-base font-medium leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {chapter.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm mb-4">
                        <div className={`flex items-center gap-2 font-black ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <PlayCircle size={18} className="text-indigo-500" />
                          {chapter.content.videos} <span className={`font-medium ml-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>VIDEO</span>
                        </div>
                        <div className={`flex items-center gap-2 font-black ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <FileText size={18} className="text-amber-500" />
                          {chapter.content.readings} <span className={`font-medium ml-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>BÀI ĐỌC</span>
                        </div>
                        <div className={`flex items-center gap-2 font-black ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          <Clock size={18} className="text-indigo-400" />
                          {chapter.duration}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedVideo(chapter)}
                        className={`w-full px-6 py-3 md:py-4 rounded-xl font-black text-xs md:text-sm tracking-[0.1em] transition-all active:scale-95 border
                          ${
                            chapter.isCompleted
                              ? isDarkMode
                                ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                                : 'bg-emerald-500/20 border-emerald-400 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                              : 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border border-indigo-500/50 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30'
                          }`}
                      >
                        {chapter.isCompleted ? '▶ HỌC LẠI' : '▶ BẮT ĐẦU NGAY'}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* --- PROGRESS SIDEBAR --- */}
        <aside className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24 md:top-28"
          >
            <div className={`border rounded-[28px] md:rounded-[40px] p-6 md:p-8 shadow-2xl ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 shadow-slate-950/50'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            }`}>
              {/* Circular Progress */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-40 h-40 mb-6">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke={isDarkMode ? '#334155' : '#f1f5f9'}
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(3 / 4) * 2 * Math.PI * 54} ${2 * Math.PI * 54}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - 3 / 4) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-700">
                        75%
                      </div>
                      <div className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Tiến độ
                      </div>
                    </motion.div>
                  </div>
                </div>

                <h4 className={`text-sm font-black uppercase tracking-wider mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Quá trình học tập
                </h4>
                <p className={`text-xs text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  Bạn đang học phần 4 / 4
                </p>
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 gap-4 p-5 md:p-6 rounded-2xl md:rounded-3xl ${
                isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'
              } mb-6`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-lg md:text-2xl font-black text-indigo-600 mb-1">3/4</div>
                  <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Đã hoàn thành
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-lg md:text-2xl font-black text-emerald-600 mb-1">7 giờ</div>
                  <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Còn lại
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className={`text-lg md:text-2xl font-black mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    21/38
                  </div>
                  <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Video xem
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className={`text-lg md:text-2xl font-black mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    10/14
                  </div>
                  <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Bài đọc
                  </div>
                </motion.div>
              </div>

              {/* Estimated Completion */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`p-4 md:p-5 rounded-2xl border ${
                  isDarkMode
                    ? 'bg-green-900/20 border-green-500/30'
                    : 'bg-green-50 border-green-200'
                } text-center`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  Dự kiến hoàn thành
                </div>
                <div className={`text-sm md:text-base font-black ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                  Trong 6 ngày
                </div>
              </motion.div>
            </div>
          </motion.div>
        </aside>
      </main>
    </motion.div>
  );
};