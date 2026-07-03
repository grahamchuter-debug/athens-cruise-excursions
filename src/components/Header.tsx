import Link from "next/link";
import { GEO_LABEL, SITE_NAME } from "@/lib/site";
import { mainNav } from "@/lib/navigation";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="group min-w-0">
          <span className="block text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-800">
            {SITE_NAME}
          </span>
          <span className="block text-xs text-slate-500 truncate">
            {GEO_LABEL} · Gateway to Athens
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/enquire"
          className="shrink-0 rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 transition-colors"
        >
          Enquire
        </Link>
      </div>
      <nav className="border-t border-slate-100 bg-slate-50 lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-sm">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-slate-700 hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
