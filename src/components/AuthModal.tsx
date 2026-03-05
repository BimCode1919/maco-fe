import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, GraduationCap, ChevronRight, Chrome } from "lucide-react";
import React, { useState } from "react";

type AuthMode = "login" | "register-select" | "register-student" | "register-instructor" | null;

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  setMode: (mode: AuthMode) => void;
  onSuccess?: (dashboard: string) => void;
}

export const AuthModal = ({ mode, onClose, setMode, onSuccess }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Mock Authentication Logic
    if (password === "123") {
      if (email === "student") {
        if (onSuccess) onSuccess("student-dashboard");
        return;
      } else if (email === "instructor") {
        if (onSuccess) onSuccess("instructor-dashboard");
        return;
      } else if (email === "admin") {
        if (onSuccess) onSuccess("admin-dashboard");
        return;
      }
    }

    setError("Email hoặc mật khẩu không chính xác (Thử: student/123, instructor/123)");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-32 shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="p-8 pt-12">
          <AnimatePresence mode="wait">
            {mode === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Chào mừng trở lại</h2>
                  <p className="text-slate-500 font-medium">Đăng nhập để tiếp tục hành trình học tập</p>
                </div>

                <div className="space-y-4">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm font-bold rounded-2xl border border-red-100">
                      {error}
                    </div>
                  )}
                  <button 
                    onClick={handleSubmit}
                    className="w-full h-14 border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    <Chrome className="w-5 h-5 text-red-500" />
                    Đăng nhập bằng Google
                  </button>

                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Hoặc</span>
                    <div className="flex-grow border-t border-slate-100"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email (student / instructor)"
                        className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mật khẩu (123)"
                        className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Đăng nhập
                  </button>

                  <p className="text-center text-sm font-medium text-slate-500 mt-6">
                    Chưa có tài khoản?{" "}
                    <button 
                      onClick={() => setMode("register-select")}
                      className="text-indigo-600 font-bold hover:underline"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === "register-select" && (
              <motion.div
                key="register-select"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Bắt đầu ngay</h2>
                  <p className="text-slate-500 font-medium">Chọn vai trò của bạn để tiếp tục</p>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setMode("register-student")}
                    className="w-full p-6 border-2 border-slate-100 rounded-32 flex items-center gap-6 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group"
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="text-left flex-grow">
                      <h3 className="font-black text-slate-900 text-lg">Tôi là Học viên</h3>
                      <p className="text-slate-500 text-sm font-medium">Muốn tìm kiếm và học các khóa học AI</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-indigo-600 transition-all" />
                  </button>

                  <button 
                    onClick={() => setMode("register-instructor")}
                    className="w-full p-6 border-2 border-slate-100 rounded-32 flex items-center gap-6 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div className="text-left flex-grow">
                      <h3 className="font-black text-slate-900 text-lg">Tôi là Giảng viên</h3>
                      <p className="text-slate-500 text-sm font-medium">Muốn chia sẻ kiến thức và tạo khóa học</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-indigo-600 transition-all" />
                  </button>

                  <p className="text-center text-sm font-medium text-slate-500 mt-8">
                    Đã có tài khoản?{" "}
                    <button 
                      onClick={() => setMode("login")}
                      className="text-indigo-600 font-bold hover:underline"
                    >
                      Đăng nhập
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {(mode === "register-student" || mode === "register-instructor") && (
              <motion.div
                key="register-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-slate-900 mb-2">
                    {mode === "register-student" ? "Đăng ký Học viên" : "Đăng ký Giảng viên"}
                  </h2>
                  <p className="text-slate-500 font-medium">Tạo tài khoản Maco của bạn</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Họ và tên"
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email (student / instructor)"
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mật khẩu (123)"
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-medium focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                    />
                  </div>

                  <button 
                    onClick={handleSubmit}
                    className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Tạo tài khoản
                  </button>

                  <button 
                    onClick={() => setMode("register-select")}
                    className="w-full text-center text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Quay lại chọn vai trò
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
