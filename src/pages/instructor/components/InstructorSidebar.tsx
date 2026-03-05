import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, BookOpen, 
  DollarSign, Settings, LogOut, MessageSquare 
} from "lucide-react";
import { Logo } from "../../../components/Logo";

export const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Tổng quan" },
  { id: "courses", icon: BookOpen, label: "Khóa học của tôi" },
  { id: "students", icon: Users, label: "Học viên" },
  { id: "revenue", icon: DollarSign, label: "Doanh thu" },
  { id: "settings", icon: Settings, label: "Cài đặt" },
];

export const InstructorSidebar = ({ isSidebarOpen, activeTab, setActiveTab, onLogout }: any) => (
  <motion.aside
    initial={false}
    animate={{ width: isSidebarOpen ? 288 : 0, opacity: isSidebarOpen ? 1 : 0 }}
    className="fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col shadow-xl lg:shadow-none overflow-hidden"
  >
    <div className="w-72 flex flex-col h-full">
      <div className="p-8"><Logo /></div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
              activeTab === item.id 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-6 border-t border-slate-100">
        <button onClick={onLogout} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50">
          <LogOut size={20} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  </motion.aside>
);