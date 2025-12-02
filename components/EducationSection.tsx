export default function EducationSection() {
    return (
      <section id="education" className="section">
        <div className="section-row">
          <div className="section-heading">
            <h2 className="section-heading-title">Education</h2>
            <p className="section-heading-subtitle">
              Academic background and focus areas.
            </p>
          </div>
          <div className="section-body">
            <div className="card">
              <div className="card-header">
                <div>
                  <h3 className="card-title">
                    Master of Information Technology
                  </h3>
                  <p className="badge-text">
                    The University of Western Australia · Perth, WA
                  </p>
                </div>
                <span className="badge-text">Include years here</span>
              </div>
              <p className="text-muted" style={{ marginTop: "0.25rem" }}>
                Coursework across software engineering, cloud computing, data
                warehousing, IoT, AI, and business intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  