export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-row">
        {/* Left column (title + subtitle) */}
        <div className="section-heading">
          <h2 className="section-heading-title">Skills</h2>
          <p className="section-heading-subtitle">
            Technologies I use to build, integrate, and ship production-ready systems.
          </p>
        </div>

        {/* Right column */}
        <div className="section-body">
          <div className="skills-advanced">
            {/* Main skills (left) */}
            <div className="skills-main">
              {/* Category 1 */}
              <div className="skills-row">
                <div className="skills-row-head">
                  <h3 className="skills-row-title">Languages</h3>
                  <p className="skills-row-desc">Daily drivers and scripting.</p>
                </div>
                <div className="skills-chips">
                  <span className="skill-pill">Python</span>
                  <span className="skill-pill">TypeScript</span>
                  <span className="skill-pill">JavaScript</span>
                  <span className="skill-pill">SQL</span>
                </div>
              </div>

              {/* Category 2 */}
              <div className="skills-row">
                <div className="skills-row-head">
                  <h3 className="skills-row-title">Frameworks</h3>
                  <p className="skills-row-desc">Frontend + backend work.</p>
                </div>
                <div className="skills-chips">
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">Next.js</span>
                  <span className="skill-pill">FastAPI</span>
                  <span className="skill-pill">PyQt</span>
                  <span className="skill-pill">Flask</span>
                </div>
              </div>

              {/* Category 3 */}
              <div className="skills-row">
                <div className="skills-row-head">
                  <h3 className="skills-row-title">Data</h3>
                  <p className="skills-row-desc">Modeling, ETL, analytics.</p>
                </div>
                <div className="skills-chips">
                  <span className="skill-pill">PostgreSQL</span>
                  <span className="skill-pill">MySQL</span>
                  <span className="skill-pill">SQLite</span>
                  <span className="skill-pill">Pandas</span>
                  <span className="skill-pill">Power BI</span>
                </div>
              </div>

              {/* Category 4 */}
              <div className="skills-row">
                <div className="skills-row-head">
                  <h3 className="skills-row-title">Cloud & DevOps</h3>
                  <p className="skills-row-desc">Build, deploy, automate.</p>
                </div>
                <div className="skills-chips">
                  <span className="skill-pill">Docker</span>
                  <span className="skill-pill">GitHub Actions</span>
                  <span className="skill-pill">AWS (Foundational)</span>
                  <span className="skill-pill">Linux</span>
                  <span className="skill-pill">Bash</span>
                  <span className="skill-pill">SSH Automation</span>
                </div>
              </div>
            </div>

            {/* Highlights (right) */}
            <aside className="skills-side">
              <div className="skills-highlight">
                <div className="skills-highlight-head">
                  <p className="skills-highlight-kicker">HIGHLIGHTS</p>
                  <h3 className="skills-highlight-title">Where I’ve used these skills</h3>
                </div>

                <ul className="skills-highlight-list">
                  <li>
                    Built and maintained a <strong>4G base-station OAM desktop client</strong> with
                    Python + PyQt, integrating SSH workflows for configuration and monitoring.
                  </li>
                  <li>
                    Shipped <strong>full-stack web features</strong> using React/Next.js with clean
                    component structure and deployment-ready workflows.
                  </li>
                  <li>
                    Designed <strong>data pipelines</strong> (cleaning → modeling → reporting) with
                    SQL + Pandas and dashboards in Power BI.
                  </li>
                  <li>
                    Automated repeatable tasks with <strong>Linux/Bash</strong> and CI with GitHub Actions.
                  </li>
                </ul>

                <div className="skills-mini">
                  <div className="skills-mini-item">
                    <span className="skills-mini-label">Focus</span>
                    <span className="skills-mini-value">Practical systems, clean delivery</span>
                  </div>
                  <div className="skills-mini-item">
                    <span className="skills-mini-label">Strength</span>
                    <span className="skills-mini-value">Integration + troubleshooting</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
