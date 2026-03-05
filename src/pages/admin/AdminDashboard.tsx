import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Users, BookOpen, DollarSign,
  ShieldCheck, BarChart3, Settings, AlertCircle
} from "lucide-react";

// Import các component con hiện có
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatsGrid } from "./components/StatsGrid";
import { RecentUsersTable } from "./components/RecentUsersTable";
import { CourseApprovals } from "./components/CourseApprovals";
import { UserManagement } from "./components/UserManagement";
import { CourseManagement } from "./components/CourseManagement";
import { FinanceManagement } from "./components/FinanceManagement";

// --- IMPORT 3 COMPONENT MỚI ---
import { SystemReports } from "./components/SystemReports";
import { SecurityPermissions } from "./components/SecurityPermissions";
import { SystemSettings } from "./components/SystemSettings";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    { label: "Tổng Người dùng", value: "12,450", icon: Users, color: "bg-blue-600", trend: "+12%" },
    { label: "Khóa học Active", value: "458", icon: BookOpen, color: "bg-indigo-600", trend: "+5%" },
    { label: "Doanh thu (Tháng)", value: "1.240.000.000 ₫", icon: DollarSign, color: "bg-emerald-600", trend: "+18%" },
    { label: "Lỗi hệ thống", value: "0", icon: AlertCircle, color: "bg-rose-600", trend: "0" },
  ];

  // Danh sách các tab đã có component để tránh render trang fallback
  const developedTabs = ["dashboard", "users", "courses", "finances", "reports", "security", "settings"];

  return (
    <div className={`min-h-screen flex overflow-hidden transition-colors duration-300 ${theme.bg}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        menuItems={menuItems}
        onLogout={onLogout}
        isDarkMode={isDarkMode}
        theme={theme}
      />

      <main className="flex-1 h-screen overflow-y-auto relative no-scrollbar">
        <TopBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          theme={theme}
        />

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">

            {/* 1. TỔNG QUAN */}
            {activeTab === "dashboard" && (
              <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Bảng điều khiển Quản trị</h1>
                  <p className={`${theme.textMuted} font-medium`}>Hệ thống đang hoạt động ổn định.</p>
                </div>
                <StatsGrid stats={stats} theme={theme} />
                <div className="grid lg:grid-cols-3 gap-10 mt-10">
                  <div className="lg:col-span-2"><RecentUsersTable isDarkMode={isDarkMode} theme={theme} users={[]} /></div>
                  <CourseApprovals isDarkMode={isDarkMode} theme={theme} courses={[]} />
                </div>
              </motion.div>
            )}

            {/* 2. NGƯỜI DÙNG */}
            {activeTab === "users" && (
              <motion.div key="users" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <UserManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {/* 3. KHÓA HỌC */}
            {activeTab === "courses" && (
              <motion.div key="courses" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <CourseManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {/* 4. TÀI CHÍNH */}
            {activeTab === "finances" && (
              <motion.div key="finances" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <FinanceManagement isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {/* 5. BÁO CÁO HỆ THỐNG */}
            {activeTab === "reports" && (
              <motion.div key="reports" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Báo cáo hệ thống</h1>
                  <p className={`${theme.textMuted} font-medium`}>Giám sát tài nguyên và hiệu năng server real-time.</p>
                </div>
                <SystemReports isDarkMode={isDarkMode} theme={theme} />
              </motion.div>
            )}

            {/* 6. BẢO MẬT & QUYỀN */}
            {activeTab === "security" && (
              <motion.div key="security" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Bảo mật & Phân quyền</h1>
                  <p className={`${theme.textMuted} font-medium`}>Quản lý vai trò nhân sự và cấu hình truy cập hệ thống.</p>
                </div>
                <SecurityPermissions theme={theme} />
              </motion.div>
            )}

            {/* 7. CẤU HÌNH HỆ THỐNG */}
            {activeTab === "settings" && (
              <motion.div key="settings" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="mb-10">
                  <h1 className={`text-3xl font-black mb-2 ${theme.text}`}>Cấu hình hệ thống</h1>
                  <p className={`${theme.textMuted} font-medium`}>Thiết lập tỷ lệ hoa hồng, thuế và các khóa API kết nối.</p>
                </div>
                <SystemSettings theme={theme} />
              </motion.div>
            )}

            {/* FALLBACK CHO CÁC TAB CHƯA ĐỊNH NGHĨA */}
            {!developedTabs.includes(activeTab) && (
              <motion.div key="fallback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-40">
                <div className={`p-8 rounded-[40px] ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'} mb-6`}>
                  <Settings className={`w-16 h-16 ${theme.textMuted} animate-spin-slow`} />
                </div>
                <h2 className={`text-2xl font-black ${theme.text}`}>Đang phát triển</h2>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};