import React, { useState } from "react";
import { Plus, Bell, Menu, X, User, CheckCircle, MessageCircle, Zap, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./InstructorSidebar";

export const InstructorTopBar = ({ isSidebarOpen, setIsSidebarOpen, activeTab, setActiveTab }: any) => {
  const [showNotify, setShowNotify] = useState(false);

  // Dữ liệu thông báo mẫu
  const notifications = [
    {
      id: 1,
      title: "Học viên mới",
      desc: "Nguyễn Văn A vừa tham gia khóa học Transformer.",
      time: "2 phút trước",
      icon: <User size={14} className="text-blue-600" />,
      bg: "bg-blue-50",
      unread: true
    },
    {
      id: 2,
      title: "AI Quiz hoàn tất",
      desc: "Bộ câu hỏi cho bài 'Chain of Thought' đã sẵn sàng.",
      time: "15 phút trước",
      icon: <Zap size={14} className="text-orange-600" />,
      bg: "bg-orange-50",
      unread: true
    },
    {
      id: 3,
      title: "Bình luận mới",
      desc: "Có câu hỏi mới về kỹ thuật Prompt Engineering.",
      time: "1 giờ trước",
      icon: <MessageCircle size={14} className="text-emerald-600" />,
      bg: "bg-emerald-50",
      unread: false
    }
  ];

  const currentTitle = menuItems.find(i => i.id === activeTab)?.label || "Tạo khóa học";

  return (
    <header className="h-20 sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors border border-slate-100"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h2 className="text-base font-bold text-slate-800 tracking-tight hidden sm:block">
          {currentTitle}
        </h2>
      </div>

      <div className="flex items-center gap-3 lg:gap-5">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotify(!showNotify)}
            className={`p-2.5 rounded-xl transition-all relative ${showNotify ? 'bg-slate-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Bell size={20} />
            {/* Dot đỏ thông báo */}
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <AnimatePresence>
            {showNotify && (
              <>
                {/* Overlay để đóng khi click ra ngoài */}
                <div className="fixed inset-0 z-[-1]" onClick={() => setShowNotify(false)} />

                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-2 z-50 origin-top-right overflow-hidden"
                >
                  <div className="flex items-center justify-between px-3 py-3 border-b border-slate-50 mb-1">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Thông báo mới</span>
                    <button className="text-[10px] font-bold text-indigo-600 hover:underline">Đánh dấu đã đọc</button>
                  </div>

                  <div className="max-h-[350px] overflow-y-auto no-scrollbar">
                    {notifications.map((n) => (
                      <button
                        key={n.id}
                        className={`w-full flex gap-3 p-3 rounded-xl transition-colors text-left mb-1 last:mb-0 ${n.unread ? 'bg-slate-50/80 hover:bg-slate-100' : 'hover:bg-slate-50'}`}
                      >
                        <div className={`w-10 h-10 shrink-0 rounded-lg ${n.bg} flex items-center justify-center`}>
                          {n.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <p className="text-xs font-bold text-slate-900 truncate">{n.title}</p>
                            {n.unread && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 shrink-0"></span>}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">{n.desc}</p>
                          <div className="flex items-center gap-1 mt-1.5 text-slate-400">
                            <Clock size={10} />
                            <span className="text-[9px] font-medium uppercase tracking-tighter">{n.time}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button className="w-full py-3 mt-1 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors border-t border-slate-50">
                    Xem tất cả thông báo
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-100 h-8">
          <div className="text-right hidden sm:block">
            <p className="text-[12px] font-bold text-slate-900 leading-tight">Giảng Viên AI</p>
            <p className="text-[10px] font-semibold text-indigo-600 tracking-wide uppercase">Top Instructor</p>
          </div>
          <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 border border-slate-200 overflow-hidden shadow-inner cursor-pointer hover:border-indigo-200 transition-colors">
            <User size={18} />
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
};