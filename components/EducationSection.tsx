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

        <div className="section-body">
          {/* Master */}
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Master of Information Technology</h3>
                <p className="badge-text">
                  The University of Western Australia · Perth, WA
                </p>
              </div>
              <span className="badge-text">2023 – 2025</span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Two-year full-time program with coursework across software
              requirements and design, project management, software testing and
              quality assurance, cloud computing, data warehousing, relational
              databases, Internet of Things, business intelligence, cyber
              security, and supply chain analytics.
            </p>
          </div>

          {/* Bachelor */}
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">Bachelor of Finance</h3>
                <p className="badge-text">
                  Guangdong University of Finance · China
                </p>
              </div>
              <span className="badge-text">2018 – 2022</span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Four-year full-time program covering corporate finance, financial
              management, accounting, taxation, and management principles,
              providing a solid understanding of business and financial
              decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
