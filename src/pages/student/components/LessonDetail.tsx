import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft, PlayCircle, FileText,
  CheckCircle2, Clock, ChevronDown
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

export const LessonDetail = ({ onBack }: LessonDetailProps) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  if (selectedVideo) {
    return <VideoPlayerView onBack={() => setSelectedVideo(null)} lessonTitle={selectedVideo.title} />;
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4 md:px-6">
      {/* 1. Nút Quay lại - Cải thiện độ tương phản */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 font-bold text-xs md:text-sm hover:text-indigo-600 mb-6 md:mb-10 group transition-all"
      >
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        QUAY LẠI KHÓA HỌC
      </motion.button>

      {/* 2. Header - Tăng kích thước font trên Desktop */}
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-600 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm shadow-indigo-200">
            Lộ trình Python Pro
          </span>
          <span className="text-slate-500 font-bold text-xs md:text-sm flex items-center gap-1.5">
            <Clock size={16} className="text-indigo-500" /> 12 Học phần
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
          Lập trình Python
        </h1>
        <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
          Từ những dòng code đầu tiên đến ứng dụng AI. Lộ trình bài bản giúp bạn làm chủ ngôn ngữ phổ biến nhất thế giới.
        </p>
      </div>

      {/* 3. Chapters List */}
      <div className="space-y-5 md:space-y-6">
        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`relative bg-white border rounded-[28px] md:rounded-[32px] p-6 md:p-8 transition-all group hover:shadow-xl hover:shadow-indigo-500/5 ${chapter.isCompleted ? "border-emerald-100 bg-emerald-50/5" : "border-slate-100 shadow-sm"
              }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5 md:mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {chapter.title}
                  </h2>
                  {chapter.isCompleted && (
                    <div className="bg-emerald-500 p-0.5 rounded-full">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                  )}
                </div>
                <p className="text-indigo-600 text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  Học phần {chapter.id}
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 normal-case font-bold">{chapter.duration}</span>
                </p>
              </div>

              <button className="hidden md:flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-indigo-600 transition-colors">
                Chi tiết <ChevronDown size={18} />
              </button>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-3xl">
              {chapter.description}
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between pt-5 md:pt-6 border-t border-slate-50">
              <div className="flex items-center gap-5 md:gap-8">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-xs md:text-sm">
                  <PlayCircle size={20} className="text-indigo-500" />
                  {chapter.content.videos} <span className="hidden sm:inline">videos</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-bold text-xs md:text-sm">
                  <FileText size={20} className="text-amber-500" />
                  {chapter.content.readings} <span className="hidden sm:inline">bài đọc</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedVideo(chapter)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm transition-all active:scale-95 shadow-lg ${chapter.isCompleted
                    ? "bg-slate-100 text-slate-500 hover:bg-emerald-500 hover:text-white shadow-none"
                    : "bg-slate-900 text-white hover:bg-indigo-600 shadow-indigo-100"
                  }`}
              >
                {chapter.isCompleted ? "HỌC LẠI" : "BẮT ĐẦU HỌC"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};