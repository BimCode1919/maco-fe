import { motion } from "framer-motion";
import { Check, ChevronLeft, Star, Zap, Users, BarChart3 } from "lucide-react";

interface MembershipPlanProps {
  onBack: () => void;
  onSelectPlan?: (plan: any) => void;
}

const pricingTiers = [
  {
    name: "Gói Basic",
    price: "Miễn phí",
    description: "Hoàn hảo để bắt đầu",
    icon: "🎯",
    features: [
      { text: "Truy cập khóa học cơ bản", included: true },
      { text: "Cộng đồng học tập", included: true },
      { text: "Chứng chỉ tham gia", included: true },
      { text: "Hỗ trợ AI 24/7", included: false },
      { text: "Tư vấn cá nhân hóa", included: false },
      { text: "Mentor riêng", included: false },
      { text: "Tải về tài liệu", included: false },
      { text: "Truy cập offline", included: false },
    ],
    color: "bg-slate-50",
    buttonColor: "bg-slate-600 hover:bg-slate-700 text-white",
    popular: false,
  },
  {
    name: "Gói Pro",
    price: "157.000đ/tháng",
    description: "Cho những người muốn học chuyên sâu",
    icon: "⚡",
    features: [
      { text: "Tất cả khóa học cao cấp", included: true },
      { text: "Hỗ trợ AI 24/7", included: true },
      { text: "Tư vấn cá nhân hóa", included: true },
      { text: "Chứng chỉ chuyên nghiệp", included: true },
      { text: "Cộng đồng Priority", included: true },
      { text: "Tải về tài liệu", included: true },
      { text: "Truy cập offline", included: true },
      { text: "Mentor riêng", included: false },
    ],
    color: "bg-indigo-50",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
    popular: true,
  },
  {
    name: "Gói Enterprise",
    price: "Liên hệ bộ phận sales",
    description: "Dành cho doanh nghiệp & tổ chức",
    icon: "🏆",
    features: [
      { text: "Custom learning path", included: true },
      { text: "Mentor riêng", included: true },
      { text: "Hỗ trợ doanh nghiệp 24/7", included: true },
      { text: "Giấy phép doanh nghiệp", included: true },
      { text: "Tất cả tính năng Pro", included: true },
      { text: "API integration", included: true },
      { text: "Team collaboration tools", included: true },
      { text: "Advanced analytics", included: true },
    ],
    color: "bg-slate-900 text-white",
    buttonColor: "bg-white hover:bg-slate-50 text-slate-900 border-2 border-white",
    popular: false,
  },
];

