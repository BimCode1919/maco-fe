import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    { name: "Học viên BE", role: "Học viên Security", content: "Lộ trình học rất sát với thực tế đi làm tại doanh nghiệp." },
    { name: "Học viên AI", role: "AI Engineer", content: "Giảng viên hỗ trợ cực kỳ nhiệt tình, giải đáp thắc mắc ngay lập tức." },
    { name: "Học viên FE", role: "Frontend Dev", content: "Tôi đã tìm được việc làm ngay sau khi hoàn thành khóa học tại đây." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-16">
          Học viên nói gì về các <span className="text-indigo-600">Mentor</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[40px] relative">
              <Quote className="absolute top-8 right-8 text-indigo-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="#fbbf24" className="text-amber-400" />)}
              </div>
              <p className="text-slate-600 font-bold italic mb-8 relative z-10">"{rev.content}"</p>
              <div>
                <h4 className="font-black text-slate-900">{rev.name}</h4>
                <p className="text-sm font-bold text-slate-400">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};