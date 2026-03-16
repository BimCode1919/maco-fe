import { motion } from "motion/react";
import { BrainCircuit, MessageSquareText, Video, GraduationCap } from "lucide-react";
import { BarChart3 } from "lucide-react";

export const Features = () => {
  const mainFeatures = [
    {
      title: "Dành cho Giảng viên",
      subtitle: "Tối ưu hóa nội dung bài giảng",
      description: "Hệ thống tự động phân tích nội dung video bài giảng để tạo ra bộ câu hỏi trắc nghiệm (Quiz) thông minh chỉ trong vài giây. Giúp giảng viên tiết kiệm 90% thời gian biên soạn học liệu.",
      icon: <BrainCircuit className="text-brand-primary" size={28} />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      stats: "Tiết kiệm 4-5h soạn bài/tuần"
    },
    {
      title: "Dành cho Học viên",
      subtitle: "Hỏi đáp trực tiếp cùng Video",
      description: "Không còn nỗi lo gián đoạn kiến thức. Học viên có thể đặt câu hỏi về bất kỳ phân đoạn nào trong video, trợ lý AI sẽ trả lời dựa trên chính nội dung đang phát để giải đáp thắc mắc ngay lập tức.",
      icon: <MessageSquareText className="text-brand-primary" size={28} />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      stats: "Tăng 65% khả năng ghi nhớ"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 space-y-32">
      {/* Header phần Features */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-brand-slate-900 mb-6 tracking-tight">
          Sức mạnh công nghệ <br />
          <span className="text-brand-primary">Dẫn đầu kỷ nguyên số.</span>
        </h2>
        <p className="text-brand-slate-600 text-[18px] font-medium leading-relaxed">
          MACO kết hợp khả năng quản trị khóa học mạnh mẽ với trí tuệ nhân tạo thế hệ mới,
          mang lại lợi ích vượt trội cho cả người dạy và người học.
        </p>
      </div>

      {/* Danh sách các tính năng lớn */}
      <div className="space-y-24">
        {mainFeatures.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* Cột hình ảnh minh họa */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative rounded-32 overflow-hidden border-[8px] border-white shadow-2xl aspect-[4/3]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply"></div>
              </div>

              {/* Badge thông số nổi trên ảnh */}
              <div className="absolute -bottom-6 -right-6 lg:right-10 bg-white p-5 rounded-24 shadow-xl border border-brand-slate-50 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <BarChart3 className="text-brand-primary" size={20} />
                  </div>
                  <span className="text-sm font-bold text-brand-slate-900">{feature.stats}</span>
                </div>
              </div>
            </motion.div>

            {/* Cột nội dung văn bản */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className="inline-flex items-center gap-3 text-brand-primary font-bold text-sm tracking-widest uppercase bg-blue-50 px-4 py-2 rounded-full">
                {feature.icon}
                <span>{feature.subtitle}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-brand-slate-900 leading-tight">
                {feature.title}
              </h3>
              <p className="text-brand-slate-600 text-lg leading-relaxed font-medium">
                {feature.description}
              </p>

              <ul className="space-y-4 pt-4">
                {idx === 0 ? (
                  <>
                    <li className="flex items-center gap-3 text-brand-slate-700 font-bold">
                      <Video className="text-brand-primary" size={18} /> Quản lý video bài giảng tập trung
                    </li>
                    <li className="flex items-center gap-3 text-brand-slate-700 font-bold">
                      <BrainCircuit className="text-brand-primary" size={18} /> AI tự động bóc tách nội dung kiến thức
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-3 text-brand-slate-700 font-bold">
                      <GraduationCap className="text-brand-primary" size={18} /> Lưu trữ và theo dõi tiến độ học tập
                    </li>
                    <li className="flex items-center gap-3 text-brand-slate-700 font-bold">
                      <MessageSquareText className="text-brand-primary" size={18} /> Chatbox thông minh theo ngữ cảnh video
                    </li>
                  </>
                )}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};