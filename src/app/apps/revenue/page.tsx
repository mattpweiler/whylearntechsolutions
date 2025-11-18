import Link from "next/link";

export default function RevenuePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white/95 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Revenue</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Finance + Income Tracker</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          Designed for creators and solo founders who want a single custom dashboard for cash flow, subscription income, and runway.
          Revenue connects to Stripe, manual invoices, and bank exports—then turns the mess into clarity.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Core concepts</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Monthly and annual recurring revenue charts with intelligent projections.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Expense tagging and burn tracking so you see runway in weeks, not months.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Simple forecasting scenarios: “what if this retainer ends?” or “what if I ship a new product?”.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Why it matters</h2>
          <p className="mt-3 text-sm text-slate-600">
            Money tools command higher willingness to pay than generic productivity apps. Revenue is the flagship WhyLearn product:
            custom UI, accurate data, and founder-friendly pricing.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Launching soon
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Want early access?</h2>
          <p className="text-sm text-slate-200">I&apos;m inviting a small cohort of founders to trial the MVP and shape the roadmap.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/consulting#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Apply for beta
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
