import Link from "next/link";

const apps = [
  {
    name: "Revenue · Finance & Income Tracker",
    rationale: "Revenue potential",
    description: "Premium-ready dashboards to project income, track MRR, and sync expenses—because money tools always win over generic productivity suites.",
    href: "/apps/revenue",
  },
  {
    name: "20s Crisis + WhyLearn Productivity",
    rationale: "Brand alignment & velocity",
    description: "One companion app that blends reflective prompts with a minimalist productivity coach—perfect for builders navigating their 20s.",
    href: "/apps/twenties",
  },
];

export default function AppsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white/90 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">WhyLearn Apps</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Tools to help you learn, build, and ship.</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          I&apos;m building a suite of custom, focused apps for operators and creatives. Each one is small, intentional, and designed to
          remove friction. Here&apos;s what&apos;s cooking.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <Link
            key={app.name}
            href={app.href}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg shadow-slate-200/70 transition hover:-translate-y-2"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{app.rationale}</div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{app.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{app.description}</p>
            <div className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white">
              View roadmap
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
