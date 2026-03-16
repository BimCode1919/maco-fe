import React from "react";
import { Percent, Globe, Key, Save, Database, CreditCard, ChevronRight, Activity } from "lucide-react";

interface SystemSettingsProps {
  theme: any;
  isDarkMode: boolean;
}

export const SystemSettings = ({ theme, isDarkMode }: SystemSettingsProps) => {
  return (
    <div className="max-w-5xl space-y-6 md:space-y-8 pb-10">

      {/* SECTION 1: MONETIZATION CONFIG */}
      <div className={`p-6 md:p-8 rounded-[32px] border shadow-sm transition-all ${theme.card}`}>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
            <Percent size={24} />
          </div>
          <div>
            <h3 className={`text-xl font-black tracking-tight ${theme.text}`}>Cấu hình doanh thu</h3>
            <p className={`text-xs font-medium ${theme.textMuted}`}>Thiết lập tỉ lệ chia sẻ doanh thu và thuế</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SettingInput label="Hoa hồng Giảng viên (%)" value="70" type="number" theme={theme} isDarkMode={isDarkMode} />
          <SettingInput label="Phí nền tảng (%)" value="30" type="number" theme={theme} isDarkMode={isDarkMode} />
          <SettingInput label="Thuế VAT học viên (%)" value="10" type="number" theme={theme} isDarkMode={isDarkMode} />
          <SettingInput label="Ngưỡng thanh toán tối thiểu" value="500,000" suffix="₫" theme={theme} isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* SECTION 2: API CONNECTIONS */}
      <div className={`p-6 md:p-8 rounded-[32px] border shadow-sm transition-all ${theme.card}`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
              <Key size={24} />
            </div>
            <div>
              <h3 className={`text-xl font-black tracking-tight ${theme.text}`}>Kết nối API & Third-party</h3>
              <p className={`text-xs font-medium ${theme.textMuted}`}>Quản lý tích hợp dịch vụ bên ngoài</p>
            </div>
          </div>
          <button className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
            Kiểm tra kết nối
          </button>
        </div>

        <div className="grid gap-4">
          <ApiConnectionItem
            icon={Database}
            name="AWS S3 Storage"
            id="AKIA************F3QL"
            status="Active"
            theme={theme}
            isDarkMode={isDarkMode}
          />
          <ApiConnectionItem
            icon={CreditCard}
            name="VNPAY Merchant Gateway"
            id="MID: 940213"
            status="Active"
            theme={theme}
            isDarkMode={isDarkMode}
          />
          <ApiConnectionItem
            icon={Activity}
            name="Google Gemini AI"
            id="Model: Pro-2.0-Flash"
            status="Active"
            theme={theme}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex items-center justify-between p-6 rounded-[28px] bg-indigo-600 shadow-xl shadow-indigo-500/20">
        <div className="hidden md:block">
          <p className="text-white font-bold text-sm">Cập nhật lần cuối</p>
          <p className="text-indigo-100 text-xs opacity-70">16/03/2026 - 18:04</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
          <Save size={20} /> Lưu tất cả thay đổi
        </button>
      </div>
    </div>
  );
};

// --- COMPONENT CON: INPUT ---
// Cập nhật lại logic trong hàm SettingInput
const SettingInput = ({ label, value, type = "text", suffix, theme, isDarkMode }: any) => (
  <div className="space-y-2 group">
    <label className={`text-[10px] font-black uppercase tracking-[0.15em] ml-1 transition-colors 
      ${isDarkMode ? 'text-slate-400 group-focus-within:text-indigo-400' : 'text-slate-500 group-focus-within:text-indigo-600'}`}>
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        defaultValue={value}
        className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all font-bold text-sm
          ${isDarkMode
            ? 'bg-slate-900/50 border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500'
            : 'bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900'
          }`}
      />
      {suffix && (
        <span className={`absolute right-5 top-1/2 -translate-y-1/2 font-black text-sm italic ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          {suffix}
        </span>
      )}
    </div>
  </div>
);

// --- COMPONENT CON: API ITEM ---
const ApiConnectionItem = ({ icon: Icon, name, id, status, theme, isDarkMode }: any) => (
  <div className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group
    ${isDarkMode 
      ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50' 
      : 'bg-slate-50/50 border-slate-100 hover:border-indigo-500/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50'
    }`}
  >
    <div className="flex items-center gap-4">
      {/* Icon Box: Trong Dark Mode nên dùng nền Slate đậm hơn để nổi bật Icon */}
      <div className={`p-3 rounded-xl transition-colors duration-300
        ${isDarkMode 
          ? 'bg-slate-800 text-indigo-400 group-hover:bg-indigo-500/20' 
          : 'bg-white shadow-sm text-indigo-600 group-hover:bg-indigo-50'
        }`}
      >
        <Icon size={20} />
      </div>

      <div>
        <p className={`text-sm font-black tracking-tight transition-colors
          ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}
        >
          {name}
        </p>
        <p className={`text-[10px] font-mono font-medium mt-0.5 
          ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}
        >
          {id}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3">
      {/* Status Badge: Dùng Opacity thấp để màu sắc không bị chói trong Dark Mode */}
      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors
        ${isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}
      >
        <div className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${status === 'Active' ? 'animate-pulse' : ''}`} />
        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider">
          {status}
        </span>
      </div>

      <button className={`p-2 rounded-lg transition-all
        ${isDarkMode 
          ? 'hover:bg-slate-700 text-slate-500 hover:text-slate-200' 
          : 'hover:bg-slate-200/50 text-slate-400 hover:text-slate-600'
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);