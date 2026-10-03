"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { EnquiryFormShell } from "@/components/EnquiryFormShell";
import { excursions } from "@/lib/excursions";

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("excursion") ?? "";
  return (
    <EnquiryFormShell
      siteId="athens"
      fallbackEmail="hello@athenscruiseexcursions.com"
      className="space-y-5"
      submitClassName="rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
      submitLabel="Send enquiry"
      successTitle="Enquiry received"
      successBody="Thank you — we'll respond with Athens shore excursion options from Piraeus, matched to your ship schedule."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Cruise line / ship</span>
          <input
            type="text"
            name="ship"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="e.g. Celestyal / Celestyal Journey"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Port date at Piraeus</span>
          <input
            type="date"
            name="travelDate"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Hours in port</span>
          <select
            name="hours_in_port"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Select…</option>
            <option value="4">About 4 hours</option>
            <option value="5">About 5 hours</option>
            <option value="6">About 6 hours</option>
            <option value="8">8+ hours</option>
            <option value="10">10+ hours</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Excursion interest</span>
          <select
            name="productRef"
            defaultValue={preselected}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Not sure yet</option>
            {excursions.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.shortTitle}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Group size, mobility needs, all-aboard time, interests (Acropolis, museum, Plaka, Cape Sounion, Delphi)…"
        />
      </label>
    </EnquiryFormShell>
  );
}

export function EnquiryForm() {
  return (
    <Suspense fallback={<p className="text-slate-600">Loading form…</p>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
