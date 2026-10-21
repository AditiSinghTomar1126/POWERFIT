import { Dumbbell, CircleGauge } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Runner Image */}
        <div className="relative flex min-h-[440px] items-center justify-center md:min-h-[600px]">
          {/* Red background shape */}
          <div className="absolute left-[15%] top-[0%] h-[100%] w-[50%]  bg-[#f20b3a]" style={{ clipPath: "ellipse(100% 50% at 100% 50%)", }} />

          {/* Decorative dots */}
          <div className="absolute right-[17%] top-0 h-20 w-24 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(#aaa 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Background typography */}
          <span
            className="absolute right-[8%] top-[8%] select-none text-7xl font-black tracking-widest text-transparent opacity-70"
            style={{ WebkitTextStroke: "1.5px #dedede", writingMode: "vertical-rl" }}
          >
            RUNNING
          </span>

          {/* Runner image */}
          <img
            src="/about-runner.png"
            alt="Athlete running"
            className="relative z-10 h-auto max-h-[600px] w-full object-contain"
          />

          {/* Decorative waves */}
          <div className="absolute left-[25%] top-[30%] z-20 flex flex-col gap-2">
            {[1, 2, 3].map((line) => (
              <svg key={line} width="90" height="15" viewBox="0 0 90 12" fill="none">
                <path
                  d="M1 6 C10 -2 20 -2 29 6 S48 14 57 6 S76 -2 89 6"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Right: About Content */}
        <div className="relative">
           <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.35em]">
           ABOUT US
            <span className="h-[2px] w-20 bg-[#f20b3a]" />
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-black md:text-5xl">
            We Can Give A Shape
            <br />
            Of Your Body Here!
          </h2>

          {/* Red underline accent */}
          <div className="ml-auto mt-4 h-3 w-40 rounded-[50%] border-t-[4px] border-[#f20b3a] rotate-[-5deg]" />

          <p className="mt-4 text-base leading-7 text-[#6b6b6b]">
            Gymat an unknown printer took a galley of type and
            scrambled it to make a type specimen book. May has
            survived not only five centuries but also the leap
            into electronic typesetting.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fce8ed] text-[#f20b3a]">
                <Dumbbell size={31} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  Modern Equipment
                </h3>
                <p className="mt-2 leading-7 text-[#6b6b6b]">
                  Gymat an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fce8ed] text-[#f20b3a]">
                <CircleGauge size={31} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  Body Fitness
                </h3>
                <p className="mt-2 leading-7 text-[#6b6b6b]">
                  Gymat an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}