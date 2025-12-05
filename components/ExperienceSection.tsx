export default function ExperienceSection() {
  return (
    <section id="experience" className="section content-section">
      <h2 className="section-heading">Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-header">
            <h3 className="timeline-role">R&D Engineer</h3>
            <span className="timeline-date">2022 – 2025</span>
          </div>

          <p className="timeline-company">Shenzhen Huaji Technology</p>

          <ul className="timeline-list">
            <li>
              Built and maintained a desktop OAM application for enterprise 4G
              base stations using Python, PyQt, and SSH-based APIs.
            </li>
            <li>
              Developed automated tools for device configuration, diagnostics,
              and remote system upgrades.
            </li>
            <li>
              Participated in requirement analysis, architecture discussions,
              and integration with base station server components.
            </li>
            <li>
              Provided early-stage technical support for FAEs and resolved
              field issues through debugging and log analysis.
            </li>
            <li>
              Worked closely with cross-functional engineering teams to deliver
              reliable software updates and improve operational workflows.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
