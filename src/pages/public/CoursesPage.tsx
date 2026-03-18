import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, ChevronDown, BookOpen, Check, Sparkles } from "lucide-react";
import { useState, useMemo, Fragment } from "react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Listbox, Transition } from '@headlessui/react';

const ALL_COURSES = [
  { id: 1, title: "Lập trình Python cho AI", instructor: "Dr. Alex Rivera", rating: 4.9, reviews: 1240, duration: "24 giờ", students: 8500, price: "1.200.000đ", category: "AI & Data Science", level: "Cơ bản", image: "https://csc.edu.vn/data/images/tin-tuc/lap-trinh-csdl/kien-thuc-lap-trinh/lap-trinh-python-cho-nguoi-moi-bat-dau/lap-trinh-python-cho-nguoi-moi-bat-dau_png.png" },
  { id: 2, title: "UI/UX Design cho Mobile App", instructor: "Sarah Chen", rating: 4.9, reviews: 840, duration: "32 giờ", students: 5200, price: "1.500.000đ", category: "Design", level: "Trung cấp", image: "https://amela.vn/wp-content/uploads/2023/07/1.-Thiet-ke-UX_UI-la-gi_-.jpg" },
  { id: 3, title: "Mastering Large Language Models", instructor: "Michael Smith", rating: 4.8, reviews: 2100, duration: "40 giờ", students: 12000, price: "2.500.000đ", category: "AI & Data Science", level: "Nâng cao", image: "https://media.licdn.com/dms/image/v2/D5612AQELiz9P4VMUIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723273771853?e=2147483647&v=beta&t=p9f3bFiAzTToh3wDqgz0vcjICaMxXxuutMNLCfqha7o" },
  { id: 4, title: "Phát triển Web với React & Next.js", instructor: "David Miller", rating: 4.9, reviews: 1500, duration: "45 giờ", students: 9800, price: "2.000.000đ", category: "Web Development", level: "Trung cấp", image: "https://caodang.fpt.edu.vn/wp-content/uploads/2025/05/FPT-Polytechnic-HCM-2.png" },
  { id: 5, title: "Hệ quản trị Cơ sở dữ liệu PostgreSQL", instructor: "Lê Văn Thành", rating: 4.7, reviews: 560, duration: "30 giờ", students: 3100, price: "1.100.000đ", category: "Backend", level: "Cơ bản", image: "https://kb.pavietnam.vn/wp-content/uploads/2024/08/Screenshot-from-2024-08-10-15-29-10.png" },
  { id: 6, title: "DevOps với Docker & Kubernetes", instructor: "Trần Minh Hoàng", rating: 4.9, reviews: 980, duration: "50 giờ", students: 4200, price: "2.800.000đ", category: "DevOps", level: "Nâng cao", image: "https://techvccloud.mediacdn.vn/280518386289090560/2021/3/23/233a-16164716738771275604069.jpg" },
  { id: 7, title: "Lập trình Backend với Golang", instructor: "Nguyễn Vũ Long", rating: 4.8, reviews: 420, duration: "35 giờ", students: 2800, price: "1.850.000đ", category: "Backend", level: "Trung cấp", image: "https://interdata.vn/blog/wp-content/uploads/2025/05/Golang-la-gi.jpg" },
  { id: 8, title: "An toàn thông tin & Ethical Hacking", instructor: "Phạm Anh Khoa", rating: 4.9, reviews: 750, duration: "42 giờ", students: 1500, price: "3.200.000đ", category: "Cybersecurity", level: "Nâng cao", image: "https://whitehat.vn/attachments/audit_pentest-png.13647/" },
  { id: 9, title: "Xây dựng Microservices với Spring Boot", instructor: "Vũ Công Thành", rating: 4.7, reviews: 890, duration: "48 giờ", students: 6300, price: "2.100.000đ", category: "Backend", level: "Nâng cao", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUFZ9__o8AWQ7yPyqrFj9vNzAQuWvhhdwSge9_YraZdnh04mbGxXB0OCRl5-bEcU6lTbwb4eaXd6PfJAlZci6YFKR68asYj4XkVVKBbS47fQuuFlZjttowFAs60TImFUaydpwewyY3rJ3cghNbOgpqSwEwUU2pFI316Vt6gHXHJ43ViasA3hqGvTiLnSY/w640-h360/Microservices%20voi%20Spring%20Boot%203%20&%20Spring%20Cloud.png" },
  { id: 10, title: "Lập trình Mobile Flutter từ zero", instructor: "Bùi Tiến Dũng", rating: 4.8, reviews: 1100, duration: "40 giờ", students: 7200, price: "1.450.000đ", category: "Mobile App", level: "Cơ bản", image: "https://images.viblo.asia/30e0c4f0-6ee4-419c-abee-2e4b459989db.png" },
  { id: 11, title: "Cấu trúc dữ liệu & Giải thuật", instructor: "GS. Đặng Thái Sơn", rating: 4.9, reviews: 2300, duration: "60 giờ", students: 15000, price: "Miễn phí", category: "Computer Science", level: "Trung cấp", image: "https://s3-hfx03.fptcloud.com/codelearnstorage/files/thumbnails/cau-truc-du-lieu-va-giai-thuat_ef33392c074c4cd29a9892f11abbc2bc.png" },
  { id: 12, title: "Cloud Computing với AWS Cloud", instructor: "Lâm Nhật Minh", rating: 4.6, reviews: 340, duration: "38 giờ", students: 2100, price: "2.400.000đ", category: "Cloud", level: "Trung cấp", image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-9172-6" },
  { id: 13, title: "Lập trình C++ cho Hệ thống nhúng", instructor: "Hoàng Minh Đức", rating: 4.8, reviews: 210, duration: "45 giờ", students: 950, price: "1.900.000đ", category: "Embedded System", level: "Nâng cao", image: "https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/News/273/ngon-ngu-c-.jpg" },
  { id: 14, title: "Lập trình Game với Unity 3D", instructor: "Chu Ngọc Nam", rating: 4.7, reviews: 670, duration: "55 giờ", students: 4800, price: "1.700.000đ", category: "Game Dev", level: "Trung cấp", image: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/unity-la-gi-1.jpg" }
];

const priceOptions = ["Mức giá", "Miễn phí", "Có phí"];
const ratingOptions = [0, 4.5, 4.8];
const sortOptions = ["Mới nhất", "Học viên (Nhiều nhất)", "Đánh giá cao nhất"];
const priceRangeOptions = [
  { label: "Mọi mức giá", min: 0, max: Infinity },
  { label: "Dưới 1.000.000đ", min: 0, max: 1000000 },
  { label: "1.000.000đ - 2.000.000đ", min: 1000000, max: 2000000 },
  { label: "Trên 2.000.000đ", min: 2000000, max: Infinity }
];

interface CoursesPageProps {
  setCurrentPage: (page: string) => void;
  openAuth: (mode: "login" | "register-select" | "register-student") => void;
  onCourseClick: (course: any) => void;
}

export const CoursesPage = ({ setCurrentPage, openAuth, onCourseClick }: CoursesPageProps) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(ratingOptions[0]);
  const [currentPage, setPage] = useState(1);
  const itemsPerPage = 12;
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRangeOptions[0]);

  const categories = ["Tất cả", "AI & Data Science", "Web Development", "Backend", "DevOps", "Cybersecurity", "Computer Science", "Design"];

  const filteredCourses = useMemo(() => {
    let result = ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "Tất cả" || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = course.rating >= selectedRating;
      const numericPrice = course.price === "Miễn phí" ? 0 : parseInt(course.price.replace(/\./g, "").replace("đ", ""));
      const matchesPriceRange = numericPrice >= selectedPriceRange.min && numericPrice <= selectedPriceRange.max;
      return matchesCategory && matchesSearch && matchesRating && matchesPriceRange;
    });

    if (selectedSort === "Học viên (Nhiều nhất)") result.sort((a, b) => b.students - a.students);
    else if (selectedSort === "Đánh giá cao nhất") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, searchQuery, selectedRating, selectedPriceRange, selectedSort]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentItems = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const CustomDropdown = ({ options, value, onChange, label }: any) => (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="bg-white/80 backdrop-blur-md border border-blue-100 text-[13px] font-bold px-4 py-2.5 rounded-2xl text-slate-700 flex items-center justify-between gap-3 min-w-[170px] hover:border-blue-300 transition-all cursor-pointer shadow-sm">
          <span className="block whitespace-nowrap">{label(value)}</span>
          <ChevronDown size={16} className="text-blue-400 flex-shrink-0" />
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-2 max-h-60 w-max min-w-full overflow-auto rounded-2xl bg-white p-1.5 text-[13px] font-medium shadow-2xl shadow-blue-900/10 border border-blue-50 focus:outline-none z-50">
            {options.map((option: any, idx: number) => (
              <Listbox.Option
                key={idx}
                className={({ active }) => `relative cursor-pointer select-none py-2.5 px-4 rounded-xl transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}
                value={option}
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between gap-4">
                    <span className={`block whitespace-nowrap ${selected ? 'font-bold text-blue-600' : 'font-semibold'}`}>{label(option)}</span>
                    {selected && <Check size={14} className="text-blue-600 flex-shrink-0" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );

  return (
    <div className="min-h-screen mesh-gradient"> {/* Dùng mesh-gradient đồng bộ với Hero */}
      <Nav setCurrentPage={setCurrentPage} currentPage="courses" openAuth={openAuth} />

      <header className="pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-black uppercase tracking-wider mb-4 border border-blue-100">
                <Sparkles size={12} /> Tinh hoa tri thức
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Khám phá <span className="text-blue-600">Khóa học</span>
              </h1>
              <p className="text-[16px] font-medium text-slate-600 mt-3 max-w-lg">
                Hệ thống bài giảng thông minh trích xuất từ cộng đồng chuyên gia toàn cầu.
              </p>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                placeholder="Tìm nội dung bạn muốn học..."
                className="w-full pl-14 pr-6 py-4 bg-white/80 backdrop-blur-xl border border-blue-100 rounded-[24px] focus:border-blue-400 focus:ring-4 focus:ring-blue-400/5 outline-none text-sm font-medium shadow-lg transition-all"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 py-6 border-t border-blue-100/50">
            <div className="flex items-center gap-2 text-[11px] font-black text-blue-400 uppercase tracking-widest mr-2">
              <Filter size={14} /> Lọc theo:
            </div>
            <CustomDropdown options={priceRangeOptions} value={selectedPriceRange} onChange={(val: any) => { setSelectedPriceRange(val); setPage(1); }} label={(val: any) => val.label} />
            <CustomDropdown options={sortOptions} value={selectedSort} onChange={(val: string) => { setSelectedSort(val); setPage(1); }} label={(val: string) => val} />
            <CustomDropdown options={ratingOptions} value={selectedRating} onChange={(val: number) => { setSelectedRating(val); setPage(1); }} label={(val: number) => val === 0 ? "Tất cả đánh giá" : `Từ ${val} ★ trở lên`} />
          </div>
        </div>
      </header>

      <main className="pb-24 max-w-[1400px] max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="sticky top-28 space-y-2">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block px-4">Chủ đề chính</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
                className={`w-full text-left px-5 py-3.5 rounded-2xl text-[14px] font-bold transition-all duration-300 ${activeCategory === cat
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 -translate-y-0.5"
                  : "text-slate-500 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {currentItems.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  onClick={() => onCourseClick(course)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/70 backdrop-blur-sm rounded-[32px] border border-white/60 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group flex flex-col overflow-hidden cursor-pointer"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black uppercase rounded-xl shadow-sm border border-blue-50">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Star size={14} className="text-amber-400" fill="currentColor" />
                      <span className="text-[13px] font-black text-slate-800">{course.rating}</span>
                      <span className="text-slate-300 mx-1">|</span>
                      <span className="text-[12px] text-blue-500 font-bold">{course.students.toLocaleString()} học viên</span>
                    </div>

                    <h3 className="text-[17px] font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-[13px] font-medium text-slate-500 mb-3">{course.instructor}</p>

                    <div className="mt-auto pt-3 border-t border-blue-50/50 flex items-center justify-between">
                      <span className="text-[18px] text-xl font-black text-slate-950 tracking-tight">{course.price}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); openAuth("register-student"); }}
                        className="bg-blue-600 text-white px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95"
                      >
                        Vào học
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="mt-20 flex justify-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl text-sm font-black transition-all ${currentPage === i + 1
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/40 scale-110"
                    : "bg-white text-slate-400 border border-blue-50 hover:bg-blue-50"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};