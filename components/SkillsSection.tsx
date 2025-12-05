export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-row">

        {/* Left column (title + subtitle) */}
        <div className="section-heading">
          <h2 className="section-heading-title">Skills</h2>
          <p className="section-heading-subtitle">
            Technical strengths across software engineering, data systems, and cloud tooling.
          </p>
        </div>

        {/* Right column (skills content) */}
        <div className="section-body skills-body">

          {/* Group 1 */}
          <div className="skills-group">
            <h3 className="skills-category">Languages & Frameworks</h3>
            <ul className="skills-list">
              <li>Python</li>
              <li>TypeScript / JavaScript</li>
              <li>React / Next.js</li>
              <li>FastAPI / PyQt</li>
              <li>SQL (PostgreSQL, MySQL, SQLite)</li>
            </ul>
          </div>

          {/* Group 2 */}
          <div className="skills-group">
            <h3 className="skills-category">Tools & Platforms</h3>
            <ul className="skills-list">
              <li>Docker & GitHub Actions</li>
              <li>AWS (Foundational)</li>
              <li>Linux / Bash / SSH Automation</li>
              <li>Power BI / Pandas</li>
              <li>Open-source tooling (Mitmproxy, LiteLLM)</li>
            </ul>
          </div>

          {/* Group 3 */}
          <div className="skills-group">
            <h3 className="skills-category">Core Capabilities</h3>
            <ul className="skills-list">
              <li>Full-stack Web Development</li>
              <li>Data Engineering & ETL Pipelines</li>
              <li>Cloud Deployment & DevOps Workflow</li>
              <li>System Design & Technical Documentation</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
