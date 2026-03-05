import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

interface MyCoursesTabProps {
  myCourses: any[];
  onCourseClick: (course: any) => void;
}

export const MyCoursesTab = ({ myCourses, onCourseClick }: MyCoursesTabProps) => {
  return (
    <div className="space-y-8">
      {/* Tiêu đề và Bộ lọc */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-slate-900">Khóa học của tôi</h1>
        <div className="flex gap-2">
          {["Tất cả", "Đang học", "Đã hoàn thành"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-slate-100 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách khóa học */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onCourseClick(course)}
            className="bg-white rounded-32 border border-slate-100 shadow-sm overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-lg">
                  <PlayCircle size={24} />
                </div>
              </div>
              {course.progress === 100 && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  Hoàn thành
                </div>
              )}
            </div>

            <div className="p-6">
              <h4 className="font-black text-slate-900 mb-4 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                {course.title}
              </h4>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                <span>Tiến độ: {course.progress}%</span>
                <span>{course.lessons} bài học</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div
                  className={`h-full transition-all duration-1000 ${course.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <button className="w-full py-3 bg-slate-50 text-slate-900 rounded-2xl font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {course.progress === 100 ? "Học lại" : "Tiếp tục học"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};