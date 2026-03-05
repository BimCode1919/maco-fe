import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend: string;
}

export const StatsGrid = ({ stats, theme }: { stats: StatItem[], theme: any }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    {stats.map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ delay: idx * 0.1 }}
        className={`p-6 rounded-[32px] border shadow-sm flex items-center gap-6 transition-colors duration-300 ${theme.card}`}
      >
        <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
          <stat.icon size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${theme.textMuted}`}>{stat.label}</p>
            <span className="text-[10px] font-black text-emerald-400">{stat.trend}</span>
          </div>
          <p className={`text-2xl font-black ${theme.text}`}>{stat.value}</p>
        </div>
      </motion.div>
    ))}
  </div>
);