import { Sparkles, Terminal, Code2, Rocket, Globe } from "lucide-react";

export const Partners = () => {
  const partners = [
    { icon: <Sparkles />, name: "AI LAB" },
    { icon: <Terminal />, name: "CÔNG NGHỆ" },
    { icon: <Code2 />, name: "DỮ LIỆU" },
    { icon: <Rocket />, name: "TỐI ƯU" },
    { icon: <Globe />, name: "TOÀN CẦU" },
  ];

  return (
    <div className="py-20 bg-white marquee-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Hợp tác cùng các đối tác Fortune 500</p>
      </div>
      <div className="marquee-content flex gap-20 items-center">
        {[...partners, ...partners].map((partner, idx) => (
          <div key={idx} className="flex items-center gap-3 text-2xl font-black text-slate-300 px-8">
            <span className="text-slate-300">{partner.icon}</span>
            {partner.name}
          </div>
        ))}
      </div>
    </div>
  );
};
