import Link from "next/link";
import { GEO_LABEL, SITE_NAME } from "@/lib/site";
import {
  destinationGuideLinks,
  excursionLinks,
  guideLinks,
  legalLinks,
} from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Independent shore excursion guidance for cruise passengers arriving
            at {GEO_LABEL} — the Acropolis, the Acropolis Museum, Plaka, Cape
            Sounion, Delphi and confident return-to-ship planning.
          </p>
          <Link
            href="/enquire"
            className="mt-4 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200"
          >
            Enquire about excursions →
          </Link>
        </div>
        <div>
          <p className="font-semibold text-white">Port &amp; planning guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {guideLinks.slice(0, 8).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Guides &amp; excursions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {destinationGuideLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 text-sm border-t border-slate-800 pt-4">
            {excursionLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>athenscruiseexcursions.com · Piraeus Cruise Port · Athens, Greece</p>
        </div>
      </div>
    </footer>
  );
}
