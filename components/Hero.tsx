export default function Hero() {
    return (
      <section className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Junior / Graduate Software Engineer
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Hi, I&apos;m <span className="text-sky-400">Jiaqi (Jackie) Li</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
            Master of Information Technology graduate based in Perth, WA. I enjoy
            building practical software solutions across web, data, and cloud –
            and turning complex ideas into reliable, well-structured systems.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm md:items-end">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-sky-500 px-4 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-500/10"
          >
            Open to Junior / Graduate roles
          </a>
          <div className="text-xs text-slate-400">
            <p>Perth, Western Australia</p>
            <p>GitHub: github.com/Jackieljq</p>
            <p>LinkedIn: (add your profile URL here)</p>
          </div>
        </div>
      </section>
    );
  }
  