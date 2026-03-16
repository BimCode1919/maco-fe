import {
  User,
  Mail,
  Shield,
  CreditCard,
  ChevronRight,
  Save
} from "lucide-react";

export const SettingsTab = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 pb-10">
      {/* Header */}
      <div className="px-1">
        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Cài đặt tài khoản</h1>
        <p className="text-[11px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Cập nhật thông tin cá nhân và bảo mật</p>
      </div>

      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden transition-all">
        {/* Profile Section */}
        <div className="p-5 md:p-8 border-b border-slate-50">
          <h3 className="text-base md:text-lg font-black text-slate-900 mb-5 flex items-center gap-2">
            <div className="w-1.5 h-4 bg-indigo-600 rounded-full" />
            Thông tin cá nhân
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Input Họ và tên */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Họ và tên học viên</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
                <input
                  type="text"
                  defaultValue="Học viên Maco"
                  className="w-full h-12 bg-slate-50 border-2 border-transparent rounded-[16px] pl-11 pr-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Địa chỉ Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
                <input
                  type="email"
                  defaultValue="hocvien@maco.vn"
                  className="w-full h-12 bg-slate-50 border-2 border-transparent rounded-[16px] pl-11 pr-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="p-5 md:p-8 space-y-5">
          <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
            <div className="w-1.5 h-4 bg-indigo-600 rounded-full" />
            Bảo mật & Thanh toán
          </h3>

          <div className="grid gap-3">
            {[
              {
                title: "Thay đổi mật khẩu",
                desc: "Cập nhật định kỳ để bảo mật",
                icon: Shield,
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                title: "Phương thức thanh toán",
                desc: "Visa, Mastercard và ví điện tử",
                icon: CreditCard,
                color: "text-indigo-500",
                bg: "bg-indigo-50"
              }
            ].map((item, idx) => (
              <button
                key={idx}
                className="flex items-center justify-between w-full p-4 rounded-[18px] bg-white border border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] md:text-sm font-black text-slate-900">{item.title}</p>
                    <p className="text-[11px] font-medium text-slate-400 leading-tight">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-5 md:p-6 bg-slate-50/50 border-t border-slate-50 flex flex-col sm:flex-row justify-end gap-3">
          <button className="order-2 sm:order-1 px-6 py-3 rounded-[14px] font-black text-xs md:text-sm text-slate-500 hover:bg-slate-100 transition-all">
            Hủy bỏ
          </button>
          <button className="order-1 sm:order-2 px-6 py-3 bg-indigo-600 text-white rounded-[14px] font-black text-xs md:text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 flex items-center justify-center gap-2">
            <Save size={16} />
            Lưu thay đổi
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="p-4 md:p-6 bg-red-50/50 rounded-[24px] border border-red-100 flex items-center justify-between">
        <div>
          <p className="text-xs md:text-sm font-black text-red-600">Xóa tài khoản</p>
          <p className="text-[10px] md:text-[11px] font-medium text-red-400">Tất cả dữ liệu khóa học sẽ biến mất vĩnh viễn.</p>
        </div>
        <button className="px-4 py-2 text-[11px] font-black text-red-600 border border-red-200 rounded-lg hover:bg-red-600 hover:text-white transition-all">
          Xóa
        </button>
      </div>
    </div>
  );
};