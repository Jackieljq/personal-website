export default function Hero() {
    return (
      <section id="top" className="section">
        <div>
          <p className="hero-eyebrow">Software Engineer · Data & Cloud</p>
  
          <h1 className="hero-title">
            I build reliable, practical software systems.
          </h1>
  
          <p className="text-muted hero-summary">
            I&apos;m Jiaqi (Jackie) Li, a Master of Information Technology
            graduate based in Perth, WA. I enjoy designing and building software
            across web, data, and cloud—turning ideas into clear, maintainable
            systems that actually work in production.
          </p>
  
          <p className="text-muted hero-tagline">
            Recently I&apos;ve been working on AI trading bots, a WA traffic
            fatality data warehouse, and an IoT smart garden dashboard, focusing
            on clean architecture, performance, and observability.
          </p>
  
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
  
          <div className="hero-actions">
            <a href="#projects" className="btn-outline">
              View selected projects
            </a>
            <a href="#experience" className="hero-secondary-link">
              View experience
            </a>
          </div>
        </div>
      </section>
    );
  }
  