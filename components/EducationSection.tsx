export default function EducationSection() {
    return (
      <section id="education" className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-100">Education</h2>
        <div className="space-y-2 text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <div>
                <h3 className="font-semibold text-slate-100">
                  Master of Information Technology
                </h3>
                <p className="text-xs text-slate-400">
                  The University of Western Australia
                </p>
              </div>
              <span className="text-xs text-slate-400">
                Perth, WA · (fill in your study period)
              </span>
            </div>
            <p className="mt-1 text-slate-300">
              Coursework across software engineering, cloud computing, data
              warehousing, IoT, AI, and business intelligence.
            </p>
          </div>
        </div>
      </section>
    );
  }
  