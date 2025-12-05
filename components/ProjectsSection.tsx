export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-row">
        <div className="section-heading">
          <h2 className="section-heading-title">Projects</h2>
          <p className="section-heading-subtitle">
            Selected work across optimisation, data, IoT, AI integration, and full-stack development.
          </p>
        </div>

        <div className="section-body">
          {/* Project 1 — Base Station OAM Desktop App */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Base Station OAM Desktop Application
              </h3>
              <span className="badge-text">
                Python · PyQt · SSH · OAM Server API
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Enterprise-grade OAM desktop tool for 4G private network base stations,
              used for configuration, monitoring, and maintenance.
            </p>
            <ul className="card-list">
              <li>Implemented full desktop application using Python and PyQt.</li>
              <li>Integrated SSH and server APIs for device configuration and diagnostics.</li>
            </ul>
            <a className="project-link" href="/projects/oam-desktop">
              View Details →
            </a>
          </div>

          {/* Project 2 — AI Trading Bots */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                AI Trading Bots – Optimisation for BTC Strategies
              </h3>
              <span className="badge-text">
                Python · Pandas · Metaheuristic Optimisation
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Team project implementing multiple optimisation algorithms to tune
              Bitcoin trading strategy parameters on historical datasets.
            </p>
            <ul className="card-list">
              <li>Implemented FSA, FPA, MRFO, SFLA, and GbSA for parameter search.</li>
              <li>Designed evaluation logic for returns, drawdown, and strategy stability.</li>
            </ul>
            <a className="project-link" href="/projects/trading-bots">
              View Details →
            </a>
          </div>

          {/* Project 3 — WA Traffic Fatality Data Warehouse */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">WA Traffic Fatality Data Warehouse</h3>
              <span className="badge-text">
                Python · PostgreSQL · ETL · Power BI
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              End-to-end data warehouse designed for analysing WA road fatality
              data, from cleaning and modelling to dashboarding.
            </p>
            <ul className="card-list">
              <li>Designed a star schema with fact and dimension tables for crash analysis.</li>
              <li>Built ETL scripts and interactive dashboards to surface key trends.</li>
            </ul>
            <a className="project-link" href="/projects/wa-traffic-warehouse">
              View Details →
            </a>
          </div>

          {/* Project 4 — IoT Smart Garden */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                IoT Smart Garden – Micro-Climate Control
              </h3>
              <span className="badge-text">
                ESP32 · Blynk · Flask · SQLite · React
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              IoT system to monitor temperature, humidity, light, and soil moisture
              with a web dashboard for real-time visualisation.
            </p>
            <ul className="card-list">
              <li>Collected sensor data via ESP32 and exposed it through Flask APIs.</li>
              <li>Implemented a React dashboard for real-time and historical metrics.</li>
            </ul>
            <a className="project-link" href="/projects/iot-garden">
              View Details →
            </a>
          </div>

          {/* Project 5 — LLM Adaptation & Monitoring */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                LLM Adaptation & Message Monitoring Framework
              </h3>
              <span className="badge-text">
                Mitmproxy · LiteLLM · FastAPI · Langfuse
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Reverse-proxy–based framework to adapt non-native LLMs and monitor
              AI application traffic without modifying client code.
            </p>
            <ul className="card-list">
              <li>Interception and routing of AI requests via Mitmproxy reverse proxy.</li>
              <li>Extended LiteLLM routing and added logging for Langfuse-style monitoring.</li>
            </ul>
            <a className="project-link" href="/projects/llm-framework">
              View Details →
            </a>
          </div>

          {/* Project 6 — Game Engine & Cloud Integration */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Game Engine Architecture & Cloud Integration
              </h3>
              <span className="badge-text">
                Cocos · Godot · Douyin Cloud · APIs
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Self-directed study of open-source game engine architecture and
              integration with cloud and advertising platforms.
            </p>
            <ul className="card-list">
              <li>Explored runtime architecture and editor workflows of Cocos and Godot.</li>
              <li>Investigated adaptation to Douyin Cloud Platform and advertising APIs.</li>
            </ul>
            <a className="project-link" href="/projects/game-engine-integration">
              View Details →
            </a>
          </div>

          {/* Project 7 — Firebase-based Chat Application */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Firebase Chat Application (Capstone Project)
              </h3>
              <span className="badge-text">
                React · Firebase Cloud Functions · Firestore
              </span>
            </div>
            <p className="text-muted" style={{ marginTop: "0.25rem" }}>
              Full-stack chat application built as a capstone project, from UI
              to backend and real-time data syncing.
            </p>
            <ul className="card-list">
              <li>Developed the frontend in React and backend logic with Firebase Functions.</li>
              <li>Used Firestore for real-time messaging and implemented iterative improvements.</li>
            </ul>
            <a className="project-link" href="/projects/firebase-chat">
              View Details →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
