export function JsonLd({ data }: { data: object | (object | null | undefined)[] }) {
  const items = (Array.isArray(data) ? data : [data]).filter(
    (item): item is object => Boolean(item),
  );
  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
