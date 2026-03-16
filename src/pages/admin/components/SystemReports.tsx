import React from "react";
import { Server, Activity, Cpu, Globe, AlertCircle } from "lucide-react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

export const SystemReports = ({ isDarkMode, theme }: any) => {
    const performanceData = [
        { time: '12:00', cpu: 45, latency: 120 },
        { time: '13:00', cpu: 52, latency: 145 },
        { time: '14:00', cpu: 85, latency: 210 },
        { time: '15:00', cpu: 60, latency: 130 },
        { time: '16:00', cpu: 48, latency: 115 },
    ];

    return (
        <div className="space-y-6 md:space-y-8 pb-10">
            {/* Real-time Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <StatusCard icon={Cpu} label="CPU Usage" value="42%" status="Normal" color="text-emerald-500" theme={theme} />
                <StatusCard icon={Server} label="RAM Usage" value="8.4GB / 16GB" status="Stable" color="text-blue-500" theme={theme} />
                <StatusCard icon={Globe} label="Active Sessions" value="1,240" status="+12%" color="text-indigo-500" theme={theme} />
            </div>

            {/* Chart Section */}
            <div className={`p-5 md:p-8 rounded-[32px] border shadow-sm ${theme.card}`}>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className={`text-lg md:text-xl font-black tracking-tight ${theme.text}`}>Hiệu năng hệ thống</h3>
                        <p className={`text-[11px] md:text-xs font-medium ${theme.textMuted}`}>Dữ liệu đo lường trong 24 giờ qua</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    </div>
                </div>

                <div className="h-[250px] md:h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={performanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#1e293b" : "#f1f5f9"} />
                            <XAxis
                                dataKey="time"
                                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                                axisLine={false}
                                tickLine={false}
                                dy={10}
                            />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: '16px',
                                    border: 'none',
                                    backgroundColor: isDarkMode ? '#1e293b' : '#fff',
                                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="cpu"
                                stroke="#6366f1"
                                fill="url(#colorCpu)"
                                strokeWidth={4}
                                animationDuration={1500}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* System Logs Table Style */}
            <div className={`rounded-[32px] border shadow-sm overflow-hidden ${theme.card}`}>
                <div className="p-5 md:p-6 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Activity size={18} className="text-indigo-500" />
                        <h3 className={`text-base md:text-lg font-black tracking-tight ${theme.text}`}>System Logs</h3>
                    </div>
                    <span className="text-[10px] md:text-xs bg-rose-500/10 text-rose-500 px-3 py-1 rounded-xl font-black uppercase tracking-wider">
                        3 Cảnh báo mới
                    </span>
                </div>
                <div className="p-2 md:p-4 space-y-1">
                    <LogItem type="error" msg="Database connection timeout" time="2 phút trước" theme={theme} isDarkMode={isDarkMode} />
                    <LogItem type="warning" msg="High memory usage in Streaming service" time="15 phút trước" theme={theme} isDarkMode={isDarkMode} />
                    <LogItem type="success" msg="Auto-backup completed" time="1 giờ trước" theme={theme} isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};

const LogItem = ({ type, msg, time, theme, isDarkMode }: any) => (
    <div className={`group flex items-center justify-between p-3 md:p-4 rounded-2xl transition-all duration-200 cursor-default
        ${isDarkMode ? 'hover:bg-slate-800/60' : 'hover:bg-slate-50'}`}>
        <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full animate-pulse ${type === 'error' ? 'bg-rose-500' : type === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <span className={`text-xs md:text-sm font-bold tracking-tight ${theme.text} group-hover:translate-x-1 transition-transform`}>
                {msg}
            </span>
        </div>
        <span className={`text-[10px] md:text-xs font-medium ${theme.textMuted}`}>{time}</span>
    </div>
);

const StatusCard = ({ icon: Icon, label, value, status, color, theme }: any) => (
    <div className={`p-6 rounded-[32px] border shadow-sm transition-all duration-300 hover:scale-[1.02] ${theme.card}`}>
        <div className="flex justify-between items-start mb-5">
            <div className={`p-3 rounded-2xl transition-all duration-500 
                ${theme.bg === "bg-slate-950" ? "bg-slate-800/50 shadow-inner" : "bg-slate-100"}`}>
                <Icon
                    size={22}
                    className={`${theme.text} transition-colors duration-300`}
                />
            </div>
            <span className={`text-[10px] md:text-xs font-black px-2 py-1 rounded-lg bg-opacity-10 tracking-tighter ${color} 
                ${color.replace('text', 'bg')}/10`}>
                {status}
            </span>
        </div>
        <p className={`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mb-1 ${theme.textMuted}`}>
            {label}
        </p>
        <p className={`text-2xl md:text-3xl font-black tracking-tighter ${theme.text}`}>
            {value}
        </p>
    </div>
);