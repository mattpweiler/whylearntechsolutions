type StepCardProps = {
  step: string;
  title: string;
  body: string;
};

function StepCard({ step, title, body }: StepCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-sky-400 ring-1 ring-sky-500/30">
          {step}
        </span>
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      </div>
      <p className="text-xs text-slate-300">{body}</p>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">How working together looks</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              No black box. No disappearing developer. Just a clear, collaborative process to ship something useful.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StepCard
            step="01"
            title="A Free Exploration Call"
            body="We’ll talk through your idea, what’s broken in your current workflow, and what success actually looks like for you."
          />
          <StepCard
            step="02"
            title="Scope & proposal"
            body="I’ll put together a concrete plan: scope, timeline, and pricing. Once we’re aligned, I get to work."
          />
          <StepCard
            step="03"
            title="Build, iterate, launch"
            body="We ship a clean v1, test it with real users, and then decide what’s worth improving or automating next."
          />
        </div>
      </div>
    </section>
  );
}
