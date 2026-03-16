import { motion, AnimatePresence } from "framer-motion";
import { LogOut, LucideIcon, X } from "lucide-react";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (id: string) => void;
  menuItems: MenuItem[];
  onLogout: () => void;
  isDarkMode: boolean;
  theme: any;
}

export const Sidebar = ({
  isOpen,
  setIsOpen,
  activeTab,
  setActiveTab,
  menuItems,
  onLogout,
  isDarkMode,
  theme
}: SidebarProps) => {

  const handleItemClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const sidebarVariants = {
    open: {
      x: 0,
      width: window.innerWidth < 640 ? "100%" : 280, // Mobile chiếm full hoặc 280px
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    closed: {
      x: window.innerWidth < 1024 ? "-100%" : 0,
      width: 0,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/40 z-[40] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed lg:relative z-50 h-screen border-r flex flex-col shadow-2xl ${theme.sidebar} 
          ${!isOpen ? 'invisible lg:visible lg:w-0 border-none' : 'visible'} 
          overflow-hidden whitespace-nowrap transition-[border,visibility] duration-300`}
      >
        {/* Container cố định chiều rộng nội dung */}
        <div className="w-[280px] flex flex-col h-full shrink-0">
          {/* Header Sidebar - Thu nhỏ padding */}
          <div className="p-5 md:p-6 flex items-center justify-between">
            <div>
              <Logo />
              <div className={`mt-2 px-2.5 py-0.5 rounded-full w-fit border ${isDarkMode ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                <span className={`text-[9px] font-black uppercase tracking-[0.15em] ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  Administrator
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100/10 rounded-xl text-slate-400"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Links - Giảm size chữ và padding item */}
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 md:py-3.5 rounded-xl font-bold transition-all ${activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : `${isDarkMode ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`
                  }`}
              >
                <item.icon size={18} className={activeTab === item.id ? "text-white" : "opacity-70"} />
                <span className="text-[13px] tracking-tight">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer Sidebar - Tinh gọn nút Đăng xuất */}
          <div className={`p-4 border-t ${theme.border}`}>
            <button
              onClick={onLogout}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-[13px] transition-all ${isDarkMode ? 'text-rose-400 hover:bg-rose-500/10' : 'text-rose-500 hover:bg-rose-50'}`}
            >
              <LogOut size={18} />
              <span>Đăng xuất hệ thống</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};