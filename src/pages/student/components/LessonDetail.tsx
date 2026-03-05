import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft, PlayCircle, FileText, Smartphone,
  CheckCircle2, Clock, ChevronDown, Lock
} from "lucide-react";
import { VideoPlayerView } from "./VideoPlayerView";

interface LessonDetailProps {
  onBack: () => void;
}

const chapters = [
  {
    id: 1,
    title: "Bắt đầu: Cài đặt & Hello World",
    duration: "3 giờ để hoàn thành",
    description: "Cài đặt Python và trình soạn thảo mã nguồn. Đây là bước bắt buộc để bắt đầu lập trình thực tế.",
    content: { videos: 6, readings: 5, apps: 2 },
    isCompleted: true
  },
  {
    id: 2,
    title: "Variables, Expressions và Statements",
    duration: "2 giờ để hoàn thành",
    description: "Học cách lưu trữ dữ liệu vào biến, thực hiện phép toán và hiểu các kiểu dữ liệu cơ bản.",
    content: { videos: 4, readings: 3, apps: 1 },
    isCompleted: true
  },
  {
    id: 3,
    title: "Cấu trúc điều kiện (If/Else)",
    duration: "2 giờ để hoàn thành",
    description: "Giúp chương trình có khả năng ra quyết định dựa trên các điều kiện logic.",
    content: { videos: 5, readings: 2, apps: 2 },
    isCompleted: true
  },
  {
    id: 4,
    title: "Functions & Tái sử dụng mã nguồn",
    duration: "3 giờ để hoàn thành",
    description: "Học cách viết hàm để tối ưu hóa mã nguồn, giúp chương trình gọn gàng hơn.",
    content: { videos: 7, readings: 4, apps: 3 },
    isCompleted: false
  },
  {
    id: 5,
    title: "Loops and Iterations",
    duration: "4 hours to complete",
    description: "Sử dụng vòng lặp For và While để xử lý các công việc lặp đi lặp lại một cách tự động và hiệu quả.",
    content: { videos: 8, readings: 3, apps: 2 },
    isCompleted: false
  },
  {
    id: 6,
    title: "Strings & Text Processing",
    duration: "2.5 hours to complete",
    description: "Khám phá sức mạnh của việc xử lý chuỗi văn bản, cắt ghép và tìm kiếm thông tin trong dữ liệu chữ.",
    content: { videos: 5, readings: 3, apps: 1 },
    isCompleted: false
  },
  {
    id: 7,
    title: "Files: Reading and Writing",
    duration: "3 hours to complete",
    description: "Học cách mở, đọc dữ liệu từ file .txt, .csv và ghi kết quả xử lý ngược lại vào bộ nhớ máy tính.",
    content: { videos: 6, readings: 2, apps: 2 },
    isCompleted: false
  },
  {
    id: 8,
    title: "Lists: Managing Sequences of Data",
    duration: "3 hours to complete",
    description: "Tìm hiểu về cấu trúc dữ liệu List - một trong những công cụ mạnh mẽ nhất của Python để quản lý danh sách dữ liệu.",
    content: { videos: 6, readings: 4, apps: 2 },
    isCompleted: false
  },
  {
    id: 9,
    title: "Dictionaries and Tuples",
    duration: "3.5 hours to complete",
    description: "Sử dụng cặp Key-Value để lưu trữ dữ liệu phức tạp và tìm hiểu tính bất biến của Tuples trong lập trình.",
    content: { videos: 7, readings: 5, apps: 3 },
    isCompleted: false
  },
  {
    id: 10,
    title: "Regular Expressions (Regex)",
    duration: "3 hours to complete",
    description: "Học ngôn ngữ của các biểu thức chính quy để tìm kiếm và trích xuất các mẫu dữ liệu phức tạp từ văn bản.",
    content: { videos: 5, readings: 3, apps: 2 },
    isCompleted: false
  },
  {
    id: 11,
    title: "Networked Programs (Sockets & HTTP)",
    duration: "4 hours to complete",
    description: "Kết nối Python với Internet. Học cách gửi yêu cầu HTTP và lấy dữ liệu từ các trang web (Web Scraping).",
    content: { videos: 8, readings: 4, apps: 1 },
    isCompleted: false
  },
  {
    id: 12,
    title: "Using Web Services & JSON",
    duration: "4.5 hours to complete",
    description: "Làm việc với API, hiểu định dạng dữ liệu JSON và cách tích hợp các dịch vụ bên thứ ba vào ứng dụng của bạn.",
    content: { videos: 9, readings: 6, apps: 4 },
    isCompleted: false
  },
];

export const LessonDetail = ({ onBack }: LessonDetailProps) => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  if (selectedVideo) {
    return <VideoPlayerView onBack={() => setSelectedVideo(null)} lessonTitle={selectedVideo.title} />;
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-0">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 mb-8 group"
      >
        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        Quay lại khóa học của tôi
      </motion.button>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase">
            Lộ trình Python Pro
          </span>
          <span className="text-slate-400 font-bold text-sm flex items-center gap-1">
            <Clock size={16} /> 12 Học phần
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">Lập trình Python</h1>
        <p className="text-slate-500 font-medium text-lg max-w-2xl">
          Từ những dòng code đầu tiên đến ứng dụng AI. Lộ trình bài bản giúp bạn làm chủ ngôn ngữ phổ biến nhất thế giới.
        </p>
      </div>

      <div className="space-y-6">
        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.id}
            className={`relative bg-white border rounded-32 p-8 transition-all group ${chapter.isCompleted ? "border-emerald-100" : "border-slate-100 shadow-sm"}`}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-black text-slate-900">{chapter.title}</h2>
                  {chapter.isCompleted && <CheckCircle2 size={20} className="text-emerald-500" />}
                </div>
                <p className="text-indigo-600 text-sm font-black uppercase">
                  Học phần {chapter.id} • <span className="text-slate-400 normal-case">{chapter.duration}</span>
                </p>
              </div>
              <button className="text-indigo-600 font-bold text-sm flex items-center gap-1">
                Chi tiết học phần <ChevronDown size={18} />
              </button>
            </div>
            <p className="text-slate-500 mb-8 text-sm">{chapter.description}</p>
            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-50">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-sm"><PlayCircle size={20} /> {chapter.content.videos} videos</div>
              <div className="flex items-center gap-2 text-slate-700 font-bold text-sm"><FileText size={20} /> {chapter.content.readings} bài đọc</div>
              <div className="ml-auto">
                <button
                  onClick={() => setSelectedVideo(chapter)}
                  className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs hover:bg-indigo-600 transition-all"
                >
                  {chapter.isCompleted ? "Học lại" : "Bắt đầu học"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};