import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Moon, Sun, Menu, X, ShieldCheck, AlertCircle, CheckCircle2, DollarSign } from "lucide-react";

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

  // Đóng thông báo khi click ra ngoài (Tùy chọn)
  // useOnClickOutside(notificationRef, () => setShowNotifications(false));

  const demoNotifications = [
    { id: 1, title: "Lỗi Server", desc: "Node_01 quá tải CPU (>90%)", time: "2 phút trước", icon: AlertCircle, color: "text-rose-500", bg: "bg-rose-500/10" },
    { id: 2, title: "Thanh toán mới", desc: "Học viên Nguyễn Văn A vừa mua khóa học React", time: "15 phút trước", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 3, title: "Phê duyệt", desc: "Giảng viên IT_Expert gửi 1 khóa học mới chờ duyệt", time: "1 giờ trước", icon: CheckCircle2, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-8 py-4 flex items-center justify-between transition-colors duration-300 ${theme.header}`}>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-3 rounded-xl transition-all border ${isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-indigo-600 hover:text-white' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-indigo-600 hover:text-white'}`}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h2 className={`text-xl font-black hidden md:block uppercase tracking-tight ${theme.text}`}>System Control</h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-xl transition-all border flex items-center justify-center ${isDarkMode ? 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'}`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Search Input */}
        <div className="relative hidden lg:block">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.textMuted}`} size={18} />
          <input
            type="text"
            placeholder="Tìm kiếm hệ thống..."
            className={`w-64 pl-12 pr-4 py-2.5 border rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all ${theme.input} ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          />
        </div>

        {/* NOTIFICATION BUTTON & POPUP */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-3 rounded-xl transition-all border ${showNotifications ? 'bg-indigo-600 text-white border-indigo-600' : isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800 hover:text-indigo-400' : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-indigo-600'}`}
          >
            <Bell size={20} />
            <span className={`absolute top-2 right-2 w-2 h-2 rounded-full border-2 ${isDarkMode ? 'bg-indigo-500 border-slate-950' : 'bg-indigo-600 border-white'}`}></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className={`absolute right-0 mt-4 w-80 rounded-[24px] border shadow-2xl overflow-hidden p-2 ${theme.card}`}
              >
                <div className="p-4 border-b flex justify-between items-center">
                  <h4 className={`font-black text-sm ${theme.text}`}>Thông báo</h4>
                  <button className="text-[10px] font-bold text-indigo-500 hover:underline">Đánh dấu đã đọc</button>
                </div>

                <div className="max-h-96 overflow-y-auto no-scrollbar">
                  {demoNotifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition-all mb-1 ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${notif.bg} ${notif.color}`}>
                        <notif.icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold truncate ${theme.text}`}>{notif.title}</p>
                        <p className={`text-[10px] leading-relaxed mt-0.5 ${theme.textMuted}`}>{notif.desc}</p>
                        <p className="text-[9px] font-medium text-slate-500 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t">
                  <button className={`w-full py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    Xem tất cả báo cáo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile Info */}
        <div className={`flex items-center gap-3 pl-4 border-l ${theme.border}`}>
          <div className="text-right hidden sm:block">
            <p className={`text-sm font-black ${theme.text}`}>Super Admin</p>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Root Access</p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black shadow-lg ${isDarkMode ? 'bg-indigo-600 shadow-indigo-600/20' : 'bg-indigo-600 shadow-indigo-200'}`}>
            <ShieldCheck size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};