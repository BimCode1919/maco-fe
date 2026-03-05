import { Percent, Globe, Key, Save } from "lucide-react";

export const SystemSettings = ({ theme }: any) => {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Monetization Config */}
      <div className={`p-8 rounded-[32px] border ${theme.card}`}>
        <h3 className={`text-xl font-black mb-6 flex items-center gap-2 ${theme.text}`}>
          <Percent size={20} className="text-indigo-500" /> Cấu hình doanh thu
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <SettingInput label="Hoa hồng Giảng viên (%)" value="70" theme={theme} />
          <SettingInput label="Phí nền tảng (%)" value="30" theme={theme} />
          <SettingInput label="Thuế VAT học viên (%)" value="10" theme={theme} />
          <SettingInput label="Ngưỡng thanh toán tối thiểu" value="500.000 ₫" theme={theme} />
        </div>
      </div>

      {/* API Keys */}
      <div className={`p-8 rounded-[32px] border ${theme.card}`}>
        <h3 className={`text-xl font-black mb-6 flex items-center gap-2 ${theme.text}`}>
          <Key size={20} className="text-amber-500" /> Kết nối API bên thứ 3
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
            <div>
              <p className={`text-sm font-bold ${theme.text}`}>AWS S3 Storage</p>
              <p className="text-[10px] font-mono text-slate-500">AKIA************F3QL</p>
            </div>
            <span className="text-[10px] font-black text-emerald-500 uppercase">Connected</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
            <div>
              <p className={`text-sm font-bold ${theme.text}`}>VNPAY Merchant Gateway</p>
              <p className="text-[10px] font-mono text-slate-500">MID: 940213</p>
            </div>
            <span className="text-[10px] font-black text-emerald-500 uppercase">Connected</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-[20px] font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
          <Save size={20} /> Lưu tất cả thay đổi
        </button>
      </div>
    </div>
  );
};

const SettingInput = ({ label, value, theme }: any) => (
  <div className="space-y-2">
    <label className={`text-xs font-black uppercase tracking-widest ${theme.textMuted}`}>{label}</label>
    <input 
      type="text" 
      defaultValue={value}
      className={`w-full px-5 py-3 rounded-2xl border outline-none focus:border-indigo-500 transition-all font-bold ${theme.input} ${theme.text}`}
    />
  </div>
);