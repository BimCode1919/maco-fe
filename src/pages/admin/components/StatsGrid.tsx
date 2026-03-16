import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend: string;
}

export const StatsGrid = ({ stats, theme }: { stats: any[], theme: any }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
    {stats.map((stat, idx) => {
      const isPositive = stat.trend.startsWith('+');
      return (
        <div key={idx} className={`p-3 md:p-5 rounded-[20px] border flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 ${theme.card}`}>
          <div className={`w-9 h-9 md:w-12 md:h-12 shrink-0 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
            <stat.icon size={16} className="md:w-6 md:h-6" />
          </div>
          <div className="min-w-0">
            <p className={`text-[8px] md:text-[11px] font-black uppercase tracking-tighter truncate ${theme.textMuted}`}>{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <p className={`text-sm md:text-xl font-black ${theme.text}`}>{stat.value}</p>
              <span className={`text-[7px] md:text-[9px] font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>{stat.trend}</span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);