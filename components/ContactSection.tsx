export default function ContactSection() {
    return (
      <section id="contact" className="section">
        <div className="section-row">
          <div className="section-heading">
            <h2 className="section-heading-title">Contact</h2>
            <p className="section-heading-subtitle">
              Let&apos;s talk about opportunities or projects.
            </p>
          </div>
          <div className="section-body">
            <p className="text-muted">
              I am currently based in Perth, WA and open to Junior / Graduate
              software engineering roles, full-stack positions, and related
              opportunities.
            </p>
            <div className="contact-block">
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
        </div>
      </section>
    );
  }
  