import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Users, BookOpen, DollarSign,
  ShieldCheck, BarChart3, Settings, AlertCircle
} from "lucide-react";

// Import các component từ thư mục con
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatsGrid } from "./components/StatsGrid";
import { RecentUsersTable } from "./components/RecentUsersTable";
import { CourseApprovals } from "./components/CourseApprovals";
import { UserManagement } from "./components/UserManagement";
import { CourseManagement } from "./components/CourseManagement";
import { FinanceManagement } from "./components/FinanceManagement";
import { SystemReports } from "./components/SystemReports";
import { SecurityPermissions } from "./components/SecurityPermissions";
import { SystemSettings } from "./components/SystemSettings";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const theme = {
    bg: isDarkMode ? "bg-slate-950" : "bg-slate-50",
    sidebar: isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
    card: isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
    text: isDarkMode ? "text-white" : "text-slate-900",
    textMuted: isDarkMode ? "text-slate-400" : "text-slate-500",
    border: isDarkMode ? "border-slate-800" : "border-slate-200",
    input: isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200",
    header: isDarkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200",
    tableHeader: isDarkMode ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-400",
    tableRow: isDarkMode ? "border-slate-800/50 hover:bg-slate-800/30" : "border-slate-50 hover:bg-slate-50/50",
  };

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Tổng quan" },
    { id: "users", icon: Users, label: "Quản lý Người dùng" },
    { id: "courses", icon: BookOpen, label: "Quản lý Khóa học" },
    { id: "finances", icon: DollarSign, label: "Tài chính & Doanh thu" },
    { id: "reports", icon: BarChart3, label: "Báo cáo hệ thống" },
    { id: "security", icon: ShieldCheck, label: "Bảo mật & Quyền" },
    { id: "settings", icon: Settings, label: "Cấu hình hệ thống" },
  ];

  const stats = [
    { label: "Tổng Người dùng", value: "3,842", icon: Users, color: "bg-blue-600", trend: "+5.2%" },
    { label: "Khóa học Active", value: "128", icon: BookOpen, color: "bg-indigo-600", trend: "+2.4%" },
    { label: "Doanh thu (Tháng)", value: "84,500k", icon: DollarSign, color: "bg-emerald-600", trend: "+10.1%" },
    { label: "Lỗi hệ thống", value: "2", icon: AlertCircle, color: "bg-rose-600", trend: "-50%" },
  ];

  const seedUsers = [
    { id: 1, name: "User_8821", email: "st_8821@edu.vn", role: "Học viên", status: "Active", joined: "5 phút trước" },
    { id: 2, name: "Instructor_X", email: "inst_x@ai-lab.com", role: "Giảng viên", status: "Pending", joined: "12 phút trước" },
    { id: 3, name: "User_7703", email: "u7703.dev@gmail.com", role: "Học viên", status: "Active", joined: "1 giờ trước" },
    { id: 4, name: "User_1129", email: "test_bot@edu.vn", role: "Học viên", status: "Banned", joined: "3 giờ trước" },
    { id: 5, name: "Expert_Dev", email: "dev_expert@learning.io", role: "Giảng viên", status: "Active", joined: "5 giờ trước" },
  ];

  const seedCourses = [
    { id: 1, title: "Java Backend Masterclass", instructor: "Giảng viên Java", date: "10:30" },
    { id: 2, title: "Spring Boot AI Integration", instructor: "Giảng viên AI", date: "09:15" },
    { id: 3, title: "React Native Advanced", instructor: "Giảng viên FE", date: "Hôm qua" },
  ];

  return (
    <div className={`min-h-screen flex overflow-hidden transition-colors duration-300 ${theme.bg}`}>
      <Sidebar
        isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}
        activeTab={activeTab} setActiveTab={setActiveTab}
        menuItems={menuItems} onLogout={onLogout}
        isDarkMode={isDarkMode} theme={theme}
      />

      <main className="flex-1 h-screen overflow-y-auto relative no-scrollbar">
        <TopBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} // ĐỔI TỪ setIsOpen THÀNH setIsSidebarOpen
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          theme={theme}
        />

        <div className="p-4 md:p-10 xl:p-12 max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div key="dashboard">
                <div className="mb-8 md:mb-12">
                  <h1 className={`text-2xl md:text-4xl xl:text-5xl font-black mb-2 ${theme.text}`}>
                    Bảng điều khiển Quản trị
                  </h1>
                  <p className={`text-xs md:text-base ${theme.textMuted} font-medium`}>
                    Chào mừng trở lại! Hệ thống đang vận hành với hiệu suất tối ưu.
                  </p>
                </div>

                <StatsGrid stats={stats} theme={theme} />

                {/* Điều chỉnh tỉ lệ 2:1 trên desktop để bảng người dùng rộng ra */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">
                  <div className="lg:col-span-2 order-2 lg:order-1">
                    <RecentUsersTable theme={theme} users={seedUsers} isDarkMode={isDarkMode} />
                  </div>
                  <div className="order-1 lg:order-2 space-y-8">
                    <CourseApprovals theme={theme} courses={seedCourses} isDarkMode={isDarkMode} />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "users" && (
              <motion.div key="users" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <UserManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {activeTab === "courses" && (
              <motion.div key="courses" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <CourseManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {activeTab === "finances" && (
              <motion.div key="finances" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <FinanceManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {activeTab === "reports" && (
              <motion.div key="reports" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Báo cáo hệ thống</h1>
                  <p className={`${theme.textMuted} font-medium`}>Giám sát tài nguyên và hiệu năng server real-time.</p>
                </div>
                <SystemReports isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div key="security" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Bảo mật & Phân quyền</h1>
                  <p className={`${theme.textMuted} font-medium`}>Quản lý vai trò nhân sự và cấu hình truy cập hệ thống.</p>
                </div>
                <SecurityPermissions theme={theme} isDarkMode={false} />
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div key="settings" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Cấu hình hệ thống</h1>
                  <p className={`${theme.textMuted} font-medium`}>Thiết lập tỷ lệ hoa hồng và API.</p>
                </div>
                <SystemSettings theme={theme} isDarkMode={false} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};