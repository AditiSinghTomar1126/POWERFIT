import { ArrowRight, Dumbbell, Users, Award, Zap} from "lucide-react";

const stats = [
  { icon: Dumbbell, label: "24/7 GYM ACCESS" },
  { icon: Users, label: "LIVE TRAINERS" },
  { icon: Users, label: "2K+ MEMBERS" },
  { icon: Award, label: "20+ EXPERT TRAINERS" },
  { icon: Dumbbell, label: "TRANSFORMATION" },
  { icon: Zap, label: "STRENGTH TRAINING" },


];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.12) 65%,rgba(0,0,0,.35)),url('/gym-hero.jpg')",
        }}
      />

      {/* Red accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-[78%] h-px w-full rotate-[-12deg] bg-red-600/70" />
      </div>

     

      {/* Hero content */}
      <div
        id="home"
        className="relative z-10 flex min-h-[78vh] items-center px-6 py-3 md:px-[4.8%] md:pt-0"
      >
        <div className="max-w-[430px]">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.35em]">
            STRONGER EVERYDAY
            <span className="h-[2px] w-20 bg-[#f20b3a]" />
          </div>

          <p className="mb-7 text-base leading-7 text-gray-200 md:text-lg">
            Transform your fitness with expert trainers
            and modern gym equipment today.
          </p>

          <a
            href="#programs"
            className="inline-flex items-center gap-5 rounded-xl bg-[#f20b3a] px-10 py-5 text-sm font-extrabold transition hover:bg-red-700"
          >
            GET STARTED <ArrowRight size={19} />
          </a>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n + 10}`}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white/60 object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-2xl font-black">2K+</p>
              <p className="text-sm text-gray-300">Happy Members</p>
            </div>
          </div>
        </div>

     
       

        {/* Main headline */}
      
      </div>

      {/* Bottom stats bar */}
      <div >
        <h1 className="absolute bottom-24 left-[6%] right-[3%]   whitespace-nowrap text-[clamp(3rem,10.4vw,10rem)] font-black uppercase leading-[.95] tracking-[-0.055em]">
          BUILD YOUR <span className="text-[#f20b3a]">BODY</span>
        </h1>
      <div className=" absolute bottom-0  z-10 grid grid-cols-2 border-t border-white/20 bg-black/75 px-5 py-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-12">
        {stats.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 border-white/25 px-2 py-3 lg:border-r last:border-r-0"
          >
            <Icon className="shrink-0 text-[#f20b3a]" size={30} strokeWidth={2.5} />
            <span className="text-xs font-extrabold sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}