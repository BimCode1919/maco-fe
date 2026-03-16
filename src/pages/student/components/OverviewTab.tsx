import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Trophy,
  ChevronRight,
  PlayCircle,
  Zap
} from "lucide-react";

interface OverviewTabProps {
  myCourses: any[];
  setActiveTab: (tab: string) => void;
  onCourseClick: (course: any) => void;
}

export const OverviewTab = ({ myCourses, setActiveTab, onCourseClick }: OverviewTabProps) => {
  return (
    <div className="space-y-8 md:space-y-12 pb-10">

      {/* 1. Welcome Section (60% Primary) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-2"
      >
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          Chào mừng trở lại, <span className="text-indigo-600">Học viên!</span> 👋
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl leading-relaxed">
          Bạn đã hoàn thành <span className="text-slate-900 font-black">65%</span> mục tiêu học tập trong tuần này. Tiếp tục phát huy nhé!
        </p>
      </motion.div>

      {/* 2. Stats Grid (30% Secondary Area) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { label: "Khóa học đang học", value: "4", icon: BookOpen, color: "bg-blue-600", bg: "bg-blue-50" },
          { label: "Giờ đã tích lũy", value: "24.5", icon: Clock, color: "bg-indigo-600", bg: "bg-indigo-50" },
          { label: "Chứng chỉ đạt được", value: "2", icon: Trophy, color: "bg-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-5 md:p-7 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5"
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 ${stat.bg} ${stat.color} rounded-[20px] flex items-center justify-center shrink-0`}>
              <stat.icon size={24} className="md:size-7" />
            </div>
            <div>
              <p className="text-[11px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-xl md:text-2xl font-black text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Recent Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg md:text-xl font-black text-slate-900">Tiếp tục học</h3>
            <button
              onClick={() => setActiveTab("my-courses")}
              className="text-xs md:text-sm font-black text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1"
            >
              Xem tất cả <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {myCourses.slice(0, 2).map((course) => (
              <motion.div
                key={course.id}
                onClick={() => onCourseClick(course)}
                className="bg-white p-4 md:p-5 rounded-[32px] border border-slate-100 shadow-sm hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group cursor-pointer flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="w-full sm:w-40 aspect-video rounded-2xl overflow-hidden shrink-0">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex-1 w-full space-y-3">
                  <h4 className="text-base md:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-4 text-[11px] md:text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-indigo-500" /> {course.lastAccessed}</span>
                    <span className="flex items-center gap-1.5 text-slate-900"><PlayCircle size={14} className="text-indigo-500" /> {course.lessons} bài học</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                      <span className="text-slate-400">Tiến độ</span>
                      <span className="text-indigo-600">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Upgrade Card (10% Accent) */}
        <div className="relative">
          <div className="sticky top-28 bg-slate-900 rounded-[32px] p-8 text-white overflow-hidden shadow-2xl shadow-slate-200">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <Zap size={24} className="fill-current text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2">Nâng cấp Pro</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Mở khóa 100+ khóa học AI nâng cao, chứng chỉ quốc tế và trợ lý AI đặc quyền.
                </p>
              </div>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[20px] font-black text-sm transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                Nâng cấp ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};