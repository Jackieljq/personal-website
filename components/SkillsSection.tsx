export default function SkillsSection() {
    return (
      <section id="skills" className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-100">Skills</h2>
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Languages &amp; Core
            </h3>
            <p className="text-slate-300">
              Python, TypeScript, JavaScript, Java, SQL, Bash
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Web &amp; Frameworks
            </h3>
            <p className="text-slate-300">
              React, Next.js, Flask, basic Node.js, Tailwind CSS
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Data &amp; Analytics
            </h3>
            <p className="text-slate-300">
              Pandas, NumPy, optimisation algorithms, data visualisation,
              ETL &amp; data warehousing concepts
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Tools &amp; Platforms
            </h3>
            <p className="text-slate-300">
              Git &amp; GitHub, VS Code, Jupyter, basic AWS (EC2, S3),
              Firebase, Docker fundamentals
            </p>
          </div>
        </div>
      </section>
    );
  }
  