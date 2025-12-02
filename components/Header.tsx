export default function Header() {
    return (
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-slate-200">
            Jiaqi (Jackie) Li
          </span>
          <nav className="space-x-4 text-xs md:text-sm">
            <a href="#about" className="text-slate-300 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white">
              Skills
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white">
              Projects
            </a>
            <a href="#education" className="text-slate-300 hover:text-white">
              Education
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  