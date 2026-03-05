import { motion } from "motion/react";
import { LogOut, LucideIcon } from "lucide-react";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (id: string) => void;
  menuItems: MenuItem[];
  onLogout: () => void;
  isDarkMode: boolean;
  theme: any;
}

export const Sidebar = ({ isOpen, activeTab, setActiveTab, menuItems, onLogout, isDarkMode, theme }: SidebarProps) => {
  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isOpen ? 288 : 0,
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : -20
      }}
      className={`fixed lg:relative z-50 h-screen border-r flex flex-col shadow-2xl transition-all duration-300 ${theme.sidebar} overflow-hidden whitespace-nowrap`}
    >
      <div className="w-72 flex flex-col h-full">
        <div className="p-8">
          <Logo />
          <div className={`mt-2 px-3 py-1 rounded-full w-fit border ${isDarkMode ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
            <span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Administrator</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
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
          <button onClick={onLogout} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${isDarkMode ? 'text-red-400 hover:bg-red-500/10' : 'text-red-500 hover:bg-red-50'}`}>
            <LogOut size={20} />
            <span className="text-sm">Đăng xuất hệ thống</span>
          </button>
        </div>
      </div>
    </motion.aside>
  );
};