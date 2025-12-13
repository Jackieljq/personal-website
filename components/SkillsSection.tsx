export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-row">
        {/* Left column */}
        <div className="section-heading">
          <h2 className="section-heading-title">Skills</h2>
          <p className="section-heading-subtitle">
            Technologies I use to build, integrate, and ship production-ready systems.
          </p>
        </div>

        {/* Right column */}
        <div className="section-body">
          <div className="skills-list-wrapper">
            {/* Group 1 */}
            <div className="skills-item">
              <h3 className="skills-role">Languages & Frameworks</h3>
              <ul className="skills-list">
                <li><a href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</a></li>
                <li><a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a> / <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> / <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a></li>
                <li><a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer">FastAPI</a> / <a href="https://riverbankcomputing.com/software/pyqt/" target="_blank" rel="noopener noreferrer">PyQt</a></li>
                <li><a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">PostgreSQL</a>, <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>, <a href="https://www.sqlite.org" target="_blank" rel="noopener noreferrer">SQLite</a></li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="skills-item">
              <h3 className="skills-role">Tools & Platforms</h3>
              <ul className="skills-list">
                <li><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">Docker</a> & <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a></li>
                <li><a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS (Foundational)</a></li>
                <li><a href="https://www.kernel.org" target="_blank" rel="noopener noreferrer">Linux</a> / <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">Bash</a> / SSH Automation</li>
                <li><a href="https://powerbi.microsoft.com" target="_blank" rel="noopener noreferrer">Power BI</a> / <a href="https://pandas.pydata.org" target="_blank" rel="noopener noreferrer">Pandas</a></li>
                <li><a href="https://mitmproxy.org" target="_blank" rel="noopener noreferrer">Mitmproxy</a>, <a href="https://docs.litellm.ai" target="_blank" rel="noopener noreferrer">LiteLLM</a></li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="skills-item">
              <h3 className="skills-role">Core Capabilities</h3>
              <ul className="skills-list">
                <li>Full-stack Web Development</li>
                <li>Data Engineering & ETL Pipelines</li>
                <li>Cloud Deployment & DevOps Workflow</li>
                <li>System Design & Technical Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
