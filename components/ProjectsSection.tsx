export default function ProjectsSection() {
    return (
      <section id="projects" className="section">
        <div className="section-row">
          <div className="section-heading">
            <h2 className="section-heading-title">Projects</h2>
            <p className="section-heading-subtitle">
              Selected work from university and personal projects.
            </p>
          </div>
          <div className="section-body">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  AI Trading Bots – Optimisation for BTC Strategies
                </h3>
                <span className="badge-text">
                  Python · Pandas · Metaheuristic optimisation
                </span>
              </div>
              <p className="text-muted" style={{ marginTop: "0.25rem" }}>
                Team project implementing multiple optimisation algorithms to tune
                Bitcoin trading strategy parameters on historical datasets.
              </p>
              <ul className="card-list">
                <li>
                  Implemented the Fish Swarm Algorithm (FSA) and other methods to
                  optimise technical indicator parameters.
                </li>
                <li>
                  Built evaluation logic to compare strategies based on returns,
                  drawdown, and stability.
                </li>
              </ul>
            </div>
  
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">WA Traffic Fatality Data Warehouse</h3>
                <span className="badge-text">
                  PostgreSQL · ETL · Star schema · Power BI
                </span>
              </div>
              <p className="text-muted" style={{ marginTop: "0.25rem" }}>
                Designed and implemented a data warehouse for analysing WA road
                fatality data, including modelling, ETL, and dashboarding.
              </p>
              <ul className="card-list">
                <li>
                  Built a star schema with fact and dimension tables to support
                  flexible crash analysis.
                </li>
                <li>
                  Implemented data cleaning and loading scripts, and visualised
                  key trends in Power BI.
                </li>
              </ul>
            </div>
  
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  IoT Smart Garden – Micro-Climate Control
                </h3>
                <span className="badge-text">
                  ESP32 · Blynk · Flask API · React dashboard
                </span>
              </div>
              <p className="text-muted" style={{ marginTop: "0.25rem" }}>
                Built an IoT system to monitor temperature, humidity, light, and
                soil moisture, with a web dashboard for visualisation.
              </p>
              <ul className="card-list">
                <li>
                  Collected sensor data via ESP32 and stored it through a Python
                  backend API.
                </li>
                <li>
                  Implemented a React-based dashboard to display real-time and
                  historical measurements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  