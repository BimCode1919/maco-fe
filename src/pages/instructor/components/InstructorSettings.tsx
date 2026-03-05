import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    User, Lock, Bell, Shield, 
    Camera, Save, CreditCard, Crown, 
    Plus, CheckCircle2, ChevronRight 
} from "lucide-react";

export const InstructorSettings = () => {
    const [activeSection, setActiveSection] = useState("profile");

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Cài đặt tài khoản</h1>
                <p className="text-slate-500 font-medium">Quản lý hồ sơ, thanh toán và gói dịch vụ của bạn.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* --- Sidebar Nav --- */}
                <div className="w-full lg:w-72 space-y-2">
                    {[
                        { id: "profile", label: "Hồ sơ cá nhân", icon: User },
                        { id: "security", label: "Bảo mật", icon: Lock },
                        { id: "billing", label: "Thanh toán", icon: CreditCard },
                        { id: "membership", label: "Gói thành viên", icon: Crown }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                                activeSection === item.id
                                    ? "bg-white text-indigo-600 shadow-sm border border-slate-100"
                                    : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                            }`}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* --- Content Area --- */}
                <div className="flex-1">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8"
                    >
                        {/* 1. PROFILE (Giữ nguyên logic cũ của bạn) */}
                        {activeSection === "profile" && (
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="relative group">
                                        <div className="w-24 h-24 rounded-3xl bg-slate-100 overflow-hidden border-4 border-white shadow-md">
                                            <img src="https://www.shutterstock.com/image-vector/avatar-robot-colorful-style-funny-600nw-2414277355.jpg" alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
                                            <Camera size={16} />
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-900">Ảnh đại diện</h3>
                                        <p className="text-xs text-slate-400 font-medium mt-1">PNG hoặc JPG. Tối đa 5MB.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Họ và tên</label>
                                        <input type="text" defaultValue="Trần Anh Tuấn" className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-indigo-500/20 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                        <input type="email" defaultValue="tuan.tran@maco.edu" className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-400 cursor-not-allowed outline-none" disabled />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. BILLING (Thêm mới) */}
                        {activeSection === "billing" && (
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Phương thức nhận tiền</h3>
                                    <div className="grid gap-4">
                                        <div className="p-6 border-2 border-indigo-600 bg-indigo-50/30 rounded-[24px] flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="w-8" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-slate-900">•••• •••• •••• 4242</p>
                                                    <p className="text-xs text-slate-500 font-bold uppercase">Mặc định - Hết hạn 12/26</p>
                                                </div>
                                            </div>
                                            <CheckCircle2 className="text-indigo-600" size={24} />
                                        </div>
                                        <button className="p-6 border-2 border-dashed border-slate-200 rounded-[24px] text-slate-400 font-bold text-sm flex items-center justify-center gap-2 hover:border-indigo-400 hover:text-indigo-600 transition-all">
                                            <Plus size={20} /> Thêm phương thức thanh toán mới
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. MEMBERSHIP (Thêm mới) */}
                        {activeSection === "membership" && (
                            <div className="space-y-8">
                                <div className="p-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[32px] text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">Gói hiện tại</span>
                                        <h3 className="text-3xl font-black mt-4 mb-2">Pro Instructor</h3>
                                        <p className="text-indigo-100 text-sm font-medium opacity-80">Gia hạn tiếp theo vào ngày 12/04/2026</p>
                                        <div className="mt-8 flex gap-4">
                                            <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl text-xs font-black uppercase tracking-wider">Nâng cấp gói</button>
                                            <button className="px-6 py-3 bg-transparent border border-white/30 rounded-xl text-xs font-black uppercase tracking-wider">Quản lý hóa đơn</button>
                                        </div>
                                    </div>
                                    <Crown className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 rotate-12" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Dung lượng video</p>
                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-600 w-[75%] rounded-full" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-600 mt-2">75GB / 100GB</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Số lượng học viên</p>
                                        <p className="text-xl font-black text-slate-900">Không giới hạn</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 4. SECURITY (Giữ nguyên) */}
                        {activeSection === "security" && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mật khẩu hiện tại</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-indigo-500/20 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mật khẩu mới</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-5 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 ring-indigo-500/20 outline-none" />
                                </div>
                            </div>
                        )}

                        {/* FOOTER ACTION */}
                        <div className="mt-10 pt-6 border-t border-slate-50 flex justify-end">
                            <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
                                <Save size={16} /> Lưu thay đổi
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};