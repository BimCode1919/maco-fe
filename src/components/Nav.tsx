import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  openAuth: (mode: "login" | "register-select") => void;
}

export const Nav = ({ setCurrentPage, currentPage, openAuth }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Thêm "Liên hệ" vào danh sách (dùng id khác biệt để bắt sự kiện)
  const menuItems = [
    { name: "Trang chủ", id: "home" },
    { name: "Khóa học", id: "courses" },
    { name: "Giảng viên", id: "instructors" },
    { name: "Liên hệ", id: "contact-scroll" } // ID đặc biệt để cuộn
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Hàm xử lý cuộn xuống Footer
  const scrollToFooter = () => {
    const footer = document.querySelector("footer"); // Hoặc dùng ID: document.getElementById('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    // 3. Kiểm tra nếu là nút liên hệ thì scroll, ngược lại thì chuyển page
    if (id === "contact-scroll") {
      scrollToFooter();
    } else {
      setCurrentPage(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white shadow-sm py-3" : "bg-transparent py-6"
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick("home")}>
            <Logo />
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group relative py-2 outline-none"
              >
                <span className={`text-[15px] font-bold transition-all duration-200 ${currentPage === item.id ? "text-brand-primary" : "text-slate-900"
                  }`}>
                  {item.name}
                </span>
                <span className={`absolute bottom-0 left-0 h-[3px] bg-brand-primary rounded-full transition-all duration-300 ${currentPage === item.id ? "w-full opacity-100" : "w-full opacity-0 scale-x-75 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openAuth("register-select")}
              className="hidden sm:block bg-brand-primary text-white text-[14px] md:text-[15px] font-bold h-10 md:h-11 px-5 md:px-7 rounded-full shadow-lg shadow-blue-500/20"
            >
              Bắt đầu ngay
            </button>

            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-x-0 top-[70px] bg-white border-t border-slate-100 transition-all duration-300 shadow-xl overflow-hidden ${isMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-3 px-4 rounded-xl font-bold text-lg ${currentPage === item.id ? "bg-blue-50 text-brand-primary" : "text-slate-600"
                  }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => { openAuth("register-select"); setIsMenuOpen(false); }}
              className="sm:hidden w-full bg-brand-primary text-white font-bold py-4 rounded-xl mt-2"
            >
              Bắt đầu ngay
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-[90] backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};