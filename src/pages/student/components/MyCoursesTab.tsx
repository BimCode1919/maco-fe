import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, CheckCircle2, Filter } from "lucide-react";

interface MyCoursesTabProps {
  myCourses: any[];
  onCourseClick: (course: any) => void;
}

export const MyCoursesTab = ({ myCourses, onCourseClick }: MyCoursesTabProps) => {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  const filters = ["Tất cả", "Đang học", "Đã hoàn thành"];

  const filteredCourses = myCourses.filter(course => {
    if (activeFilter === "Đã hoàn thành") return course.progress === 100;
    if (activeFilter === "Đang học") return course.progress < 100;
    return true;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* 1. Header & Filters - Thu nhỏ cho Mobile */}
      <div className="flex flex-col gap-4 px-1">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              Khóa học
            </h1>
            <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {myCourses.length} Khóa học của bạn
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 p-1 bg-slate-100/60 rounded-[14px] w-fit overflow-x-auto no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-[10px] text-[11px] md:text-xs font-black transition-all ${activeFilter === filter
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Courses Grid - 2 cột cho Mobile, 4 cột cho PC */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              onClick={() => onCourseClick(course)}
              className="bg-white rounded-[20px] md:rounded-[24px] border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col"
            >
              {/* Thumbnail - Tỉ lệ nén hơn cho Mobile */}
              <div className="aspect-[4/3] md:aspect-[16/10] relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge Mini */}
                <div className="absolute top-2 right-2">
                  {course.progress === 100 ? (
                    <div className="bg-emerald-500 text-white text-[8px] md:text-[9px] font-black px-1.5 py-0.5 rounded-md shadow-lg">
                      DONE
                    </div>
                  ) : (
                    <div className="bg-black/50 backdrop-blur-md text-white text-[8px] md:text-[9px] font-black px-1.5 py-0.5 rounded-md">
                      {course.progress}%
                    </div>
                  )}
                </div>
              </div>

              {/* Content Area - Giảm padding mạnh cho Mobile */}
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <div className="h-8 md:h-10">
                  <h4 className="text-[12px] md:text-[14px] font-black text-slate-900 leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h4>
                </div>

                <div className="mt-3 space-y-2">
                  {/* Progress bar thu nhỏ */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  {/* Button Mini - Chỉ hiện text, bỏ background để đỡ tốn chỗ trên mobile */}
                  <button className={`w-full py-2 rounded-[10px] font-black text-[10px] md:text-[12px] transition-all ${course.progress === 100
                      ? "bg-slate-50 text-slate-400"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                    }`}>
                    {course.progress === 100 ? "Học lại" : "Tiếp tục"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">Trống</p>
        </div>
      )}
    </div>
  );
};