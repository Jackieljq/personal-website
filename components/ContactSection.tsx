export default function ContactSection() {
    return (
      <section id="contact" className="space-y-3 pb-8">
        <h2 className="text-lg font-semibold text-slate-100">Contact</h2>
        <p className="text-sm text-slate-300">
          I am currently based in Perth and open to Junior / Graduate Software
          Engineer, Full-Stack, or related roles.
        </p>
        <div className="space-y-1 text-sm text-slate-300">
          <p>
            Email:{" "}
            <a
              href="mailto:jackieli_jiaqi@outlook.com"
              className="text-sky-400 hover:underline"
            >
              jackieli_jiaqi@outlook.com
            </a>
          </p>
          <p>GitHub: github.com/Jackieljq</p>
          <p>LinkedIn: (add your LinkedIn URL here)</p>
        </div>
      </section>
    );
  }
  