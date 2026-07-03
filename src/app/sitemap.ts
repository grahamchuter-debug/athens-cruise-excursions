import type { MetadataRoute } from "next";
import { excursions, staticGuidePaths } from "@/lib/excursions";
import { SITE_URL } from "@/lib/site";
import {
  getVerifiedMonthKeys,
  monthKeyToSlug,
  SCHEDULE_BASE_PATH,
  SCHEDULE_YEARS,
} from "@/lib/schedule";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const schedulePaths = [
    ...SCHEDULE_YEARS.map((y) => `${SCHEDULE_BASE_PATH}/${y}`),
    ...getVerifiedMonthKeys().map(
      (mk) => `${SCHEDULE_BASE_PATH}/${monthKeyToSlug(mk)}`,
    ),
  ];

  const paths = [
    "",
    ...staticGuidePaths,
    ...excursions.map((e) => e.path),
    ...schedulePaths,
  ];

  return [...new Set(paths)].map((path) => ({
    // Match the trailing-slash canonical form emitted by `trailingSlash: true`.
    url: `${SITE_URL}${path}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path.includes("cruise-port-guide") ||
            path.includes("acropolis") ||
            path.includes("shore-excursions")
          ? 0.9
          : 0.8,
  }));
}
