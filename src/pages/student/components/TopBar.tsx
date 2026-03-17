import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  CheckCircle2,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../../../components/Logo";

interface MenuItem {
  id: string;
  icon: any;
  label: string;
}

interface TopBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  menuItems: MenuItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  onLogoClick: () => void;
}

export const TopBar = ({
  searchQuery,
  setSearchQuery,
  menuItems,
  activeTab,
  setActiveTab,
  onLogout,
  onLogoClick
}: TopBarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onLogoClick} className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
        </button>

        <div className="relative w-96">
          <Search size={18} className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm khóa học..."
            className="w-full bg-white border border-slate-200 shadow-sm rounded-full py-2 pl-12 pr-4 text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className={`relative p-3 rounded-[16px] transition-all border border-transparent ${
            showNotifications
              ? "bg-indigo-50 text-indigo-600 border-indigo-100"
              : "bg-slate-50 text-slate-500 hover:text-indigo-600"
          }`}
        >
          <motion.div
            animate={showNotifications ? { rotate: [0, 15, -15, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Bell size={20} strokeWidth={2.5} />
          </motion.div>
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        <div className="relative" ref={notificationRef}>
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

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="p-3 rounded-[16px] bg-slate-50 text-slate-500 hover:text-indigo-600 transition-all"
          >
            <User size={20} strokeWidth={2.5} />
          </button>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute right-0 mt-3 w-60 bg-white rounded-[24px] shadow-2xl shadow-indigo-200/50 border border-slate-100 overflow-hidden"
              >
                <div className="p-4 border-b border-slate-50">
                  <p className="text-sm font-black text-slate-900">Học viên Maco</p>
                  <p className="text-[11px] text-slate-400">ID: 280426</p>
                </div>
                <div className="p-3">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setShowMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                        activeTab === item.id ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="inline-flex items-center gap-3">
                        <item.icon size={16} />
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-slate-100">
                  <button
                    onClick={() => {
                      onLogout();
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-black text-red-600 hover:bg-slate-50 transition-colors"
                  >
                    Đăng xuất
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
