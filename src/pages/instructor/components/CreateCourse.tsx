import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronRight, ChevronLeft, Save, Layout, ListChecks, Settings, Plus } from "lucide-react";

export const CreateCourse = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, label: "Thông tin", icon: <Layout size={18} /> },
    { id: 2, label: "Nội dung", icon: <ListChecks size={18} /> },
    { id: 3, label: "Cài đặt", icon: <Settings size={18} /> },
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Upload Thumbnail */}
            <div className="border-2 border-dashed border-slate-200 rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center group hover:border-indigo-400 transition-all cursor-pointer bg-slate-50/50">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <Upload size={24} />
              </div>
              <p className="text-slate-900 font-black text-center">Tải ảnh nền khóa học</p>
              <p className="text-slate-400 text-xs font-medium mt-1">Khuyên dùng 16:9 (JPG, PNG)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Tên khóa học</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Lập trình Java Backend chuyên sâu"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Danh mục</label>
                <select className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-bold appearance-none">
                  <option>Software Development</option>
                  <option>Artificial Intelligence</option>
                  <option>Business & Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Cấp độ</label>
                <select className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-bold appearance-none">
                  <option>Cho người mới bắt đầu</option>
                  <option>Trung cấp</option>
                  <option>Nâng cao</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-black text-slate-900">Cấu trúc chương trình</h3>
              <button className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest">
                <Plus size={16} /> Thêm chương mới
              </button>
            </div>
            {/* Placeholder cho Curriculum UI */}
            <div className="p-10 border-2 border-dashed border-slate-100 rounded-[32px] flex flex-col items-center justify-center text-slate-400">
              <ListChecks size={40} className="mb-4 opacity-20" />
              <p className="font-bold">Chưa có nội dung bài giảng</p>
              <p className="text-xs">Bắt đầu xây dựng lộ trình học bằng cách thêm chương đầu tiên</p>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
              <p className="text-amber-700 text-sm font-bold">Lưu ý: Khóa học sau khi xuất bản sẽ cần 24h để đội ngũ kiểm duyệt nội dung trước khi hiển thị công khai.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <p className="font-black text-slate-900">Cho phép thảo luận</p>
                  <p className="text-xs text-slate-500 font-medium">Học viên có thể đặt câu hỏi bên dưới video</p>
                </div>
                <input type="checkbox" className="w-6 h-6 accent-indigo-600" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <p className="font-black text-slate-900">Chế độ riêng tư</p>
                  <p className="text-xs text-slate-500 font-medium">Chỉ những người có mã mời mới vào được</p>
                </div>
                <input type="checkbox" className="w-6 h-6 accent-indigo-600" />
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 md:space-y-10">
      {/* Header section - Responsive */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <button
            onClick={onBack}
            className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors"
          >
            ← Quay lại
          </button>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Tạo khóa học mới</h1>
        </div>

        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-full md:w-auto">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${step === s.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                  : "text-slate-400 hover:text-slate-600"
                }`}
            >
              {s.icon}
              <span className="text-xs font-black uppercase tracking-widest hidden md:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Main Form Area */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-sm min-h-[500px] flex flex-col">
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="flex items-center justify-between pt-10 mt-10 border-t border-slate-50">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-slate-900"
                  }`}
              >
                <ChevronLeft size={18} /> Quay lại
              </button>

              <div className="flex gap-3">
                <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all shadow-sm">
                  <Save size={20} />
                </button>
                <button
                  onClick={() => setStep(Math.min(3, step + 1))}
                  className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2"
                >
                  {step === 3 ? "Hoàn tất & Xuất bản" : "Bước tiếp theo"}
                  {step !== 3 && <ChevronRight size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info - Hidden on mobile or moved to bottom */}
        <div className="order-1 lg:order-2 space-y-6">
          <div className="bg-slate-900 rounded-[32px] p-8 text-white">
            <h4 className="font-black text-lg mb-4">Mẹo nhỏ</h4>
            <ul className="space-y-4">
              {[
                "Tên khóa học nên ngắn gọn nhưng bao quát đủ từ khóa.",
                "Ảnh bìa chất lượng cao tăng 40% tỷ lệ click.",
                "Phân bổ thời lượng mỗi video từ 5-15 phút là tốt nhất."
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-400 font-medium">
                  <span className="text-indigo-400 font-black">0{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};