export const MembershipPlan = ({ onBack, onSelectPlan }: MembershipPlanProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ChevronLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Chọn Gói Dịch Vụ</h1>
            <p className="text-sm text-slate-500">Upgrade để mở khóa toàn bộ tiềm năng học tập</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Tìm Gói Phù Hợp Với Bạn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Từ các khóa học cơ bản miễn phí đến hỗ trợ cá nhân hóa, chúng tôi có gói phù hợp cho mọi người
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-3xl overflow-hidden transition-all ${
                tier.popular ? "md:scale-105 shadow-2xl shadow-indigo-200/50" : "shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400" />
              )}

              <div className={`p-8 md:p-10 h-full flex flex-col ${tier.color}`}>
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-4xl">{tier.icon}</span>
                      <h3 className={`text-2xl font-black mt-3 ${tier.color === "bg-slate-900 text-white" ? "text-white" : "text-slate-900"}`}>
                        {tier.name}
                      </h3>
                    </div>
                    {tier.popular && (
                      <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-black rounded-full">
                        PHỔ BIẾN
                      </div>
                    )}
                  </div>
                  <p className={`text-sm ${tier.color === "bg-slate-900 text-white" ? "text-slate-300" : "text-slate-600"}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className={`text-4xl font-black mb-2 ${tier.color === "bg-slate-900 text-white" ? "text-white" : "text-indigo-600"}`}>
                    {tier.price}
                  </div>
                  {tier.price !== "Liên hệ bộ phận sales" && (
                    <p className={`text-xs ${tier.color === "bg-slate-900 text-white" ? "text-slate-400" : "text-slate-500"}`}>
                      Thanh toán hàng {tier.price.includes("/tháng") ? "tháng" : "năm"}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button                  onClick={() => onSelectPlan?.(tier)}                  className={`w-full py-3 rounded-xl font-black text-sm uppercase tracking-wider mb-10 transition-all transform hover:scale-105 ${tier.buttonColor}`}
                >
                  {tier.price === "Liên hệ bộ phận sales" ? "Liên Hệ Ngay" : "Đăng Ký Ngay"}
                </button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + fIdx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${
                          feature.included
                            ? tier.popular
                              ? "bg-indigo-100"
                              : tier.color === "bg-slate-900 text-white"
                              ? "bg-white/20"
                              : "bg-slate-200"
                            : tier.color === "bg-slate-900 text-white"
                            ? "bg-white/5"
                            : "bg-slate-200/50"
                        }`}
                      >
                        {feature.included && (
                          <Check
                            size={14}
                            className={
                              tier.popular
                                ? "text-indigo-600"
                                : tier.color === "bg-slate-900 text-white"
                                ? "text-white"
                                : "text-slate-600"
                            }
                          />
                        )}
                      </div>
                      <span
                        className={`text-sm font-bold ${
                          feature.included
                            ? tier.color === "bg-slate-900 text-white"
                              ? "text-white"
                              : "text-slate-900"
                            : tier.color === "bg-slate-900 text-white"
                            ? "text-slate-400"
                            : "text-slate-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h3 className="text-2xl font-black text-slate-900 mb-8">So Sánh Chi Tiết</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-black text-slate-900">Tính Năng</th>
                  {pricingTiers.map((tier, idx) => (
                    <th key={idx} className="text-center py-4 px-4 font-black text-slate-900">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-700">Khóa Học</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-lg text-slate-600 font-bold">
                      Cơ bản
                    </span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-xs bg-indigo-100 px-2 py-1 rounded-lg text-indigo-600 font-bold">
                      Tất cả
                    </span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded-lg text-white font-bold">
                      Tất cả + Custom
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-700">Hỗ Trợ</td>
                  <td className="text-center py-4 px-4 text-slate-400">Cộng đồng</td>
                  <td className="text-center py-4 px-4 text-indigo-600 font-bold">24/7</td>
                  <td className="text-center py-4 px-4 text-slate-200 font-bold">Riêng</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-bold text-slate-700">Chứng Chỉ</td>
                  <td className="text-center py-4 px-4">
                    <Check size={18} className="mx-auto text-slate-400" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check size={18} className="mx-auto text-indigo-600" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check size={18} className="mx-auto text-white" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-slate-700">Offline Access</td>
                  <td className="text-center py-4 px-4 text-slate-400">-</td>
                  <td className="text-center py-4 px-4">
                    <Check size={18} className="mx-auto text-indigo-600" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check size={18} className="mx-auto text-white" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-black text-slate-900 mb-8">❓ Câu Hỏi Thường Gặp</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-black text-slate-900 mb-2">🔄 Có thể hủy bất cứ lúc nào?</h4>
              <p className="text-slate-600">Có, bạn có thể hủy đăng ký của mình bất cứ lúc nào mà không phí hủy.</p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-2">💳 Hình thức thanh toán nào được chấp nhận?</h4>
              <p className="text-slate-600">Chúng tôi chấp nhận Visa, Mastercard, Momo, Zalopay, và chuyển khoản ngân hàng.</p>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-2">🎁 Có bản dùng thử miễn phí?</h4>
              <p className="text-slate-600">Với Gói Basic, bạn có thể đăng ký và truy cập hoàn toàn miễn phí. Không cần thẻ tín dụng.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA - Full Width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-br from-slate-800 via-indigo-800 to-slate-900 text-white px-6 py-20 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              🚀 Bắt Đầu Yêu Cầu Hành Động<br />
              <span className="text-slate-300">Chọn Gói Dịch Vụ & Học Tập Ngay Hôm Nay</span>
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-3"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              <span className="font-black text-white block mb-2">✨ Lợi Ích Tương Ứng Với Mỗi Gói:</span>
              <span className="text-slate-300"><span className="font-bold text-white">Gói Basic (Miễn Phí):</span> Truy cập khóa học cơ bản + Chứng chỉ tham gia</span><br />
              <span className="text-slate-300"><span className="font-bold text-white">Gói Pro (499K/tháng):</span> Toàn bộ khóa học + Hỗ trợ AI 24/7 + Mentor cá nhân</span><br />
              <span className="text-slate-300"><span className="font-bold text-white">Gói Enterprise:</span> Custom learning + Giải pháp doanh nghiệp toàn diện</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-slate-300 text-base md:text-lg font-bold mb-4">
              ✅ <span className="text-white">Không cần thẻ tín dụng</span> cho Gói Basic | <span className="text-white">Hủy bất cứ lúc nào</span> | <span className="text-white">Hỗ trợ 24/7</span>
            </p>
          </motion.div>

          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-white text-slate-800 font-black text-lg rounded-xl hover:bg-slate-100 transition-all shadow-xl shadow-slate-900/30 inline-block"
          >
            Quay Lại để Chọn Gói
          </motion.button>
        </div>
      </div>
    </div>
  );
};
