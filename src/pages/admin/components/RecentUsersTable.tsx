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

export const RecentUsersTable = ({ isDarkMode, theme, users }: RecentUsersTableProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className={`text-xl font-black ${theme.text}`}>Người dùng mới gia nhập</h3>
        <button className={`font-bold text-sm hover:underline ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Quản lý tất cả</button>
      </div>

      <div className={`rounded-[32px] border overflow-hidden transition-colors duration-300 ${theme.card}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`border-b ${theme.tableHeader}`}>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Người dùng</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Vai trò</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Trạng thái</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Thời gian</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={`border-b transition-colors duration-300 ${theme.tableRow}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-slate-800 text-indigo-400' : 'bg-slate-100 text-indigo-600'}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${theme.text}`}>{user.name}</p>
                        <p className={`text-[10px] ${theme.textMuted}`}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                      user.role === 'Giảng viên' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-xs font-medium ${theme.textMuted}`}>{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <button className={`p-2 transition-colors ${isDarkMode ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};