import { Shield, Lock, Eye, Edit3, Trash2 } from "lucide-react";

export const SecurityPermissions = ({ theme }: any) => {
  const roles = [
    { name: "Super Admin", users: 2, permissions: "Full Access", color: "bg-rose-500" },
    { name: "Content Reviewer", users: 5, permissions: "Course Approval Only", color: "bg-indigo-500" },
    { name: "Financial Manager", users: 3, permissions: "Revenue & Payout", color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-8">
      <div className={`p-8 rounded-[32px] border ${theme.card}`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500"><Shield size={24} /></div>
          <div>
            <h3 className={`text-xl font-black ${theme.text}`}>Quản lý vai trò (Roles)</h3>
            <p className={theme.textMuted}>Thiết lập quyền hạn truy cập cho nhân sự vận hành</p>
          </div>
        </div>

        <div className="grid gap-4">
          {roles.map((role, idx) => (
            <div key={idx} className={`p-5 rounded-[24px] border flex items-center justify-between ${theme.sidebar}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${role.color} flex items-center justify-center text-white font-bold`}>
                  {role.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-bold ${theme.text}`}>{role.name}</p>
                  <p className={`text-xs ${theme.textMuted}`}>{role.users} nhân sự • {role.permissions}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><Edit3 size={16} className={theme.textMuted}/></button>
                <button className="p-2 hover:bg-rose-500/10 text-rose-500 rounded-lg transition-colors"><Trash2 size={16}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`p-8 rounded-[32px] border border-dashed ${theme.border} flex flex-col items-center justify-center text-center`}>
        <Lock className={`mb-4 ${theme.textMuted}`} size={40} />
        <h4 className={`font-bold ${theme.text}`}>Xác thực 2 lớp (2FA)</h4>
        <p className={`text-sm ${theme.textMuted} max-w-sm mb-4`}>Tất cả tài khoản Administrator được yêu cầu kích hoạt 2FA qua Google Authenticator.</p>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm">Cấu hình bảo mật</button>
      </div>
    </div>
  );
};