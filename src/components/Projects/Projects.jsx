import { useState } from "react";

const projects = [
    {
    title: "FoodRush",
    category: "fullstack",
    description:
        "A full-stack food delivery platform with food browsing, cart and orders, role-based dashboards, online payments, and real-time delivery tracking.",
    tech: "React • Node.js • Express • MongoDB • Socket.IO",
    icon: "🍔",
    github: "https://github.com/ashutosh9415/FoodRush",
    demo: "https://foodrush-client.vercel.app/",
},
{
    title: "Password Manager",
    category: "fullstack",
    description:
        "A secure full-stack password manager for storing and managing passwords with an easy-to-use interface.",
    tech: "React • Node.js • Express • MongoDB",
    icon: "🔐",
    github: "https://github.com/ashutosh9415/Password-Manager",
    demo: "https://passwordmanager-lime.vercel.app/",
},,
    {
        title: "E-Commerce Website",
        category: "frontend",
        description:
            "A modern and responsive e-commerce website with product browsing, categories, product cards and a clean shopping interface.",
        tech: "HTML • CSS • JavaScript",
        icon: "🛒",
        github: "https://github.com/ashutosh9415/Project-1-E-Commerce-Website-Frontend-Only-",
        demo: "https://e-commerce-website-ashu.netlify.app/",
    },
    {
        title: "Social Media Dashboard",
        category: "frontend",
        description:
            "A responsive social media dashboard UI clone designed to display posts, user information, analytics and interactive dashboard elements.",
        tech: "HTML • CSS • JavaScript",
        icon: "📱",
        github: "https://github.com/ashutosh9415/Project-2-Social-Media-Dashboard-UI-Clone-",
        demo: "https://social-media-ashu.netlify.app/",
    },
    {
        title: "Admin Dashboard",
        category: "frontend",
        description:
            "A modern analytics panel for displaying business statistics, charts, performance metrics and important data.",
        tech: "React • Tailwind CSS",
        icon: "📊",
        github: "https://github.com/ashutosh9415/Project-3-Admin-Dashboard-Analytics-Panel-",
        demo: "https://admin-dashboard-ashu.netlify.app/",
    },
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter(
                  (project) => project.category === activeCategory
              );

    return (
        <section
            id="projects"
            className="relative overflow-hidden px-6 py-24"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-12 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        MY WORK
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        A collection of projects showcasing my experience
                        in frontend development and full-stack applications.
                    </p>

                </div>

                {/* ================= FILTER BUTTONS ================= */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">

                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                            activeCategory === "all"
                                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                                : "border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                        }`}
                    >
                        All Projects
                    </button>

                    <button
                        onClick={() => setActiveCategory("frontend")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                            activeCategory === "frontend"
                                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                                : "border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                        }`}
                    >
                        Frontend Projects
                    </button>

                    <button
                        onClick={() => setActiveCategory("fullstack")}
                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                            activeCategory === "fullstack"
                                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                                : "border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                        }`}
                    >
                        Full Stack Projects
                    </button>

                </div>

                {/* ================= PROJECT CARDS ================= */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {filteredProjects.map((project) => (

                        <div
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
                        >

                            {/* Project Image / Icon */}
                            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">

                                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 transition duration-300 group-hover:opacity-100"></div>

                                <span className="relative text-6xl transition duration-300 group-hover:scale-110">
                                    {project.icon}
                                </span>

                            </div>

                            {/* Project Content */}
                            <div className="p-6">

                                {/* Category */}
                                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                    {project.category === "fullstack"
                                        ? "Full Stack"
                                        : "Frontend"}
                                </p>

                                {/* Title */}
                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 min-h-[84px] leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <p className="mt-4 text-sm font-medium text-cyan-400">
                                    {project.tech}
                                </p>

                                {/* Buttons */}
                                <div className="mt-6 flex gap-3">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        Live Demo
                                    </a>

                                </div>

                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;