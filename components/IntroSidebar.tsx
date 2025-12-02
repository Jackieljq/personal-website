export default function IntroSidebar() {
    return (
      <div>
        <h1 className="intro-name">Jiaqi (Jackie) Li</h1>
  
        <p className="intro-role">Software Engineer</p>
  
        <p className="intro-tagline">
          I build reliable, practical software systems across web, data, and
          cloud.
        </p>
  
        <nav className="intro-nav" aria-label="Section navigation">
          <a href="#about" className="intro-nav-item intro-nav-item-active">
            <span className="intro-nav-line" />
            <span>ABOUT</span>
          </a>
          <a href="#experience" className="intro-nav-item">
            <span className="intro-nav-line" />
            <span>EXPERIENCE</span>
          </a>
          <a href="#projects" className="intro-nav-item">
            <span className="intro-nav-line" />
            <span>PROJECTS</span>
          </a>
        </nav>
  
        <div id="contact" className="intro-contact">
          <p className="intro-contact-label">Contact</p>
          <div className="contact-block">
            <p>Perth, Western Australia</p>
            <p>
              Email:
              <a
                href="mailto:jackieli_jiaqi@outlook.com"
                className="link"
                style={{ marginLeft: "4px" }}
              >
                jackieli_jiaqi@outlook.com
              </a>
            </p>
            <p>
              GitHub:
              <a
                href="https://github.com/Jackieljq"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                style={{ marginLeft: "4px" }}
              >
                github.com/Jackieljq
              </a>
            </p>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/jiaqi-li-563a18392/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                style={{ marginLeft: "4px" }}
              >
                linkedin.com/in/jiaqi-li-563a18392
              </a>
            </p>
          </div>
        </div>
  
        <div className="hero-actions">
          <a href="#projects" className="btn-outline">
            View selected projects
          </a>
          <a href="#experience" className="hero-secondary-link">
            View experience
          </a>
        </div>
      </div>
    );
  }
  