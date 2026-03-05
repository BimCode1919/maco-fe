import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle2,
  Linkedin,
  Github
} from "lucide-react";
import { useState, useMemo } from "react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

// --- Dữ liệu Giảng viên (Seed Data) ---
const ALL_INSTRUCTORS = [
  {
    id: 1,
    name: "TS. Nguyễn Minh Đức",
    role: "Senior Security Architect",
    specialty: "Cybersecurity",
    rating: 4.9,
    students: 12500,
    coursesCount: 12,
    achievement: "Cố vấn an ninh mạng cấp cao, 15 năm kinh nghiệm",
    image: "https://img.freepik.com/free-photo/portrait-professional-businessman-working-laptop-office_23-2149126949.jpg",
    bio: "Tiến sĩ Đức có hơn 15 năm nghiên cứu về bảo mật hệ thống và mật mã học. Ông từng dẫn dắt các dự án bảo mật cho các ngân hàng lớn.",
    skills: ["Ethical Hacking", "Network Security", "ISO 27001", "Cryptography"],
    social: { linkedin: "#", github: "#" }
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Google Developer Expert",
    specialty: "AI & Data Science",
    rating: 5.0,
    students: 24000,
    coursesCount: 8,
    achievement: "Tác giả của 3 thư viện Machine Learning nổi tiếng",
    image: "https://img.freepik.com/free-photo/happy-confident-businessman-smiling-camera_23-2148119106.jpg",
    bio: "Chuyên gia AI tại Google với đam mê đơn giản hóa các khái niệm toán học phức tạp cho lập trình viên.",
    skills: ["Python", "TensorFlow", "PyTorch", "LLMs"],
    social: { linkedin: "#", github: "#" }
  },
  {
    id: 3,
    name: "Lê Hồng Sơn",
    role: "DevOps Tech Lead @ AWS",
    specialty: "DevOps",
    rating: 4.8,
    students: 8900,
    coursesCount: 15,
    achievement: "Certified AWS Solutions Architect Professional",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-looks-thoughtfully_273609-15121.jpg",
    bio: "Sơn chuyên về tự động hóa hạ tầng và tối ưu hóa chi phí Cloud cho các hệ thống quy mô triệu người dùng.",
    skills: ["Docker", "Kubernetes", "Terraform", "Jenkins"],
    social: { linkedin: "#", github: "#" }
  },
  {
    id: 4,
    name: "Trần Thu Thủy",
    role: "Senior Frontend Engineer",
    specialty: "Frontend",
    rating: 4.9,
    students: 15600,
    coursesCount: 10,
    achievement: "Diễn giả tại React Conf Châu Á 2023",
    image: "https://img.freepik.com/free-photo/portrait-successful-business-woman-modern-office_23-2148821813.jpg",
    bio: "Thủy có khả năng kết hợp giữa tư duy thiết kế và kỹ thuật lập trình React tinh tế.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    social: { linkedin: "#", github: "#" }
  },
  {
    id: 5,
    name: "Phạm Thành Nam",
    role: "Software Architect",
    specialty: "Backend",
    rating: 4.7,
    students: 11000,
    coursesCount: 9,
    achievement: "Chuyên gia hệ thống Microservices tại Silicon Valley",
    image: "https://img.freepik.com/free-photo/handsome-young-businessman-suit-glasses_273609-7159.jpg",
    bio: "Với 10 năm làm việc tại Mỹ, Nam mang đến những kiến thức thực chiến về Java Spring Boot và Go.",
    skills: ["Java", "Go", "Microservices", "PostgreSQL"],
    social: { linkedin: "#", github: "#" }
  },
  {
    id: 6,
    name: "Vũ Hải Đăng",
    role: "Fullstack Developer & Mentor",
    specialty: "Mobile App",
    rating: 4.9,
    students: 7200,
    coursesCount: 6,
    achievement: "Top 10 lập trình viên xuất sắc tại Hackathon Global",
    image: "https://img.freepik.com/free-photo/confident-businessman-posing-outside_23-2148974390.jpg",
    bio: "Đăng tập trung vào việc xây dựng ứng dụng di động hiệu năng cao với Flutter và React Native.",
    skills: ["Flutter", "React Native", "Firebase", "Node.js"],
    social: { linkedin: "#", github: "#" }
  }
];

interface InstructorsPageProps {
  setCurrentPage: (page: string) => void;
  openAuth: (mode: "login" | "register-select") => void;
}

