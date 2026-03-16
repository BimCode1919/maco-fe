import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  CheckCircle2,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TopBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeTabLabel: string;
}

export const TopBar = ({ isSidebarOpen, setIsSidebarOpen, activeTabLabel }: TopBarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "Khóa học mới", desc: "AI Gen: Prompt Engineering đã ra mắt!", time: "5 phút trước", icon: CheckCircle2, color: "text-emerald-500" },
    { id: 2, title: "Nhắc nhở học tập", desc: "Bạn còn bài tập Python chưa hoàn thành.", time: "2 giờ trước", icon: Clock, color: "text-amber-500" },
  ];

  return (
    <header className="sticky top-0 z-100 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex items-center justify-between">

      {/* Left side */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`p-2.5 rounded-[14px] transition-all duration-300 ${isSidebarOpen ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
            }`}
        >
          {isSidebarOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
        <h2 className="text-lg font-black text-slate-900 hidden md:block tracking-tight">{activeTabLabel}</h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications with Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative p-3 rounded-[16px] transition-all border border-transparent ${showNotifications ? "bg-indigo-50 text-indigo-600 border-indigo-100" : "bg-slate-50 text-slate-500 hover:text-indigo-600"
              }`}
          >
            <motion.div animate={showNotifications ? { rotate: [0, 15, -15, 0] } : {}} transition={{ duration: 0.4 }}>
              <Bell size={20} strokeWidth={2.5} />
            </motion.div>
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute right-0 mt-3 w-80 bg-white rounded-[24px] shadow-2xl shadow-indigo-200/50 border border-slate-100 overflow-hidden"
              >
                <div className="p-5 border-b border-slate-50 flex items-center justify-between">
                  <span className="font-black text-slate-900">Thông báo</span>
                  <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">2 MỚI</span>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0 flex gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 ${n.color}`}>
                        <n.icon size={18} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-slate-900 leading-tight mb-1">{n.title}</p>
                        <p className="text-[11px] font-medium text-slate-500 leading-snug">{n.desc}</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 text-[12px] font-black text-slate-400 hover:text-indigo-600 hover:bg-slate-50 transition-all uppercase tracking-widest">
                  Xem tất cả
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-100 ml-2">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-black text-slate-900 leading-tight">Học viên Maco</p>
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[1px]">ID: 280426</p>
          </div>
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[16px] flex items-center justify-center text-white shadow-lg shadow-indigo-100">
            <User size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </header>
  );
};