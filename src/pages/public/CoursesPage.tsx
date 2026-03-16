import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, ChevronDown, BookOpen, Layers, Check } from "lucide-react";
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

const priceOptions = ["Mọi mức giá", "Miễn phí", "Có phí"];
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
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);
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

      // Chuyển đổi "1.200.000đ" -> 1200000 hoặc "Miễn phí" -> 0
      const numericPrice = course.price === "Miễn phí"
        ? 0
        : parseInt(course.price.replace(/\./g, "").replace("đ", ""));

      const matchesPriceRange = numericPrice >= selectedPriceRange.min && numericPrice <= selectedPriceRange.max;

      return matchesCategory && matchesSearch && matchesRating && matchesPriceRange;
    });

    // Logic Sắp xếp
    if (selectedSort === "Học viên (Nhiều nhất)") {
      result.sort((a, b) => b.students - a.students);
    } else if (selectedSort === "Đánh giá cao nhất") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, searchQuery, selectedRating, selectedPriceRange, selectedSort]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentItems = filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Custom Dropdown UI (Phần của 30% và 10%)
  const CustomDropdown = ({ options, value, onChange, label }: any) => (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        {/* - Thay min-w-[140px] bằng min-w-[160px] để có không gian tối thiểu tốt hơn
          - Thay px-4 bằng px-3 để tiết kiệm diện tích bề ngang
          - Bỏ truncate ở Button nếu bạn muốn hiển thị toàn bộ khoảng giá
      */}
        <Listbox.Button className="bg-white border border-slate-200 text-[12px] font-bold px-3 py-2 rounded-xl text-slate-700 flex items-center justify-between gap-2 min-w-[160px] hover:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all cursor-pointer shadow-sm">
          <span className="block whitespace-nowrap">{label(value)}</span>
          <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          {/* - Thêm w-max để dropdown list tự động rộng bằng item dài nhất 
            - Thêm min-w-full để đảm bảo nó không nhỏ hơn cái nút phía trên
        */}
          <Listbox.Options className="absolute mt-2 max-h-60 w-max min-w-full overflow-auto rounded-xl bg-white p-1 text-[13px] font-medium shadow-2xl shadow-slate-900/10 border border-slate-100 focus:outline-none z-50">
            {options.map((option: any, idx: number) => (
              <Listbox.Option
                key={idx}
                className={({ active }) => `relative cursor-pointer select-none py-2 px-3 rounded-lg transition-colors ${active ? 'bg-slate-50 text-brand-primary' : 'text-slate-600'}`}
                value={option}
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between gap-4">
                    <span className={`block whitespace-nowrap ${selected ? 'font-black' : 'font-bold'}`}>
                      {label(option)}
                    </span>
                    {selected && <Check size={14} className="text-brand-primary flex-shrink-0" />}
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
    <div className="min-h-screen bg-white"> {/* 60% Primary Color */}
      <Nav setCurrentPage={setCurrentPage} currentPage="courses" openAuth={openAuth} />

      <header className="pt-28 pb-8 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 flex-shrink-0">
                <BookOpen size={24} /> {/* 10% Accent */}
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">Khám phá khóa học</h1>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Tri thức số đồng hành cùng bạn</p>
              </div>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                placeholder="Tìm nội dung học tập..."
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none text-sm shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 py-4 border-t border-dashed border-slate-200">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">
              <Filter size={12} /> Bộ lọc:
            </div>

            <CustomDropdown
              options={priceRangeOptions}
              value={selectedPriceRange}
              onChange={(val: any) => { setSelectedPriceRange(val); setPage(1); }}
              label={(val: any) => val.label}
            />

            <CustomDropdown
              options={sortOptions}
              value={selectedSort}
              onChange={(val: string) => { setSelectedSort(val); setPage(1); }}
              label={(val: string) => val}
            />

            <CustomDropdown
              options={ratingOptions}
              value={selectedRating}
              onChange={(val: number) => { setSelectedRating(val); setPage(1); }}
              label={(val: number) => val === 0 ? "Tất cả đánh giá" : `Từ ${val} ★ trở lên`}
            />

            <div className="ml-auto text-[11px] font-black text-slate-300 italic hidden sm:block uppercase tracking-tighter">
              Tìm thấy {filteredCourses.length} kết quả phù hợp
            </div>
          </div>
        </div>
      </header>

      <main className="py-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Danh mục */}
        <aside className="w-full lg:w-48 flex-shrink-0">
          <div className="sticky top-24">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-5 block px-2">
              Danh mục
            </span>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 group ${activeCategory === cat
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-x-1"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    {cat}
                    {/* Thêm một chấm nhỏ màu Brand để giữ nhận diện 10% */}
                    {activeCategory === cat && (
                      <span className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"> {/* 30% Content Structure */}
            <AnimatePresence mode="popLayout">
              {currentItems.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  onClick={() => onCourseClick(course)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all group flex flex-col overflow-hidden"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black uppercase rounded-lg shadow-sm border border-white/20">
                      {course.category}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={10} className="text-amber-400" fill="currentColor" />
                      <span className="text-[11px] font-black text-slate-900">{course.rating}</span>
                      <span className="text-[10px] text-slate-400 font-bold ml-1 tracking-tighter">({course.reviews})</span>

                      {/* Thêm số lượng học viên ở đây */}
                      <span className="mx-2 text-slate-200">|</span>
                      <span className="text-[10px] text-brand-primary font-bold">{course.students.toLocaleString()} học viên</span>
                    </div>

                    <h3 className="text-[14px] font-bold text-slate-900 mb-1 line-clamp-2 leading-snug h-10 group-hover:text-brand-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 mb-5">{course.instructor}</p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[15px] font-black text-slate-900 tracking-tighter">{course.price}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Không cho nhảy vào trang chi tiết khi ấn nút này
                          openAuth("register-student");
                        }}
                        className="text-brand-primary text-[11px] font-black uppercase hover:underline tracking-widest"
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
            <div className="mt-16 flex justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${currentPage === i + 1
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
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