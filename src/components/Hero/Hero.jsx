function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

                <div className="absolute bottom-[-15%] left-[35%] h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl"></div>
            </div>

            {/* Main Container */}
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* ================= LEFT CONTENT ================= */}
                <div className="text-center lg:text-left">

                    {/* Hello */}
                    <p className="mb-3 text-lg font-medium text-slate-400">
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
                        Ashutosh

                        <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Vishwakarma
                        </span>
                    </h1>

                    {/* Professional Tagline */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold leading-relaxed text-slate-200 md:text-2xl">
                            Building{" "}
                            <span className="text-cyan-400">
                                scalable
                            </span>{" "}
                            and{" "}
                            <span className="text-cyan-400">
                                modern
                            </span>{" "}
                            web applications.
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0">
                        I build modern, responsive and scalable web applications
                        using{" "}
                        <span className="font-medium text-cyan-400">
                            React
                        </span>
                        ,{" "}
                        <span className="font-medium text-cyan-400">
                            Node.js
                        </span>
                        ,{" "}
                        <span className="font-medium text-cyan-400">
                            Express
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-cyan-400">
                            MongoDB
                        </span>
                        .
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm lg:justify-start">

                        <span className="text-slate-400">
                            🚀 MERN Stack
                        </span>

                        <span className="text-slate-600">
                            •
                        </span>

                        <span className="text-slate-400">
                            ⚡ Problem Solving
                        </span>

                        <span className="text-slate-600">
                            •
                        </span>

                        <span className="text-slate-400">
                            🌐 Web Development
                        </span>

                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">

                        {[
                            "React.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "JavaScript",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                    {/* Main Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="group rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-400/30"
                        >
                            View Projects

                            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        {/* Contact Me */}
                        <a
                            href="#contact"
                            className="rounded-xl border border-slate-700 bg-slate-900/50 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            Contact Me
                        </a>

                    </div>

                    {/* Small Social Buttons */}
                    <div className="mt-6 flex justify-center gap-3 lg:justify-start">

                        {/* GitHub */}
                        <a
                            href="https://github.com/ashutosh9415"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            GitHub
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/ashutosh9415/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>

                {/* ================= RIGHT PROFILE IMAGE ================= */}
                <div className="flex justify-center lg:justify-end">

                    <div className="relative">

                        {/* Soft Glow */}
                        <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl"></div>

                        {/* Decorative Border */}
                        <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-cyan-400/10"></div>

                        {/* Image Card */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">

                            <div className="overflow-hidden rounded-[1.5rem]">

                                <img
                                    src="/images/profile.png"
                                    alt="Ashutosh Vishwakarma"
                                    className="h-[420px] w-[320px] object-cover object-top transition duration-700 hover:scale-105 sm:h-[480px] sm:w-[360px] md:h-[520px] md:w-[390px]"
                                />

                            </div>

                        </div>

                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400 md:flex"
            >
                <span>
                    Scroll to explore
                </span>

                <span className="animate-bounce text-lg">
                    ↓
                </span>
            </a>

        </section>
    );
}

export default Hero;