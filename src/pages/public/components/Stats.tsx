import { motion } from "motion/react";

export const Stats = () => {
  const stats = [
    { label: "Học viên Đăng ký", value: "1.5M+" },
    { label: "Giảng viên Chuyên gia", value: "5k+" },
    { label: "Khóa học AI", value: "10k+", highlight: true },
    { label: "Tỉ lệ Hài lòng", value: "4.9/5", highlight: true },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative z-30">
      {/* Bỏ bg-white, bỏ shadow, bỏ border của container chính */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 items-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`text-center px-4 relative ${
              // Đường kẻ phân cách siêu mảnh và mờ dần để không tạo cảm giác "hộp"
              idx !== stats.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-12 lg:after:w-[1px] lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-brand-slate-200/50 lg:after:to-transparent" : ""
              }`}
          >
            <div className={`text-5xl md:text-6xl font-black mb-3 tracking-tighter transition-all duration-300 ${stat.highlight
                ? "text-brand-primary drop-shadow-[0_2px_10px_rgba(26,86,219,0.1)]"
                : "text-brand-slate-900"
              }`}>
              {stat.value}
            </div>
            <div className="text-[12px] font-extrabold text-brand-slate-500 uppercase tracking-[0.2em]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};