export default function ContactSection() {
    return (
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p className="text-muted">
          I am currently based in Perth and open to Junior / Graduate Software
          Engineer, Full-Stack, or related roles.
        </p>
        <div className="text-muted" style={{ marginTop: "0.5rem" }}>
          <p>
            Email:{" "}
            <a
              href="mailto:jackieli_jiaqi@outlook.com"
              className="link"
            >
              jackieli_jiaqi@outlook.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Jackieljq"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              github.com/Jackieljq
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jiaqi-li-563a18392/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              linkedin.com/in/jiaqi-li-563a18392
            </a>
          </p>
        </div>
      </section>
    );
  }
  