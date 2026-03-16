import { INSTRUCTOR_STATS } from "../../public/data/instructorsData";

export const InstructorStats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-slate-900 rounded-[40px]">
          {INSTRUCTOR_STATS.map((stat, idx) => (
            <div key={idx} className="text-center border-r last:border-0 border-white/10">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};