import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Users, BookOpen,
  DollarSign, Settings, LogOut, X
} from "lucide-react";
import { Logo } from "../../../components/Logo";

export const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Tổng quan" },
  { id: "courses", icon: BookOpen, label: "Khóa học của tôi" },
  { id: "students", icon: Users, label: "Học viên" },
  { id: "revenue", icon: DollarSign, label: "Doanh thu" },
  { id: "settings", icon: Settings, label: "Cài đặt" },
];

interface InstructorSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void; // Prop này để đóng trên mobile
  activeTab: string;
  setActiveTab: (id: string) => void;
  onLogout: () => void;
}

export const InstructorSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeTab,
  setActiveTab,
  onLogout
}: InstructorSidebarProps) => {

  // Xử lý click item: Chuyển tab và đóng sidebar nếu là màn hình mobile
  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* 1. LỚP PHỦ OVERLAY (Chỉ hiện trên Mobile) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/50 z-[40] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* 2. SIDEBAR CHÍNH */}
      <motion.aside
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -300, // Trượt x để ẩn hẳn trên mobile
          width: isSidebarOpen ? 288 : 0, // Thu width để nhường không gian trên desktop
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col shadow-2xl lg:shadow-none overflow-hidden whitespace-nowrap`}
      >
        <div className="w-72 flex flex-col h-full">
          {/* Header với nút X trên Mobile */}
          <div className="p-8 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === item.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-100">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              <span className="text-sm">Đăng xuất</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};