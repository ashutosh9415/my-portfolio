import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // Programming Languages
    {
      name: "Java",
      level: "Advanced",
      category: "Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      category: "Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "C",
      level: "Intermediate",
      category: "Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "Python",
      level: "Intermediate",
      category: "Languages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },

    // Frontend Development
    {
      name: "HTML5",
      level: "Advanced",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      level: "Advanced",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "React.js",
      level: "Advanced",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },

    // Backend Development
    {
      name: "Node.js",
      level: "Advanced",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      level: "Advanced",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "REST APIs",
      level: "Advanced",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },

    // Databases
    {
      name: "MongoDB",
      level: "Advanced",
      category: "Databases",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      level: "Intermediate",
      category: "Databases",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },

    // CS Fundamentals
    {
      name: "OOPS",
      level: "Advanced",
      category: "CS Fundamentals",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "DBMS",
      level: "Intermediate",
      category: "CS Fundamentals",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Operating Systems",
      level: "Intermediate",
      category: "CS Fundamentals",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Computer Networks",
      level: "Intermediate",
      category: "CS Fundamentals",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
    },

    // Tools & Technologies
    {
      name: "Git",
      level: "Advanced",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      level: "Advanced",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      level: "Advanced",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Vite",
      level: "Intermediate",
      category: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
  ];

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "CS Fundamentals",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technologies & Tools
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern, scalable and
            responsive web applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "border border-slate-800 bg-slate-900 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 p-3 transition duration-300 group-hover:scale-110 group-hover:bg-slate-700">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-base font-semibold text-white">
                {skill.name}
              </h3>

              {/* Level */}
              <p className="mt-2 text-sm text-slate-500 transition group-hover:text-cyan-400">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;