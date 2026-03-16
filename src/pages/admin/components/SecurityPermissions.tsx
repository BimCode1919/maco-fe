import React from "react";
import { Shield, Lock, Edit3, Trash2, Users, ChevronRight } from "lucide-react";

interface SecurityPermissionsProps {
  theme: any;
  isDarkMode: boolean;
}

export const SecurityPermissions = ({ theme, isDarkMode }: SecurityPermissionsProps) => {
  const roles = [
    {
      name: "Super Admin",
      users: 2,
      permissions: "Toàn quyền hệ thống",
      color: "bg-rose-500",
      desc: "Quản lý nhân sự, tài chính và cấu hình hệ thống."
    },
    {
      name: "Content Reviewer",
      users: 5,
      permissions: "Phê duyệt khóa học",
      color: "bg-indigo-500",
      desc: "Kiểm duyệt nội dung video, bài tập và câu hỏi quiz."
    },
    {
      name: "Financial Manager",
      users: 3,
      permissions: "Doanh thu & Đối soát",
      color: "bg-emerald-500",
      desc: "Quản lý dòng tiền, thanh toán cho giảng viên."
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      {/* SECTION 1: ROLE MANAGEMENT */}
      <div className={`p-6 md:p-8 rounded-[32px] border shadow-sm transition-all duration-300 ${theme.card}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-4 ${isDarkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-500/10 text-indigo-600'} rounded-2xl shadow-inner`}>
              <Shield size={28} />
            </div>
            <div>
              <h3 className={`text-xl md:text-2xl font-black tracking-tight ${theme.text}`}>Quản lý vai trò</h3>
              <p className={`text-xs md:text-sm font-medium ${theme.textMuted}`}>Phân quyền truy cập dựa trên chức năng vận hành</p>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
            + Thêm vai trò mới
          </button>
        </div>

        <div className="grid gap-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className={`group p-4 md:p-5 rounded-[24px] border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300
                ${isDarkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60'
                  : 'bg-slate-50/50 border-slate-100 hover:border-indigo-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50'}`}
            >
              <div className="flex items-center gap-4">
                {/* Role Avatar */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${role.color} flex items-center justify-center text-white text-xl font-black shadow-lg shadow-${role.color.split('-')[1]}-500/20`}>
                  {role.name.charAt(0)}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className={`font-black tracking-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>{role.name}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-200/50 text-slate-500'}`}>
                      ID: 0{idx + 1}
                    </span>
                  </div>
                  <p className={`text-[11px] md:text-xs font-bold mt-0.5 ${theme.textMuted}`}>
                    <Users size={12} className="inline mr-1 mb-0.5 text-indigo-500" />
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>{role.users} nhân sự</span>
                    <span className="mx-2 opacity-30">•</span>
                    <span className="text-indigo-500 uppercase tracking-wider">{role.permissions}</span>
                  </p>
                  <p className={`hidden md:block text-[11px] mt-1 opacity-60 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{role.desc}</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800/50">
                <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all
                  ${isDarkMode
                    ? 'text-slate-300 hover:bg-slate-700'
                    : 'text-slate-600 hover:bg-slate-100 border border-transparent'}`}>
                  <Edit3 size={16} />
                  <span className="hidden md:inline">Sửa quyền</span>
                </button>
                <button className={`p-2.5 rounded-xl transition-all duration-300 
                  ${isDarkMode ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white' : 'bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white'}`}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 2FA & SECURITY POLICY */}
      <div className={`relative overflow-hidden p-8 rounded-[32px] border border-dashed transition-all duration-300
        ${isDarkMode ? 'bg-slate-900/20 border-slate-700' : 'bg-white border-slate-300'} flex flex-col items-center justify-center text-center`}>

        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className={`mb-6 p-5 rounded-3xl transition-colors ${isDarkMode ? 'bg-slate-800 text-indigo-400 shadow-inner' : 'bg-indigo-50 text-indigo-600 shadow-sm'}`}>
          <Lock size={48} />
        </div>

        <h4 className={`text-xl font-black mb-2 tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>Xác thực hai yếu tố (2FA)</h4>
        <p className={`text-xs md:text-sm font-medium leading-relaxed max-w-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Tăng cường bảo mật bằng cách yêu cầu mã xác minh từ <span className="text-indigo-500 font-bold">Google Authenticator</span> cho mỗi lần đăng nhập.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2">
            Kích hoạt ngay <ChevronRight size={16} />
          </button>
          <button className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all 
            ${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
            Xem nhật ký truy cập
          </button>
        </div>
      </div>
    </div>
  );
};