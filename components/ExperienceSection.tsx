export default function ExperienceSection() {
    return (
      <section id="experience" className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-100">Experience</h2>
        <div className="space-y-4 text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <div>
                <h3 className="font-semibold text-slate-100">
                  R&amp;D Engineer – Shenzhen Huaji Technology
                </h3>
                <p className="text-xs text-slate-400">
                  Base Station OAM Desktop Application
                </p>
              </div>
              <span className="text-xs text-slate-400">
                4G Private Network · Python / PyQt / SSH
              </span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
              <li>
                Developed an enterprise-grade desktop OAM tool for 4G private
                network base stations using Python and PyQt.
              </li>
              <li>
                Integrated with base station OAM server APIs over SSH to support
                configuration, monitoring, and maintenance workflows.
              </li>
              <li>
                Participated in requirements analysis, debugging, and upgrades,
                and provided early-stage technical support to FAEs and end-users.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  