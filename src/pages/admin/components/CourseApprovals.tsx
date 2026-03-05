import { CheckCircle2, BarChart3 } from "lucide-react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  date: string;
}

interface CourseApprovalsProps {
  isDarkMode: boolean;
  theme: any;
  courses: Course[];
}

export const CourseApprovals = ({ isDarkMode, theme, courses }: CourseApprovalsProps) => {
  return (
    <div className="space-y-8">
      {/* Approval Card */}
      <div className={`rounded-[32px] p-8 border shadow-sm transition-colors duration-300 ${theme.card}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-black ${theme.text}`}>Phê duyệt khóa học</h3>
          <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-black rounded-full">12</span>
        </div>
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <div className="max-w-[70%]">
                  <p className={`text-sm font-bold truncate transition-colors ${isDarkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>{course.title}</p>
                  <p className={`text-xs font-medium ${theme.textMuted}`}>Bởi: {course.instructor}</p>
                </div>
                <p className={`text-[10px] font-bold ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>{course.date}</p>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-2 bg-indigo-600 text-white text-[10px] font-black rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-1 shadow-lg shadow-indigo-600/20">
                  <CheckCircle2 size={12} /> Duyệt
                </button>
                <button className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-400' : 'bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600'}`}>
                  Từ chối
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className={`w-full mt-8 py-4 border rounded-2xl text-xs font-bold transition-all ${isDarkMode ? 'border-slate-800 text-slate-500 hover:border-indigo-600 hover:text-indigo-400' : 'border-slate-100 text-slate-400 hover:border-indigo-600 hover:text-indigo-600'}`}>
          Xem tất cả yêu cầu
        </button>
      </div>

      {/* Report Banner */}
      <div className={`rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-indigo-600 shadow-indigo-600/20' : 'bg-indigo-700 shadow-indigo-200'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <BarChart3 size={20} />
          </div>
          <h3 className="text-xl font-black">Báo cáo Tuần</h3>
        </div>
        <p className="text-indigo-100 text-sm font-medium mb-6">Tải xuống báo cáo chi tiết về hiệu suất hệ thống và tăng trưởng người dùng.</p>
        <button className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-black text-sm hover:bg-indigo-50 transition-all">
          Tải PDF Report
        </button>
      </div>
    </div>
  );
};