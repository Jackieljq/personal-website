import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <span className="site-title">Jiaqi (Jackie) Li</span>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