export const InstructorsPage = ({ setCurrentPage, openAuth }: InstructorsPageProps) => {
  const [activeSpecialty, setActiveSpecialty] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInstractor, setSelectedInstructor] = useState<typeof ALL_INSTRUCTORS[0] | null>(null);
  const [currentPage, setPage] = useState(1);
  const itemsPerPage = 4;

  const specialties = ["Tất cả", "AI & Data Science", "Cybersecurity", "DevOps", "Frontend", "Backend", "Mobile App"];

  const filteredData = useMemo(() => {
    return ALL_INSTRUCTORS.filter(ins => {
      const matchesSpec = activeSpecialty === "Tất cả" || ins.specialty === activeSpecialty;
      const matchesSearch = ins.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            ins.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSpec && matchesSearch;
    });
  }, [activeSpecialty, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav setCurrentPage={setCurrentPage} currentPage="instructors" openAuth={openAuth} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 mb-6"
          >
            Đội ngũ <span className="text-indigo-600">Giảng viên Expert</span>
          </motion.h1>
          <p className="text-slate-500 font-bold text-lg max-w-2xl mb-8">
            Học hỏi từ những chuyên gia hàng đầu đang làm việc tại các tập đoàn công nghệ lớn.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Tìm tên giảng viên hoặc vị trí công tác..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-600 outline-none shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Filter size={14} /> Chuyên môn hẹp
                </h3>
                <div className="flex flex-col gap-2">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => { setActiveSpecialty(spec); setPage(1); }}
                      className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                        activeSpecialty === spec ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid Area */}
          <div className="flex-1">
            <div className="min-h-[600px]">
              <motion.div 
                key={`${activeSpecialty}-${currentPage}`}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {currentItems.map((ins) => (
                    <motion.div
                      key={ins.id}
                      layout
                      variants={cardVariants}
                      onClick={() => setSelectedInstructor(ins)}
                      className="bg-white rounded-32 border border-slate-100 p-6 flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all cursor-pointer group"
                    >
                      <div className="flex gap-6 mb-6">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-slate-50">
                          <img src={ins.image} alt={ins.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[10px] font-black uppercase tracking-wider">
                            {ins.specialty}
                          </span>
                          <h3 className="text-xl font-black text-slate-900 mt-2">{ins.name}</h3>
                          <p className="text-sm font-bold text-slate-500">{ins.role}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6 flex-1">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                          <Award size={16} className="text-indigo-600" />
                          <span className="line-clamp-1">{ins.achievement}</span>
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-amber-400" fill="currentColor" />
                            <span className="text-xs font-black">{ins.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-400">
                            <Users size={14} />
                            <span className="text-xs font-bold">{ins.students.toLocaleString()} HV</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        Xem hồ sơ chi tiết
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Pagination (Tương tự trang courses) */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                 {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-10 h-10 rounded-lg font-black transition-all ${
                      currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- Instructor Modal Popup --- */}
      <AnimatePresence>
        {selectedInstractor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInstructor(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-32 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-32 overflow-hidden shadow-xl">
                    <img src={selectedInstractor.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-black uppercase tracking-widest">
                      {selectedInstractor.specialty}
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 mt-4">{selectedInstractor.name}</h2>
                    <p className="text-lg font-bold text-indigo-600">{selectedInstractor.role}</p>
                    <div className="flex gap-4 mt-4">
                      <button className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-indigo-600 transition-colors"><Linkedin size={20}/></button>
                      <button className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-indigo-600 transition-colors"><Github size={20}/></button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <Star className="mx-auto text-amber-400 mb-1" size={20} fill="currentColor" />
                    <p className="text-lg font-black text-slate-900">{selectedInstractor.rating}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Rating</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <Users className="mx-auto text-indigo-600 mb-1" size={20} />
                    <p className="text-lg font-black text-slate-900">{(selectedInstractor.students / 1000).toFixed(1)}K</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Học viên</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <BookOpen className="mx-auto text-emerald-500 mb-1" size={20} />
                    <p className="text-lg font-black text-slate-900">{selectedInstractor.coursesCount}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Khóa học</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">Giới thiệu chuyên gia</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{selectedInstractor.bio}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3">Kỹ năng chuyên môn</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInstractor.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-bold text-slate-700 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-indigo-600" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setCurrentPage("courses");
                    setSelectedInstructor(null);
                  }}
                  className="w-full mt-10 bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Xem các khóa học của giảng viên này
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};