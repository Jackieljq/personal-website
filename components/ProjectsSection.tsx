export default function ProjectsSection() {
    return (
      <section id="projects" className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-100">Projects</h2>
        <div className="space-y-4 text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <h3 className="font-semibold text-slate-100">
                AI Trading Bots – Optimisation for BTC Strategies
              </h3>
              <span className="text-xs text-slate-400">
                Python · Pandas · Optimisation Algorithms
              </span>
            </div>
            <p className="mt-1 text-slate-300">
              Team project implementing multiple metaheuristic algorithms to
              optimise Bitcoin trading strategy parameters on historical datasets.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">
              <li>
                Implemented Fish Swarm Algorithm (FSA) and other optimisation
                methods to tune technical indicator parameters.
              </li>
              <li>
                Built evaluation logic to compare strategies based on returns,
                drawdown, and stability.
              </li>
            </ul>
          </div>
  
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <h3 className="font-semibold text-slate-100">
                WA Traffic Fatality Data Warehouse
              </h3>
              <span className="text-xs text-slate-400">
                PostgreSQL · ETL · Star Schema · Power BI
              </span>
            </div>
            <p className="mt-1 text-slate-300">
              Designed and implemented a data warehouse for analysing WA road
              fatality data, including modelling, ETL, and dashboarding.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">
              <li>
                Built star schema with fact and dimension tables to support
                flexible crash analysis.
              </li>
              <li>
                Implemented data cleaning and loading scripts, and visualised
                key trends in Power BI.
              </li>
            </ul>
          </div>
  
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <h3 className="font-semibold text-slate-100">
                IoT Smart Garden – Micro-Climate Control
              </h3>
              <span className="text-xs text-slate-400">
                ESP32 · Blynk · Flask API · React Dashboard
              </span>
            </div>
            <p className="mt-1 text-slate-300">
              Built an IoT system to monitor temperature, humidity, light, and
              soil moisture, with a web dashboard for visualisation.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">
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
  
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <h3 className="font-semibold text-slate-100">
                Real-Time Chat Application
              </h3>
              <span className="text-xs text-slate-400">
                React · Firebase · Auth
              </span>
            </div>
            <p className="mt-1 text-slate-300">
              Built a real-time chat application supporting one-to-one and
              group messaging with authentication and file sharing.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-300">
              <li>Implemented reusable UI components and responsive layout.</li>
              <li>
                Integrated Firebase authentication and role-based interface
                behaviour.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  