type IntroSidebarProps = {
  activeSection: "about" | "experience" | "projects";
};

export default function IntroSidebar({ activeSection }: IntroSidebarProps) {
  return (
    <div>
      <img
        src="/images/avatar.jpg"
        alt="Jiaqi Li"
        className="intro-avatar"
      />

      
      <h1 className="intro-name">Jiaqi (Jackie) Li</h1>

      <p className="intro-role">Software Engineer</p>

      <p className="intro-tagline">
        I build reliable, practical software systems across web, data, and
        cloud.
      </p>

      <nav className="intro-nav" aria-label="Section navigation">
        <a
          href="#about"
          className={
            "intro-nav-item" +
            (activeSection === "about" ? " intro-nav-item-active" : "")
          }
          aria-current={activeSection === "about" ? "page" : undefined}
        >
          <span className="intro-nav-line" />
          <span>ABOUT</span>
        </a>

        <a
          href="#experience"
          className={
            "intro-nav-item" +
            (activeSection === "experience" ? " intro-nav-item-active" : "")
          }
          aria-current={activeSection === "experience" ? "page" : undefined}
        >
          <span className="intro-nav-line" />
          <span>EXPERIENCE</span>
        </a>

        <a
          href="#projects"
          className={
            "intro-nav-item" +
            (activeSection === "projects" ? " intro-nav-item-active" : "")
          }
          aria-current={activeSection === "projects" ? "page" : undefined}
        >
          <span className="intro-nav-line" />
          <span>PROJECTS</span>
        </a>
      </nav>

      {/* ------------------------------------------------ */}
      {/* New icon-based contact section                   */}
      {/* ------------------------------------------------ */}
      <div id="contact" className="intro-contact">
        <p className="intro-contact-label">Contact</p>

        <div className="contact-icons">
          <a
            href="mailto:jackieli_jiaqi@outlook.com"
            className="contact-icon"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          <a
            href="https://github.com/Jackieljq"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.3-1.69-1.3-1.69-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 2.9-.39c.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.74.82 1.19 1.86 1.19 3.13 0 4.46-2.69 5.43-5.25 5.71.42.36.8 1.08.8 2.18v3.23c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jiaqi-li-563a18392/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h4v1.71h.06c.55-.98 1.9-2.01 3.94-2.01C22.33 8.7 23 11.2 23 14.73V21H19v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.78V21h-4V9Z" />
            </svg>
          </a>
        </div>
      </div>
      {/* ------------------------------------------------ */}

    
    </div>
  );
}