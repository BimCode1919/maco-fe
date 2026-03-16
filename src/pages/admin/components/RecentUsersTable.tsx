import { MoreVertical } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
}

interface RecentUsersTableProps {
  isDarkMode: boolean;
  theme: any;
  users: User[];
}

const getRoleStyle = (role: string) => {
  switch (role) {
    case 'Giảng viên':
      return 'bg-violet-500/10 text-violet-400 border border-violet-500/20';
    case 'Học viên':
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    default:
      return 'bg-slate-500/10 text-slate-400';
  }
};

export const RecentUsersTable = ({ theme, users }: RecentUsersTableProps) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between px-2">
      <h3 className={`text-lg md:text-2xl font-black ${theme.text}`}>Người dùng mới gia nhập</h3>
      <button className="text-xs md:text-base font-bold text-indigo-500 hover:underline">Quản lý tất cả</button>
    </div>

    <div className={`rounded-[32px] border shadow-sm ${theme.card} overflow-hidden`}>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b ${theme.tableHeader}`}>
              {/* Tăng padding trên desktop (md:px-8 py-6) */}
              <th className="px-4 md:px-8 py-4 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-widest">Người dùng</th>
              <th className="px-4 py-4 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-center">Vai trò</th>
              <th className="px-4 py-4 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-center">Trạng thái</th>
              <th className="px-4 py-4 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-right">Thời gian</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {users.map((user) => (
              <tr key={user.id} className={`${theme.tableRow} transition-all`}>
                <td className="px-4 md:px-8 py-4 md:py-6">
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs md:text-lg font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm md:text-base font-bold truncate ${theme.text}`}>{user.name}</p>
                      <p className={`text-[10px] md:text-xs ${theme.textMuted} truncate`}>{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-2 md:px-4 py-4 text-center">
                  <span className={`
    inline-flex items-center justify-center
    text-[9px] md:text-xs font-black uppercase tracking-tighter md:tracking-widest 
    px-2 py-1 md:px-3 md:py-1.5 rounded-lg 
    whitespace-nowrap 
    ${getRoleStyle(user.role)}
  `}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <span className={`text-xs md:text-sm font-medium ${theme.text}`}>{user.status}</span>
                  </div>
                </td>
                <td className={`px-4 md:px-8 py-4 text-right text-xs md:text-sm font-medium ${theme.textMuted}`}>
                  {user.joined}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);