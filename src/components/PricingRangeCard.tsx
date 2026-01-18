import Link from "next/link";

type PricingRangeCardProps = {
  title: string;
  range: string;
  factors: string[];
  href: string;
};

export function PricingRangeCard({ title, range, factors, href }: PricingRangeCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Typical engagements</p>
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <p className="text-sm font-semibold text-slate-800">Typical range: {range}</p>
        <p className="text-xs text-slate-500">Final pricing depends on scope, data, security, integrations, and timeline.</p>
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What changes the range</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          {factors.map((factor) => (
            <li key={factor} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-5 text-xs text-slate-500">
        <p>Every system is custom scoped after discovery.</p>
        <Link
          href={href}
          className="mt-3 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
        >
          Request a Custom Quote
        </Link>
      </div>
    </div>
  );
}
