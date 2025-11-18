import Link from "next/link";

export default function TwentiesPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white/95 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">20s Crisis Companion</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">A calm guide for figure-it-out years</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          WhyLearn started with my own quarter-life pivot. This app distills the prompts, journaling systems, and accountability loops I
          used to quit corporate, pick myself back up, and keep moving.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Inside the app</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Daily reflection prompts anchored around career, wellness, and courage.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Weekly missions to build momentum—tiny experiments, not overwhelming to-do lists.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Audio lessons and short videos directly from the WhyLearn YouTube backlog.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Who it’s for</h2>
          <p className="mt-3 text-sm text-slate-600">
            Builders stuck in the gap between “stable job” and “I run my own thing.” It&apos;s the most on-brand WhyLearn product: honest,
            encouraging, and grounded in lived experience.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Coming soon
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Want launch updates?</h2>
          <p className="text-sm text-slate-200">Share your email in the contact form and mention “20s Crisis” so I can ping you first.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/consulting#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Request early invite
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-2 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Back to apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
