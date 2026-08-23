function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        <div><p className="mt-2 text-sm text-slate-500">
            Full Stack Developer | Software Engineer
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-400">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Ashutosh Vishwakarma
        </p>

      </div>
    </footer>
  );
}

export default Footer;