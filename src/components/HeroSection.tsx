export function HeroSection() {
  return (
    <section className="border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            WhyLearn · Software & AI Consulting
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Build smarter systems, not just <span className="text-sky-400">more to-do lists.</span>
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            I’m Matt, a full-stack engineer and creator behind WhyLearn. Pay for a deep-dive strategy call if you know you
            need help right now, or apply for a custom build so I can vet whether we&apos;re a fit. Either way, you get clarity
            on the right next move.
          </p>

          <div className="flex flex-wrap gap-3">
          <a
              href="#contact"
              className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Submit Your Project Idea
            </a>
              <a
              href="https://cal.com/whylearntech/60mins"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
            >
              Book a Call
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Custom GPTs & RAG chatbots
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Simple web apps & dashboards
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Creator & small business friendly
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-sky-500/10">
            <h2 className="text-sm font-semibold text-slate-100">Let&apos;s make your life easier</h2>
            <p className="mt-2 text-xs text-slate-400">A quick strategy call to map out:</p>

            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>• Where AI/GPT can save you hours every week</li>
              <li>• What software you actually need (and don&apos;t need)</li>
              <li>• A realistic timeline & ballpark budget</li>
            </ul>

            <div className="mt-4 rounded-lg bg-slate-900 px-4 py-3 text-xs text-slate-300">
              <p className="font-medium text-slate-100">Types of projects I love:</p>
              <p className="mt-1">
                • RAG chatbots over your docs <br />
                • Lead–capture & client intake flows <br />• Simple CRMs & internal tools
              </p>
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              No pressure to commit on the call. We&apos;ll see if your idea makes sense and if I&apos;m a good fit to build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
