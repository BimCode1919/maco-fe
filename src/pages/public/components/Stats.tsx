export const Stats = () => {
  const stats = [
    { label: "Học viên Đăng ký", value: "1.5M+" },
    { label: "Giảng viên Chuyên gia", value: "5k+" },
    { label: "Khóa học AI", value: "10k+", highlight: true },
    { label: "Tỉ lệ Hài lòng", value: "4.9/5", highlight: true },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 bg-white p-16 rounded-32 soft-elevation">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className={`text-5xl font-black mb-3 tracking-tighter ${stat.highlight ? "text-indigo-600" : "text-slate-900"}`}>
              {stat.value}
            </div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
