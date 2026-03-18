import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, GraduationCap, ChevronRight, Phone, Briefcase, Chrome } from "lucide-react";
import { div } from "motion/react-client";
import React, { useState } from "react";

type AuthMode = "login" | "register-select" | "register-student" | null;

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  setMode: (mode: AuthMode) => void;
  onSuccess?: (dashboard: string) => void;
  onNavigate?: (page: string) => void; // Thêm để khớp với logic App.tsx
}

const InputField = ({ icon: Icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon: any }) => (
  <div className="relative group w-full">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
    <input
      {...props}
      className="w-full h-13 bg-slate-50 border-2 border-transparent rounded-2xl pl-12 pr-4 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-600 outline-none transition-all"
    />
  </div>
);

export const AuthModal = ({ mode, onClose, setMode, onSuccess, onNavigate }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInstructorRedirect = () => {
    onClose();
    if (onNavigate) {
      onNavigate("become-instructor");
    }
  };

  // Logic đăng nhập phân quyền
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSuccess) return;

    if (password === "123") {
      if (email.includes("admin")) {
        onSuccess("admin-dashboard");
      } else if (email.includes("instructor")) {
        onSuccess("instructor-dashboard");
      } else {
        onSuccess("student-dashboard");
      }
    } else {
      alert("Mật khẩu không đúng! Thử lại với '123'");
    }
  };

  // Logic mới: Xử lý khi ấn Hoàn tất đăng ký
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sau khi xử lý đăng ký (API...), gọi onSuccess để về trang học viên
    if (onSuccess) {
      onSuccess("student-dashboard");
    }
  };

  return (
    <AnimatePresence>
      {mode && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">

                {/* --- 1. FORM ĐĂNG NHẬP --- */}
                {mode === "login" && (
                  <motion.div key="login" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-black text-slate-900">Maco chào bạn!</h2>
                      <p className="text-[14px] text-slate-500 mt-2 font-medium">Đăng nhập để tiếp tục hành trình</p>
                    </div>

                    <div className="space-y-4">
                      <button type="button" className="w-full h-13 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 hover:bg-slate-50 transition-all">
                        <Chrome className="w-5 h-5 text-red-500" />
                        Tiếp tục với Google
                      </button>

                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="px-3 text-[10px] font-black text-slate-300 uppercase tracking-widest">Hoặc</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                      </div>

                      <form onSubmit={handleLoginSubmit} className="space-y-3">
                        <InputField
                          icon={Mail}
                          placeholder="Email đăng nhập"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <InputField
                          icon={Lock}
                          placeholder="Mật khẩu (nhập 123)"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="w-full h-13 bg-indigo-600 text-white rounded-2xl font-black text-[16px] hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]"
                        >
                          Đăng nhập
                        </button>
                      </form>

                      {/* --- PHẦN NOTE TÀI KHOẢN DEMO THÊM VÀO ĐÂY --- */}
                      <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                          Tài khoản Demo (Mật khẩu: 123)
                        </p>
                        <div className="grid grid-cols-1 gap-1">
                          {['student@gmail.com', 'instructor@gmail.com', 'admin@gmail.com'].map((demoEmail) => (
                            <button
                              key={demoEmail}
                              type="button"
                              onClick={() => setEmail(demoEmail)}
                              className="text-left text-[12px] font-bold text-slate-600 hover:text-indigo-600 transition-colors py-0.5"
                            >
                              • {demoEmail}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* ------------------------------------------- */}

                      <p className="text-center text-[13px] font-bold text-slate-500">
                        Chưa có tài khoản? <button onClick={() => setMode("register-select")} className="text-indigo-600 hover:underline">Đăng ký ngay</button>
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* --- 2. CHỌN VAI TRÒ --- */}
                {mode === "register-select" && (
                  <motion.div key="select" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-black text-slate-900">Bắt đầu thôi</h2>
                      <p className="text-[14px] text-slate-500 mt-2 font-medium">Bạn muốn trải nghiệm Maco với vai trò gì?</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <button
                        onClick={() => setMode("register-student")}
                        className="w-full p-5 border-2 border-slate-100 rounded-[24px] flex items-center gap-5 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <User className="w-6 h-6" />
                        </div>
                        <div className="text-left flex-grow">
                          <h3 className="font-black text-slate-900 text-[16px]">Tôi là Học viên</h3>
                          <p className="text-slate-400 text-[12px] font-medium">Tìm kiếm khóa học AI đỉnh cao</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600" />
                      </button>

                      <button
                        onClick={handleInstructorRedirect}
                        className="w-full p-5 border-2 border-slate-100 rounded-[24px] flex items-center gap-5 hover:border-emerald-600 hover:bg-emerald-50/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="text-left flex-grow">
                          <h3 className="font-black text-slate-900 text-[16px]">Tôi là Giảng viên</h3>
                          <p className="text-slate-400 text-[12px] font-medium">Chia sẻ kiến thức & tạo thu nhập</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600" />
                      </button>
                    </div>

                    <p className="text-center text-[13px] font-bold text-slate-400">
                      <button onClick={() => setMode("login")} className="flex items-center justify-center gap-2 w-full hover:text-indigo-600 transition-colors">
                        Đã có tài khoản? Đăng nhập
                      </button>
                    </p>
                  </motion.div>
                )}

                {/* --- 3. ĐĂNG KÝ HỌC VIÊN --- */}
                {mode === "register-student" && (
                  <motion.div key="student" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-black text-slate-900">Thông tin học viên</h2>
                    </div>

                    {/* Thêm onSubmit vào đây */}
                    <form onSubmit={handleRegisterSubmit} className="space-y-3">
                      <InputField icon={User} placeholder="Họ và tên" required />
                      <InputField icon={Briefcase} placeholder="Nghề nghiệp" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InputField icon={Mail} placeholder="Email" type="email" required />
                        <InputField icon={Phone} placeholder="Số điện thoại" type="tel" />
                      </div>
                      <InputField icon={Lock} placeholder="Mật khẩu" type="password" required />
                      <InputField icon={Lock} placeholder="Xác nhận mật khẩu" type="password" required />

                      <button type="submit" className="w-full h-13 bg-indigo-600 text-white rounded-2xl font-black text-[16px] hover:bg-indigo-700 transition-all mt-2">
                        Hoàn tất đăng ký
                      </button>

                      <button type="button" onClick={() => setMode("register-select")} className="w-full text-[13px] font-bold text-slate-400 flex items-center justify-center gap-2 pt-2 hover:text-slate-600">
                        Quay lại chọn vai trò
                      </button>
                    </form>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};