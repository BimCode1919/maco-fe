import { motion } from "framer-motion";
import {
    Users, UserCheck, UserMinus, UserX,
    MessageSquare, TrendingUp, MoreVertical, Search,
    Filter, Download, Mail
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

interface UserManagementProps {
    isDarkMode: boolean;
    theme: any;
}

export const UserManagement = ({ isDarkMode, theme }: UserManagementProps) => {
    // --- 1. Dữ liệu biểu đồ Tỷ lệ Học viên (Theo học vs Bỏ học) ---
    const studentStatusData = [
        { name: 'Đang theo học', value: 8500, color: '#6366f1' }, // Indigo
        { name: 'Đã bỏ học', value: 1250, color: '#f43f5e' },    // Rose
    ];

    // --- 2. Dữ liệu biểu đồ Giảng viên (Hoạt động vs Không sử dụng) ---
    const instructorStatusData = [
        { name: 'Đang hoạt động', value: 310, color: '#10b981' }, // Emerald
        { name: 'Không sử dụng', value: 55, color: '#f59e0b' },   // Amber
    ];

    // --- 3. Dữ liệu Feedback hệ thống (Điểm hài lòng qua các tháng) ---
    const feedbackData = [
        { month: 'T10', score: 4.2 },
        { month: 'T11', score: 3.8 },
        { month: 'T12', score: 4.5 },
        { month: 'T1', score: 4.7 },
        { month: 'T2', score: 4.9 },
    ];

    return (
        <div className="space-y-8 pb-10">
            {/* --- PHẦN 1: THỐNG KÊ TỔNG QUAN (CARDS) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Users} title="Giảng viên" value="365"
                    sub="310 đang giảng dạy" color="bg-emerald-500" theme={theme}
                />
                <StatCard
                    icon={UserCheck} title="Học viên Active" value="8,500"
                    sub="+15% so với tháng trước" color="bg-indigo-500" theme={theme}
                />
                <StatCard
                    icon={UserMinus} title="Học viên bỏ học" value="1,250"
                    sub="Tỷ lệ bỏ học: 12.8%" color="bg-rose-500" theme={theme}
                />
                <StatCard
                    icon={UserX} title="GV ngừng hoạt động" value="55"
                    sub="Vượt ngưỡng 15%" color="bg-amber-500" theme={theme}
                />
            </div>

            {/* --- PHẦN 2: BIỂU ĐỒ PHÂN TÍCH --- */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Biểu đồ tròn: Tỷ lệ người dùng */}
                <div className={`p-8 rounded-[32px] border shadow-sm ${theme.card} lg:col-span-2`}>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className={`text-xl font-black ${theme.text}`}>Phân tích trạng thái người dùng</h3>
                            <p className={`text-xs font-medium ${theme.textMuted}`}>Dữ liệu cập nhật thời gian thực</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold">
                                <div className="w-2 h-2 rounded-full bg-indigo-500" /> Học viên
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" /> Giảng viên
                            </div>
                        </div>
                    </div>

                    <div className="h-[350px] w-full flex flex-col md:flex-row items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[...studentStatusData, ...instructorStatusData]}
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {[...studentStatusData, ...instructorStatusData].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="w-full md:w-80 space-y-4">
                            <h4 className={`text-sm font-black uppercase tracking-widest ${theme.text}`}>Chi tiết tỷ lệ</h4>
                            {[...studentStatusData, ...instructorStatusData].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className={`text-xs font-bold ${theme.textMuted}`}>{item.name}</span>
                                    </div>
                                    <span className={`text-xs font-black ${theme.text}`}>{item.value.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Biểu đồ cột: Feedback hệ thống */}
                <div className={`p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className={`text-xl font-black ${theme.text}`}>Feedback</h3>
                        <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
                            <MessageSquare size={20} className="text-indigo-500" />
                        </div>
                    </div>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={feedbackData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis hide domain={[0, 5]} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="score" fill="#6366f1" radius={[10, 10, 10, 10]} barSize={24} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white">
                        <div className="flex items-center gap-2 mb-1">
                            <TrendingUp size={16} />
                            <span className="text-xs font-bold uppercase">Chỉ số hài lòng</span>
                        </div>
                        <p className="text-2xl font-black">4.9 / 5.0</p>
                        <p className="text-[10px] text-indigo-100 opacity-80 mt-1">Tăng 0.2 điểm so với tháng trước</p>
                    </div>
                </div>
            </div>

            {/* --- PHẦN 3: DANH SÁCH NGƯỜI DÙNG CHI TIẾT --- */}
            <div className={`rounded-[32px] border shadow-sm overflow-hidden ${theme.card}`}>
                <div className="p-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h3 className={`text-xl font-black ${theme.text}`}>Danh sách chi tiết</h3>
                        <p className={`text-xs font-medium ${theme.textMuted}`}>Quản lý học viên và giảng viên toàn hệ thống</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.textMuted}`} size={18} />
                            <input
                                type="text"
                                placeholder="Tìm tên, email, ID..."
                                className={`pl-12 pr-6 py-3 rounded-2xl text-sm font-medium border outline-none w-full md:w-64 transition-all focus:ring-2 focus:ring-indigo-500 ${theme.input} ${theme.text}`}
                            />
                        </div>
                        <button className={`p-3 rounded-2xl border ${theme.sidebar} ${theme.textMuted} hover:text-indigo-500 transition-all`}>
                            <Filter size={20} />
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
                            <Download size={18} /> Xuất file
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className={`border-b ${theme.tableHeader}`}>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Người dùng</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Vai trò</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Trạng thái</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em]">Khóa học</th>
                                <th className="px-8 py-5"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/10">
                            <UserRow
                                name="Trần Hoàng Nam" email="nam.th@gmail.com"
                                role="Học viên" status="Đang học" courses="12" theme={theme} isDarkMode={isDarkMode}
                            />
                            <UserRow
                                name="TS. Lê Quang Minh" email="minh.lq@university.edu"
                                role="Giảng viên" status="Hoạt động" courses="08" theme={theme} isDarkMode={isDarkMode}
                            />
                            <UserRow
                                name="Phạm Mỹ Linh" email="linh.pham@outlook.com"
                                role="Học viên" status="Bỏ học" courses="01" theme={theme} isDarkMode={isDarkMode}
                            />
                            <UserRow
                                name="Nguyễn Văn Hùng" email="hung.nv@instructor.vn"
                                role="Giảng viên" status="Ngừng dùng" courses="04" theme={theme} isDarkMode={isDarkMode}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENT CON: DÒNG NGƯỜI DÙNG TRONG BẢNG ---
const UserRow = ({ name, email, role, status, courses, theme, isDarkMode }: any) => {
    const getStatusStyle = (s: string) => {
        switch (s) {
            case 'Hoạt động': case 'Đang học': return 'bg-emerald-500/10 text-emerald-500';
            case 'Bỏ học': case 'Ngừng dùng': return 'bg-rose-500/10 text-rose-500';
            default: return 'bg-slate-500/10 text-slate-500';
        }
    };

    return (
        <tr className={`transition-all ${theme.tableRow}`}>
            <td className="px-8 py-5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center font-black text-indigo-500 border border-indigo-500/10">
                        {name.split(' ').pop().charAt(0)}
                    </div>
                    <div>
                        <p className={`text-sm font-black ${theme.text}`}>{name}</p>
                        <p className={`text-[11px] font-medium ${theme.textMuted}`}>{email}</p>
                    </div>
                </div>
            </td>
            <td className="px-8 py-5">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${role === 'Giảng viên' ? 'bg-violet-500/10 text-violet-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    {role}
                </div>
            </td>
            <td className="px-8 py-5">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase ${getStatusStyle(status)}`}>
                    <div className={`w-1 h-1 rounded-full ${status === 'Hoạt động' || status === 'Đang học' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                    {status}
                </div>
            </td>
            <td className="px-8 py-5">
                <p className={`text-sm font-black ${theme.text}`}>{courses} <span className="text-[10px] font-medium opacity-50 ml-1">K.Học</span></p>
            </td>
            <td className="px-8 py-5 text-right">
                <div className="flex justify-end gap-2">
                    <button className={`p-2 rounded-lg hover:bg-slate-500/10 ${theme.textMuted} transition-all`}>
                        <Mail size={16} />
                    </button>
                    <button className={`p-2 rounded-lg hover:bg-slate-500/10 ${theme.textMuted} transition-all`}>
                        <MoreVertical size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

// --- COMPONENT CON: THẺ THỐNG KÊ NHANH ---
const StatCard = ({ icon: Icon, title, value, sub, color, theme }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`p-6 rounded-[32px] border shadow-sm transition-all ${theme.card}`}
    >
        <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
                <Icon size={24} />
            </div>
            <div className="text-right">
                <p className={`text-[10px] font-black uppercase tracking-widest ${theme.textMuted}`}>{title}</p>
                <p className={`text-2xl font-black ${theme.text} mt-1`}>{value}</p>
            </div>
        </div>
        <div className={`h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden`}>
            <div className={`h-full ${color} w-2/3 opacity-50`} />
        </div>
        <p className={`text-[10px] font-bold ${theme.textMuted} mt-3 flex items-center gap-1`}>
            {sub}
        </p>
    </motion.div>
);