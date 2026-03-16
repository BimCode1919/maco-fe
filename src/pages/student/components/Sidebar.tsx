import { motion, AnimatePresence } from "framer-motion";
import { LogOut, LucideIcon, X } from "lucide-react";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuItems: MenuItem[];
  onLogout: () => void;
}

export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeTab,
  setActiveTab,
  menuItems,
  onLogout
}: SidebarProps) => {

  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* 1. Overlay (Lớp phủ nền mờ) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 z-[40] lg:hidden backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      {/* 2. Sidebar Chính */}
      <motion.aside
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -320,
          width: isSidebarOpen ? 300 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col shadow-2xl lg:shadow-none overflow-hidden whitespace-nowrap"
      >
        <div className="w-[300px] flex flex-col h-full bg-white">

          {/* Header: Logo & Close Button */}
          <div className="p-8 flex items-center justify-between">
            <div className="scale-110 origin-left">
              <Logo />
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-5 space-y-1.5 overflow-y-auto custom-scrollbar">
            <div className="mb-4 px-4">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-[2px]">Menu chính</span>
            </div>

            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full group flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-300 ${isActive
                      ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100"
                      : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
                    }`}
                >
                  <div className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[15px] ${isActive ? "font-black" : "font-bold"}`}>
                    {item.label}
                  </span>

                  {/* Chỉ báo Active bên phải (tùy chọn) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-sm"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer: User & Logout */}
          <div className="p-6 mt-auto border-t border-slate-50 space-y-4">
            {/* Profile Summary (Thêm vào để layout cân đối hơn) */}
            <div className="px-4 py-3 bg-slate-50 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-black text-xs">
                SV
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-black text-slate-900 leading-none mb-1">Học viên Maco</span>
                <span className="text-[11px] font-bold text-slate-400">Gói Pro Account</span>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-[20px] font-black text-red-500 hover:bg-red-50 hover:gap-6 transition-all duration-300"
            >
              <LogOut size={20} strokeWidth={2.5} />
              <span className="text-[15px]">Đăng xuất</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};