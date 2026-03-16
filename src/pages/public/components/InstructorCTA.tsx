import { motion } from "framer-motion";
import { Laptop, ShieldCheck, PenTool, Layout, ArrowRight } from "lucide-react";

interface InstructorCTAProps {
  openAuth: (mode: "register-instructor") => void;
}

export const InstructorCTA = ({ openAuth }: InstructorCTAProps) => {
  // Biến thể cho danh sách dịch vụ xuất hiện lần lượt
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="px-6 py-24 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-[#1E293B] rounded-[48px] overflow-hidden relative shadow-2xl"
      >
        {/* Họa tiết lưới mờ với hiệu ứng trượt nhẹ khi scroll */}
        <motion.div
          initial={{ backgroundPosition: "0 0" }}
          whileInView={{ backgroundPosition: "40px 40px" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"
        />

        <div className="relative z-10 grid lg:grid-cols-2 items-stretch">

          {/* Cột 1: Thông điệp - Trượt từ trái sang */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-10 md:p-16 lg:p-20 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              <ShieldCheck size={16} />
              Dành cho Đối tác Giáo dục
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              Tối ưu vận hành <br />
              <span className="text-indigo-400 font-black">Nâng tầm bài giảng.</span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 max-w-lg font-medium leading-relaxed">
              MACO không chỉ là nền tảng trình chiếu. Chúng tôi cung cấp công cụ AI giúp giảng viên
              giảm bớt khối lượng công việc thủ công và tập trung vào việc truyền thụ tri thức thực chất.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openAuth("register-instructor")}
                className="bg-white text-slate-900 h-16 px-10 rounded-2xl font-black text-md hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter group"
              >
                Trở thành đối tác
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Cột 2: Danh mục hỗ trợ - Hiệu ứng trồi lên từng cái */}
          <div className="bg-slate-800/30 p-10 lg:p-20 flex items-center justify-center border-l border-white/5 backdrop-blur-sm">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 w-full"
            >
              {[
                {
                  icon: <Layout className="text-indigo-400" size={20} />,
                  title: "Không gian giảng dạy chuyên nghiệp",
                  desc: "Lưu trữ video bài giảng tập trung, bảo mật và dễ dàng quản lý theo khóa học."
                },
                {
                  icon: <PenTool className="text-indigo-400" size={20} />,
                  title: "Tự động hóa bài kiểm tra",
                  desc: "Hệ thống AI hỗ trợ khởi tạo bộ câu hỏi Quiz đánh giá ngay từ nội dung bài giảng của bạn."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    borderColor: "rgba(129, 140, 248, 0.3)"
                  }}
                  className="bg-slate-900/50 border border-slate-700 p-6 rounded-3xl space-y-3 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium md:pl-13">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

              {/* Thông báo cập nhật với hiệu ứng Pulse nhẹ */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="pt-4 flex items-center gap-3 text-slate-500 italic"
              >
                <div className="relative">
                  <Laptop size={16} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                </div>
                <span className="text-[11px] font-medium tracking-tight">
                  Giao diện quản trị bài giảng đang được hoàn thiện và cập nhật mỗi tuần.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};