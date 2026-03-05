import { 
  Search, 
  Bell, 
  User, 
  Menu, 
  X 
} from "lucide-react";

interface TopBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeTabLabel: string;
}

export const TopBar = ({ isSidebarOpen, setIsSidebarOpen, activeTabLabel }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h2 className="text-xl font-black text-slate-900 hidden md:block">
          {activeTabLabel}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Tìm khóa học..."
            className="w-64 pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
          />
        </div>
        <button className="relative p-3 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900">Nguyễn Văn Học</p>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Học viên Pro</p>
          </div>
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-black">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};
