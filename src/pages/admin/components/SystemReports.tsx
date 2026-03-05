import { Server, Activity, Cpu, Globe } from "lucide-react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// Thêm isDarkMode vào interface hoặc nhận trực tiếp từ props
export const SystemReports = ({ isDarkMode, theme }: any) => {
    const performanceData = [
        { time: '12:00', cpu: 45, latency: 120 },
        { time: '13:00', cpu: 52, latency: 145 },
        { time: '14:00', cpu: 85, latency: 210 },
        { time: '15:00', cpu: 60, latency: 130 },
        { time: '16:00', cpu: 48, latency: 115 },
    ];

    return (
        <div className="space-y-8">
            {/* Real-time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatusCard icon={Cpu} label="CPU Usage" value="42%" status="Normal" color="text-emerald-500" theme={theme} />
                <StatusCard icon={Server} label="RAM Usage" value="8.4GB / 16GB" status="Stable" color="text-blue-500" theme={theme} />
                <StatusCard icon={Globe} label="Active Sessions" value="1,240" status="+12%" color="text-indigo-500" theme={theme} />
            </div>

            {/* Biểu đồ */}
            <div className={`p-8 rounded-[32px] border ${theme.card}`}>
                <h3 className={`text-xl font-black mb-6 ${theme.text}`}>Hiệu năng hệ thống (24h)</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
                            <XAxis dataKey="time" tick={{ fill: '#94a3b8' }} axisLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', backgroundColor: isDarkMode ? '#0f172a' : '#fff' }} />
                            <Area type="monotone" dataKey="cpu" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Nhật ký hệ thống */}
            <div className={`rounded-[32px] border overflow-hidden ${theme.card}`}>
                <div className="p-6 border-b flex items-center justify-between">
                    <h3 className={`font-black ${theme.text}`}>Nhật ký lỗi (System Logs)</h3>
                    <span className="text-xs bg-rose-500/10 text-rose-500 px-3 py-1 rounded-full font-bold">3 Cảnh báo mới</span>
                </div>
                <div className="p-4 space-y-3">
                    {/* QUAN TRỌNG: Truyền isDarkMode vào đây */}
                    <LogItem type="error" msg="Database connection timeout" time="2 phút trước" theme={theme} isDarkMode={isDarkMode} />
                    <LogItem type="warning" msg="High memory usage in Streaming service" time="15 phút trước" theme={theme} isDarkMode={isDarkMode} />
                    <LogItem type="success" msg="Auto-backup completed" time="1 giờ trước" theme={theme} isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};

// --- Cập nhật hàm LogItem để nhận isDarkMode ---
const LogItem = ({ type, msg, time, theme, isDarkMode }: any) => (
    <div className={`flex items-center justify-between p-3 rounded-2xl ${isDarkMode ? 'bg-slate-800/40' : 'bg-slate-50'}`}>
        <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${type === 'error' ? 'bg-rose-500' : type === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <span className={`text-sm font-medium ${theme.text}`}>{msg}</span>
        </div>
        <span className={`text-[10px] ${theme.textMuted}`}>{time}</span>
    </div>
);

const StatusCard = ({ icon: Icon, label, value, status, color, theme }: any) => (
    <div className={`p-6 rounded-[32px] border ${theme.card}`}>
        <div className="flex justify-between items-start mb-4">
            {/* Thay đổi ở đây: 
         1. Thêm transition để mượt mà khi đổi mode.
         2. Đảm bảo class màu chữ của theme được áp dụng đúng.
      */}
            <div className={`p-3 rounded-2xl transition-colors duration-300 ${theme.bg === "bg-slate-950" ? "bg-slate-800" : "bg-slate-100"
                }`}>
                <Icon
                    size={20}
                    className={`${theme.text} transition-colors duration-300`}
                />
            </div>
            <span className={`text-[10px] font-bold ${color}`}>{status}</span>
        </div>
        <p className={`text-xs font-bold ${theme.textMuted}`}>{label}</p>
        <p className={`text-2xl font-black ${theme.text}`}>{value}</p>
    </div>
);