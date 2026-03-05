import { motion } from "motion/react";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

interface NavProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  openAuth: (mode: "login" | "register-select") => void;
}

export const Nav = ({ setCurrentPage, currentPage, openAuth }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-0 right-0 z-50 px-6 transition-all duration-300 ${isScrolled ? "top-4" : "top-6"}`}>
      <div className="max-w-6xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between shadow-lg border border-white/40">
        <div className="cursor-pointer" onClick={() => setCurrentPage("home")}>
          <Logo />
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "Trang chủ", id: "home" },
            { name: "Khóa học", id: "courses" },
            { name: "Giảng viên", id: "instructors" }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-semibold transition-colors ${currentPage === item.id ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => openAuth("login")}
            className="text-sm font-bold text-slate-700 px-4 hover:text-indigo-600 transition-colors"
          >
            Đăng nhập
          </button>
          <button 
            onClick={() => openAuth("register-select")}
            className="bg-indigo-600 text-white text-sm font-bold h-11 px-6 rounded-full glow-btn"
          >
            Bắt đầu ngay
          </button>
        </div>
      </div>
    </nav>
  );
};
