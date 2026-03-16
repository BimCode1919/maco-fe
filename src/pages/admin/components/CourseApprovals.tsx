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

export const CourseApprovals = ({ theme, courses, isDarkMode }: CourseApprovalsProps) => (
  <div className="flex flex-col gap-8 md:gap-10">
    {/* Card Phê Duyệt */}
    <div className={`rounded-[32px] p-6 md:p-8 border shadow-lg ${theme.card}`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className={`text-lg md:text-xl font-black ${theme.text}`}>Phê duyệt khóa học</h3>
        <span className="w-7 h-7 md:w-9 md:h-9 rounded-xl bg-indigo-600 text-white text-xs md:text-sm font-black flex items-center justify-center shadow-lg shadow-indigo-500/20">
          {courses.length}
        </span>
      </div>

      <div className="space-y-6 md:space-y-8">
        {courses.map((course) => (
          <div key={course.id} className="group">
            <div className="mb-4">
              <h4 className={`text-sm md:text-base font-black group-hover:text-indigo-500 transition-colors ${theme.text}`}>
                {course.title}
              </h4>
              <p className="text-[11px] md:text-xs text-slate-500 font-medium italic mt-1">Giảng viên: {course.instructor}</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-2 md:py-3 bg-indigo-600 text-white text-[11px] md:text-xs font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all">
                Duyệt ngay
              </button>
              <button className={`px-4 py-2 md:py-3 rounded-xl text-[11px] md:text-xs font-black ${theme.input} hover:bg-rose-500/10 hover:text-rose-500 transition-all`}>
                Từ chối
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Báo cáo Tuần - Làm to hẳn ra trên Desktop */}
    <div className={`rounded-[32px] p-8 md:p-10 text-white bg-gradient-to-br from-indigo-600 to-violet-700 relative overflow-hidden shadow-2xl`}>
      <div className="relative z-10">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
          <BarChart3 size={32} className="md:w-10 md:h-10" />
        </div>
        <h3 className="text-xl md:text-3xl font-black mb-3">Báo cáo hệ thống</h3>
        <p className="text-indigo-100 text-xs md:text-base font-medium mb-8 leading-relaxed">
          Phân tích chi tiết doanh thu, lưu lượng truy cập và hiệu năng server trong 7 ngày qua.
        </p>
        <button className="w-full py-4 md:py-5 bg-white text-indigo-700 rounded-2xl font-black text-sm md:text-base hover:shadow-xl transition-all">
          Tải báo cáo PDF (.report)
        </button>
      </div>
      {/* Trang trí thêm cho Desktop đỡ trống */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
    </div>
  </div>
);