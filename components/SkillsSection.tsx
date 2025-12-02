export default function SkillsSection() {
    return (
      <section id="skills" className="section content-section">
        <h2 className="section-heading">Skills</h2>
  
        <div className="skills-grid">
          <div>
            <h3 className="skills-category">Languages & Frameworks</h3>
            <ul className="skills-list">
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
  
          <div>
            <h3 className="skills-category">Tools & Platforms</h3>
            <ul className="skills-list">
              <li>AWS</li>
              <li>Docker / GitHub Actions</li>
              <li>PostgreSQL / MySQL</li>
              <li>Power BI / Pandas</li>
            </ul>
          </div>
  
          <div>
            <h3 className="skills-category">Key Capabilities</h3>
            <ul className="skills-list">
              <li>Full-stack Web Development</li>
              <li>Data Engineering & Analytics</li>
              <li>Cloud Deployments</li>
              <li>System Design & Documentation</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  