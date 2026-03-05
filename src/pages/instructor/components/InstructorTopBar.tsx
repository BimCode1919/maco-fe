import React, { useState } from "react";
import { Plus, Bell, Menu, X, User, CheckCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./InstructorSidebar";

export const InstructorTopBar = ({ isSidebarOpen, setIsSidebarOpen, activeTab, setActiveTab }: any) => {
  const [showNotify, setShowNotify] = useState(false);
  const currentTitle = menuItems.find(i => i.id === activeTab)?.label || "Tạo khóa học";

  const notifications = [
    { id: 1, text: "Học viên mới vừa đăng ký", time: "2 phút trước", icon: User, color: "text-blue-500" },
    { id: 2, text: "Thanh toán thành công", time: "1 giờ trước", icon: CheckCircle, color: "text-emerald-500" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 rounded-xl bg-slate-100 text-slate-600">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h2 className="text-xl font-black text-slate-900 hidden md:block uppercase">{currentTitle}</h2>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setActiveTab("create-course")}
          className="hidden lg:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200"
        >
          <Plus size={18} /> Tạo khóa học mới
        </button>

        <div className="relative">
          <button onClick={() => setShowNotify(!showNotify)} className="p-3 rounded-xl bg-slate-100 text-slate-600 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <AnimatePresence>
            {showNotify && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50">
                <p className="font-black text-slate-900 mb-4 px-2">Thông báo</p>
                {notifications.map(n => (
                  <div key={n.id} className="p-3 hover:bg-slate-50 rounded-xl flex gap-3 cursor-pointer">
                    <div className={n.color}><n.icon size={16}/></div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{n.text}</p>
                      <p className="text-[10px] text-slate-400">{n.time}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900">Dr. Trần</p>
            <p className="text-xs font-bold text-emerald-600 uppercase">Top Instructor</p>
          </div>
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-black">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};