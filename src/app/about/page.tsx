import Link from "next/link";

const timeline = [
  {
    title: "Software engineering roots",
    body: "Built internal tools and data products for scaling tech teams, learning how to ship clean, maintainable systems.",
    period: "2016 – 2020",
  },
  {
    title: "YouTube & teaching",
    body: "Started documenting builds, tutorials, and experiments to make engineering less intimidating.",
    period: "2020 – Present",
  },
  {
    title: "Entrepreneurship",
    body: "Launched WhyLearn to combine consulting, product building, and public learning into one ecosystem.",
    period: "Now",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 md:grid-cols-[0.6fr,1fr]">
        <div className="flex flex-col items-center justify-center">
          <div className="h-48 w-48 rounded-3xl bg-[radial-gradient(circle_at_top,_#dbeafe,_#e2e8f0)] shadow-xl shadow-slate-200">
            <span className="flex h-full items-center justify-center text-3xl font-semibold text-slate-700">WhyLearnTech</span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About Matt</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">I build calm software and share the process.</h1>
          <p className="text-base text-slate-600">
            I&apos;m a full-stack engineer who left big-company life to help founders, creators, and small teams build useful software
            without the chaos. WhyLearn is the home for all of it,client work, products, education, and experimentation.
          </p>
          <p className="text-base text-slate-600">
            My work blends thoughtful design, practical engineering, and storytelling. Whether it&apos;s a custom RAG workflow, a lean SaaS,
            or a YouTube series, the goal is the same: help people build momentum and clarity.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">TypeScript · Next.js</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">AI / GPT workflows</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">Systems thinking</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Story</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">The path so far</h2>
        <div className="mt-8 space-y-6">
          {timeline.map((item) => (
            <div key={item.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:grid-cols-[1fr,3fr]">
              <div className="text-sm font-semibold text-slate-500">{item.period}</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Case studies</p>
          <h2 className="text-2xl font-semibold text-slate-900">Curious what I&apos;ve shipped?</h2>
          <p className="text-sm text-slate-600">
            Explore a snapshot of enterprise insurance platforms and the indie clients I help every month.
          </p>
          <Link
            href="/built"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            See what I&apos;ve built
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Next step</p>
          <h2 className="text-3xl font-semibold">Ready to collaborate?</h2>
          <p className="text-sm text-slate-200">
            I partner with founders and small teams to scope, build, and launch custom software and AI systems. Let&apos;s talk about
            what you&apos;re building and how I can help.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
