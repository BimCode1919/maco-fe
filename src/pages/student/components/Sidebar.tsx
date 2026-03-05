import { motion } from "framer-motion"; // Đảm bảo đồng bộ thư viện
import { LogOut, LucideIcon, X } from "lucide-react";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void; // Thêm prop này để đóng sidebar trên mobile
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
  
  // Logic xử lý khi click item trên Mobile: Click xong thì đóng luôn sidebar
  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) { // 1024 là breakpoint của lg
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* 1. Overlay cho Mobile: Khi mở Sidebar sẽ làm mờ nền phía sau */}
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

      {/* 2. Sidebar chính */}
      <motion.aside
        initial={false}
        animate={{ 
          // Mobile: x: -100% để ẩn hẳn ra ngoài màn hình. Desktop: width linh hoạt
          x: isSidebarOpen ? 0 : -300, 
          width: isSidebarOpen ? 288 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col shadow-2xl lg:shadow-none overflow-hidden whitespace-nowrap`}
      >
        <div className="w-72 flex flex-col h-full">
          {/* Header Sidebar có nút X để đóng nhanh trên Mobile */}
          <div className="p-8 flex items-center justify-between">
            <Logo />
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-xl text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
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
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

// Import thêm AnimatePresence từ framer-motion nếu bạn dùng overlay
import { AnimatePresence } from "framer-motion";