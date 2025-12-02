export default function SkillsSection() {
    return (
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
  
        <div className="card">
          <h3 className="badge-text">Languages &amp; Core</h3>
          <p className="text-muted">
            Python, TypeScript, JavaScript, Java, SQL, Bash
          </p>
        </div>
  
        <div className="card">
          <h3 className="badge-text">Web &amp; Frameworks</h3>
          <p className="text-muted">
            React, Next.js, Flask, basic Node.js, Tailwind CSS
          </p>
        </div>
  
        <div className="card">
          <h3 className="badge-text">Data &amp; Analytics</h3>
          <p className="text-muted">
            Pandas, NumPy, optimisation algorithms, data visualisation, ETL &amp;
            data warehousing concepts
          </p>
        </div>
  
        <div className="card">
          <h3 className="badge-text">Tools &amp; Platforms</h3>
          <p className="text-muted">
            Git &amp; GitHub, VS Code, Jupyter, basic AWS (EC2, S3), Firebase,
            Docker fundamentals
          </p>
        </div>
      </section>
    );
  }
  