export default function SkillsSection() {
  return (
    <section id="skills" className="section content-section">
      <h2 className="section-heading">Skills</h2>

      <div className="skills-grid">
        <div>
          <h3 className="skills-category">Languages & Frameworks</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>TypeScript / JavaScript</li>
            <li>React / Next.js</li>
            <li>FastAPI / PyQt</li>
            <li>SQL (PostgreSQL, MySQL, SQLite)</li>
          </ul>
        </div>

        <div>
          <h3 className="skills-category">Tools & Platforms</h3>
          <ul className="skills-list">
            <li>Docker & GitHub Actions</li>
            <li>AWS (Foundational)</li>
            <li>Linux / Bash / SSH Automation</li>
            <li>Power BI / Pandas</li>
            <li>Open-source tooling (Mitmproxy, LiteLLM)</li>
          </ul>
        </div>

        <div>
          <h3 className="skills-category">Core Capabilities</h3>
          <ul className="skills-list">
            <li>Full-stack Web Development</li>
            <li>Data Engineering & ETL Pipelines</li>
            <li>Cloud Deployment & DevOps Workflow</li>
            <li>System Design & Technical Documentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
