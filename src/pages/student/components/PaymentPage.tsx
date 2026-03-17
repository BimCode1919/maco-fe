import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Lock, CheckCircle, AlertCircle } from "lucide-react";

interface PaymentPageProps {
  selectedPlan?: {
    name: string;
    price: string;
    features: { text: string; included: boolean }[];
  };
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export const PaymentPage = ({ selectedPlan, onBack, onPaymentSuccess }: PaymentPageProps) => {
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep('success');
      setTimeout(() => {
        onPaymentSuccess();
      }, 2000);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (paymentStep === 'processing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Đang xử lý thanh toán</h3>
          <p className="text-slate-600 mb-6">Vui lòng đợi trong giây lát...</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle size={16} className="text-green-500" />
              <span>Kiểm tra thông tin thẻ</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="w-4 h-4 border-2 border-slate-300 border-t-indigo-600 rounded-full animate-spin"></div>
              <span>Xử lý thanh toán</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="w-4 h-4 border-2 border-slate-300 rounded-full"></div>
              <span>Hoàn tất giao dịch</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (paymentStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Thanh toán thành công!</h3>
          <p className="text-slate-600 mb-6">
            Chúc mừng! Bạn đã đăng ký thành công gói {selectedPlan?.name}.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-800 font-bold">
              🎉 Email xác nhận đã được gửi đến {formData.email}
            </p>
          </div>
          <button
            onClick={onPaymentSuccess}
            className="w-full py-3 bg-green-600 text-white font-black rounded-xl hover:bg-green-700 transition-all"
          >
            Bắt đầu học tập ngay
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-100 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ChevronLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Thanh toán</h1>
            <p className="text-sm text-slate-500">Hoàn tất đăng ký gói {selectedPlan?.name}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <CreditCard size={20} />
                Thông tin thanh toán
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">Thông tin cá nhân</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm md:text-base font-bold text-slate-700 mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-5 py-3 md:px-6 md:py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="nguyenvana@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      placeholder="0123 456 789"
                    />
                  </div>
                </div>

                {/* Card Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900">Thông tin thẻ tín dụng</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Số thẻ *</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Ngày hết hạn *</label>
                      <input
                        type="text"
                        required
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">CVV *</label>
                      <input
                        type="text"
                        required
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value.replace(/[^0-9]/g, ''))}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900">Địa chỉ thanh toán</h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Địa chỉ *</label>
                    <input
                      type="text"
                      required
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      placeholder="123 Đường ABC, Phường XYZ"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Thành phố *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="Hồ Chí Minh"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Mã bưu điện</label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        placeholder="70000"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-black text-lg rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  Thanh toán an toàn
                </button>
              </form>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 sticky top-24"
            >
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6">Tóm tắt đơn hàng</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Gói dịch vụ</span>
                  <span className="font-bold text-slate-900">{selectedPlan?.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Giá</span>
                  <span className="font-black text-2xl text-indigo-600">{selectedPlan?.price}</span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">Tổng cộng</span>
                    <span className="font-black text-2xl text-indigo-600">{selectedPlan?.price}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-2">Bạn sẽ nhận được:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {selectedPlan?.features.filter(f => f.included).slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <Lock size={14} />
                <span>Thanh toán được bảo mật bởi SSL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};