"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type, placeholder, required }: FieldProps) {
  return (
    <div className="space-y-1.5 text-sm">
      <label htmlFor={name} className="block text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
      />
    </div>
  );
}

type ContactSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  defaultProjectType?: string;
  ctaLabel?: string;
};

const projectOptions = [
  { value: "rag-software", label: "Document AI / knowledge retrieval" },
  { value: "saas-tools", label: "SaaS tools, portals, and dashboards" },
  { value: "ai-integrations", label: "AI integrations into existing products" },
  { value: "web-systems", label: "Customer-facing sites & internal systems" },
  { value: "prediction-engines", label: "AI prediction engines" },
  { value: "advisory", label: "Advisory / architecture review" },
  { value: "other", label: "Something else" },
];

export function ContactSection({
  id = "start",
  eyebrow = "Start the conversation",
  title = "Start a project with WhyLearnTech",
  description = "Share your goals, constraints, and data landscape. We respond with a plan or a link to book a technical call.",
  defaultProjectType,
  ctaLabel = "Submit Project Brief",
}: ContactSectionProps) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const selectedProjectType = searchParams.get("projectType") || defaultProjectType || "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      company: formData.get("company")?.toString().trim() || "",
      projectType: formData.get("projectType")?.toString().trim() ?? "",
      budget: formData.get("budget")?.toString().trim() || "",
      timeline: formData.get("timeline")?.toString().trim() || "",
      details: formData.get("details")?.toString().trim() ?? "",
      howHeard: formData.get("howHeard")?.toString().trim() || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id={id}>
      <div className="mx-auto py-4">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{eyebrow}</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="John Doe" required />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company / Project Name (optional)" name="company" type="text" placeholder="Acme Co." />
            <div className="space-y-1.5 text-sm">
              <label htmlFor="projectType" className="block text-xs font-medium text-slate-600">
                What are you interested in?
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
                defaultValue={selectedProjectType}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                {projectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label htmlFor="budget" className="block text-xs font-medium text-slate-600">
                Rough budget (USD)
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a range (optional)
                </option>
                <option value="<1000">Under $1,000</option>
                <option value="1000-5000">$1,000 – $5,000</option>
                <option value="5000-1000">$5,000 – $10,000</option>
                <option value=">10000">Over $10,000</option>
              </select>
            <p className="text-[11px] text-slate-500">This helps shape the build and deployment plan.</p>
            </div>

            <div className="space-y-1.5 text-sm">
              <label htmlFor="timeline" className="block text-xs font-medium text-slate-600">
                Ideal timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a timeline
                </option>
                <option value="asap">ASAP (next 2–4 weeks)</option>
                <option value="1-3">1–3 months</option>
                <option value="3-6">3–6 months</option>
                <option value="1yr">1 Year</option>
                <option value="2yr">2 or More Years</option>
                <option value="flexible">Flexible / not urgent</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 text-sm">
            <label htmlFor="details" className="block text-xs font-medium text-slate-600">
              What should this product or system achieve?
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Tell me about your data sources, users, the workflow you want to replace, and how we’ll know it’s working..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
              required
            />
          </div>

          <div className="space-y-1.5 text-sm">
            <label htmlFor="howHeard" className="block text-xs font-medium text-slate-600">
              How did you find me? (optional)
            </label>
            <input
              id="howHeard"
              name="howHeard"
              type="text"
              placeholder="YouTube, Twitter/X, referral, etc."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none ring-slate-200 transition focus:border-slate-400 focus:ring-2"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>I respond within 1–2 business days with a brief plan, pricing range, or a link to book a technical call.</p>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-400/30 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-0"
            >
              {submitting ? "Sending..." : ctaLabel}
            </button>
          </div>

          {status === "success" ? (
            <p className="text-sm font-medium text-emerald-600">Thanks! Your brief is in my inbox.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-rose-500">Something went wrong. Please retry or email me directly.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
