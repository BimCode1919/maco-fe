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

  // Định nghĩa animation variants để dễ quản lý
  const sidebarVariants = {
    open: {
      x: 0,
      width: 288,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    },
    closed: {
      // Trên mobile trượt hẳn ra ngoài (-100%), trên desktop chỉ thu width về 0
      x: window.innerWidth < 1024 ? "-100%" : 0,
      width: 0,
      transition: { type: "spring", damping: 25, stiffness: 200 }
    }
  };

  return (
    <>
      {/* Overlay cho mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/60 z-[40] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        // Thêm các class để xử lý hiển thị linh hoạt
        className={`fixed lg:relative z-50 h-screen border-r flex flex-col shadow-2xl ${theme.sidebar} 
          ${!isOpen ? 'invisible lg:visible lg:w-0 border-none' : 'visible'} 
          overflow-hidden whitespace-nowrap transition-[border,visibility] duration-300`}
      >
        {/* Quan trọng: div này phải có width cố định để nội dung không bị méo khi sidebar đang trượt */}
        <div className="w-72 flex flex-col h-full shrink-0">
          <div className="p-8 flex items-center justify-between">
            <div>
              <Logo />
              <div className={`mt-2 px-3 py-1 rounded-full w-fit border ${isDarkMode ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                <span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Administrator</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100/10 rounded-xl text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : `${isDarkMode ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'}`
                  }`}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className={`p-6 border-t ${theme.border}`}>
            <button
              onClick={onLogout}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${isDarkMode ? 'text-red-400 hover:bg-red-500/10' : 'text-red-500 hover:bg-red-50'}`}
            >
              <LogOut size={20} />
              <span className="text-sm">Đăng xuất hệ thống</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};