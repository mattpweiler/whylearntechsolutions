type ServiceCardProps = {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
};

function ServiceCard({ title, tag, description, bullets }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm shadow-sm shadow-slate-900/40">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
          {tag}
        </span>
      </div>
      <p className="mb-3 text-xs text-slate-300">{description}</p>
      <ul className="mt-auto space-y-1.5 text-xs text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1 w-1 rounded-full bg-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.2fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Who I Am</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              I&apos;m a full-stack software engineer turned self-employed creator. I spent years building production
              systems for large companies before going all-in on my own projects, YouTube channel, and software clients.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Now I help founders, solo creators, and small teams ship software faster without the bloated agency price
              tag. If you want something simple, clean, and effective, we&apos;ll get along great.
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-300">
              <p className="font-medium text-slate-100">What I care about:</p>
              <ul className="mt-2 space-y-1.5">
                <li>• Clear communication & realistic expectations</li>
                <li>• Shipping a usable v1, not chasing perfection</li>
                <li>• Making your tools so simple you actually use them</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ServiceCard
              title="Custom GPTs & AI Assistants"
              tag="RAG · Automation"
              description="Private GPT-style chatbots over your docs, Notion, SOPs, and data. Let your team ask questions in plain English instead of digging through folders."
              bullets={[
                "RAG pipelines over PDFs, docs, or APIs",
                "Chat-style interfaces your team actually uses",
                "Deployed with simple dashboards & access control",
              ]}
            />
            <ServiceCard
              title="Simple Web Apps & Internal Tools"
              tag="Dashboards · CRMs"
              description="Lightweight tools that glue your business together: dashboards, mini-CRMs, client portals, and admin panels that keep your operations sane."
              bullets={[
                "Custom dashboards for metrics and ops",
                "Internal tools that replace messy spreadsheets",
                "Role-based access and simple auth flows",
              ]}
            />
            <ServiceCard
              title="Landing Pages & Microsites"
              tag="Marketing · Lead Gen"
              description="Fast, clean marketing sites so people understand what you do — and can book a call or join your funnel in two clicks."
              bullets={[
                "High-converting landing pages",
                "Email / form / booking integrations",
                "Optimized for mobile and basic SEO",
              ]}
            />
            <ServiceCard
              title="Tech Strategy & Advisory"
              tag="Consulting"
              description="Not sure what to build? We can start with a strategy call and roadmap before you commit to a full build."
              bullets={[
                "Clarify your idea & scope the MVP",
                "Pick the right stack for your stage",
                "Roadmap for v1, v2, and beyond",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
