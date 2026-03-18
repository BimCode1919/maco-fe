import { useDeferredValue, useEffect, useMemo, useState, Fragment } from "react";
import { Star, Filter, ChevronDown, Check } from "lucide-react";
import { Listbox, Transition } from '@headlessui/react';
import { Footer } from "../../../components/Footer";

export const ALL_COURSES = [
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
  { id: 14, title: "Lập trình Game với Unity 3D", instructor: "Chu Ngọc Nam", rating: 4.7, reviews: 670, duration: "55 giờ", students: 4800, price: "1.700.000đ", category: "Game Dev", level: "Trung cấp", image: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/03/unity-la-gi-1.jpg" },
  // Thêm dữ liệu mẫu theo yêu cầu
  { id: 15, title: "Xây dựng SPA với Next.js", instructor: "Hoàng Quốc Huy", rating: 4.8, reviews: 920, duration: "38 giờ", students: 6200, price: "2.100.000đ", category: "Web Development", level: "Trung cấp", image: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg" },
  { id: 16, title: "Thiết kế UI hiện đại với Tailwind CSS", instructor: "Nguyễn Thị Phương", rating: 4.7, reviews: 780, duration: "34 giờ", students: 5400, price: "1.350.000đ", category: "Web Development", level: "Cơ bản", image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" },
  { id: 17, title: "Tối ưu hiệu năng Web với Vite & React", instructor: "Trần Văn Nam", rating: 4.9, reviews: 1010, duration: "42 giờ", students: 6800, price: "2.200.000đ", category: "Web Development", level: "Nâng cao", image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg" },

  { id: 18, title: "DevOps thực chiến với GitHub Actions", instructor: "Lê Minh Anh", rating: 4.8, reviews: 630, duration: "36 giờ", students: 3200, price: "1.900.000đ", category: "DevOps", level: "Trung cấp", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" },

  { id: 19, title: "Cybersecurity căn bản cho lập trình viên", instructor: "Phạm Văn Đức", rating: 4.7, reviews: 520, duration: "30 giờ", students: 2900, price: "1.250.000đ", category: "Cybersecurity", level: "Cơ bản", image: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg" },
  { id: 20, title: "Ethical Hacking nâng cao", instructor: "Trịnh Thị Hạnh", rating: 4.9, reviews: 660, duration: "45 giờ", students: 3700, price: "2.900.000đ", category: "Cybersecurity", level: "Nâng cao", image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg" },

  { id: 21, title: "Thiết kế đồ họa với Figma", instructor: "Lê Thuỳ Linh", rating: 4.8, reviews: 850, duration: "28 giờ", students: 4300, price: "1.500.000đ", category: "Design", level: "Cơ bản", image: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg" },
  { id: 22, title: "Motion Design cơ bản với After Effects", instructor: "Nguyễn Minh Phúc", rating: 4.7, reviews: 720, duration: "35 giờ", students: 3900, price: "1.750.000đ", category: "Design", level: "Trung cấp", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" },
  { id: 23, title: "Thiết kế thương hiệu chuyên nghiệp", instructor: "Võ Thị Lan", rating: 4.9, reviews: 640, duration: "32 giờ", students: 4100, price: "2.000.000đ", category: "Design", level: "Nâng cao", image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" },

  { id: 24, title: "Lập trình Mobile React Native từ cơ bản đến nâng cao", instructor: "Trần Quốc Tuấn", rating: 4.8, reviews: 970, duration: "42 giờ", students: 6300, price: "1.800.000đ", category: "Mobile App", level: "Trung cấp", image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg" },
  { id: 25, title: "Xây dựng App Flutter UI đẹp", instructor: "Đặng Thu Hà", rating: 4.7, reviews: 880, duration: "38 giờ", students: 6000, price: "1.650.000đ", category: "Mobile App", level: "Cơ bản", image: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg" },
  { id: 26, title: "Build iOS/Android với Kotlin Multiplatform", instructor: "Nguyễn Văn Quang", rating: 4.8, reviews: 760, duration: "44 giờ", students: 5500, price: "2.300.000đ", category: "Mobile App", level: "Nâng cao", image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg" }
];

interface AllCoursesProps {
  searchQuery: string;
  onCourseClick: (course: any) => void;
  onSelectPlan?: () => void;
}

const categories = ["Tất cả", "AI & Data Science", "Web Development", "Backend", "Frontend", "DevOps", "Cybersecurity", "Design", "Mobile App"];
const priceRanges = [
  { label: "Mức giá", min: 0, max: Infinity },
  { label: "Miễn phí", min: 0, max: 0 },
  { label: "Dưới 1.500.000đ", min: 0, max: 1500000 },
  { label: "1.500.000đ - 2.500.000đ", min: 1500000, max: 2500000 },
  { label: "Trên 2.500.000đ", min: 2500000, max: Infinity }
];

const pricingTiers = [
  { name: "Gói Basic", price: "Miễn phí", features: ["Truy cập khóa học cơ bản", "Cộng đồng học tập", "Chứng chỉ tham gia"], color: "bg-slate-50" },
  { name: "Gói Pro", price: "499.000đ/tháng", features: ["Tất cả khóa học cao cấp", "Hỗ trợ AI 24/7", "Tư vấn cá nhân hóa", "Chứng chỉ chuyên nghiệp"], color: "bg-indigo-50", popular: true },
  { name: "Gói Enterprise", price: "Liên hệ", features: ["Custom learning path", "Mentor riêng", "Hỗ trợ doanh nghiệp", "Giấy phép doanh nghiệp"], color: "bg-slate-900 text-white" }
];

export const AllCourses = ({ searchQuery, onCourseClick, onSelectPlan }: AllCoursesProps) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [selectedRating, setSelectedRating] = useState(0);

  const deferredSearchQuery = useDeferredValue(searchQuery);
  const query = deferredSearchQuery.toLowerCase().trim();
  const isSearching = query.length > 0;

  const isFiltering = activeCategory !== "Tất cả" || selectedRating !== 0 || selectedPriceRange.label !== "Mức giá";
  const showFiltered = isSearching || isFiltering;

  const [contentVisible, setContentVisible] = useState(true);
  const contentTransitionClass = `transition-opacity duration-200 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`;

  useEffect(() => {
    setContentVisible(false);
    const timeoutId = window.setTimeout(() => setContentVisible(true), 80);
    return () => window.clearTimeout(timeoutId);
  }, [deferredSearchQuery, activeCategory, selectedRating, selectedPriceRange]);

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch =
        query.length === 0 ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);
      const matchesCategory = activeCategory === "Tất cả" || course.category === activeCategory;
      const matchesRating = course.rating >= selectedRating;

      const numericPrice = course.price === "Miễn phí"
        ? 0
        : parseInt(course.price.replace(/\./g, "").replace("đ", ""));

      const matchesPrice = numericPrice >= selectedPriceRange.min && numericPrice <= selectedPriceRange.max;

      return matchesSearch && matchesCategory && matchesRating && matchesPrice;
    });
  }, [query, activeCategory, selectedRating, selectedPriceRange]);

  // Khóa học nổi bật (top 4 courses)
  const featuredCourses = useMemo(() => {
    return ALL_COURSES.filter(c => c.rating >= 4.8).slice(0, 4);
  }, []);

  // Group courses by category
  const coursesByCategory = useMemo(() => {
    const grouped: { [key: string]: any[] } = {};
    categories.slice(1).forEach(cat => {
      grouped[cat] = ALL_COURSES.filter(c => c.category === cat).slice(0, 4);
    });
    return grouped;
  }, []);

  const CustomDropdown = ({ options, value, onChange, label }: any) => (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="bg-white border border-slate-200 text-[12px] font-bold px-3 py-2 rounded-xl text-slate-700 flex items-center justify-between gap-2 min-w-[160px] hover:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-colors duration-200 cursor-pointer shadow-sm">
          <span className="block truncate">{label(value)}</span>
          <ChevronDown size={14} className="text-slate-400 flex-shrink-0" />
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-2 max-h-60 w-max min-w-full overflow-auto rounded-xl bg-white p-1 text-[13px] font-medium shadow-2xl shadow-slate-900/10 border border-slate-100 focus:outline-none z-50">
            {options.map((option: any, idx: number) => (
              <Listbox.Option
                key={idx}
                className={({ active }) => `relative cursor-pointer select-none py-2 px-3 rounded-lg transition-colors ${active ? 'bg-slate-50 text-indigo-600' : 'text-slate-600'}`}
                value={option}
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between gap-4">
                    <span className={`block truncate ${selected ? 'font-black' : 'font-bold'}`}>
                      {label(option)}
                    </span>
                    {selected && <Check size={14} className="text-indigo-600 flex-shrink-0" />}
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black mb-4 tracking-tight">Khám phá Kho Khóa Học</h1>
          <p className="text-slate-400 font-medium">Hơn 14 khóa học từ các lĩnh vực công nghệ tiên tiến, được giảng viên hàng đầu thiết kế</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <Filter size={14} /> Lọc:
          </div>

          <CustomDropdown
            options={categories}
            value={activeCategory}
            onChange={setActiveCategory}
            label={(val: string) => val}
          />

          <CustomDropdown
            options={priceRanges}
            value={selectedPriceRange}
            onChange={setSelectedPriceRange}
            label={(val: any) => val.label}
          />

          <CustomDropdown
            options={[0, 4.5, 4.8]}
            value={selectedRating}
            onChange={setSelectedRating}
            label={(val: number) => val === 0 ? "Tất cả đánh giá" : `Từ ${val} ★ trở lên`}
          />

          <div className="ml-auto text-[11px] font-black text-slate-400 italic uppercase tracking-tighter">
            {filteredCourses.length} khóa học
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-20">

{/* Search / Filter Results */}
      {showFiltered ? (
        <section>
          <h2 className="text-3xl font-black mb-8 text-slate-900">
            {isSearching ? `Kết quả tìm kiếm: "${query}"` : "Kết quả lọc"}
          </h2>
          {filteredCourses.length > 0 ? (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${contentTransitionClass}`}>
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => onCourseClick(course)}
                    className="bg-white rounded-2xl border border-slate-100 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-200/30 transition-colors transition-shadow duration-200 group flex flex-col overflow-hidden cursor-pointer p-4"
                  >
                    <div className="aspect-video relative overflow-hidden bg-slate-100 rounded-xl mb-4">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-slate-500 mb-3">{course.instructor}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                      <span className="text-sm font-black text-slate-900">{course.price}</span>
                      <button onClick={(e) => { e.stopPropagation(); onCourseClick(course); }} className="text-xs text-indigo-600 font-black">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              Không tìm thấy khóa học phù hợp.
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Featured Courses */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-slate-900">✨ Khóa Học Nổi Bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onCourseClick(course)}
                  className="bg-white rounded-2xl border border-indigo-200 shadow-xl shadow-indigo-100/50 hover:shadow-2xl hover:shadow-indigo-200 transition-shadow duration-200 group flex flex-col overflow-hidden cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-indigo-600 text-white text-[9px] font-black uppercase rounded-lg shadow-sm">
                      ⭐ Nổi bật
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={10} className="text-amber-400" fill="currentColor" />
                      <span className="text-[11px] font-black text-slate-900">{course.rating}</span>
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-900 mb-1 line-clamp-2">{course.title}</h3>
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[15px] font-black text-slate-900">{course.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Courses by Category */}
          {Object.entries(coursesByCategory).map(([category, courses]: [string, any[]]) => (
            courses.length > 0 && (
              <section key={category}>
                <h2 className="text-3xl font-black mb-8 text-slate-900 flex items-center gap-3">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full" />
                  {category}
                </h2>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${contentTransitionClass}`}>
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        onClick={() => onCourseClick(course)}
                        className="bg-white rounded-2xl border border-slate-100 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-200/30 transition-colors transition-shadow duration-200 group flex flex-col overflow-hidden cursor-pointer"
                      >
                        <div className="aspect-video relative overflow-hidden bg-slate-100">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                          <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black uppercase rounded-lg shadow-sm border border-white/20">
                            {course.category}
                          </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center gap-1 mb-2">
                            <Star size={10} className="text-amber-400" fill="currentColor" />
                            <span className="text-[11px] font-black text-slate-900">{course.rating}</span>
                            <span className="text-[10px] text-slate-400 font-bold ml-1">({course.reviews})</span>
                          </div>
                          <h3 className="text-[14px] font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-indigo-600">{course.title}</h3>
                          <p className="text-[11px] font-bold text-slate-400 mb-5">{course.instructor}</p>
                          <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-[15px] font-black text-slate-900">{course.price}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onCourseClick(course);
                              }}
                              className="text-indigo-600 text-[11px] font-black uppercase hover:underline"
                            >
                              Chi tiết
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            )
          ))}
        </>
      )}

        {/* Pricing Tiers Section */}
        <section className="bg-slate-50 p-8 md:p-16 rounded-[40px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">💎 Chọn Gói Dịch Vụ Phù Hợp</h2>
            <p className="text-slate-600 font-medium">Mở khóa toàn bộ tiềm năng học tập của bạn</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border-2 ${
                  tier.popular
                    ? "border-indigo-600 bg-white shadow-2xl shadow-indigo-200 scale-105"
                    : `${tier.color} border-slate-200`
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-black rounded-full whitespace-nowrap">
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </div>
                )}
                <h3 className={`text-2xl font-black mb-2 ${tier.color === "bg-slate-900 text-white" ? "text-white" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <div className={`text-4xl font-black mb-6 ${tier.color === "bg-slate-900 text-white" ? "text-white" : "text-indigo-600"}`}>
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-center gap-3 ${tier.color === "bg-slate-900 text-white" ? "text-white" : "text-slate-700"}`}>
                      <Check size={18} className={tier.color === "bg-slate-900 text-white" ? "text-white" : "text-indigo-600"} />
                      <span className="font-bold text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onSelectPlan}
                  className={`w-full py-3 rounded-2xl font-black text-sm transition-colors duration-200 ${
                    tier.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : tier.color === "bg-slate-900 text-white"
                      ? "bg-white text-slate-900 hover:bg-slate-50"
                      : "bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-600"
                  }`}
                >
                  Chọn Gói
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Search Results */}
        {activeCategory !== "Tất cả" && (
          <section>
            <h2 className="text-3xl font-black mb-8 text-slate-900">Tìm kiếm: {searchQuery || activeCategory}</h2>
            {filteredCourses.length > 0 ? (
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${contentTransitionClass}`}>
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      onClick={() => onCourseClick(course)}
                      className="bg-white rounded-2xl border border-slate-100 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-200/30 transition-colors transition-shadow duration-200 group flex flex-col overflow-hidden cursor-pointer p-4"
                    >
                      <div className="aspect-video relative overflow-hidden bg-slate-100 rounded-xl mb-4">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-xs text-slate-500 mb-3">{course.instructor}</p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                        <span className="text-sm font-black text-slate-900">{course.price}</span>
                        <button onClick={(e) => { e.stopPropagation(); onCourseClick(course); }} className="text-xs text-indigo-600 font-black">
                          Chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                Không tìm thấy khóa học phù hợp.
              </div>
            )}
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
