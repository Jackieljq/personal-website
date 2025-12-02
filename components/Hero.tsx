export default function HeroSection() {
    return (
      <section id="top" className="section">
        <p className="hero-eyebrow">Junior / Graduate Software Engineer</p>
  
        {/* 主标题 */}
        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-highlight">Jiaqi (Jackie) Li</span>
        </h1>
  
        {/* 简介 */}
        <p className="text-muted hero-summary">
          Master of Information Technology graduate based in Perth, WA. I enjoy
          building practical software solutions across web, data, and cloud—
          and turning complex ideas into reliable, well-structured systems.
        </p>
  
    
        <div className="contact-block">
          <p>
            📍 Perth, Western Australia
          </p>
  
          <p>
            📧 Email:
            <a
              href="mailto:jackieli_jiaqi@outlook.com"
              className="link"
              style={{ marginLeft: "4px" }}
            >
              jackieli_jiaqi@outlook.com
            </a>
          </p>
  
          <p>
            💻 GitHub:
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
            🔗 LinkedIn:
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
  
       
        <div style={{ marginTop: "0.75rem" }}>
          <a href="#projects" className="btn-outline">
            View My Projects
          </a>
        </div>
      </section>
    );
  }
  