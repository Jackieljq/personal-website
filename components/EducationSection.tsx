export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-row">
        <div className="section-heading">
          <h2 className="section-heading-title">Education</h2>
          <p className="section-heading-subtitle">
            Academic background supporting software, data, and systems engineering.
          </p>
        </div>

        <div className="projects-list">
          {/* Master */}
          <article className="project-card">
            <header className="project-header">
              <h3 className="project-title">
                <a
                  href="https://www.uwa.edu.au/study/courses/master-of-information-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-reset"
                >
                  Master of Information Technology
                </a>
              </h3>
              <span className="project-meta">
                <a
                  href="https://www.uwa.edu.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-reset"
                >
                  University of Western Australia
                </a>{" "}
                · Perth · 2023 – 2025
              </span>
            </header>

            <p className="project-summary text-muted">
              Coursework covered software requirements and design, project management and
              engineering practice, software testing and quality assurance, computational
              thinking and Python programming, open source tools and scripting, agile web
              development, cloud computing, relational database management systems, data
              warehousing, cyber security fundamentals, Internet of Things, business
              intelligence, supply chain analytics, and a capstone project focused on
              applied system development.
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
              Developed strong analytical, quantitative, and problem-solving skills,
              supporting data-driven and technical decision-making.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
