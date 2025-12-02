export default function Header() {
    return (
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-slate-900">
            Jiaqi (Jackie) Li
          </span>
          <nav className="space-x-4 text-xs md:text-sm">
            <a href="#about" className="text-slate-600 hover:text-sky-700">
              About
            </a>
            <a href="#skills" className="text-slate-600 hover:text-sky-700">
              Skills
            </a>
            <a href="#experience" className="text-slate-600 hover:text-sky-700">
              Experience
            </a>
            <a href="#projects" className="text-slate-600 hover:text-sky-700">
              Projects
            </a>
            <a href="#education" className="text-slate-600 hover:text-sky-700">
              Education
            </a>
            <a href="#contact" className="text-slate-600 hover:text-sky-700">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  