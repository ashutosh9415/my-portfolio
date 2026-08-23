function Experience() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Built a responsive shopping interface with product listings, reusable UI components, and mobile-friendly layouts.",
    },
    {
      title: "Admin Dashboard",
      description:
        "Designed an organized analytics dashboard with cards, tables, and reusable components for presenting business data.",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Created a responsive analytics dashboard for displaying engagement and performance data through reusable UI components.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-900/40 px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Career Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Turning ideas into responsive, user-friendly interfaces while
            continuously improving my frontend development skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent md:block" />

          {/* Experience */}
          <div className="relative md:pl-14">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/30 md:flex">
              <div className="h-2 w-2 rounded-full bg-slate-950" />
            </div>

            {/* Main Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 sm:p-8 lg:p-10">

              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                    Navyan
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Frontend Development Intern
                  </h3>

                  {/* Remote + Duration */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                    <span>Remote</span>
                    <span className="text-slate-700">•</span>
                    <span>Jun 2026 – Jul 2026</span>
                  </div>
                </div>

                {/* Internship Badge */}
                <div className="w-fit rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Work Type
                  </p>

                  <p className="mt-1 font-semibold text-cyan-400">
                    Remote Internship
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  During my internship at{" "}
                  <span className="font-semibold text-white">Navyan</span>, I
                  worked on building responsive and reusable frontend
                  interfaces. I focused on creating clean UI components,
                  improving responsiveness, and delivering consistent user
                  experiences across desktop, tablet, and mobile devices.
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mt-10">
                <h4 className="mb-5 text-lg font-semibold text-white">
                  Projects & Contributions
                </h4>

                <div className="grid gap-4 md:grid-cols-3">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        ✦
                      </div>

                      <h5 className="font-semibold text-white transition group-hover:text-cyan-400">
                        {project.title}
                      </h5>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-10 grid gap-4 border-t border-slate-800 pt-8 sm:grid-cols-3">

                <div>
                  <p className="text-2xl font-bold text-cyan-400">
                    3+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Frontend Projects
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-cyan-400">
                    5
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Core Technologies
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-cyan-400">
                    100%
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Responsive Focus
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;