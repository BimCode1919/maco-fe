import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  PlayCircle,
  ChevronDown,
  User,
  ArrowLeft,
  MessageSquare,
  Lock,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";

interface StudentCourseDetailProps {
  course: any;
  onBack: () => void;
  onStartLearning: () => void;
  onSelectMembership?: () => void;
}

export const StudentCourseDetail = ({ course, onBack, onStartLearning, onSelectMembership }: StudentCourseDetailProps) => {
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  const dummySyllabus = [
    { title: "Chương 1: Tổng quan và Cài đặt", lessons: ["Giới thiệu về lộ trình", "Chuẩn bị môi trường thực hành", "Bài tập khởi động"] },
    { title: "Chương 2: Kiến thức nền tảng", lessons: ["Các khái niệm cốt lõi", "Tư duy giải quyết vấn đề", "Thực hành Case Study 1"] },
    { title: "Chương 3: Kỹ thuật nâng cao", lessons: ["Tối ưu hóa hiệu năng", "Xử lý lỗi thường gặp", "Project thực tế"] }
  ];

  const courseDetails = {
    description: "Khóa học này được thiết kế để cung cấp cho bạn cái nhìn toàn diện và thực tế nhất về công nghệ hiện đại. Không chỉ dừng lại ở lý thuyết, bạn sẽ được tham gia trực tiếp vào việc xây dựng các hệ thống thực tế từ con số 0.",
    requirements: ["Đã có kiến thức cơ bản về lập trình", "Sử dụng máy tính thành thạo", "Tinh thần tự học cao"],
    targetAudience: "Sinh viên CNTT, Lập trình viên muốn nâng cấp kỹ năng, hoặc người làm kỹ thuật muốn chuyển đổi công nghệ.",
    reviews: [
      { name: "Học viên ẩn danh", rating: 5, comment: "Nội dung rất thực tế, giảng viên nhiệt tình!", date: "2 ngày trước" },
      { name: "Học viên ẩn danh", rating: 4, comment: "Khóa học hay, nhưng phần bài tập hơi khó một chút.", date: "1 tuần trước" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white text-slate-900 pb-20"
    >
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-12 font-black transition-all uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Quay lại
          </button>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-6">
                <TrendingUp size={14} /> Khóa học được đề xuất
              </div>
              <h1 className="text-2xl md:text-3xl font-black mb-4 leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-slate-400 text-sm md:text-base mb-6 max-w-2xl font-medium leading-relaxed">
                {courseDetails.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="font-black text-lg">{course.rating}</span>
                  <span className="text-slate-500 text-xs md:text-sm font-medium">({course.reviews} đánh giá)</span>
                </div>
                <div className="h-6 w-[1px] bg-slate-800 hidden md:block" />
                <div className="flex items-center gap-3 font-bold text-slate-300 text-sm">
                  <img src="https://ui-avatars.com/api/?name=Instructor&background=random" className="w-10 h-10 rounded-full border-2 border-slate-700" alt="instructor" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase">Giảng viên</span>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-3 gap-12 md:gap-16">
        <div className="lg:col-span-2 space-y-12 md:space-y-16">

          {/* Chi tiết khóa học */}
          <section>
            <h3 className="text-lg md:text-xl font-black mb-4 flex items-center gap-2">
              <BookOpen className="text-indigo-500" size={20} /> Chi tiết khóa học
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              {courseDetails.description} Qua khóa học này, bạn sẽ không chỉ học cú pháp mà còn học cách tư duy hệ thống, cách giải quyết các bài toán hóc búa trong thực tế sản phẩm.
            </p>
          </section>

          {/* Lợi ích & Đối tượng */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <section className="bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-3xl">
              <h4 className="font-bold text-sm md:text-base mb-3 flex items-center gap-2 text-slate-900">
                <Target size={18} className="text-indigo-500" /> Đối tượng học
              </h4>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{courseDetails.targetAudience}</p>
            </section>
            <section className="bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-3xl">
              <h4 className="font-bold text-sm md:text-base mb-3 flex items-center gap-2 text-slate-900">
                <Lightbulb size={18} className="text-indigo-500" /> Yêu cầu đầu vào
              </h4>
              <ul className="space-y-2">
                {courseDetails.requirements.map((req, i) => (
                  <li key={i} className="text-sm text-slate-600 font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> {req}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Syllabus */}
          <section>
            <h3 className="text-lg md:text-xl font-black mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-indigo-500 rounded-full" />
              Lộ trình học bài bản
            </h3>
            <div className="space-y-4">
              {dummySyllabus.map((chapter, idx) => (
                <motion.div
                  key={idx}
                  initial={false}
                  className="border border-slate-100 rounded-[24px] overflow-hidden transition-all hover:border-slate-200"
                >
                  <button
                    onClick={() => setOpenChapter(openChapter === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 md:p-6 transition-colors ${openChapter === idx ? "bg-slate-50" : "bg-white"}`}
                  >
                    <div className="text-left">
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block mb-1">PHẦN {idx + 1}</span>
                      <span className="font-black text-slate-900 text-base md:text-lg">{chapter.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openChapter === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full bg-white border border-slate-100 shadow-sm flex-shrink-0"
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
                      className="px-5 md:px-6 pb-6 pt-2 space-y-3 bg-slate-50"
                    >
                      {chapter.lessons.map((lesson, lIdx) => (
                        <div key={lIdx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 group cursor-pointer hover:border-indigo-300/50 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                              <PlayCircle size={18} />
                            </div>
                            <span className="text-[14px] md:text-[15px] font-bold text-slate-700">{lesson}</span>
                          </div>
                          <Lock size={16} className="text-slate-300 flex-shrink-0" />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Đánh giá */}
          <section>
            <h3 className="text-lg md:text-xl font-black mb-6 flex items-center gap-2">
              <MessageSquare className="text-indigo-500" size={20} /> Phản hồi từ học viên
            </h3>
            <div className="space-y-4 md:space-y-6">
              {courseDetails.reviews.map((rev, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-6 border border-slate-100 rounded-[24px] md:rounded-[28px]"
                >
                  <div className="flex justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-black text-sm truncate">{rev.name}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">{rev.date}</div>
                      </div>
                    </div>
                    <div className="flex text-amber-400 h-fit gap-0.5 flex-shrink-0">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{rev.comment}"</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* --- SIDEBAR --- */}
        <aside className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24 md:top-28"
          >
            <div className="bg-white border border-slate-100 rounded-[28px] md:rounded-[40px] p-6 md:p-8 shadow-2xl shadow-slate-200/50">
              <div className="relative aspect-video mb-6 md:mb-8 rounded-2xl md:rounded-3xl overflow-hidden group">
                <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all" />
              </div>

              <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl font-black text-slate-900">{course.price}</span>
                {course.price !== "Miễn phí" && (
                  <span className="text-slate-400 font-bold line-through text-xs md:text-sm">3.000.000đ</span>
                )}
              </div>

              <button
                onClick={onSelectMembership}
                className="w-full bg-indigo-600 text-white font-black py-3 md:py-4 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:translate-y-[-2px] active:translate-y-0 transition-all mb-5 md:mb-6 text-sm md:text-base"
              >
                Bắt đầu học
              </button>

              <div className="space-y-4 bg-slate-50 p-5 md:p-6 rounded-2xl md:rounded-3xl">
                <div className="flex justify-between text-xs py-2">
                  <span className="text-slate-400 font-bold flex items-center gap-2">
                    <Clock size={16} /> Thời lượng
                  </span>
                  <span className="font-black text-slate-900">{course.duration}</span>
                </div>
                <div className="flex justify-between text-xs py-2">
                  <span className="text-slate-400 font-bold flex items-center gap-2">
                    <MessageSquare size={16} /> Hỗ trợ AI
                  </span>
                  <span className="font-black text-slate-900">24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </aside>
      </main>
    </motion.div>
  );
};
