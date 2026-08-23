function About() {
  const highlights = [
    {
      number: "500+",
      title: "CodeChef Problems",
      description: "Solved",
    },
    {
      number: "100+",
      title: "GFG Problems",
      description: "Completed",
    },
    {
      number: "50+",
      title: "LeetCode Days",
      description: "Consistency",
    },
    {
      number: "2027",
      title: "Graduation",
      description: "B.Tech CSE",
    },
  ];

  const interests = [
    "Full Stack Development",
    "MERN Stack",
    "Problem Solving",
    "UI/UX Development",
    "Modern Web Technologies",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get To Know Me
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A passionate developer focused on building useful, scalable and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* About Text */}
          <div>
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Who I Am
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Passionate about
              <span className="text-cyan-400">
                {" "}
                building & learning.
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              I am a Computer Science and Engineering student with a strong
              interest in software development and modern web technologies.
              I enjoy transforming ideas into functional, responsive and
              user-friendly applications.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              My primary focus is Full Stack Development, particularly the
              MERN stack. I continuously work on improving my programming,
              problem-solving, frontend and backend development skills.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              I believe in learning by building real projects, experimenting
              with new technologies and consistently improving the quality of
              my work.
            </p>

            {/* Interests */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                What I Work With
              </p>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 sm:text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-400/5 sm:p-6"
              >
                {/* Top Glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />

                <div className="relative">
                  <p className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                    {item.number}
                  </p>

                  <h4 className="mt-3 text-sm font-semibold text-white sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Currently Card */}
<div className="col-span-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 sm:p-6">

  {/* Heading */}
  <div className="text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
      Currently Working On
    </p>

    <h4 className="mt-2 text-lg font-bold text-white sm:text-xl">
      · Building · Learning · Growing
    </h4>
  </div>

  {/* Skills Row */}
  {/* Skills Row */}
<div className="mt-5 flex items-center justify-center gap-2">

  <span className="whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[11px] text-slate-400 sm:px-3 sm:py-2 sm:text-xs">
    🚀 Full Stack
  </span>

  <span className="whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[11px] text-slate-400 sm:px-3 sm:py-2 sm:text-xs">
    ⚡ MERN Stack
  </span>

  <span className="whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[11px] text-slate-400 sm:px-3 sm:py-2 sm:text-xs">
    💡 Problem Solving
  </span>

  <span className="whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-[11px] text-slate-400 sm:px-3 sm:py-2 sm:text-xs">
    🌐 Web Development
  </span>

</div>

</div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 border-t border-slate-800" />
      </div>
    </section>
  );
}

export default About;