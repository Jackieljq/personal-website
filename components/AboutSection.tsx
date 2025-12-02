export default function AboutSection() {
    return (
      <section id="about" className="section">
        <div className="section-row">
          <div className="section-heading">
            <h2 className="section-heading-title">About</h2>
            <p className="section-heading-subtitle">
              A software engineer who enjoys practical, reliable systems.
            </p>
          </div>
          <div className="section-body">
            <p className="text-muted">
              I recently completed my Master of Information Technology at the
              University of Western Australia. My experience spans Python,
              TypeScript, React, data engineering, and cloud deployment. I enjoy
              working on projects where I can combine solid engineering practice
              with clear, structured thinking.
            </p>
            <p className="text-muted" style={{ marginTop: "0.5rem" }}>
              I am detail-oriented, proactive, and comfortable collaborating with
              both technical and non-technical stakeholders. I like breaking down
              problems, testing ideas with small experiments, and iterating toward
              robust solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }
  