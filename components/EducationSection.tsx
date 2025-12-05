export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-row">
        <div className="section-heading">
          <h2 className="section-heading-title">Education</h2>
          <p className="section-heading-subtitle">
            Formal training in software, data, cloud, and finance.
          </p>
        </div>

        <div className="projects-list">
          {/* Master */}
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-title">Master of Information Technology</h3>
              <span className="project-meta">
                University of Western Australia · Perth
              </span>
            </header>

            <p className="project-summary text-muted">
              Two-year full-time program covering software engineering, cloud computing,
              data warehousing, relational databases, IoT, BI, and cyber security.
            </p>
          </article>

          {/* Bachelor */}
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-title">Bachelor of Finance</h3>
              <span className="project-meta">
                Guangdong University of Finance · China
              </span>
            </header>

            <p className="project-summary text-muted">
              Four-year program focused on corporate finance, financial management,
              accounting, taxation, and management principles.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
