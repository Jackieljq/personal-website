export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-row">
        <div className="section-heading">
          <h2 className="section-heading-title">Education</h2>
          <p className="section-heading-subtitle">
            Academic background supporting software and data engineering.
          </p>
        </div>

        <div className="projects-list">
          {/* Master */}
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-title">Master of Information Technology</h3>
              <span className="project-meta">
                University of Western Australia · Perth · 2023 – 2025
              </span>
            </header>

            <p className="project-summary text-muted">
              Focused on software engineering, cloud computing, data systems,
              and applied engineering projects.
            </p>
          </article>

          {/* Bachelor */}
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-title">Bachelor of Finance</h3>
              <span className="project-meta">
                Guangdong University of Finance · China · 2018 – 2022
              </span>
            </header>

            <p className="project-summary text-muted">
              Built strong analytical and quantitative foundations supporting
              data-driven and technical problem solving.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
