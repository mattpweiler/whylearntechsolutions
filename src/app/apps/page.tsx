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

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg shadow-slate-200/70">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">WhyLearn Vision</div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900">Self Employemnt Productivity/Finance App</h3>
        <p className="mt-3 text-sm text-slate-600">
          We merged both ideas into one flagship tool—tracking finances, documenting your 20s crisis, and coaching your daily workflow all
          inside a single interface. It&apos;s the WhyLearn philosophy in software form.
        </p>
        <div className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white">
          Coming Soon
        </div>
      </section>
    </div>
  );
}
