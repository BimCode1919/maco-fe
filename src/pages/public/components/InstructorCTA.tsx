interface InstructorCTAProps {
  openAuth: (mode: "register-instructor") => void;
}

export const InstructorCTA = ({ openAuth }: InstructorCTAProps) => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto bg-indigo-900 rounded-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 grid lg:grid-cols-2 items-center">
          <div className="p-12 lg:p-24">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Trở thành Đối tác Giảng dạy <br/>và Chia sẻ Tri thức.
            </h2>
            <p className="text-indigo-200 text-lg mb-12 max-w-lg font-medium">
              Gia nhập mạng lưới giảng viên toàn cầu của Maco. Chúng tôi cung cấp nền tảng, công cụ và hàng triệu học viên tiềm năng.
            </p>
            <button 
              onClick={() => openAuth("register-instructor")}
              className="bg-white text-indigo-900 h-16 px-12 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-2xl"
            >
              Bắt đầu Giảng dạy ngay
            </button>
          </div>
          <div className="h-full min-h-[400px] relative hidden lg:block">
            <img 
              alt="Instructor" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://www.xavor.com/wp-content/uploads/2022/08/Technology-Partnerships-%E2%80%93-Why-You-Need-a-Good-Tech-Partner-2.jpg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-indigo-900/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
