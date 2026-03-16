import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Lock, Bell, Shield,
    Camera, Save, CreditCard, Crown,
    Plus, CheckCircle2, ChevronRight,
    Smartphone, Mail, Globe
} from "lucide-react";

export const InstructorSettings = () => {
    const [activeSection, setActiveSection] = useState("profile");

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen bg-[#F8FAFC]/50">
            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Cài đặt tài khoản</h1>
                <p className="text-slate-500 font-medium mt-1">Quản lý hồ sơ chuyên gia, bảo mật và các tùy chọn thanh toán.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* --- SIDEBAR NAV --- */}
                <div className="w-full lg:w-72 space-y-2">
                    {[
                        { id: "profile", label: "Hồ sơ cá nhân", icon: User },
                        { id: "security", label: "Bảo mật & 2FA", icon: Lock },
                        { id: "billing", label: "Ví & Thanh toán", icon: CreditCard },
                        { id: "membership", label: "Gói Instructor", icon: Crown }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${activeSection === item.id
                                    ? "bg-white text-indigo-600 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.1)] border border-indigo-50"
                                    : "text-slate-400 hover:text-slate-600 hover:bg-white/50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={18} strokeWidth={2.5} />
                                {item.label}
                            </div>
                            {activeSection === item.id && <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                        </button>
                    ))}
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-10 relative overflow-hidden"
                        >
                            {/* 1. PROFILE SECTION */}
                            {activeSection === "profile" && (
                                <div className="space-y-10">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <div className="relative group">
                                            <div className="w-32 h-32 rounded-[40px] bg-indigo-50 overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-100">
                                                <img
                                                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                                                    alt="Avatar"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <button className="absolute -bottom-2 -right-2 p-3 bg-slate-900 text-white rounded-2xl shadow-lg hover:bg-indigo-600 transition-colors">
                                                <Camera size={18} />
                                            </button>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="font-black text-xl text-slate-900">Ảnh đại diện Giảng viên</h3>
                                            <p className="text-sm text-slate-400 font-medium mt-1">Ảnh này sẽ hiển thị trên các khóa học của bạn.</p>
                                            <div className="flex gap-2 mt-4 justify-center md:justify-start">
                                                <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500">JPG, PNG</span>
                                                <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500">Max 5MB</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tên hiển thị</label>
                                            <input type="text" defaultValue="Giảng Viên IT" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[20px] text-sm font-bold transition-all outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Lĩnh vực chuyên môn</label>
                                            <input type="text" defaultValue="Backend Developer & AI Specialist" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[20px] text-sm font-bold transition-all outline-none" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Giới thiệu ngắn (Bio)</label>
                                            <textarea rows={4} defaultValue="Hơn 5 năm kinh nghiệm trong phát triển Java Spring Boot và tích hợp AI. Đam mê chia sẻ kiến thức công nghệ mới đến cộng đồng." className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500/20 focus:bg-white rounded-[20px] text-sm font-bold transition-all outline-none resize-none" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 2. SECURITY SECTION */}
                            {activeSection === "security" && (
                                <div className="space-y-10">
                                    <div className="grid gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mật khẩu hiện tại</label>
                                            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[20px] text-sm font-bold outline-none focus:ring-2 ring-indigo-500/10" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mật khẩu mới</label>
                                                <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[20px] text-sm font-bold outline-none focus:ring-2 ring-indigo-500/10" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Xác nhận mật khẩu</label>
                                                <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[20px] text-sm font-bold outline-none focus:ring-2 ring-indigo-500/10" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-[28px] flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                                                <Smartphone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-900">Xác thực 2 lớp (2FA)</p>
                                                <p className="text-[11px] text-emerald-700 font-bold uppercase tracking-tight">Tăng cường bảo mật tài khoản</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer shadow-inner">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. BILLING SECTION */}
                            {activeSection === "billing" && (
                                <div className="space-y-8">
                                    <div className="grid gap-4">
                                        <div className="p-8 border-2 border-indigo-600 bg-indigo-50/20 rounded-[32px] flex items-center justify-between group relative overflow-hidden">
                                            <div className="flex items-center gap-6 relative z-10">
                                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                                                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="w-10" />
                                                </div>
                                                <div>
                                                    <p className="text-lg font-black text-slate-900 tracking-tighter">•••• •••• •••• 4242</p>
                                                    <div className="flex gap-3 mt-1">
                                                        <span className="text-[10px] font-black text-indigo-600 bg-white px-2 py-0.5 rounded-md border border-indigo-100 uppercase">Mặc định</span>
                                                        <span className="text-[10px] font-black text-slate-400 uppercase">Hết hạn 12/26</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CheckCircle2 className="text-indigo-600 relative z-10" size={32} strokeWidth={3} />
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16" />
                                        </div>

                                        <button className="p-8 border-2 border-dashed border-slate-200 rounded-[32px] text-slate-400 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all group">
                                            <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-indigo-100 transition-colors">
                                                <Plus size={20} />
                                            </div>
                                            Thêm phương thức rút tiền mới
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* 4. MEMBERSHIP SECTION */}
                            {activeSection === "membership" && (
                                <div className="space-y-8">
                                    <div className="p-10 bg-slate-900 rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-slate-200">
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-6">
                                                <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center">
                                                    <Crown size={16} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Gói thành viên hiện tại</span>
                                            </div>
                                            <h3 className="text-4xl font-black mb-2 tracking-tighter italic">PRO INSTRUCTOR</h3>
                                            <p className="text-slate-400 text-sm font-medium">Bản quyền của bạn sẽ hết hạn trong 24 ngày nữa.</p>

                                            <div className="mt-10 flex flex-wrap gap-4">
                                                <button className="px-8 py-4 bg-indigo-600 text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-lg shadow-indigo-500/20">Gia hạn ngay</button>
                                                <button className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-[20px] text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">Lịch sử hóa đơn</button>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 right-0 p-10 opacity-10">
                                            <Crown size={200} strokeWidth={1} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 relative group overflow-hidden">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Dung lượng Video lưu trữ</p>
                                            <div className="flex items-end justify-between mb-3">
                                                <h4 className="text-2xl font-black text-slate-900">75<span className="text-sm text-slate-400 font-bold ml-1">/ 100GB</span></h4>
                                                <span className="text-xs font-black text-indigo-600">75%</span>
                                            </div>
                                            <div className="h-3 bg-white rounded-full overflow-hidden p-0.5 border border-slate-200">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "75%" }}
                                                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                                                />
                                            </div>
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                                        </div>

                                        <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 flex flex-col justify-center">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Giới hạn học viên</p>
                                            <h4 className="text-2xl font-black text-slate-900 italic uppercase">Unlimited</h4>
                                            <p className="text-xs text-slate-400 font-bold mt-2">Không giới hạn quy mô lớp học</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* FOOTER ACTION */}
                            <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-[11px] text-slate-400 font-bold italic">Lần cập nhật cuối cùng: 16/03/2026</p>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                                    <Save size={18} strokeWidth={2.5} /> Lưu thay đổi
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};