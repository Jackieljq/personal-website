export default function ExperienceSection() {
    return (
      <section id="experience" className="section content-section">
        <h2 className="section-heading">Experience</h2>
  
        <div className="timeline">
          {/* Job 1 */}
          <div className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-role">R&D Engineer</h3>
              <span className="timeline-date">2021 – 2022</span>
            </div>
            <p className="timeline-company">Shenzhen Huaji Technology</p>
            <ul className="timeline-list">
              <li>Developed desktop OAM software for enterprise 4G base stations using Python and PyQt.</li>
              <li>Implemented SSH automation tools for base station configuration and diagnostics.</li>
              <li>Participated in architecture design, debugging and field engineering support.</li>
            </ul>
          </div>
  
          {/* Job 2 - Your projects / uni work */}
          <div className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-role">AI Trading Bots Developer (Project)</h3>
              <span className="timeline-date">2024 – 2025</span>
            </div>
            <p className="timeline-company">University of Western Australia</p>
            <ul className="timeline-list">
              <li>Implemented optimisation-driven trading bots (FSA, FPA, MRFO, SFLA, GbSA).</li>
              <li>Built Python pipelines for parameter evaluation using historical BTC data.</li>
              <li>Designed clear metrics, charts, and technical analysis indicators.</li>
            </ul>
          </div>
  
          {/* Job 3 */}
          <div className="timeline-item">
            <div className="timeline-header">
              <h3 className="timeline-role">Data Engineering & IoT Developer (Project)</h3>
              <span className="timeline-date">2024 – 2025</span>
            </div>
            <p className="timeline-company">UWA Smart Garden System</p>
            <ul className="timeline-list">
              <li>Built IoT system using ESP32, Python backend, SQLite and React dashboard.</li>
              <li>Designed API endpoints, automated ingestion, and visual monitoring UI.</li>
              <li>Implemented sensor calibration, error detection and real-time updates.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  