import Link from "next/link";

export default function ProductivityPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white/95 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">WhyLearn Productivity</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">A lightweight workflow coach</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          This is the fastest-shipping app in the trio—simple daily planning, recurring routines, and a swipeable focus queue rooted in my
          “one move forward” philosophy.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Feature outline</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Daily cards with one focus, two supporting tasks, and a reflection check-in.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Routines builder for publishing cadence, workouts, and recurring habits.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Syncs with Revenue (later) so you can tie tasks to revenue goals.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Why it ships first</h2>
          <p className="mt-3 text-sm text-slate-600">
            MVP is intentionally small—pencils-ready in 6–10 days—so I can release, gather feedback, and build momentum before layering in
            more automation.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            In development
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Join the waitlist</h2>
          <p className="text-sm text-slate-200">Use the contact form and mention “Productivity app” to get early builds and access to feedback calls.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/consulting#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Get updates
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
