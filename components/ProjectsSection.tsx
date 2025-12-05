import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-row">

        {/* Left title column */}
        <div className="section-heading">
          <h2 className="section-heading-title">Projects</h2>
          <p className="section-heading-subtitle">
            Selected technical work across optimisation, data engineering, IoT, AI integration,
            and full-stack development.
          </p>
        </div>

        {/* Right content column */}
        <div className="projects-list">

          {/* Project 1 — Base Station OAM */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/oam-desktop" className="project-title-link">
                <h3 className="project-title">Base Station OAM Desktop Application</h3>
              </Link>
              <span className="project-meta">Python · PyQt · SSH · OAM APIs</span>
            </header>

            <p className="project-summary text-muted">
              Enterprise OAM desktop tool for 4G private network base stations, supporting
              configuration, diagnostics, and maintenance workflows.
            </p>

            <ul className="project-points">
              <li>Developed the full desktop application using Python and PyQt.</li>
              <li>Integrated SSH and server APIs for configuration and diagnostics.</li>
            </ul>

            <Link href="/projects/oam-desktop" className="project-link text-muted">
             
            </Link>
          </article>

          {/* Project 2 — Trading Bots */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/trading-bots" className="project-title-link">
                <h3 className="project-title">AI Trading Bots – BTC Strategy Optimisation</h3>
              </Link>
              <span className="project-meta">Python · Pandas · Metaheuristics</span>
            </header>

            <p className="project-summary text-muted">
              Built optimisation-driven algorithms for BTC strategy tuning using historical
              market data and performance-based evaluation.
            </p>

            <ul className="project-points">
              <li>Implemented FSA, FPA, MRFO, SFLA, and GbSA optimisation algorithms.</li>
              <li>Designed evaluation metrics for return, drawdown, and stability.</li>
            </ul>

            <Link href="/projects/trading-bots" className="project-link text-muted">
              
            </Link>
          </article>

          {/* Project 3 — WA Traffic Warehouse */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/wa-traffic-warehouse" className="project-title-link">
                <h3 className="project-title">WA Traffic Fatality Data Warehouse</h3>
              </Link>
              <span className="project-meta">Python · PostgreSQL · ETL · Power BI</span>
            </header>

            <p className="project-summary text-muted">
              End-to-end data warehouse designed for analysing WA road crash trends,
              including modelling, ETL, and dashboard reporting.
            </p>

            <ul className="project-points">
              <li>Designed a star schema with fact and dimension tables.</li>
              <li>Developed ETL pipelines and Power BI dashboards.</li>
            </ul>

            <Link href="/projects/wa-traffic-warehouse" className="project-link text-muted">
              
            </Link>
          </article>

          {/* Project 4 — IoT Smart Garden */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/iot-garden" className="project-title-link">
                <h3 className="project-title">
                  IoT Smart Garden – Micro-Climate Monitoring
                </h3>
              </Link>
              <span className="project-meta">ESP32 · Blynk · Flask · SQLite · React</span>
            </header>

            <p className="project-summary text-muted">
              Real-time micro-climate monitoring system with device data ingestion,
              backend processing, and a live dashboard.
            </p>

            <ul className="project-points">
              <li>Collected sensor data via ESP32 and exposed it through Flask APIs.</li>
              <li>Built a React dashboard for real-time and historical views.</li>
            </ul>

            <Link href="/projects/iot-garden" className="project-link text-muted">
             
            </Link>
          </article>

          {/* Project 5 — LLM Framework */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/llm-framework" className="project-title-link">
                <h3 className="project-title">
                  LLM Adaptation & Message Monitoring Framework
                </h3>
              </Link>
              <span className="project-meta">Mitmproxy · LiteLLM · FastAPI · Langfuse</span>
            </header>

            <p className="project-summary text-muted">
              Reverse-proxy–based framework enabling non-native LLM adaptation and
              structured monitoring for AI applications.
            </p>

            <ul className="project-points">
              <li>Intercepted and routed AI requests with Mitmproxy reverse proxy.</li>
              <li>Extended LiteLLM routing to support custom endpoints and logs.</li>
            </ul>

            <Link href="/projects/llm-framework" className="project-link text-muted">
            
            </Link>
          </article>

          {/* Project 6 — Game Engine */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/game-engine" className="project-title-link">
                <h3 className="project-title">Game Engine Architecture & Cloud Integration</h3>
              </Link>
              <span className="project-meta">Cocos · Godot · Douyin Cloud · APIs</span>
            </header>

            <p className="project-summary text-muted">
              Self-directed exploration of open-source engine internals and adaptation
              workflows for cloud-based deployment platforms.
            </p>

            <ul className="project-points">
              <li>Studied runtime architecture and editor workflows of Cocos & Godot.</li>
              <li>Explored integration paths for Douyin Cloud Platform.</li>
            </ul>

            <Link href="/projects/game-engine" className="project-link text-muted">
              
            </Link>
          </article>

          {/* Project 7 — Firebase Chat */}
          <article className="project-card">
            <header className="project-header">
              <Link href="/projects/firebase-chat" className="project-title-link">
                <h3 className="project-title">Firebase-Based Chat Application</h3>
              </Link>
              <span className="project-meta">React · Firebase Functions · Firestore</span>
            </header>

            <p className="project-summary text-muted">
              Full-stack chat system built with real-time messaging, user logic,
              and cloud-hosted backend functions.
            </p>

            <ul className="project-points">
              <li>Implemented UI and state management with React.</li>
              <li>Developed backend logic using Firebase Cloud Functions and Firestore.</li>
            </ul>

            
          </article>

        </div>
      </div>
    </section>
  );
}
