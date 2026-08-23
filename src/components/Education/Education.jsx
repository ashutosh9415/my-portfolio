function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Academics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My academic journey and educational background in computer
            science and engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent md:block" />

          <div className="relative md:pl-14">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/30 md:flex">
              <div className="h-2 w-2 rounded-full bg-slate-950" />
            </div>

            {/* Education Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-400/5 sm:p-8 lg:p-10">

              {/* Top Section */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                    Bachelor's Degree
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Bachelor of Technology
                  </h3>

                  <p className="mt-2 text-lg font-medium text-slate-300">
                    Computer Science and Engineering
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                    Raj Kumar Goel Institute of Technology, Ghaziabad
                  </p>
                </div>

                {/* Duration */}
                <div className="w-fit rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Duration
                  </p>

                  <p className="mt-1 font-semibold text-cyan-400">
                    2023 – 2027
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-800" />

              {/* Academic Details */}
              <div className="grid gap-4 sm:grid-cols-2">

                {/* Percentage */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-500">
                    Current Percentage
                  </p>

                  <p className="mt-2 text-3xl font-bold text-cyan-400">
                    70.32%
                  </p>
                </div>

                {/* Degree Status */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-500">
                    Degree Status
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    Currently Pursuing
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Expected Graduation: 2027
                  </p>
                </div>

              </div>

              {/* Highlights */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Academic Focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Science",
                    "Software Development",
                    "Web Development",
                    "Programming",
                    "Database Management",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;