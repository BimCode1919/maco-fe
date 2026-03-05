import { motion } from "motion/react";
import { Sparkles, Users, BarChart3 } from "lucide-react";

export const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="bg-indigo-50 rounded-32 aspect-square relative overflow-hidden soft-elevation">
            <img 
              alt="Feature" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" 
              src="https://base.vn/wp-content/uploads/2024/05/platform-la-gi.webp"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
            <div className="absolute bottom-10 right-10 glass rounded-24 p-6 shadow-2xl w-64 border-white/40">
              <Sparkles className="text-indigo-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Giải pháp AI Đột phá</h4>
              <p className="text-sm text-slate-600">Tích hợp các mô hình trí tuệ nhân tạo hiện đại để tối ưu hóa hiệu suất và sáng tạo.</p>
            </div>
          </div>
        </motion.div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl font-black tracking-tight mb-8">Nền tảng Kết nối Tri thức <span className="text-indigo-600">Việt Nam.</span></h2>
          <div className="space-y-8">
            {[
              { 
                icon: <Users className="text-indigo-600" />, 
                title: "Hệ sinh thái AI Đa dạng", 
                desc: "Khám phá hàng trăm công cụ và dịch vụ AI được thiết kế để giải quyết mọi thách thức doanh nghiệp." 
              },
              { 
                icon: <BarChart3 className="text-purple-600" />, 
                title: "Tối ưu hóa Hiệu suất", 
                desc: "Các giải pháp AI giúp tự động hóa quy trình, giảm thiểu sai sót và tăng tốc độ tăng trưởng." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-32 bg-slate-50 hover:bg-white hover:soft-elevation transition-all border border-transparent hover:border-indigo-100 group"
              >
                <div className="flex gap-6">
                  <div className="bg-white w-14 h-14 rounded-24 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
