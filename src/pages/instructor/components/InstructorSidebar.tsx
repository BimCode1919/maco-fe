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

  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 z-[40] lg:hidden backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -300,
          width: isSidebarOpen ? 280 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col overflow-hidden"
      >
        <div className="w-[280px] flex flex-col h-full shrink-0">
          {/* Logo Section - Cố định chiều cao và căn giữa chuẩn SaaS */}
          <div className="h-20 px-6 flex items-center justify-between shrink-0 border-b border-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-xl shadow-lg shadow-indigo-100">
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-900 leading-none tracking-tight">MACO</span>
              </div>
            </div>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto no-scrollbar">
            <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hệ thống</p>
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive
                      ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <item.icon size={18} className={isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"} />
                  <span className={`text-[13px] font-semibold tracking-tight ${isActive ? "font-bold" : ""}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div layoutId="active-pill" className="ml-auto w-1 h-5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer Area */}
          <div className="p-4 border-t border-slate-50 mt-auto">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-semibold text-[13px]"
            >
              <LogOut size={18} />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};