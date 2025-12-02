export default function Hero() {
    return (
      <section id="top" className="section intro-section">
        <div className="intro-layout">
          {/* Left column: name, role, nav, contact */}
          <div className="intro-left">
            <h1 className="intro-name">Jiaqi (Jackie) Li</h1>
  
            <p className="intro-role">Software Engineer</p>
  
            <p className="intro-tagline">
              I build reliable, practical software systems across web, data, and
              cloud.
            </p>
  
            {/* Left vertical nav - use anchor links, no onClick */}
            <nav className="intro-nav" aria-label="Section navigation">
              <a
                href="#about"
                className="intro-nav-item intro-nav-item-active"
              >
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
  
          {/* Right column: about text */}
          <div id="about" className="intro-right">
            <p className="text-muted">
              I recently completed my Master of Information Technology at the
              University of Western Australia. I enjoy working at the intersection
              of software engineering, data, and cloud—designing systems that are
              well-structured, observable, and maintainable.
            </p>
            <p className="text-muted" style={{ marginTop: "0.75rem" }}>
              My recent work includes building optimisation-based trading bots for
              Bitcoin, designing a WA traffic fatality data warehouse in
              PostgreSQL and Power BI, and developing an IoT smart garden system
              with ESP32, Python, and a React dashboard. I like taking complex
              ideas and breaking them down into small, testable steps.
            </p>
            <p className="text-muted" style={{ marginTop: "0.75rem" }}>
              I am detail-oriented, proactive, and comfortable working both
              independently and with cross-functional teams. I enjoy clear
              communication, documenting decisions, and iterating based on
              feedback. I am currently looking for Junior / Graduate software
              engineering roles where I can keep learning and contribute to real
              products.
            </p>
          </div>
        </div>
      </section>
    );
  }
  