type StartOptionCardProps = {
  heading: string;
  badge: string;
  copy: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function StartOptionCard({ heading, badge, copy, bullets, primaryCta, secondaryCta }: StartOptionCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/20">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-50">{heading}</h3>
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200">
          {badge}
        </span>
      </div>
      <p className="text-sm text-slate-300">{copy}</p>

      <ul className="space-y-2 text-sm text-slate-200">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto grid gap-3 sm:grid-cols-2">
        <a
          href={primaryCta.href}
          target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
          rel={primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          {primaryCta.label}
        </a>
        {secondaryCta && (
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
    </div>
  );
}

export function EntryOptionsSection() {
  return (
    <section className="border-b border-slate-800 bg-slate-950/40">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-18">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Choose your starting point</p>
          <h2 className="text-2xl font-semibold text-slate-50">Book a paid call or send a project brief</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300">
            Some people need live help today, others want me to screen their idea before hopping on Zoom. Pick the path
            that matches where you are and I&apos;ll point you in the right direction.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <StartOptionCard
            heading="Paid Strategy Intensive"
            badge="60 mins · $120"
            copy="We spend an hour unpacking your current workflow, stack, and bottlenecks. You walk away with a prioritized plan even if we don’t continue."
            bullets={[
              "Perfect if you want async follow-up docs",
              "You get concrete tools + vendor recommendations",
              "Includes credit toward any future build",
            ]}
            primaryCta={{
              label: "Book a paid call",
              href: "https://cal.com/whylearntech/60mins",
            }}
          />

          <StartOptionCard
            heading="Project Fit Application"
            badge="Free · 5 min"
            copy="Fill out the short form so I can review scope, budget, and timeline. If it’s a fit, I’ll invite you to book a free exploration call. If not, I’ll still share suggestions."
            bullets={[
              "Designed for builds that fit your price range",
              "Lets me prep before we ever talk",
              "Great for fellows, creators, agencies",
            ]}
            primaryCta={{
              label: "Submit the project brief",
              href: "#contact",
            }}
            secondaryCta={{
              label: "Email me",
              href: "mailto:whylearnwednesdays@gmail.com?subject=Project%20details",
            }}
          />
        </div>
      </div>
    </section>
  );
}
