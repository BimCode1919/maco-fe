import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  MessageSquareText,
  Video,
  GraduationCap,
  Sparkles,
  Zap,
  BookOpen,
  BarChart3
} from "lucide-react";
import { AIStudentFlow } from "./AIStudentFlow";
import { AIInstructorFlow } from "./AIInstructorFlow";

// --- COMPONENT CON: DÀNH CHO HỌC VIÊN ---
const StudentFeature = () => (
  <div className="flex flex-col lg:flex-row items-center gap-16">
    {/* Cột hình ảnh minh họa (Trái) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 relative w-full"
    >
      <div className="relative rounded-[32px] border-[8px] border-white shadow-2xl bg-[#0F172A] min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Dot Pattern & Glow Effects */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A56DB_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-[#1A56DB] opacity-20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-[#10b981] opacity-10 rounded-full blur-[100px]"></div>

        <div className="relative w-full p-6 md:p-10 z-10">
          <AIStudentFlow />
        </div>
      </div>

      {/* Badge thông số */}
      <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white p-4 md:p-5 rounded-[24px] shadow-2xl shadow-blue-500/30 border-2 border-blue-200 z-20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <BarChart3 className="text-white" size={20} />
          </div>
          <div className="min-w-[120px]">
            <span className="text-[10px] font-bold uppercase text-blue-600 block tracking-wider">Kết quả</span>
            <span className="text-sm font-black text-slate-900">Không còn bị “kẹt” khi học</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Cột nội dung văn bản (Phải) */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 space-y-6 p-8 md:p-10 rounded-[32px] bg-blue-50/50 border border-blue-100/50 backdrop-blur-sm"
    >
      <div className="inline-flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase bg-[#1A56DB] px-4 py-2.5 rounded-full shadow-lg shadow-blue-500/20">
        <MessageSquareText size={20} />
        <span>Hỏi đáp trực tiếp cùng Video</span>
      </div>
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
        Dành cho Học viên
      </h3>
      <p className="text-slate-700 text-lg leading-relaxed font-medium">
        Đặt câu hỏi ngay tại bất kỳ thời điểm nào trong video và nhận giải thích tức thì từ AI.
        Mọi thắc mắc được xử lý ngay khi đang học, giúp bạn không bị gián đoạn và luôn theo kịp nội dung.
      </p>

      <ul className="space-y-3.5 pt-4">
        <li className="flex items-center gap-3 text-slate-800 font-bold bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/50 hover:bg-white/80 transition-all cursor-default">
          <div className="p-1.5 bg-blue-100 rounded-lg text-[#1A56DB]">
            <Video size={18} />
          </div>
          Quản lý video bài giảng tập trung
        </li>
        <li className="flex items-center gap-3 text-slate-800 font-bold bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/50 hover:bg-white/80 transition-all cursor-default">
          <div className="p-1.5 bg-blue-100 rounded-lg text-[#1A56DB]">
            <BrainCircuit size={18} />
          </div>
          AI tự động bóc tách nội dung kiến thức
        </li>
      </ul>
    </motion.div>
  </div>
);

// --- COMPONENT CON: DÀNH CHO GIẢNG VIÊN ---
const InstructorFeature = () => (
  <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
    {/* Cột hình ảnh minh họa (Phải) */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 relative w-full"
    >
      <div className="relative rounded-[32px] border-[8px] border-white shadow-2xl bg-[#0F172A] min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1A56DB_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-[#1A56DB] opacity-20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-[#10b981] opacity-10 rounded-full blur-[100px]"></div>

        <div className="relative w-full p-6 md:p-10 z-10">
          <AIInstructorFlow />
        </div>
      </div>

      {/* Badge thông số (Đổi sang bên trái cho cân đối) */}
      <div className="absolute -bottom-6 -left-4 lg:-left-6 bg-white p-4 md:p-5 rounded-[24px] shadow-2xl shadow-blue-500/30 border-2 border-blue-200 z-20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <BarChart3 className="text-white" size={20} />
          </div>
          <div className="min-w-[120px]">
            <span className="text-[10px] font-bold uppercase text-blue-600 block tracking-wider">Kết quả</span>
            <span className="text-sm font-black text-slate-900">Giảm tải công việc soạn bài</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Cột nội dung văn bản (Trái) */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 space-y-6 p-8 md:p-10 rounded-[32px] bg-blue-50/50 border border-blue-100/50 backdrop-blur-sm"
    >
      <div className="inline-flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase bg-[#1A56DB] px-4 py-2.5 rounded-full shadow-lg shadow-blue-500/20">
        <BrainCircuit size={20} />
        <span>Tối ưu hóa nội dung bài giảng</span>
      </div>
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
        Dành cho Giảng viên
      </h3>
      <p className="text-slate-700 text-lg leading-relaxed font-medium">
        AI tự động phân tích nội dung bài giảng và tạo ra câu hỏi kiểm tra phù hợp.
        Giúp bạn xây dựng học liệu nhanh hơn và tập trung vào việc giảng dạy thay vì soạn nội dung.
      </p>

      <ul className="space-y-3.5 pt-4">
        <li className="flex items-center gap-3 text-slate-800 font-bold bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/50 hover:bg-white/80 transition-all cursor-default">
          <div className="p-1.5 bg-blue-100 rounded-lg text-[#1A56DB]">
            <GraduationCap size={18} />
          </div>
          Lưu trữ và theo dõi tiến độ học tập
        </li>
        <li className="flex items-center gap-3 text-slate-800 font-bold bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/50 hover:bg-white/80 transition-all cursor-default">
          <div className="p-1.5 bg-blue-100 rounded-lg text-[#1A56DB]">
            <MessageSquareText size={18} />
          </div>
          Chatbox thông minh theo ngữ cảnh video
        </li>
      </ul>
    </motion.div>
  </div>
);

// --- COMPONENT CHÍNH ---
export const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 space-y-32 overflow-hidden">
      {/* Header phần Features */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative">
        {/* Animated Background Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 opacity-50 hidden md:block"
        >
          <Sparkles className="text-[#1A56DB]" size={40} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -top-16 -right-16 opacity-50 hidden md:block"
        >
          <Zap className="text-amber-500" size={36} />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 left-1/4 opacity-40 hidden md:block"
        >
          <BookOpen className="text-blue-500" size={32} />
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
          Công nghệ AI <br />
          <span className="text-[#1A56DB]">Trong trải nghiệm dạy và học</span>
        </h2>
        <p className="text-slate-600 text-[18px] md:text-[20px] font-medium leading-relaxed">
          MACO kết hợp khả năng quản trị khóa học mạnh mẽ với trí tuệ nhân tạo thế hệ mới,
          mang lại lợi ích vượt trội cho cả người dạy và người học.
        </p>
      </div>

      {/* Danh sách các tính năng đã tách riêng */}
      <div className="space-y-40">
        <StudentFeature />
        <InstructorFeature />
      </div>
    </section>
  );
};