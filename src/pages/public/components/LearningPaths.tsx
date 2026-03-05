import { motion } from "motion/react";
import { Palette, Code2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export const LearningPaths = () => {
  const paths = [
    { icon: <Palette />, title: "Thiết kế Trải nghiệm", desc: "Làm chủ nghệ thuật giao diện kỹ thuật số lấy con người làm trung tâm.", count: "124 Khóa học", color: "indigo" },
    { icon: <Code2 />, title: "Kỹ thuật Đám mây", desc: "Xây dựng kiến trúc có khả năng mở rộng cho web toàn cầu.", count: "82 Khóa học", color: "purple" },
    { icon: <TrendingUp />, title: "Khoa học Dữ liệu", desc: "Trích xuất thông tin thông minh từ các tập dữ liệu phức tạp.", count: "210 Khóa học", color: "sky" },
    { icon: <Sparkles />, title: "Đào tạo AI", desc: "Làm chủ các mô hình ngôn ngữ lớn và ứng dụng AI vào thực tế sản xuất.", count: "120 Khóa học", color: "emerald" },
  ];

  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4">Danh mục Khóa học Nổi bật</h2>
            <p className="text-slate-500 font-medium">Tìm kiếm khóa học phù hợp với nhu cầu phát triển của bạn.</p>
          </div>
          <button className="text-indigo-600 font-bold flex items-center gap-2 group">
            Xem tất cả danh mục <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white rounded-32 soft-elevation hover:scale-[1.02] transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-${path.color}-50 rounded-24 flex items-center justify-center text-${path.color}-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors`}>
                {path.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
              <p className="text-slate-500 mb-6">{path.desc}</p>
              <div className={`text-xs font-black tracking-widest text-${path.color}-600 uppercase`}>{path.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
