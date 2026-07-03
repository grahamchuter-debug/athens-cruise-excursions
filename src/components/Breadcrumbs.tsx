import Link from "next/link";

type BreadcrumbItem = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-800">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-slate-900">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
