export default function ExperienceSection() {
    return (
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
  
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">
                R&amp;D Engineer – Shenzhen Huaji Technology
              </h3>
              <p className="card-subtitle">
                Base Station OAM Desktop Application
              </p>
            </div>
            <span className="badge-text">
              4G Private Network · Python / PyQt / SSH
            </span>
          </div>
          <ul className="card-list text-muted">
            <li>
              Developed an enterprise-grade desktop OAM tool for 4G private
              network base stations using Python and PyQt.
            </li>
            <li>
              Integrated with base station OAM server APIs over SSH to support
              configuration, monitoring, and maintenance workflows.
            </li>
            <li>
              Participated in requirements analysis, debugging, and upgrades, and
              provided early-stage technical support to FAEs and end-users.
            </li>
          </ul>
        </div>
      </section>
    );
  }
  