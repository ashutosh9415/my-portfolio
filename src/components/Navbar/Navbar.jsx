function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a href="#home" className="text-2xl font-bold text-white flex">
          <img src="/logo.png" alt="" width={70}/>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-slate-300 hover:text-cyan-400">Home</a>
          <a href="#about" className="text-slate-300 hover:text-cyan-400">About</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400">Projects</a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400">Experience</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;