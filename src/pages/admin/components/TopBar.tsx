import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Moon, Sun, Menu, X, ShieldCheck, AlertCircle, CheckCircle2, DollarSign, Clock } from "lucide-react";

interface TopBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (val: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme: any;
}

export const TopBar = ({ isSidebarOpen, setIsSidebarOpen, isDarkMode, setIsDarkMode, theme }: TopBarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  const demoNotifications = [
    { id: 1, title: "Lỗi Server", desc: "Node_01 quá tải CPU (>90%)", time: "2 phút trước", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-500/10" },
    { id: 2, title: "Thanh toán mới", desc: "Nguyễn Văn A vừa mua khóa học React", time: "15 phút trước", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 3, title: "Phê duyệt", desc: "Giảng viên IT_Expert gửi khóa học mới", time: "1 giờ trước", icon: CheckCircle2, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 md:px-8 py-3 flex items-center justify-between transition-colors duration-300 ${theme.header}`}>
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-2.5 rounded-xl transition-all border ${isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-slate-50 text-slate-600 border-slate-200'} hover:bg-indigo-600 hover:text-white hover:border-indigo-600`}
        >
          {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <h2 className={`text-sm md:text-base font-black hidden sm:block uppercase tracking-[0.1em] ${theme.text}`}>
          System Control
        </h2>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        {/* Search Input - Tối ưu độ rộng và font */}
        <div className="relative hidden lg:block">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${theme.textMuted}`} size={16} />
          <input
            type="text"
            placeholder="Tìm lệnh hệ thống..."
            className={`w-56 xl:w-72 pl-10 pr-4 py-2 border rounded-xl text-[13px] font-medium focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all ${theme.input} ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          />
        </div>

        {/* Action Buttons Group */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2.5 rounded-xl transition-all border flex items-center justify-center ${isDarkMode ? 'bg-slate-900 text-amber-400 border-slate-800' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2.5 rounded-xl transition-all border ${showNotifications ? 'bg-indigo-600 text-white border-indigo-600' : isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
            >
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 border-2 border-white dark:border-slate-900"></span>
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className={`absolute right-0 mt-3 w-[320px] rounded-2xl border shadow-2xl overflow-hidden p-1.5 z-50 origin-top-right ${theme.card}`}
                >
                  <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className={`font-black text-[11px] uppercase tracking-wider ${theme.text}`}>Thông báo hệ thống</span>
                    <button className="text-[10px] font-bold text-indigo-500 hover:text-indigo-600 transition-colors">Đọc tất cả</button>
                  </div>

                  <div className="max-h-[380px] overflow-y-auto no-scrollbar py-1">
                    {demoNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`flex gap-3 p-3 rounded-xl cursor-pointer transition-all mb-1 last:mb-0 ${isDarkMode ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'}`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center ${notif.bg} ${notif.color}`}>
                          <notif.icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-[12px] font-bold truncate ${theme.text}`}>{notif.title}</p>
                          <p className={`text-[11px] leading-relaxed mt-0.5 line-clamp-2 ${theme.textMuted}`}>{notif.desc}</p>
                          <div className="flex items-center gap-1 mt-1.5 opacity-60">
                            <Clock size={10} className={theme.textMuted} />
                            <span className={`text-[9px] font-medium uppercase ${theme.textMuted}`}>{notif.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-2.5 mt-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all border-t ${isDarkMode ? 'text-slate-500 border-slate-800 hover:text-indigo-400' : 'text-slate-400 border-slate-50 hover:text-indigo-600'}`}>
                    Toàn bộ báo cáo
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* User Profile Info - Tối ưu spacing */}
        <div className={`flex items-center gap-3 pl-3 md:pl-5 border-l h-8 ${theme.border}`}>
          <div className="text-right hidden md:block">
            <p className={`text-[13px] font-black leading-none ${theme.text}`}>Super Admin</p>
            <p className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Root Access</p>
          </div>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black shadow-md transition-transform hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-indigo-600 shadow-indigo-600/20' : 'bg-indigo-600 shadow-indigo-200'}`}>
            <ShieldCheck size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};