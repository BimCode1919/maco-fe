import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {
    User, Mail, Lock, Phone, Briefcase, GraduationCap,
    MapPin, Link2, BookOpen, FileText, Award, Star,
    CheckCircle2, Target, DollarSign, Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Sub-Component: Input Field Chuyên nghiệp (Reuse) ---
const InputField = ({ icon: Icon, label, ...props }: any) => (
    <div className="relative group w-full">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{label}</label>
        <div className="relative">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input
                {...props}
                className="w-full h-14 bg-white border-2 border-slate-100 rounded-2xl pl-12 pr-4 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
            />
        </div>
    </div>
);

// --- Sub-Component: Benefit Card (30% Secondary) ---
const BenefitCard = ({ icon: Icon, title, description }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-indigo-50 transition-all space-y-4"
    >
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Icon className="w-7 h-7" />
        </div>
        <h4 className="text-xl font-black text-slate-900 tracking-tight">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">{description}</p>
    </motion.div>
);

interface BecomeInstructorPageProps {
    setCurrentPage: (page: string) => void;
    openAuth: (mode: any) => void;
}

export const BecomeInstructorPage = ({ setCurrentPage, openAuth }: BecomeInstructorPageProps) => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Nav
                currentPage="instructors"
                setCurrentPage={setCurrentPage}
                openAuth={openAuth}
            />

            {/* --- 1. HERO SECTION (30% Secondary Area) --- */}
            <header className="bg-slate-900 pt-36 pb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary rounded-full blur-[200px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold mb-6 uppercase tracking-widest">
                        <Zap size={14} /> Trở thành đối tác giảng dạy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight max-w-4xl mx-auto">
                        Chia sẻ kiến thức, Kiến tạo tương lai & <span className="text-brand-primary">Nhận thu nhập</span> cùng Maco.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Maco cung cấp nền tảng tích hợp trợ lý AI mạnh mẽ, giúp bạn dễ dàng xây dựng khóa học video chất lượng cao và quản lý học viên hiệu quả.
                    </p>
                    <a href="#register-form" className="inline-block bg-brand-primary text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-brand-primary/25 hover:bg-blue-700 hover:translate-y-[-2px] active:translate-y-0 transition-all text-lg">
                        Bắt đầu đăng ký ngay
                    </a>
                </div>
            </header>

            {/* --- 2. LỢI ÍCH KHI TRỞ THÀNH GIẢNG VIÊN (60% Primary White Area) --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Tại sao nên chọn Maco?</h2>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto">Nền tảng giáo dục số hàng đầu, đồng hành cùng sự thành công của bạn.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BenefitCard
                        icon={DollarSign}
                        title="Thu nhập hấp dẫn"
                        description="Nhận tối đa doanh thu từ khóa học của bạn với hệ thống thanh toán minh bạch và linh hoạt."
                    />
                    <BenefitCard
                        icon={Zap}
                        title="Trợ lý AI mạnh mẽ"
                        description="Tự động tạo Quiz, tóm tắt nội dung video, hỗ trợ hỏi đáp 24/7, giúp bạn tiết kiệm 80% thời gian quản lý."
                    />
                    <BenefitCard
                        icon={Target}
                        title="Tiếp cận hàng triệu học viên"
                        description="Maco giúp bạn quảng bá khóa học đến đúng đối tượng mục tiêu, mở rộng sức ảnh hưởng cộng đồng."
                    />
                    <BenefitCard
                        icon={BookOpen}
                        title="Công cụ xây dựng khóa học"
                        description="Dễ dàng upload video, tài liệu, tạo lộ trình học tập bài bản với giao diện trực quan, chuyên nghiệp."
                    />
                    <BenefitCard
                        icon={Star}
                        title="Xây dựng thương hiệu cá nhân"
                        description="Trở thành chuyên gia được công nhận trong lĩnh vực AI và Công nghệ, nâng cao uy tín nghề nghiệp."
                    />
                    <BenefitCard
                        icon={Award}
                        title="Hỗ trợ & Đào tạo"
                        description="Đội ngũ Maco luôn sẵn sàng hỗ trợ bạn kỹ thuật, marketing và nâng cao kỹ năng sư phạm số."
                    />
                </div>
            </section>

            {/* --- 3. QUY TRÌNH HỢP TÁC (3-STEP) --- */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">3 bước đơn giản để bắt đầu</h2>
                        <p className="text-slate-500 font-medium max-w-xl mx-auto">Hành trình trở thành giảng viên Maco chưa bao giờ dễ dàng đến thế.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Đường nối giữa các bước (Desktop) */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100 -translate-y-1/2 hidden md:block z-0" />

                        {[
                            { step: "01", title: "Đăng ký thông tin", desc: "Điền form đăng ký chi tiết bên dưới để chúng tôi hiểu rõ về bạn." },
                            { step: "02", title: "Xét duyệt & Phỏng vấn", desc: "Đội ngũ Maco sẽ xem xét hồ sơ và liên hệ phỏng vấn chuyên môn." },
                            { step: "03", title: "Tạo khóa học & Ra mắt", desc: "Sử dụng công cụ Maco để xây dựng khóa học và bắt đầu tuyển sinh." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-[32px] text-center relative z-10 border border-slate-100 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-brand-primary/30 mb-6">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. FORM ĐĂNG KÝ CHI TIẾT (10% Accent Area) --- */}
            <section id="register-form" className="py-24 max-w-4xl mx-auto px-6 scroll-mt-24">
                <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                    {/* Accent decoration */}
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-primary/10 rounded-full" />
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-primary/10 rounded-full" />

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Hồ sơ giảng viên</h3>
                        <p className="text-slate-500 font-medium max-w-md mx-auto">Cung cấp thông tin chi tiết để Maco xét duyệt hồ sơ của bạn nhanh nhất.</p>
                    </div>

                    <form className="space-y-10 relative z-10">
                        {/* Phần 1: Thông tin cá nhân */}
                        <div className="space-y-6">
                            <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-100">1. Thông tin cơ bản</h5>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField icon={User} label="Họ và tên" placeholder="Vd: Nguyễn Văn A" />
                                <InputField icon={MapPin} label="Tỉnh/Thành phố" placeholder="Vd: Hà Nội" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField icon={Mail} label="Email liên hệ" type="email" placeholder="example@gmail.com" />
                                <InputField icon={Phone} label="Số điện thoại" type="tel" placeholder="090x xxx xxx" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField icon={Lock} label="Mật khẩu" type="password" placeholder="Chứa ít nhất 8 ký tự" />
                                <InputField icon={Lock} label="Xác nhận mật khẩu" type="password" placeholder="Nhập lại mật khẩu" />
                            </div>
                        </div>

                        {/* Phần 2: Chuyên môn & Kinh nghiệm */}
                        <div className="space-y-6">
                            <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-100">2. Chuyên môn & Kinh nghiệm</h5>
                            <InputField icon={Briefcase} label="Nghề nghiệp hiện tại" placeholder="Vd: Senior Data Scientist tại VinAI" />
                            <InputField icon={GraduationCap} label="Lĩnh vực giảng dạy mong muốn" placeholder="Vd: Học máy, Thị giác máy tính, Xử lý ngôn ngữ tự nhiên..." />

                            <div className="relative group w-full">
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mô tả ngắn về kinh nghiệm giảng dạy/làm việc</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <textarea
                                        placeholder="Chia sẻ về số năm kinh nghiệm, các dự án nổi bật, hoặc các khóa học bạn đã từng giảng dạy..."
                                        rows={5}
                                        className="w-full bg-white border-2 border-slate-100 rounded-2xl pl-12 pr-4 pt-4 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all custom-scrollbar"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Phần 3: Minh chứng & Đề xuất */}
                        <div className="space-y-6">
                            <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-100">3. Minh chứng & Đề xuất</h5>
                            <InputField icon={Link2} label="Link CV hoặc LinkedIn profile" placeholder="https://linkedin.com/in/yourprofile" />
                            <InputField icon={Link2} label="Link Khóa học demo hoặc Portfolio dự án (Nếu có)" placeholder="https://youtube.com/watch?v=... hoặc Portfolio URL" />
                        </div>

                        {/* Nút đăng ký (Accent Button) */}
                        <button className="w-full bg-brand-primary text-white font-black py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-primary/25 hover:bg-blue-700 hover:translate-y-[-2px] active:translate-y-0 transition-all mt-6">
                            Gửi hồ sơ đăng ký giảng viên
                        </button>

                        <p className="text-center text-xs font-medium text-slate-500 leading-relaxed max-w-md mx-auto">
                            Bằng cách gửi hồ sơ, bạn đồng ý với <a href="#" className="text-indigo-600 hover:underline">Điều khoản dịch vụ</a> và <a href="#" className="text-indigo-600 hover:underline">Chính sách bảo mật</a> dành cho Giảng viên của Maco.
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};