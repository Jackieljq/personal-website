export default function SkillsSection() {
    return (
      <section id="skills" className="section">
        <div className="section-row">
          <div className="section-heading">
            <h2 className="section-heading-title">Skills</h2>
            <p className="section-heading-subtitle">
              Languages, frameworks, and tools I work with.
            </p>
          </div>
          <div className="section-body">
            <div className="card">
              <h3 className="badge-text">Languages</h3>
              <p className="text-muted">
                Python, TypeScript, JavaScript, Java, SQL, Bash
              </p>
            </div>
            <div className="card">
              <h3 className="badge-text">Web & Frameworks</h3>
              <p className="text-muted">
                React, Next.js, Flask, basic Node.js, Tailwind CSS
              </p>
            </div>
            <div className="card">
              <h3 className="badge-text">Data & Analytics</h3>
              <p className="text-muted">
                Pandas, NumPy, optimisation algorithms, data visualisation, ETL
                and data warehousing concepts
              </p>
            </div>
            <div className="card">
              <h3 className="badge-text">Tools & Platforms</h3>
              <p className="text-muted">
                Git and GitHub, VS Code, Jupyter, basic AWS (EC2, S3), Firebase,
                Docker fundamentals
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  