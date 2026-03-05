import { motion } from "motion/react";
import { 
  BookOpen, 
  Clock, 
  Trophy,
  ChevronRight,
  PlayCircle
} from "lucide-react";

interface OverviewTabProps {
  myCourses: any[];
  setActiveTab: (tab: string) => void;
  onCourseClick: (course: any) => void; // Thêm prop này
}

export const OverviewTab = ({ myCourses, setActiveTab, onCourseClick }: OverviewTabProps) => {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Chào mừng trở lại, Học! 👋</h1>
        <p className="text-slate-500 font-medium">Bạn đã hoàn thành 65% mục tiêu học tập trong tuần này. Tiếp tục phát huy nhé!</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Khóa học đang học", value: "4", icon: BookOpen, color: "bg-blue-500" },
            { label: "Giờ đã học", value: "24.5", icon: Clock, color: "bg-indigo-500" },
            { label: "Chứng chỉ đạt được", value: "2", icon: Trophy, color: "bg-emerald-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-6 rounded-32 border border-slate-100 shadow-sm flex items-center gap-6 cursor-default"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold">{stat.label}</p>
                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900">Tiếp tục học</h3>
            <button onClick={() => setActiveTab("my-courses")} className="text-indigo-600 font-bold text-sm hover:underline">Xem tất cả</button>
          </div>

          <div className="grid gap-6">
            {myCourses.slice(0, 2).map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01, x: 5 }}
                onClick={() => onCourseClick(course)} // Click để xem chi tiết
                className="bg-white p-6 rounded-32 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group cursor-pointer hover:border-indigo-600 transition-all"
              >
                <div className="w-full sm:w-32 aspect-video rounded-2xl overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 w-full">
                  <h4 className="font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h4>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} /> {course.lastAccessed}</span>
                    <span className="flex items-center gap-1 text-indigo-600"><PlayCircle size={14} /> {course.lessons} bài học</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className="h-full bg-indigo-600 rounded-full"
                    />
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-indigo-900 rounded-32 p-8 text-white relative overflow-hidden">
            <h3 className="text-xl font-black mb-4">Nâng cấp lên Pro</h3>
            <p className="text-indigo-200 text-sm font-medium mb-6">Mở khóa tất cả các khóa học AI nâng cao.</p>
            <button className="w-full py-4 bg-white text-indigo-900 rounded-2xl font-black text-sm">Nâng cấp ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};