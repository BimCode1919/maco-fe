import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

// Dữ liệu giữ nguyên như cũ, chỉ liệt kê biến để code chạy được
const ALL_COURSES = [
  { id: 1, title: "Lập trình Python cho AI", instructor: "Dr. Alex Rivera", rating: 4.9, reviews: 1240, duration: "24 giờ", students: 8500, price: "1.200.000đ", category: "AI & Data Science", level: "Cơ bản", image: "https://csc.edu.vn/data/images/tin-tuc/lap-trinh-csdl/kien-thuc-lap-trinh/lap-trinh-python-cho-nguoi-moi-bat-dau/lap-trinh-python-cho-nguoi-moi-bat-dau_png.png" },
  { id: 2, title: "UI/UX Design cho Mobile App", instructor: "Sarah Chen", rating: 4.9, reviews: 840, duration: "32 giờ", students: 5200, price: "1.500.000đ", category: "Design", level: "Trung cấp", image: "https://amela.vn/wp-content/uploads/2023/07/1.-Thiet-ke-UX_UI-la-gi_-.jpg" },
  { id: 3, title: "Mastering Large Language Models", instructor: "Michael Smith", rating: 4.8, reviews: 2100, duration: "40 giờ", students: 12000, price: "2.500.000đ", category: "AI & Data Science", level: "Nâng cao", image: "https://media.licdn.com/dms/image/v2/D5612AQELiz9P4VMUIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723273771853?e=2147483647&v=beta&t=p9f3bFiAzTToh3wDqgz0vcjICaMxXxuutMNLCfqha7o" },
  { id: 4, title: "Phát triển Web với React & Next.js", instructor: "David Miller", rating: 4.9, reviews: 1500, duration: "45 giờ", students: 9800, price: "2.000.000đ", category: "Web Development", level: "Trung cấp", image: "https://caodang.fpt.edu.vn/wp-content/uploads/2025/05/FPT-Polytechnic-HCM-2.png" },
  { id: 5, title: "Hệ quản trị Cơ sở dữ liệu PostgreSQL", instructor: "Lê Văn Thành", rating: 4.7, reviews: 560, duration: "30 giờ", students: 3100, price: "1.100.000đ", category: "Backend", level: "Cơ bản", image: "https://kb.pavietnam.vn/wp-content/uploads/2024/08/Screenshot-from-2024-08-10-15-29-10.png" },
  { id: 6, title: "DevOps với Docker & Kubernetes", instructor: "Trần Minh Hoàng", rating: 4.9, reviews: 980, duration: "50 giờ", students: 4200, price: "2.800.000đ", category: "DevOps", level: "Nâng cao", image: "https://techvccloud.mediacdn.vn/280518386289090560/2021/3/23/233a-16164716738771275604069.jpg" },
  { id: 7, title: "Lập trình Backend với Golang", instructor: "Nguyễn Vũ Long", rating: 4.8, reviews: 420, duration: "35 giờ", students: 2800, price: "1.850.000đ", category: "Backend", level: "Trung cấp", image: "https://interdata.vn/blog/wp-content/uploads/2025/05/Golang-la-gi.jpg" },
  { id: 8, title: "An toàn thông tin & Ethical Hacking", instructor: "Phạm Anh Khoa", rating: 4.9, reviews: 750, duration: "42 giờ", students: 1500, price: "3.200.000đ", category: "Cybersecurity", level: "Nâng cao", image: "https://whitehat.vn/attachments/audit_pentest-png.13647/" },
  { id: 9, title: "Xây dựng Microservices với Spring Boot", instructor: "Vũ Công Thành", rating: 4.7, reviews: 890, duration: "48 giờ", students: 6300, price: "2.100.000đ", category: "Backend", level: "Nâng cao", image: "https://topdev.vn/blog/wp-content/uploads/2017/10/microservices1.png" },
  { id: 10, title: "Lập trình Mobile Flutter từ zero", instructor: "Bùi Tiến Dũng", rating: 4.8, reviews: 1100, duration: "40 giờ", students: 7200, price: "1.450.000đ", category: "Mobile App", level: "Cơ bản", image: "https://images.viblo.asia/30e0c4f0-6ee4-419c-abee-2e4b459989db.png" },
  { id: 11, title: "Cấu trúc dữ liệu & Giải thuật", instructor: "GS. Đặng Thái Sơn", rating: 4.9, reviews: 2300, duration: "60 giờ", students: 15000, price: "Miễn phí", category: "Computer Science", level: "Trung cấp", image: "https://s3-hfx03.fptcloud.com/codelearnstorage/files/thumbnails/cau-truc-du-lieu-va-giai-thuat_ef33392c074c4cd29a9892f11abbc2bc.png" },
  { id: 12, title: "Cloud Computing với AWS Cloud", instructor: "Lâm Nhật Minh", rating: 4.6, reviews: 340, duration: "38 giờ", students: 2100, price: "2.400.000đ", category: "Cloud", level: "Trung cấp", image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-9172-6" },
  { id: 13, title: "Lập trình C++ cho Hệ thống nhúng", instructor: "Hoàng Minh Đức", rating: 4.8, reviews: 210, duration: "45 giờ", students: 950, price: "1.900.000đ", category: "Embedded System", level: "Nâng cao", image: "https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/News/273/ngon-ngu-c-.jpg" },
  { id: 14, title: "Lập trình Game với Unity 3D", instructor: "Chu Ngọc Nam", rating: 4.7, reviews: 670, duration: "55 giờ", students: 4800, price: "1.700.000đ", category: "Game Dev", level: "Trung cấp", image: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/unity-la-gi-1.jpg" }
];

interface CoursesPageProps {
  setCurrentPage: (page: string) => void;
  openAuth: (mode: "login" | "register-select" | "register-student") => void;
}

export const CoursesPage = ({ setCurrentPage, openAuth }: CoursesPageProps) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["Tất cả", "AI & Data Science", "Web Development", "Backend", "DevOps", "Cybersecurity", "Mobile App", "Computer Science"];

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "Tất cả" || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentItems = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Hiệu ứng Fade-in tuần tự (Stagger)
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav setCurrentPage={setCurrentPage} currentPage="courses" openAuth={openAuth} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl font-black text-slate-900 mb-6"
          >
            Hệ thống <span className="text-indigo-600">Khóa học IT</span>
          </motion.h1>
          <div className="relative max-w-xl mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Tìm kiếm khóa học..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Filter size={14} /> Danh mục
              </h3>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${activeCategory === cat ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Grid Area */}
          <div className="flex-1">
            <div className="mb-8 font-bold text-slate-500">
              Tìm thấy <span className="text-indigo-600">{filteredCourses.length}</span> kết quả
            </div>

            {/* Chiều cao tối thiểu cực kỳ quan trọng để chống giật trang */}
            <div className="min-h-[800px]">
              <motion.div
                key={`${activeCategory}-${currentPage}`} // Key thay đổi để trigger animation container mới
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {currentItems.map((course) => (
                    <motion.div
                      key={course.id}
                      layout // Giúp các card còn lại trượt mượt khi có card mất đi
                      variants={cardVariants}
                      className="bg-white rounded-32 border border-slate-100 shadow-sm overflow-hidden group flex flex-col h-full"
                    >
                      <div className="aspect-video relative overflow-hidden bg-slate-200">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-indigo-600 uppercase">{course.category}</span>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={14} className="text-amber-400" fill="currentColor" />
                          <span className="text-sm font-black text-slate-900">{course.rating}</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">{course.title}</h3>
                        <p className="text-sm font-bold text-slate-500 mb-6">{course.instructor}</p>
                        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                          <span className="text-2xl font-black text-slate-900">{course.price}</span>
                          <button onClick={() => openAuth("register-student")} className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all active:scale-95">Tham gia</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => { setPage(p => p - 1); }}
                  className="p-3 rounded-xl border-2 border-slate-100 disabled:opacity-20 hover:border-indigo-600 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPage(i + 1); }}
                    className={`w-12 h-12 rounded-xl font-black transition-all ${currentPage === i + 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-slate-50 text-slate-600 hover:bg-slate-200"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => { setPage(p => p + 1); }}
                  className="p-3 rounded-xl border-2 border-slate-100 disabled:opacity-20 hover:border-indigo-600 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};