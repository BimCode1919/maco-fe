import { motion } from "motion/react";
import { LogOut, LucideIcon } from "lucide-react";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuItems: MenuItem[];
  onLogout: () => void;
}

export const Sidebar = ({ isSidebarOpen, activeTab, setActiveTab, menuItems, onLogout }: SidebarProps) => {
  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isSidebarOpen ? 288 : 0,
        opacity: isSidebarOpen ? 1 : 0,
        x: isSidebarOpen ? 0 : -20
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed lg:relative z-50 h-screen bg-white border-r border-slate-100 flex flex-col shadow-xl lg:shadow-none overflow-hidden whitespace-nowrap"
    >
      <div className="w-72 flex flex-col h-full">
        <div className="p-8">
          <Logo />
        </div>

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
  );
};
