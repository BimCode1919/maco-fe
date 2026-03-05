import { 
  User, 
  Mail, 
  Shield, 
  CreditCard, 
  ChevronRight 
} from "lucide-react";

export const SettingsTab = () => {
  return (
    <div className="max-w-4xl space-y-10">
      <h1 className="text-3xl font-black text-slate-900">Cài đặt tài khoản</h1>

      <div className="bg-white rounded-32 border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-6">Thông tin cá nhân</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Họ và tên</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" defaultValue="Nguyễn Văn Học" className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" defaultValue="hoc@maco.vn" className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-12 pr-4 font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600 outline-none transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-b border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-6">Bảo mật</h3>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600">
                  <Shield size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-slate-900">Đổi mật khẩu</p>
                  <p className="text-xs font-medium text-slate-500">Cập nhật mật khẩu định kỳ để bảo vệ tài khoản</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
            <button className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600">
                  <CreditCard size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-slate-900">Phương thức thanh toán</p>
                  <p className="text-xs font-medium text-slate-500">Quản lý thẻ và lịch sử giao dịch</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          </div>
        </div>

        <div className="p-8 bg-slate-50 flex justify-end gap-4">
          <button className="px-8 py-4 rounded-2xl font-black text-sm text-slate-500 hover:text-slate-900 transition-all">Hủy bỏ</button>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
};
