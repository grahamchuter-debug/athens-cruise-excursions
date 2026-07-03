import Image from "next/image";
import { DEFAULT_HERO_ALT, DEFAULT_HERO_IMAGE } from "@/lib/site";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc = DEFAULT_HERO_IMAGE,
  imageAlt = DEFAULT_HERO_ALT,
}: PageHeroProps) {
  return (
    <div className="relative min-h-[14rem] overflow-hidden rounded-2xl md:min-h-[18rem]">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/75 to-slate-900/35"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900/70"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-300 via-amber-300/40 to-transparent"
            aria-hidden
          />
        </>
      )}

      <div className="relative max-w-3xl px-6 py-12 text-white md:px-10 md:py-16">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-200">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-slate-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
