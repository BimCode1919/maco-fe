import { Share2, Globe } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Logo isWhite={true} textClassName="text-2xl" className="w-10 h-10" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tiên phong trong việc cung cấp các giải pháp AI đột phá phục vụ giảng dạy và học tập.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {[
            { title: "Tài nguyên", links: ["Thư viện", "Câu chuyện Thành công", "Tài liệu"] },
            { title: "Nền tảng", links: ["Dịch vụ", "Tính năng", "Mạng lưới Đối tác"] },
            { title: "Công ty", links: ["Câu chuyện của chúng tôi", "Tuyển dụng", "Trung tâm Tin cậy"] },
          ].map((col) => (
            <div key={col.title}>
              <h5 className="font-bold mb-8 text-sm uppercase tracking-widest text-indigo-400">{col.title}</h5>
              <ul className="space-y-4 text-slate-400 text-sm">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="font-bold mb-8 text-sm uppercase tracking-widest text-indigo-400">Luôn dẫn đầu</h5>
            <p className="text-slate-400 text-sm mb-6">Thông tin hàng tuần về tương lai của các kỹ năng.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-white/5 border-white/10 rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" 
                placeholder="Email công việc" 
                type="email"
              />
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-full font-bold text-sm transition-all">
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2026 MACO Vietnam</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-white transition-colors">An ninh</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
