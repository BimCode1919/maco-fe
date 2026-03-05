import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ChevronRight, Save, Trash2 } from "lucide-react";

export const CreateCourse = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Tạo khóa học mới</h1>
          <p className="text-slate-500 font-medium">Vui lòng điền đầy đủ thông tin để bắt đầu bài giảng.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2">
            <Save size={18} /> Lưu bản nháp
          </button>
          <button 
            onClick={() => setStep(step < 3 ? step + 1 : step)}
            className="px-6 py-2.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center gap-2"
          >
            {step === 3 ? "Hoàn tất" : "Tiếp theo"} <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Stepper Progress */}
      <div className="relative flex justify-between mb-12 max-w-3xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -translate-y-1/2 transition-all duration-500 z-0"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
        
        {[
          { s: 1, label: "Thông tin cơ bản" },
          { s: 2, label: "Nội dung học" },
          { s: 3, label: "Cài đặt" }
        ].map((item) => (
          <div key={item.s} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= item.s ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-400 border-2 border-slate-100"
            }`}>
              {item.s}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider ${step >= item.s ? "text-indigo-600" : "text-slate-400"}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-32 p-8 border border-slate-100 shadow-sm"
      >
        <div className="grid gap-8">
          {/* Upload Area */}
          <div className="border-2 border-dashed border-slate-200 rounded-32 p-12 flex flex-col items-center justify-center group hover:border-indigo-400 transition-all cursor-pointer bg-slate-50/50">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Upload size={28} />
            </div>
            <p className="text-slate-900 font-black text-lg">Kéo và thả hoặc <span className="text-indigo-600">Chọn file</span> để tải lên</p>
            <p className="text-slate-400 text-sm font-medium mt-1">Hỗ trợ JPG, PNG, MP4 (Tối đa 500MB)</p>
          </div>

          {/* Input Groups */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Tên khóa học</label>
              <input 
                type="text" 
                placeholder="Ví dụ: UX Design cho người mới bắt đầu"
                className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Loại hình</label>
              <select className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-medium appearance-none">
                <option>Video bài giảng (Pre-recorded)</option>
                <option>Học trực tuyến (Live Stream)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Danh mục</label>
              <select className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-medium appearance-none">
                <option>UI/UX Design</option>
                <option>Artificial Intelligence</option>
                <option>Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Thời lượng ước tính</label>
              <input type="text" placeholder="16 giờ" className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-medium" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Chứng chỉ</label>
              <select className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 outline-none font-medium">
                <option>Cấp sau khi hoàn thành</option>
                <option>Không có chứng chỉ</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};