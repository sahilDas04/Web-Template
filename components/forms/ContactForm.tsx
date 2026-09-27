"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

const projectTypes = [
  "New build",
  "Expansion or retrofit",
  "Asset review",
  "Technical advisory",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3.5 text-base outline-none transition-colors duration-300 placeholder:text-ink-soft/50 focus:border-brand";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Request failed");
      }

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error
          ? caught.message
          : "Something went wrong sending that. Please email us directly and we will pick it up.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t border-line pt-10">
        <p className="h3">Thank you — we have it.</p>
        <p className="mt-6 max-w-[46ch] text-ink-soft">
          A senior engineer will reply within two working days. If your
          situation is time critical, call the office directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border-t border-line pt-8">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-ink-soft">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="eyebrow text-ink-soft">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="eyebrow text-ink-soft">Company</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Organisation"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="eyebrow text-ink-soft">Project type</span>
          <select name="projectType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="eyebrow text-ink-soft">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What are you trying to build, and what is in the way?"
            className={`${fieldClass} resize-none`}
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-6 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-9 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-deep disabled:opacity-40"
      >
        {status === "sending" ? "Sending" : "Send"}
        <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
      </button>
    </form>
  );
}
