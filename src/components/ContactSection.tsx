"use client";

import { useState } from "react";

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
      <label htmlFor={name} className="block text-xs font-medium text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
      />
    </div>
  );
}

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
    <section id="contact">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Tell me what you want built</h2>
          <p className="text-sm text-slate-300">
            The more context you share, the more helpful I can be on our first call. You&apos;ll hear back from me personally.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-sky-500/5">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="John Doe" required />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company / Project Name (optional)" name="company" type="text" placeholder="Acme Co." />
            <div className="space-y-1.5 text-sm">
              <label htmlFor="projectType" className="block text-xs font-medium text-slate-200">
                What are you interested in?
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="custom-gpt">Custom GPT / AI assistant (RAG)</option>
                <option value="internal-tool">Internal tool / dashboard / mini-CRM</option>
                <option value="website">Landing page / simple website</option>
                <option value="advisory">Strategy / advisory call only</option>
                <option value="other">Something else</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label htmlFor="budget" className="block text-xs font-medium text-slate-200">
                Rough budget (USD)
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
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
              <p className="text-[11px] text-slate-500">This just helps me understand what&apos;s realistic.</p>
            </div>

            <div className="space-y-1.5 text-sm">
              <label htmlFor="timeline" className="block text-xs font-medium text-slate-200">
                Ideal timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a timeline
                </option>
                <option value="asap">ASAP (next 2–4 weeks)</option>
                <option value="1-3">1–3 months</option>
                <option value="3-6">3–6 months</option>
                <option value="flexible">Flexible / not urgent</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 text-sm">
            <label htmlFor="details" className="block text-xs font-medium text-slate-200">
              What software do you want built?
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Tell me about your idea, current workflow, and what 'successful' looks like for this project..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
              required
            />
          </div>

          <div className="space-y-1.5 text-sm">
            <label htmlFor="howHeard" className="block text-xs font-medium text-slate-200">
              How did you find me? (optional)
            </label>
            <input
              id="howHeard"
              name="howHeard"
              type="text"
              placeholder="YouTube, Twitter/X, referral, etc."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-800 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>I usually respond within 1–2 business days with next steps or a link to book a call.</p>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-0"
            >
              {submitting ? "Sending..." : "Submit Project Brief"}
            </button>
          </div>

          {status === "success" ? (
            <p className="text-sm font-medium text-emerald-300">Thanks! Your brief is in my inbox and I will get back to you within a few days.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-rose-400">Something went wrong. Please retry or email me directly.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
